import React, { useEffect, useRef, useState } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';
import SectionScrollHint from './SectionScrollHint';

export default function InvitationCover({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExtracted, setIsExtracted] = useState(false);
  const [hasBorderAppeared, setHasBorderAppeared] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const openTimers = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setHasStarted(true);
      return undefined;
    }

    const timer = setTimeout(() => setHasStarted(true), 1350);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => () => {
    openTimers.current.forEach(clearTimeout);
  }, []);

  const handleOpen = () => {
    if (isOpen) {
      scrollToContent();
      return;
    }
    setIsOpen(true);
    setIsTransitioning(true);
    // Let the flap lead, then pull the letter forward in a separate depth cue.
    openTimers.current.push(setTimeout(() => {
      setIsExtracted(true);
      if (onOpen) onOpen();
    }, 500));

    // Reveal the architectural frame after the opening moment has landed.
    openTimers.current.push(setTimeout(() => {
      setHasBorderAppeared(true);
    }, 1500));

    // Give the frame a moment to appear before moving into the invitation.
    openTimers.current.push(setTimeout(() => {
      scrollToContent();
    }, 1900));

    openTimers.current.push(setTimeout(() => {
      setIsTransitioning(false);
    }, 2000));
  };

  const scrollToContent = () => {
    const heroEl = document.getElementById('hero-section');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="invitation-cover" 
      className={`section-wrapper invitation-cover ${hasStarted ? 'cover-ready' : 'cover-booting'} ${hasBorderAppeared ? 'cover-border-visible' : ''} ${isTransitioning ? 'cover-transitioning' : ''}`}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '2rem 1rem 3rem',
        overflow: 'hidden',
      }}
      aria-label="Wedding Invitation Envelope Cover"
    >
      {/* White-and-red floral frame carried through from the main invitation */}
      <div className="cover-floral-frame" aria-hidden="true">
        <img
          src="/images/florals/rose-corner-tl.webp"
          alt=""
          className="cover-floral cover-floral--tl"
        />
        <img
          src="/images/florals/rose-corner-br.webp"
          alt=""
          className="cover-floral cover-floral--br"
        />
        <img
          src="/images/florals/rose-garland-horizontal.webp"
          alt=""
          className="cover-floral-garland"
        />
      </div>

      {/* Decorative Floating Petals */}
      <div className="floating-petal-container" aria-hidden="true">
        <div className="petal" style={{ width: 14, height: 18, top: '15%', left: '12%', animation: 'fallPetal1 12s infinite linear' }} />
        <div className="petal" style={{ width: 18, height: 22, top: '25%', right: '14%', animation: 'fallPetal2 14s infinite linear 2s' }} />
        <div className="petal" style={{ width: 12, height: 16, top: '60%', left: '8%', animation: 'fallPetal1 16s infinite linear 4s' }} />
        <div className="petal" style={{ width: 16, height: 20, top: '50%', right: '10%', animation: 'fallPetal2 15s infinite linear 1s' }} />
      </div>

      {/* Top Header Text */}
      <div className="cover-header" style={{ textAlign: 'center', marginBottom: '2.5rem', zIndex: 2, position: 'relative' }}>
        <p className="section-subtitle" style={{ letterSpacing: '0.25em', marginBottom: '0.5rem' }}>
          Wedding Reception Invitation
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'var(--color-text-main)', letterSpacing: '0.05em' }}>
          {weddingConfig.couple.displayNames}
        </h1>
        <div className="cross-divider" aria-hidden="true">
          <span className="cross-divider-icon" aria-hidden="true" />
        </div>
      </div>

      {/* 3D Envelope Scene */}
      <div className="envelope-3d-scene">
        <div className={`envelope-container ${isOpen ? 'is-open' : ''}`}>
          {/* Base / Back of Envelope */}
          <div className="envelope-base"></div>

          {/* Inner Letter Card */}
          <div className={`envelope-letter ${isExtracted ? 'extracted' : ''}`}>
            {/* Small floral garland topper on inner card */}
            <img 
              src="/images/florals/rose-garland-horizontal.webp" 
              alt="" 
              aria-hidden="true" 
              style={{
                width: '140px',
                marginBottom: '0.5rem',
                pointerEvents: 'none',
                opacity: 0.92,
              }}
            />

            <p style={{ 
              fontFamily: 'var(--font-serif-accent)', 
              fontStyle: 'italic', 
              fontSize: '1.2rem', 
              color: 'var(--color-gold-dark)',
              marginBottom: '0.2rem' 
            }}>
              With God's Blessings
            </p>
            <h2 style={{ 
              fontSize: '1.45rem', 
              letterSpacing: '0.08em', 
              color: 'var(--color-text-main)',
              marginBottom: '0.4rem' 
            }}>
              {weddingConfig.couple.displayNames}
            </h2>
            <p style={{ 
              fontSize: '0.8125rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--color-text-muted)',
              marginBottom: '0.75rem' 
            }}>
              Grand Wedding Reception
            </p>
            <div style={{ width: '40px', height: '1px', background: 'var(--color-champagne-gold)', margin: '0 auto 0.75rem' }}></div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Kottayam, Kerala
            </p>
          </div>

          {/* Envelope Pocket (Front folds) */}
          <div className="envelope-pocket"></div>

          {/* Flap with 3D Rotation */}
          <div className={`envelope-flap ${isOpen ? 'open' : ''}`}>
            <div className="flap-triangle"></div>

            {/* Wax Seal / Tap to Open Button */}
            {!isOpen && (
              <button 
                type="button"
                className="wax-seal-btn"
                onClick={handleOpen}
                aria-label="Tap to open the wedding invitation"
              >
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>
                  Open
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="cover-actions" style={{ marginTop: '3rem', textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        {!isOpen ? (
          <button 
            type="button" 
            className="btn-primary" 
            onClick={handleOpen}
            aria-label="Open wedding invitation"
          >
            <Mail size={18} />
            <span>Open Invitation</span>
          </button>
        ) : (
          <button 
            type="button" 
            className="btn-primary" 
            onClick={scrollToContent}
            aria-label="Scroll to read reception details"
          >
            <span>View Full Details</span>
            <ChevronDown size={18} />
          </button>
        )}

      </div>

      <SectionScrollHint
        target={isOpen ? 'hero-section' : undefined}
        label={isOpen ? 'Slide down to begin' : 'Tap open invitation first'}
      />

      {/* Layered opening veil for the initial load and the cover-to-hero move. */}
      <div className={`startup-overlay ${hasStarted ? 'is-complete' : ''}`} aria-hidden="true">
        <div className="startup-overlay__panel startup-overlay__panel--top" />
        <div className="startup-overlay__panel startup-overlay__panel--bottom" />
        <div className="startup-overlay__content">
          <span className="startup-overlay__eyebrow">A new chapter begins</span>
          <span className="startup-overlay__names">{weddingConfig.couple.displayNames}</span>
          <span className="startup-overlay__rule" />
        </div>
      </div>

      <div className={`page-transition ${isTransitioning ? 'is-active' : ''}`} aria-hidden="true">
        <div className="page-transition__panel page-transition__panel--top" />
        <div className="page-transition__panel page-transition__panel--bottom" />
        <div className="page-transition__glow" />
        <div className="page-transition__mark">
          <span>With God's Blessings</span>
          <i />
        </div>
      </div>
    </section>
  );
}
