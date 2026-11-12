import React, { useLayoutEffect } from 'react';
import InvitationCover from './components/InvitationCover';
import HeroSection from './components/HeroSection';
import FamilyInvitation from './components/FamilyInvitation';
import EventDetails from './components/EventDetails';
import VenueSection from './components/VenueSection';
import Footer from './components/Footer';

import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';
import './styles/browser-fixes.css';
import './styles/engagement-theme.css';

export default function App() {
  useLayoutEffect(() => {
    // Keep the first rendered view on the invitation envelope, even if the
    // browser tries to restore the previous scroll position on reload.
    window.history.scrollRestoration = 'manual';
    const frames = new Set();
    const nextFrame = callback => {
      const id = window.requestAnimationFrame(() => {
        frames.delete(id);
        callback();
      });
      frames.add(id);
    };

    const resetToCover = () => {
      const cover = document.getElementById('invitation-cover');
      // Do not let a delayed startup frame undo an early tap/open operation.
      if (cover?.dataset.openingPhase && cover.dataset.openingPhase !== 'closed') return;
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.getElementById('invitation-cover')?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
        inline: 'nearest',
      });
      root.style.scrollBehavior = previousScrollBehavior;
    };

    resetToCover();
    nextFrame(() => {
      resetToCover();
      nextFrame(resetToCover);
    });
    const handlePageShow = event => {
      // Safari restores this page from its back/forward cache after guests
      // return from Maps. Preserve their place in the invitation in that case.
      if (event.persisted) return;
      resetToCover();
      nextFrame(resetToCover);
    };
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      frames.forEach(window.cancelAnimationFrame);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <div className="wedding-app">
      {/* Section 1: 3D Interactive Invitation Cover */}
      <InvitationCover />

      <main id="main-invitation-content">
        {/* Section 2: Hero - Meet the Couple */}
        <HeroSection />

        {/* Section 3: Family Invitation Copy */}
        <FamilyInvitation />

        {/* Section 4: Reception Details & Countdown */}
        <EventDetails />

        {/* Section 5: Venue and Directions */}
        <VenueSection />

      </main>

      {/* Section 6: Closing Acknowledgments, Sharing, Back to Top */}
      <Footer />
    </div>
  );
}
