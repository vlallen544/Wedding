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

export default function App() {
  useLayoutEffect(() => {
    // Keep the first rendered view on the invitation envelope, even if the
    // browser tries to restore the previous scroll position on reload.
    window.history.scrollRestoration = 'manual';

    const resetToCover = () => {
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
    const firstFrame = window.requestAnimationFrame(() => {
      resetToCover();
      window.requestAnimationFrame(resetToCover);
    });
    const handlePageShow = () => {
      resetToCover();
      window.requestAnimationFrame(resetToCover);
    };
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.cancelAnimationFrame(firstFrame);
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
