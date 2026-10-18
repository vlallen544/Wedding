import React from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { ExternalLink, ArrowDown } from 'lucide-react';

export default function FamilyInvitation() {
  const { invitationMessage } = weddingConfig;

  return (
    <section 
      id="family-invitation" 
      className="section-wrapper"
      style={{
        background: 'var(--color-warm-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Family Invitation Message"
    >
      {/* Outer Border Background Rose Accents */}
      <img
        src="/images/florals/rose-corner-tl.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-20px',
          width: 'clamp(100px, 16vw, 210px)',
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
          bottom: '-10px',
          right: '-20px',
          width: 'clamp(100px, 16vw, 210px)',
          opacity: 0.9,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">A Heartfelt Message</p>
          <h2 className="section-title">The Family Invitation</h2>
          <div className="cross-divider" aria-hidden="true">
            <span className="cross-divider-icon" aria-hidden="true" />
          </div>
        </div>

        {/* Paper Card Frame Decorated with Red & White Roses */}
        <div 
          className="paper-card family-invitation-card"
          style={{
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.75rem, 5vw, 3.5rem)',
            textAlign: 'center',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F3 100%)',
            position: 'relative',
          }}
        >
          {/* Card Corner Floral Accents */}
          <img
            src="/images/florals/rose-corner-tr.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '90px',
              pointerEvents: 'none',
              zIndex: 3,
              filter: 'drop-shadow(0 2px 8px rgba(139, 30, 45, 0.12))',
            }}
          />
          <img
            src="/images/florals/rose-corner-bl.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              width: '90px',
              pointerEvents: 'none',
              zIndex: 3,
              filter: 'drop-shadow(0 -2px 8px rgba(139, 30, 45, 0.12))',
            }}
          />

          {/* Centered Rose Garland at Top of Message */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <img 
              src="/images/florals/rose-garland-horizontal.webp" 
              alt="" 
              aria-hidden="true" 
              loading="lazy"
              style={{
                width: 'clamp(180px, 45%, 320px)',
                height: 'auto',
                pointerEvents: 'none',
                opacity: 0.95,
              }}
            />
          </div>

          <p style={{
            fontFamily: 'var(--font-serif-accent)',
            fontSize: '1.3rem',
            fontStyle: 'italic',
            color: 'var(--color-gold-dark)',
            marginBottom: '1.5rem',
          }}>
            "With God's Blessings"
          </p>

          {/* Approved Invitation Text */}
          <div className="family-invitation-copy" style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'var(--color-text-main)', marginBottom: '1.75rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              {invitationMessage.greeting} <strong style={{ color: 'var(--color-text-main)' }}>{invitationMessage.coupleNames}</strong>.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              {invitationMessage.paragraph}
            </p>
            <a
              href="#event-details"
              className="family-action-note"
              style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              background: 'var(--color-cloud-blue)',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-blue)',
              fontSize: '0.95rem',
              color: 'var(--color-text-main)',
              fontStyle: 'normal',
              fontWeight: 500,
              textDecoration: 'none',
            }}>
              <span>Continue to reception details</span>
              <ArrowDown size={15} color="var(--color-gold-dark)" />
            </a>
          </div>

          {/* Genuine Client Invitation URL Button — Only displayed when a genuine URL is configured */}
          {Boolean(invitationMessage.referenceUrl && invitationMessage.referenceUrl.trim() !== '') && (
            <div style={{
              display: 'inline-block',
              margin: '0.5rem auto 2rem',
              padding: '0.65rem 1.25rem',
              background: 'var(--color-cloud-blue)',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-blue)',
            }}>
              <a 
                href={invitationMessage.referenceUrl}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-text-main)',
                  textDecoration: 'none',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-subheading)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 500,
                }}
              >
                <span>View Official Invitation Link</span>
                <ExternalLink size={13} color="var(--color-gold-dark)" />
              </a>
            </div>
          )}

          {/* Signature */}
          <div style={{ marginTop: '2rem', borderTop: '1px solid var(--color-border-gold)', paddingTop: '1.5rem' }}>
            <p style={{ 
              fontFamily: 'var(--font-serif-accent)', 
              fontSize: '1.15rem', 
              fontStyle: 'italic', 
              color: 'var(--color-text-muted)', 
              marginBottom: '0.25rem' 
            }}>
              {invitationMessage.closing}
            </p>
            <p style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.35rem', 
              fontWeight: 600, 
              color: 'var(--color-text-main)',
              letterSpacing: '0.04em'
            }}>
              {invitationMessage.signature}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
