import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function PhotoGallery() {
  const { gallery } = weddingConfig.media;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(gallery.map(item => item.category).filter(Boolean))];

  const filteredGallery = activeFilter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    const targetItem = filteredGallery[index];
    const fullIndex = gallery.findIndex(item => item.id === targetItem.id);
    setSelectedIndex(fullIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  return (
    <section 
      id="photo-gallery" 
      className="section-wrapper"
      style={{
        background: 'linear-gradient(180deg, rgba(231, 237, 242, 0.4) 0%, rgba(250, 248, 243, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Wedding Mood Board & Floral Gallery"
    >
      {/* Side Border Floral Vines */}
      <img
        src="/images/florals/rose-border-vertical-left.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '-20px',
          width: 'clamp(90px, 14vw, 170px)',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <img
        src="/images/florals/rose-border-vertical-right.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-20px',
          width: 'clamp(90px, 14vw, 170px)',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">Aesthetic &amp; Florals</p>
          <h2 className="section-title">The Mood Board Gallery</h2>
          <div className="cross-divider" aria-hidden="true">
            <span className="cross-divider-icon">✝</span>
          </div>

          {/* Centered Rose Garland below header */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem', marginBottom: '0.75rem' }}>
            <img 
              src="/images/florals/rose-garland-horizontal.webp" 
              alt="" 
              aria-hidden="true" 
              style={{
                width: 'clamp(180px, 45%, 320px)',
                height: 'auto',
                pointerEvents: 'none',
                opacity: 0.95,
              }}
            />
          </div>

          <p style={{ 
            fontSize: '0.925rem', 
            color: 'var(--color-text-muted)',
            maxWidth: '580px',
            margin: '0.5rem auto 0',
          }}>
            Authentic floral arrangements, ceremony arches, candlelit tablescapes, and pastel attire inspirations extracted from the official Wedding Mood Board.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '2.5rem',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat ? 'linear-gradient(135deg, #FAF8F3 0%, var(--color-powder-blue) 100%)' : 'var(--color-pearl-white)',
                color: activeFilter === cat ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                border: activeFilter === cat ? '1px solid var(--color-champagne-gold)' : '1px solid rgba(87, 104, 120, 0.2)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.45rem 1.1rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-subheading)',
                fontWeight: activeFilter === cat ? 600 : 500,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: activeFilter === cat ? '0 2px 8px rgba(198, 220, 236, 0.5)' : 'none',
              }}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
        >
          {filteredGallery.map((item, index) => (
            <div 
              key={item.id}
              className="paper-card"
              style={{
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                position: 'relative',
              }}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${item.caption}`}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '6 / 7', overflow: 'hidden' }}>
                <img 
                  src={item.src} 
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  loading="lazy"
                />

                {/* Mood board tag badge */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-subheading)',
                  color: 'var(--color-gold-dark)',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(216, 196, 154, 0.4)',
                }}>
                  {item.category || 'Mood Board'}
                </div>

                {/* Hover overlay hint */}
                <div 
                  className="gallery-hover-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(36, 48, 62, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity var(--transition-fast)',
                    color: '#FAF8F3',
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--color-text-main)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                  }}>
                    <ZoomIn size={14} color="var(--color-gold-dark)" />
                    <span>Expand</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div style={{ padding: '1rem', textAlign: 'center', background: 'var(--color-pearl-white)' }}>
                <p style={{
                  fontFamily: 'var(--font-serif-accent)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-main)',
                  marginBottom: '0.2rem',
                }}>
                  {item.caption}
                </p>
                <span style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-gold-dark)',
                  fontWeight: 600,
                }}>
                  Mood Board Reference #{item.id}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="lightbox-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(20, 28, 38, 0.94)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
          }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
        >
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              zIndex: 10001,
              transition: 'background var(--transition-fast)',
            }}
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>

          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              zIndex: 10001,
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              zIndex: 10001,
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '850px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              border: '2px solid rgba(216, 196, 154, 0.6)',
              background: 'var(--color-warm-ivory)',
              maxHeight: '72vh',
            }}>
              <img 
                src={gallery[selectedIndex].src} 
                alt={gallery[selectedIndex].alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            <div style={{ marginTop: '1.25rem', color: '#FAF8F3' }}>
              <p style={{
                fontFamily: 'var(--font-serif-accent)',
                fontSize: '1.45rem',
                fontStyle: 'italic',
                color: '#FAF8F3',
                marginBottom: '0.25rem',
              }}>
                {gallery[selectedIndex].caption}
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-champagne-gold)', letterSpacing: '0.1em' }}>
                Photo {selectedIndex + 1} of {gallery.length} • {gallery[selectedIndex].category}
              </p>
            </div>
          </div>

        </div>
      )}

      <style>{`
        .gallery-grid .paper-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
        .gallery-grid .paper-card:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
