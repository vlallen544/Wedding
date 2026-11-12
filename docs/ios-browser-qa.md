# Invitation opening and iOS browser checks

The opening remains CSS 3D plus React, with no new runtime dependencies. The
existing invitation text, configuration, palette, floral artwork and content
sections were preserved. Existing local work and both project instruction files
were inspected before editing; unfinished changes were retained.

## Implementation

- `useInvitationOpening` stages preparation, flap rotation, extraction and
  completion. Native animation/transition completion leads the sequence; guarded
  timers recover when a webview suppresses those events. Cleanup cancels pending
  work. Repeated taps cannot start duplicate sequences.
- Preparation reserves the larger of the actual flap height and letter clearance,
  plus a gap. A short native transform animation moves the surrounding layout;
  margin is no longer animated while the flap rotates. The heading, flap, letter
  and buttons therefore have separate space, including narrow/short layouts.
- The two existing flap faces retain their own backface culling; triangle clipping
  stays on each face's child. Their visibility switches at the easing curve's
  edge-on point (280ms), rather than leaving a gap until 400ms. Perspective,
  prefixed WebKit declarations and explicit depth offsets remain intact. Shared
  3D containers have visible overflow and no flattening filters. Section clipping
  stays outside the 3D scene. See [transform-style grouping properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform-style).
- The seal's visual child pulses while the accessible button's hit target stays
  still. The alternate open control and View Full Details remain available.
- Actual WebKit screenshots exposed an additional transparent patch at the
  viewport origin from filtered, offscreen lazy floral images in the family card.
  These two accents now enable their existing shadows only when loaded and
  visible, using a native IntersectionObserver with cleanup. Their images, layout,
  wording and visible shadows are unchanged. Without IntersectionObserver the
  accents remain visible without the optional shadow.
- Automatic scrolling waits for extraction and a brief pause. Wheel, touchmove or
  navigation-key input cancels it; explicit View Full Details still works.
- `100svh` stabilizes the cover on modern Safari. Older browsers get a measured
  viewport-height fallback. Opening freezes the minimum height and ignores
  height-only toolbar resizes; a width/orientation change recalculates clearance,
  finishes safely and cancels forced navigation. Safe-area padding covers all four
  edges. Short landscape layouts may require ordinary vertical scrolling.
- Reduced motion bypasses the opening and navigates after the final layout commit.
  Changing that preference during opening also finishes safely. Returning via a
  persisted `pageshow` preserves position; startup reset frames cannot undo an
  early open action.

## Repeatable checks

Build and serve the static production bundle, then use an externally installed
Playwright/Playwright Core package and its browser binaries:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4180 --strictPort
# In another terminal:
PLAYWRIGHT_MODULE=/absolute/path/to/playwright-core node scripts/browser-qa.cjs webkit
PLAYWRIGHT_MODULE=/absolute/path/to/playwright-core node scripts/browser-qa.cjs chromium
```

Optional environment variables: `WEBKIT_EXECUTABLE`, `CHROMIUM_EXECUTABLE`,
`QA_URL`, `QA_OUTPUT`. Install Playwright/browser dependencies outside this
project if needed; none are bundled into the website. The script writes screenshots,
sampled geometry traces and a JSON report to `/tmp/wedding-browser-qa` by default.

It checks 390×844, 320×568, 360×800, 768×1024, 844×390, 568×320 and 1440×1000;
stable seal hit boxes; touch/click opening; flap/letter separation from heading and
controls; no premature automatic scrolling; destination alignment and horizontal
overflow; manual-scroll cancellation; initial/changing reduced motion; height-only
resize and rotation during opening; rapid main-control taps; suppressed completion
events; missing Web Animations API; startup recovery; and a synthetic persisted
`pageshow` event. It also checks offscreen floral filters and their restored visible
shadows. Synthetic events and viewport resizing are simulations, not a
measurement of iPhone touch physics, address-bar motion or BFCache behavior.

## Validation on this machine

- `npm run build` passed.
- Actual Playwright WebKit 26.5 (Linux WPE, build 2311) and system Chromium
  155.0.8059.84 ran against the production preview. This did not rely on changing
  Chromium's user agent. WebKit required isolated compatibility libraries under
  `/home/allen/.cache/wedding-webkit-qa`; no system packages or site dependencies
  were changed. The compatibility packages' SHA-256 checksums were verified.
- Before the fix, sampled Chromium opening frames overlapped the heading on small
  phones and landscape. After the fix, both engines' seven-viewport checks found
  no sampled heading/control overlaps, and automatic navigation aligned the hero
  within one CSS pixel. Screenshots of the open/closed cover were inspected.
- Configuration and untouched content components matched the pre-edit SHA-256
  hashes before the final floral fix; that component's later diff changes only its
  decorative image handling. Invitation copy and configuration remain unchanged.
  `git diff --check` passed.
- A separate screenshot regression checked that all pixels in the cover's top-left
  24×26 region are opaque after the floral fix (previously it contained transparent
  pixels), and that the original shadows return when each image enters view. This
  passed in both engines. Artifacts are in
  `/home/allen/Projects/wedding-browser-qa`; the final runner uses its `final` folder.
- The final WebKit runner passed all 17 cases. Chromium passed the first 16;
  its last synthetic BFCache check initially caught smooth scrolling settling by
  one CSS pixel. That assertion now permits one-pixel rounding, and the targeted
  Chromium recheck passed (844px before and after). The WebKit report and Chromium
  recheck report are saved alongside the geometry traces. The earlier 16-case
  suite, before the additional floral check, also passed in both engines.

Linux WebKit is useful rendering evidence, but it is not the Safari app or a
physical iPhone. Desktop mobile viewport/touch emulation cannot establish actual
device frame rate, GPU compositing, nonzero notch insets, interactive toolbar
behavior or WhatsApp's embedded browser. A physical iPhone was unavailable. Those
checks remain for device QA: open/tap during startup, rotate while opening, expand
and collapse the toolbar, return from Maps, and enable Reduce Motion. No deployment
was performed.
