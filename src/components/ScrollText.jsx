import React, { useEffect, useRef } from 'react';
import '../styles/scroll-text.css';

// Keep the existing heading element, text order and styling. Animate only its
// words, measuring wrapped lines when the heading actually enters the viewport.
export default function ScrollText({ text, direction = 'left' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!el || media.matches || !el.animate) return undefined;
    const animations = [];
    let played = false;
    let cancelled = false;

    function play() {
      if (cancelled || played || media.matches || !el.animate) return;
      played = true;
      const words = [...el.querySelectorAll('.scroll-word')];
      const tops = words.map(word => Math.round(word.getBoundingClientRect().top));
      const rows = [...new Set(tops)].sort((a, b) => a - b);
      const counts = new Map();
      words.forEach((word, index) => {
        const row = rows.indexOf(tops[index]);
        const order = counts.get(row) || 0;
        counts.set(row, order + 1);
        const fromLeft = (row % 2 === 0) === (direction === 'left');
        word.dataset.scrollDirection = fromLeft ? 'left-to-right' : 'right-to-left';
        animations.push(word.animate([
          { opacity: 0, transform: `translate3d(${fromLeft ? -36 : 36}px, 0, 0)` },
          { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        ], { duration: 1000, delay: row * 150 + order * 70,
          easing: 'cubic-bezier(.2,.65,.25,1)', fill: 'backwards' }));
      });
    }
    const observer = window.IntersectionObserver ? new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        play();
        observer.disconnect();
      }
    }, { threshold: .12 }) : null;
    function start() {
      if (cancelled || played) return;
      if (observer) observer.observe(el); else play();
    }
    // Slow or blocked font requests must never leave the invitation waiting.
    const fallback = window.setTimeout(start, 1500);
    if (document.fonts?.ready) document.fonts.ready.then(start, start); else start();
    function reduceMotion() {
      if (media.matches) animations.forEach(animation => animation.cancel());
    }
    if (media.addEventListener) media.addEventListener('change', reduceMotion);
    else media.addListener(reduceMotion);
    return () => {
      cancelled = true;
      clearTimeout(fallback);
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      if (media.removeEventListener) media.removeEventListener('change', reduceMotion);
      else media.removeListener(reduceMotion);
    };
  }, [text, direction]);

  return <span ref={ref} className="scroll-text" data-reveal-direction={direction}>
    {text.split(/(\s+)/).map((part, index) => /^\s+$/.test(part)
      ? part : <span className="scroll-word" key={index}>{part}</span>)}
  </span>;
}
