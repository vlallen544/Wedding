import React from 'react';
import { Heart, Calendar, MapPin, ArrowDown } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';
import SectionScrollHint from './SectionScrollHint';

export default function HeroSection() {
  const { sacredVerse } = weddingConfig;

  return (
    <section 
      id="hero-section" 
      className="section-wrapper"
      style={{
        background: 'linear-gradient(180deg, rgba(245, 248, 250, 0.6) 0%, rgba(250, 248, 243, 0.8) 100%)',
        borderTop: '1px solid var(--color-border-blue)',
        borderBottom: '1px solid var(--color-border-gold)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* White-and-red rose frame for the main hero */}
      <img
        src="/images/florals/rose-corner-tl.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          top: '-28px',
          left: '-28px',
          width: 'clamp(140px, 18vw, 220px)',
          opacity: 0.9,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <img
        src="/images/florals/rose-corner-br.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          bottom: '-34px',
          right: '-30px',
          width: 'clamp(150px, 19vw, 235px)',
          opacity: 0.9,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <img
        src="/images/florals/rose-garland-horizontal.webp"
        alt=""
        aria-hidden="true"
        className="hero-rose-garland"
        loading="lazy"
      />

      {/* A quiet running-letter detail inspired by the client's reference. */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          <span>WITH GOD'S BLESSINGS</span>
          <b>✦</b>
          <span>NIHAL &amp; SERENE</span>
          <b>✦</b>
          <span>WITH GOD'S BLESSINGS</span>
          <b>✦</b>
          <span>NIHAL &amp; SERENE</span>
          <b>✦</b>
        </div>

      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid hero-grid--portrait">

          {/* Editorial portrait anchor with the couple illustration and
              restrained rose accents from the invitation artwork. */}
          <div className="hero-brand-panel">
            <div className="hero-couple-art">
              <img
                src="/images/florals/rose-corner-tr.webp"
                alt=""
                aria-hidden="true"
                className="hero-couple-floral hero-couple-floral--tl"
                loading="lazy"
              />
              <img
                src="/images/couple-illustration.png"
                alt="Illustrated portrait of Nihal and Serene celebrating together"
                className="hero-couple-image"
              />
              <img
                src="/images/florals/rose-corner-bl.webp"
                alt=""
                aria-hidden="true"
                className="hero-couple-floral hero-couple-floral--br"
                loading="lazy"
              />
            </div>
            <p className="section-subtitle">An evening to remember</p>
            <div className="hero-brand-rule" aria-hidden="true" />
            <p className="hero-brand-event">Grand Wedding Reception</p>
            <div className="hero-brand-meta">
              <span>{weddingConfig.event.dateFormatted}</span>
              <span>Kottayam, Kerala</span>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="hero-content" style={{ padding: '1rem 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Heart size={16} color="var(--color-champagne-gold)" fill="var(--color-champagne-gold)" />
              <span className="section-subtitle" style={{ margin: 0 }}>
                {sacredVerse.theme}
              </span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', 
              color: 'var(--color-text-main)', 
              marginBottom: '1rem',
              lineHeight: 1.15
            }}>
              {weddingConfig.couple.displayNames}
            </h2>

            {/* Sacred verse */}
            <div className="hero-verse" style={{
              background: 'rgba(255, 255, 255, 0.88)',
              borderLeft: '3px solid var(--color-champagne-gold)',
              padding: '1.25rem 1.5rem',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              marginBottom: '1.5rem',
              boxShadow: 'var(--shadow-soft)',
            }}>
              <p style={{ 
                fontFamily: 'var(--font-serif-accent)', 
                fontSize: '1.35rem', 
                color: 'var(--color-text-main)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                marginBottom: '0.5rem',
              }}>
                "{sacredVerse.quote}"
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-subheading)',
                color: 'var(--color-gold-dark)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                <span className="christian-cross" aria-hidden="true" />
                <span>{sacredVerse.verse}</span>
              </div>
            </div>

            <p className="hero-intro" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
              With thankful hearts and the blessing of our families, we invite you to join in an unforgettable evening 
              of fellowship, laughter, and dining as we celebrate our new beginning together in Kottayam.
            </p>

            {/* Quick Highlights */}
            <div className="hero-highlights" style={{
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              marginBottom: '2.5rem' 
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'var(--color-pearl-white)',
                padding: '0.65rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-border-gold)',
                fontSize: '0.875rem',
                color: 'var(--color-text-main)',
                boxShadow: 'var(--shadow-soft)'
              }}>
                <Calendar size={16} color="var(--color-gold-dark)" />
                <span>{weddingConfig.event.dateFormatted}</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'var(--color-pearl-white)',
                padding: '0.65rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-border-gold)',
                fontSize: '0.875rem',
                color: 'var(--color-text-main)',
                boxShadow: 'var(--shadow-soft)'
              }}>
                <MapPin size={16} color="var(--color-gold-dark)" />
                <span>Kottayam, Kerala</span>
              </div>
            </div>

            <div>
              <a href="#family-invitation" className="btn-primary">
                <span>Read Family Invitation</span>
                <ArrowDown size={17} />
              </a>
            </div>
          </div>

        </div>

        <SectionScrollHint target="family-invitation" />
      </div>
    </section>
  );
}
