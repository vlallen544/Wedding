import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const PREPARE_MS = 340;
const FLAP_MS = 800;
const LETTER_MS = 850;
const LAYOUT_PARTS = ['.cover-header', '.envelope-entrance', '.cover-actions', '.section-scroll-hint'];
const prefersReducedMotion = () => Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);

export default function useInvitationOpening(onOpen) {
  const [phase, setPhase] = useState('closed');
  const [hasStarted, setHasStarted] = useState(false);
  const coverRef = useRef(null);
  const phaseRef = useRef(phase);
  const onOpenRef = useRef(onOpen);
  const timers = useRef([]);
  const layoutAnimations = useRef([]);
  const previousLayout = useRef([]);
  const opening = useRef(false);
  const extracted = useRef(false);
  const completed = useRef(false);
  const flapStarted = useRef(false);
  const autoScrollAllowed = useRef(true);
  const pendingNavigation = useRef(false);
  phaseRef.current = phase;
  onOpenRef.current = onOpen;

  function schedule(callback, delay) {
    timers.current.push(window.setTimeout(callback, delay));
  }
  function clearTimers() {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }
  function cancelLayoutAnimations() {
    layoutAnimations.current.forEach(animation => animation.cancel());
    layoutAnimations.current = [];
  }
  function notifyExtracted() {
    if (extracted.current) return;
    extracted.current = true;
    onOpenRef.current?.();
  }
  function reserveClearance() {
    const cover = coverRef.current;
    const flap = cover?.querySelector('.envelope-flap');
    const envelope = cover?.querySelector('.envelope-container');
    if (!cover || !flap || !envelope) return;
    const lift = Math.abs(parseFloat(getComputedStyle(envelope).getPropertyValue('--letter-clearance'))) || 0;
    cover.style.setProperty('--envelope-headroom', `${Math.max(flap.offsetHeight, lift) + 16}px`);
  }
  function scrollToContent(instant = prefersReducedMotion()) {
    const hero = document.getElementById('hero-section');
    if (!hero) return;
    // `auto` can still inherit CSS smooth scrolling; temporarily override it.
    // Avoid the newer `instant` enum on older Safari versions.
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    if (instant) root.style.scrollBehavior = 'auto';
    hero.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'start' });
    if (instant) root.style.scrollBehavior = previous;
  }
  function finishImmediately(navigate) {
    clearTimers();
    cancelLayoutAnimations();
    opening.current = false;
    completed.current = true;
    autoScrollAllowed.current = false;
    notifyExtracted();
    reserveClearance();
    if (phaseRef.current === 'complete') {
      if (navigate) scrollToContent();
      return;
    }
    pendingNavigation.current = navigate;
    setPhase('complete');
  }
  function completeOpening() {
    if (completed.current) return;
    completed.current = true;
    opening.current = false;
    setPhase('complete');
    schedule(() => {
      if (autoScrollAllowed.current) scrollToContent();
    }, 420);
  }
  function extractLetter() {
    if (extracted.current || completed.current) return;
    notifyExtracted();
    setPhase('letter');
    // Completion events lead; timers are only recovery for throttled webviews.
    schedule(completeOpening, LETTER_MS + 150);
  }
  function beginFlap() {
    if (phaseRef.current !== 'preparing' || !opening.current || flapStarted.current) return;
    flapStarted.current = true;
    setPhase('flap');
    schedule(extractLetter, FLAP_MS + 150);
  }
  function handleOpen() {
    if (opening.current) return;
    if (phaseRef.current !== 'closed') { finishImmediately(true); return; }
    reserveClearance();
    setHasStarted(true);
    autoScrollAllowed.current = true;
    if (prefersReducedMotion()) { finishImmediately(true); return; }
    opening.current = true;
    const cover = coverRef.current;
    cover.style.setProperty('--cover-opening-height', `${cover.getBoundingClientRect().height}px`);
    previousLayout.current = LAYOUT_PARTS.map(selector => {
      const el = cover.querySelector(selector);
      // Finish any startup entrance before measuring the resting composition.
      el?.getAnimations?.().forEach(animation => { try { animation.finish(); } catch { /* finite CSS entrances only */ } });
      return { selector, top: el?.getBoundingClientRect().top };
    });
    setPhase('preparing');
    schedule(beginFlap, PREPARE_MS + 300);
  }

  useLayoutEffect(() => {
    if (phase === 'preparing' && !prefersReducedMotion()) {
      // Reserve the final space once, then animate only transforms (FLIP).
      // The flap stays closed until this movement has completed.
      layoutAnimations.current = previousLayout.current.flatMap(({ selector, top }) => {
        const el = coverRef.current?.querySelector(selector);
        if (!el?.animate || top === undefined) return [];
        const offset = top - el.getBoundingClientRect().top;
        return [el.animate([
          { transform: `translate3d(0, ${offset}px, 0)` },
          { transform: 'translate3d(0, 0, 0)' },
        ], { duration: PREPARE_MS, easing: 'cubic-bezier(.2,.65,.25,1)', fill: 'backwards' })];
      });
      if (!layoutAnimations.current.length) beginFlap();
      else if (layoutAnimations.current.every(animation => animation.finished?.then)) {
        Promise.allSettled(layoutAnimations.current.map(animation => animation.finished)).then(beginFlap);
      }
    }
    if (pendingNavigation.current) {
      pendingNavigation.current = false;
      // Read the fully committed open layout before navigating.
      scrollToContent(true);
    }
  }, [phase]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timer = window.setTimeout(() => setHasStarted(true), 2800);
    let width = window.innerWidth;
    function updateFallbackHeight() {
      coverRef.current?.style.setProperty('--cover-fallback-height', `${window.visualViewport?.height || window.innerHeight}px`);
    }
    function resize() {
      if (window.innerWidth === width) return; // Ignore Safari toolbar-height changes.
      width = window.innerWidth;
      updateFallbackHeight();
      reserveClearance();
      if (opening.current) finishImmediately(false);
    }
    function reducedMotionChanged() {
      if (!media.matches) return;
      setHasStarted(true);
      if (opening.current) finishImmediately(autoScrollAllowed.current);
    }
    function userScrollIntent(event) {
      if (event.type === 'keydown' && !['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) return;
      autoScrollAllowed.current = false;
    }
    updateFallbackHeight();
    reducedMotionChanged();
    window.addEventListener('resize', resize);
    window.addEventListener('wheel', userScrollIntent, { passive: true });
    window.addEventListener('touchmove', userScrollIntent, { passive: true });
    window.addEventListener('keydown', userScrollIntent);
    if (media.addEventListener) media.addEventListener('change', reducedMotionChanged);
    else media.addListener(reducedMotionChanged);
    return () => {
      window.clearTimeout(timer);
      clearTimers();
      cancelLayoutAnimations();
      window.removeEventListener('resize', resize);
      window.removeEventListener('wheel', userScrollIntent);
      window.removeEventListener('touchmove', userScrollIntent);
      window.removeEventListener('keydown', userScrollIntent);
      if (media.removeEventListener) media.removeEventListener('change', reducedMotionChanged);
      else media.removeListener(reducedMotionChanged);
    };
  }, []);

  return {
    coverRef, phase, hasStarted,
    isOpen: phase !== 'closed',
    isFlapOpen: ['flap', 'letter', 'complete'].includes(phase),
    isExtracted: ['letter', 'complete'].includes(phase),
    hasBorderAppeared: phase === 'complete',
    handleOpen,
    handleViewDetails: () => finishImmediately(true),
    dismissStartup: () => setHasStarted(true),
    onFlapTransitionEnd: event => {
      if (event.target === event.currentTarget && event.propertyName.endsWith('transform') && phaseRef.current === 'flap') extractLetter();
    },
    onLetterAnimationEnd: event => {
      if (event.target === event.currentTarget && event.animationName === 'letterLift' && phaseRef.current === 'letter') completeOpening();
    },
  };
}
