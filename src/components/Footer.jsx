import React, { useState } from 'react';
import { ArrowUp, Share2, Check } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const { guestGuide } = weddingConfig;
  const littleNote = guestGuide.littleNote;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: `${weddingConfig.couple.displayNames} — Grand Wedding Reception`,
      text: `Join us for the Grand Wedding Reception of ${weddingConfig.couple.invitationNames}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <footer 
      id="closing-section" 
      className="section-wrapper"
      style={{
        background: 'linear-gradient(180deg, rgba(245, 248, 250, 0.9) 0%, #FAF8F3 100%)',
        borderTop: '1px solid var(--color-border-gold)',
        paddingBottom: '3.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Closing Acknowledgments, Guest Note and Sharing"
    >
      {/* Outer Floral Corner Accents */}
      <img
        src="/images/florals/rose-corner-tl.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          top: '-15px',
          left: '-20px',
          width: 'clamp(90px, 15vw, 180px)',
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
          width: 'clamp(90px, 15vw, 180px)',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-narrow" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Guest Love Note Card */}
        <div 
          className="paper-card guest-note-card"
          style={{
            padding: '2.5rem 2rem',
            marginBottom: '3rem',
            textAlign: 'center',
            background: 'var(--color-pearl-white)',
            position: 'relative',
          }}
        >
          {/* Centered Floral Garland crowning the Note */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
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

          <p className="section-subtitle" style={{ marginBottom: '0.5rem' }}>
            {littleNote.title}
          </p>
          <div className="cross-divider" style={{ margin: '0 auto 1.5rem' }} aria-hidden="true">
            <span className="cross-divider-icon" aria-hidden="true" />
          </div>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-main)',
            lineHeight: 1.85,
            marginBottom: '1.5rem',
            maxWidth: '620px',
            margin: '0 auto 1.5rem',
          }}>
            {littleNote.message}
          </p>
          <p style={{
            fontFamily: 'var(--font-serif-accent)',
            fontSize: '1.35rem',
            fontStyle: 'italic',
            color: 'var(--color-gold-dark)',
            fontWeight: 600,
          }}>
            {littleNote.signoff}
          </p>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            color: 'var(--color-text-main)',
            marginTop: '0.35rem',
            letterSpacing: '0.04em',
          }}>
            {littleNote.signoffNames}
          </p>
        </div>

        <p className="section-subtitle" style={{ marginBottom: '0.5rem' }}>
          With Sincere Gratitude
        </p>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          color: 'var(--color-text-main)',
          marginBottom: '1rem',
        }}>
          {weddingConfig.couple.displayNames}
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif-accent)',
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: 'var(--color-gold-dark)',
          marginBottom: '1.25rem',
        }}>
          "And now these three remain: faith, hope and love. But the greatest of these is love."
        </p>

        {/* Host Names */}
        <div style={{
          borderTop: '1px solid var(--color-border-gold)',
          borderBottom: '1px solid var(--color-border-gold)',
          padding: '1.25rem 0',
          marginBottom: '2.5rem',
        }}>
          <p style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>
            Cordially Invited By
          </p>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
            {weddingConfig.hosts}
          </p>
        </div>

        {/* Action Controls: Share & Back to Top */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '3rem',
        }}>
          <button 
            type="button"
            className="btn-primary"
            onClick={handleShare}
            aria-label="Share this wedding invitation"
          >
            {copied ? <Check size={18} color="#2E7D32" /> : <Share2 size={18} />}
            <span>{copied ? 'Link Copied to Clipboard!' : 'Share Invitation'}</span>
          </button>

          <button 
            type="button"
            className="btn-secondary"
            onClick={scrollToTop}
            aria-label="Scroll back to top of invitation"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Footer Note */}
        <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)' }}>
          <p style={{ marginBottom: '0.25rem' }}>
            Grand Wedding Reception • Kottayam, Kerala
          </p>
          <p style={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Nihal &amp; Serene. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
