import React, { useLayoutEffect } from 'react';
import InvitationCover from './components/InvitationCover';
import HeroSection from './components/HeroSection';
import FamilyInvitation from './components/FamilyInvitation';
import EventDetails from './components/EventDetails';
import VenueSection from './components/VenueSection';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';

export default function App() {
  useLayoutEffect(() => {
    // Keep the first rendered view on the invitation envelope, even if the
    // browser tries to restore the previous scroll position on reload.
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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

        {/* Section 6: Couple Gallery with Accessible Lightbox */}
        <PhotoGallery />
      </main>

      {/* Section 7: Closing Acknowledgments, Sharing, Back to Top */}
      <Footer />
    </div>
  );
}
