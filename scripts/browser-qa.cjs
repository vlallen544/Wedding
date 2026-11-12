// Optional development check; no browser tooling ships with the invitation.
// See docs/ios-browser-qa.md for setup and the limits of desktop WebKit.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const engine = process.argv[2] || 'webkit';
const output = process.env.QA_OUTPUT || '/tmp/wedding-browser-qa';
const url = process.env.QA_URL || 'http://127.0.0.1:4180/';
fs.mkdirSync(output, { recursive: true });
const results = [];
const record = result => { results.push(result); console.log(`${engine}: PASS ${result.name}`); };

(async () => {
  const browser = await (engine === 'webkit' ? webkit : chromium).launch({
    headless: true,
    ...(process.env[`${engine.toUpperCase()}_EXECUTABLE`] && {
      executablePath: process.env[`${engine.toUpperCase()}_EXECUTABLE`],
    }),
    ...(engine === 'chromium' ? { args: ['--no-sandbox'] } : {}),
  });
  async function pageAt(width = 390, height = 844, reducedMotion = 'no-preference') {
    const page = await browser.newPage({ viewport: { width, height },
      isMobile: width < 900, hasTouch: width < 900, reducedMotion });
    page.on('pageerror', error => { throw error; });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 1800))]));
    await page.waitForFunction(() => document.querySelector('.cover-ready'));
    return page;
  }
  const complete = page => page.waitForFunction(() =>
    document.querySelector('.invitation-cover').dataset.openingPhase === 'complete');
  const tap = page => page.locator('.wax-seal-btn').tap();
  try {
    for (const [name, width, height] of [
      ['phone', 390, 844], ['small', 320, 568], ['android-size', 360, 800],
      ['tablet', 768, 1024], ['landscape', 844, 390],
      ['short-landscape', 568, 320], ['desktop', 1440, 1000],
    ]) {
      const page = await pageAt(width, height);
      const seal = page.locator('.wax-seal-btn');
      const before = await seal.boundingBox();
      await page.waitForTimeout(180);
      const after = await seal.boundingBox();
      assert(Math.abs(before.x - after.x) < 0.5 && Math.abs(before.y - after.y) < 0.5, 'seal hit target moves');
      await page.screenshot({ path: path.join(output, `${engine}-${name}-closed.png`) });
      await page.evaluate(() => {
        window.openingTrace = [];
        const rect = selector => {
          const r = document.querySelector(selector).getBoundingClientRect();
          return { top: r.top, bottom: r.bottom };
        };
        const sample = () => {
          const phase = document.querySelector('.invitation-cover').dataset.openingPhase;
          window.openingTrace.push({ phase, scrollY, header: rect('.cover-header'),
            flap: rect('.flap-triangle--back'), letter: rect('.envelope-letter'),
            controls: rect('.cover-actions'),
            backVisible: getComputedStyle(document.querySelector('.flap-triangle--back')).visibility });
          if (phase === 'complete') clearInterval(window.openingSampler);
        };
        window.openingSampler = setInterval(sample, 20);
      });
      if (width < 900) await tap(page); else await seal.click();
      await complete(page);
      const trace = await page.evaluate(() => window.openingTrace);
      for (const frame of trace) {
        if (frame.backVisible === 'visible') assert(frame.flap.top >= frame.header.bottom - 1, `${name}: flap overlaps heading`);
        if (['letter', 'complete'].includes(frame.phase)) {
          assert(frame.letter.top >= frame.header.bottom - 1, `${name}: letter overlaps heading`);
          assert(frame.letter.bottom <= frame.controls.top + 1, `${name}: letter overlaps controls`);
        }
        if (frame.phase !== 'complete') assert(Math.abs(frame.scrollY) < 1, 'scroll started before animation completed');
      }
      await page.screenshot({ path: path.join(output, `${engine}-${name}-opened.png`) });
      await page.waitForFunction(() => Math.abs(document.getElementById('hero-section').getBoundingClientRect().top) < 2);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'horizontal overflow');
      fs.writeFileSync(path.join(output, `${engine}-${name}-trace.json`), JSON.stringify(trace));
      record({ name, frames: trace.length, phases: [...new Set(trace.map(frame => frame.phase))], passed: true });
      await page.close();
    }
    for (const input of ['touchmove', 'wheel', 'keydown']) {
      const page = await pageAt();
      await tap(page);
      await page.evaluate(input => window.dispatchEvent(input === 'keydown'
        ? new KeyboardEvent(input, { key: 'PageDown' }) : new Event(input)), input);
      await complete(page);
      await page.waitForTimeout(1000);
      assert.equal(await page.evaluate(() => scrollY), 0, `${input}: auto scroll wasn't cancelled`);
      await page.locator('.cover-actions button').click();
      await page.waitForFunction(() => Math.abs(document.getElementById('hero-section').getBoundingClientRect().top) < 2);
      record({ name: `manual-${input}-cancels-auto-scroll`, passed: true });
      await page.close();
    }
    for (const reduce of ['reduce', 'no-preference']) {
      const page = await pageAt(390, 844, reduce);
      await tap(page);
      if (reduce !== 'reduce') await page.emulateMedia({ reducedMotion: 'reduce' });
      await complete(page);
      await page.waitForFunction(() => Math.abs(document.getElementById('hero-section').getBoundingClientRect().top) < 2);
      record({ name: `reduced-motion-${reduce === 'reduce' ? 'initial' : 'changed'}`, passed: true });
      await page.close();
    }
    {
      const page = await pageAt();
      await tap(page);
      const height = await page.locator('.invitation-cover').evaluate(el => getComputedStyle(el).minHeight);
      await page.setViewportSize({ width: 390, height: 720 });
      assert.equal(await page.locator('.invitation-cover').evaluate(el => getComputedStyle(el).minHeight), height, 'toolbar-height resize moved stage');
      await page.setViewportSize({ width: 844, height: 390 });
      await complete(page);
      await page.waitForTimeout(1000);
      assert.equal(await page.evaluate(() => scrollY), 0, 'rotation forced navigation');
      record({ name: 'height-resize-and-mid-opening-rotation', passed: true });
      await page.close();
    }
    {
      const page = await pageAt();
      const accents = page.locator('.family-invitation-card > img');
      assert(await accents.evaluateAll(images => images.every(el => getComputedStyle(el).filter === 'none')),
        'offscreen lazy floral filters can corrupt the WebKit cover');
      for (const image of await accents.all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(el => new Promise((resolve, reject) => {
          const start = Date.now();
          const check = () => {
            if (el.naturalWidth && getComputedStyle(el).filter.includes('drop-shadow')) resolve();
            else if (Date.now() - start > 10000) reject(new Error('visible floral shadow missing'));
            else setTimeout(check, 30);
          };
          check();
        }));
      }
      record({ name: 'lazy-floral-shadows-only-while-visible', passed: true });
      await page.close();
    }
    {
      const page = await pageAt();
      await page.locator('.cover-actions button').click();
      await page.locator('.cover-actions button').click({ clickCount: 2 });
      await complete(page);
      await page.waitForFunction(() => Math.abs(document.getElementById('hero-section').getBoundingClientRect().top) < 2);
      record({ name: 'main-control-and-rapid-details-taps', passed: true });
      await page.close();
    }
    {
      const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
      await page.addInitScript(() => document.addEventListener('animationend', event => event.stopImmediatePropagation(), true));
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => document.querySelector('.cover-ready'));
      assert.equal(await page.locator('.startup-overlay').evaluate(el => getComputedStyle(el).visibility), 'hidden');
      await tap(page);
      await complete(page);
      record({ name: 'startup-and-letter-animation-event-fallbacks', passed: true });
      await page.close();
    }
    {
      const page = await pageAt();
      // Simulate missing completion events and an old browser without WAAPI.
      await page.evaluate(() => {
        Element.prototype.animate = undefined;
        for (const name of ['transitionend', 'animationend']) document.addEventListener(name, event => event.stopImmediatePropagation(), true);
      });
      await tap(page);
      await complete(page);
      await page.waitForFunction(() => Math.abs(document.getElementById('hero-section').getBoundingClientRect().top) < 2);
      const position = await page.evaluate(() => scrollY);
      await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true })));
      await page.waitForTimeout(150);
      // Native smooth scrolling can settle its last rounded CSS pixel after
      // the destination-alignment check; a BFCache reset would jump to zero.
      assert(Math.abs(await page.evaluate(() => scrollY) - position) <= 1, 'persisted pageshow reset position');
      record({ name: 'completion-fallbacks-and-synthetic-bfcache', passed: true });
      await page.close();
    }
    console.log(JSON.stringify({ engine, version: browser.version(), results }, null, 2));
    fs.writeFileSync(path.join(output, `${engine}-results.json`), JSON.stringify({ engine, version: browser.version(), results }, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
