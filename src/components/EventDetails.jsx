import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles, AlertCircle, Shirt, ShieldCheck } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';
import SectionScrollHint from './SectionScrollHint';

export default function EventDetails() {
  const { event, guestGuide } = weddingConfig;
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    // A confirmed date is enough to show a useful countdown. When the exact
    // reception time is still pending, count down to the start of that date
    // and label the timer accordingly instead of inventing a time.
    if (!event.date || !event.isDateConfirmed) {
      setTimeLeft(null);
      return;
    }

    const calculateTimeLeft = () => {
      const targetTimeStr = `${event.date}T${event.startTime || '00:00'}:00+05:30`;
      const targetDate = new Date(targetTimeStr).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isPast: false,
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [event.date, event.startTime, event.isDateConfirmed]);

  return (
    <section 
      id="event-details" 
      className="section-wrapper"
      style={{
        background: 'linear-gradient(180deg, rgba(250, 248, 243, 0.9) 0%, rgba(231, 237, 242, 0.6) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Wedding Reception Details and Guest Guide"
    >
      {/* Side Border Rose Vines */}
      <img
        src="/images/florals/rose-border-vertical-right.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          top: '12%',
          right: '-25px',
          width: 'clamp(90px, 14vw, 170px)',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <img
        src="/images/florals/rose-border-vertical-left.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-25px',
          width: 'clamp(90px, 14vw, 170px)',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">Save The Date</p>
          <h2 className="section-title">Reception Details</h2>
          <div className="cross-divider" aria-hidden="true">
            <span className="cross-divider-icon" aria-hidden="true" />
          </div>
        </div>

        {/* Floating Paper Cards Grid */}
        <div className="event-summary-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto 3.5rem',
        }}>
          
          {/* Date Card */}
          <div className="paper-card event-summary-card" style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-warm-ivory), var(--color-powder-blue))',
              border: '1px solid var(--color-champagne-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              color: 'var(--color-gold-dark)',
            }}>
              <Calendar size={24} />
            </div>

            <p style={{
              fontFamily: 'var(--font-subheading)',
              fontSize: '0.8125rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              marginBottom: '0.5rem',
              fontWeight: 600,
            }}>
              The Date
            </p>

            <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              {event.dateFormatted}
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              {event.day}
            </p>

            {!event.isDateConfirmed && (
              <div style={{
                marginTop: '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(216, 196, 154, 0.15)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.75rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 500,
              }}>
                <AlertCircle size={13} />
                <span>Pending final confirmation</span>
              </div>
            )}
          </div>

          {/* Time Card */}
          <div className="paper-card event-summary-card" style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-warm-ivory), var(--color-ice-blue))',
              border: '1px solid var(--color-champagne-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              color: 'var(--color-gold-dark)',
            }}>
              <Clock size={24} />
            </div>

            <p style={{
              fontFamily: 'var(--font-subheading)',
              fontSize: '0.8125rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              marginBottom: '0.5rem',
              fontWeight: 600,
            }}>
              The Time
            </p>

            <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              {event.startTimeFormatted}
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              Indian Standard Time (IST, GMT+5:30)
            </p>

            {!event.isDateConfirmed && (
              <div style={{
                marginTop: '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(198, 220, 236, 0.3)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                fontWeight: 500,
              }}>
                <Sparkles size={13} />
                <span>Dinner to follow</span>
              </div>
            )}
          </div>

        </div>

        {/* Countdown Area */}
        {timeLeft ? (
          <div 
            className="paper-card event-countdown-card"
            style={{
              maxWidth: '680px',
              margin: '0 auto 4rem',
              padding: '2.25rem 1.5rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F3 100%)',
            }}
          >
            <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
              {event.startTime ? 'Counting Down To The Celebration' : 'Counting Down To The Reception Date'}
            </p>
            <div className="countdown-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
            }}>
              {[
                { label: 'Days', val: timeLeft.days },
                { label: 'Hours', val: timeLeft.hours },
                { label: 'Minutes', val: timeLeft.minutes },
                { label: 'Seconds', val: timeLeft.seconds },
              ].map((item) => (
                <div 
                  key={item.label}
                  className="countdown-box"
                  style={{
                    background: 'var(--color-warm-ivory)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem 0.75rem',
                    border: '1px solid var(--color-border-gold)',
                  }}
                >
                  <div className="countdown-number" style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    color: 'var(--color-text-main)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}>
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold-dark)',
                    fontWeight: 600,
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            {!event.startTime && (
              <p style={{
                marginTop: '1rem',
                fontSize: '0.75rem',
                color: 'var(--color-text-light)',
              }}>
                The exact reception time will be added once confirmed.
              </p>
            )}
          </div>
        ) : (
          <div style={{
            maxWidth: '560px',
            margin: '0 auto 4rem',
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed var(--color-border-gold)',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif-accent)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              marginBottom: '0.25rem',
            }}>
              "To everything there is a season, and a time to every purpose under heaven."
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)' }}>
              Countdown timer will activate automatically when the confirmed reception date is added.
            </p>
          </div>
        )}

        {/* Guest Attire & Dress Code Guide with a pastel palette */}
        <div 
          className="paper-card dress-code-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'clamp(2rem, 4vw, 3.25rem)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F3 100%)',
            position: 'relative',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-dark)', marginBottom: '0.5rem' }}>
              <Shirt size={20} />
              <span className="section-subtitle" style={{ margin: 0 }}>
                {guestGuide.title}
              </span>
            </div>
            <div className="attire-palette" aria-label="Pastel colour palette">
              <p className="attire-palette-label">{guestGuide.paletteTitle}</p>
              <div className="attire-palette-swatches" aria-hidden="true">
                <span style={{ background: '#B9BBA0' }} />
                <span style={{ background: '#B5CAD5' }} />
                <span style={{ background: '#C8B7CD' }} />
                <span style={{ background: '#E8B8B6' }} />
                <span style={{ background: '#EBC5AE' }} />
                <span style={{ background: '#DAB9BE' }} />
              </div>
            </div>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>
              {guestGuide.styleLabel}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              {guestGuide.paletteSubtitle}
            </p>
          </div>

          {/* Attire Guidance Columns */}
          <div className="dress-guidance-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}>
            <div className="dress-guidance-card" style={{
              background: 'var(--color-cloud-blue)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-blue)',
            }}>
              <p style={{
                fontFamily: 'var(--font-subheading)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-dark)',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}>
                For Everyone
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-main)', lineHeight: 1.7 }}>
                {guestGuide.ladiesGuidance}
              </p>
            </div>

            <div className="dress-guidance-card" style={{
              background: 'var(--color-cloud-blue)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-blue)',
            }}>
              <p style={{
                fontFamily: 'var(--font-subheading)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-dark)',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}>
                For The Gentlemen
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-main)', lineHeight: 1.7 }}>
                {guestGuide.gentsGuidance}
              </p>
            </div>
          </div>

          {/* Celebration atmosphere adapted from the supplied evening guide */}
          <div className="evening-vibe-card" style={{
            marginTop: '1.75rem',
            marginBottom: '1.75rem',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, rgba(216, 231, 238, 0.72), rgba(250, 248, 243, 0.9))',
            border: '1px solid var(--color-border-blue)',
            textAlign: 'center',
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem', color: 'var(--color-gold-dark)' }}>
              <Sparkles size={17} />
              <span className="section-subtitle" style={{ margin: 0 }}>The Evening Vibe</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-serif-accent)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: 'var(--color-text-main)',
              marginBottom: '0.35rem',
            }}>
              {guestGuide.vibeTitle}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
              {guestGuide.vibeMessage}
            </p>
          </div>

          {/* Celebration & Care Note */}
          <div style={{
            borderTop: '1px solid var(--color-border-gold)',
            paddingTop: '1.5rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif-accent)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'var(--color-text-main)',
              marginBottom: '0.75rem',
            }}>
              "{guestGuide.blessingNote}"
            </p>
            <div className="care-note" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              background: 'rgba(216, 196, 154, 0.15)',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-pill)',
            }}>
              <ShieldCheck size={15} color="var(--color-gold-dark)" />
              <span>{guestGuide.careNote}</span>
            </div>
          </div>

        </div>

        <SectionScrollHint />
      </div>
    </section>
  );
}
