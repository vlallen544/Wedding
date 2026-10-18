import React from 'react';
import { MapPin, Navigation, AlertCircle } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';
import SectionScrollHint from './SectionScrollHint';

export default function VenueSection() {
  const { venue } = weddingConfig;

  return (
    <section 
      id="venue-section" 
      className="section-wrapper"
      style={{
        background: 'var(--color-warm-ivory)',
        borderTop: '1px solid var(--color-border-gold)',
        borderBottom: '1px solid var(--color-border-blue)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Reception Venue and Directions"
    >
      {/* Outer Corner Floral Accents */}
      <img
        src="/images/florals/rose-corner-tl.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          top: '-15px',
          left: '-20px',
          width: 'clamp(90px, 14vw, 180px)',
          opacity: 0.85,
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
          bottom: '-15px',
          right: '-20px',
          width: 'clamp(90px, 14vw, 180px)',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">Destination &amp; Route</p>
          <h2 className="section-title">Venue &amp; Directions</h2>
          <div className="cross-divider" aria-hidden="true">
            <span className="cross-divider-icon" aria-hidden="true" />
          </div>
        </div>

        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
        }}>
          <div className="paper-card" style={{ overflow: 'hidden' }}>
            
            {/* Show venue artwork only after an approved venue is configured. */}
            {venue.isConfirmed && (
              <div style={{
                width: '100%',
                maxHeight: '340px',
                overflow: 'hidden',
                background: 'var(--color-cloud-blue)',
                position: 'relative',
                borderBottom: '1px solid var(--color-border-gold)',
              }}>
                <img 
                  src={weddingConfig.media.venue} 
                  alt={`${venue.name} reception venue`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </div>
            )}

            {/* Content & Directions */}
            <div className="venue-card-content" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem)', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-gold-dark)',
                marginBottom: '0.75rem',
              }}>
                <MapPin size={20} />
                <span style={{
                  fontFamily: 'var(--font-subheading)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}>
                  {venue.city}, {venue.state}
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                color: 'var(--color-text-main)',
                marginBottom: '0.75rem',
              }}>
                {venue.name}
              </h3>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-muted)',
                maxWidth: '540px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.6,
              }}>
                {venue.address}
              </p>

              {!venue.isConfirmed && (
                <div className="venue-pending-note" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(216, 196, 154, 0.12)',
                  color: 'var(--color-gold-dark)',
                  fontSize: '0.8125rem',
                  marginBottom: '2rem',
                }}>
                  <AlertCircle size={14} />
                  <span>Exact auditorium/hall name will be updated upon final booking.</span>
                </div>
              )}

              {/* Get Directions Button */}
              <div>
                <a 
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                  aria-label="Open directions in Google Maps"
                >
                  <Navigation size={18} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

              <p style={{
                marginTop: '1.25rem',
                fontSize: '0.75rem',
                color: 'var(--color-text-light)',
              }}>
                Opens destination directly in your Google Maps app or browser (no API key required).
              </p>
            </div>

          </div>
        </div>

        <SectionScrollHint />
      </div>
    </section>
  );
}
