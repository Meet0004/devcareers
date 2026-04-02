import React, { useEffect, useRef, useState } from 'react'

// ============================================================
// 🎛️  ANIMATION SETTINGS — edit these to tune all animations
// ============================================================
const ANIM = {
  revealDuration: 0.65,  // seconds — card fade+slide duration
  //   fast: 0.35  |  default: 0.65  |  slow: 1.0
  revealSlide: 24,    // px — how far up cards slide in from
  //   subtle: 10  |  default: 24  |  dramatic: 50
  cardDelay: 120,   // ms — stagger between Mission and Vision card
  //   instant: 0  |  default: 120  |  slow: 300
  headerDelay: 0,     // ms — delay before header appears
}

// ============================================================
// 📋  CONTENT — edit text, icons, colors here
// ============================================================
const CARDS = [
  {
    id: 'mission',
    eyebrow: 'Why We Exist',
    title: 'Our Mission',
    // ✏️ Edit the body text below
    body: [
      { text: 'To ' },
      { text: 'empower students and early-career professionals', bold: true },
      { text: ' by providing timely access to curated job opportunities tailored to their preferences, high-quality educational resources, and actionable career guidance - enabling them to ' },
      { text: 'secure their dream roles', bold: true },
      { text: ' and build successful careers in technology and beyond.' },
    ],
    // ✏️ Accent color for this card (used on icon bg, border, shimmer, tag)
    accent: '#3b82f6',       // blue
    accentLight: '#eff6ff',  // light blue bg
    accentMid: '#bfdbfe',    // border color
    accentText: '#1e3a8a',   // dark text on light bg
    // ✏️ SVG icon path (paste any heroicon path here)
    icon: (
      <svg width={22} height={22} fill="white" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'vision',
    eyebrow: 'Where We\'re Going',
    title: 'Our Vision',
    body: [
      { text: 'To become ' },
      { text: "India's most trusted career platform", bold: true },
      { text: ' for students and early professionals, where ' },
      { text: 'every aspiring professional', bold: true },
      { text: ' - regardless of background, college, or connections - has ' },
      { text: 'equal access', bold: true },
      { text: ' to opportunities, resources, and guidance needed to thrive in their careers.' },
    ],
    accent: '#8b5cf6',       // purple
    accentLight: '#faf5ff',  // light purple bg
    accentMid: '#ddd6fe',    // border color
    accentText: '#3b0764',   // dark text on light bg
    icon: (
      <svg width={22} height={22} fill="white" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    ),
  },
]

// ── Scroll-reveal hook ───────────────────────────────────────
// Fires once when element is 15% visible, then disconnects
const useReveal = (delay = 0) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay)
        obs.disconnect()
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return [ref, visible]
}

// CSS for fade + slide-up reveal — reads from ANIM settings
const revealStyle = (visible) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : `translateY(${ANIM.revealSlide}px)`,
  transition: `opacity ${ANIM.revealDuration}s cubic-bezier(0.22,1,0.36,1), transform ${ANIM.revealDuration}s cubic-bezier(0.22,1,0.36,1)`,
})

// ── Single card component ────────────────────────────────────
const MissionCard = ({ card, delay }) => {
  const [hov, setHov] = useState(false)
  const [ref, visible] = useReveal(delay)

  return (
    <div ref={ref} style={revealStyle(visible)}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          height: '100%',
          width: '100%',
          maxWidth: '460px',
          margin: '8px auto',
          background: hov
            ? `linear-gradient(145deg, ${card.accentLight}, #fff 60%)`
            : `linear-gradient(145deg, ${card.accentLight} 0%, #fff 70%)`,
          border: `1px solid ${hov ? card.accent + '55' : card.accentMid}`,
          borderRadius: 20,
          padding: 32,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
          transition: `all 0.4s cubic-bezier(0.22,1,0.36,1)`,
          transform: hov ? 'translateY(-6px) scale(1.01)' : 'none',
          boxShadow: hov
            ? `0 24px 56px ${card.accent}22, 0 2px 8px ${card.accent}11`
            : `0 2px 12px ${card.accent}0d`,
        }}
      >
        {/* Shimmer top line — appears on hover */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
          opacity: hov ? 1 : 0,
          transition: 'opacity 0.3s',
          borderRadius: '20px 20px 0 0',
        }} />

        {/* Soft ambient orb in corner */}
        <div style={{
          position: 'absolute', bottom: -60, right: -60,
          width: 200, height: 200, borderRadius: '50%',
          background: card.accent,
          opacity: hov ? 0.06 : 0.03,
          filter: 'blur(50px)',
          transition: 'opacity 0.4s',
          pointerEvents: 'none',
        }} />

        {/* Eyebrow label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: card.accent,
          background: card.accent + '12',
          padding: '4px 12px', borderRadius: 100,
          marginBottom: 20,
        }}>
          {/* Dot indicator */}
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: card.accent, display: 'inline-block' }} />
          {card.eyebrow}
        </div>

        {/* Icon + Title row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: card.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            transform: hov ? 'scale(1.1) rotate(-5deg)' : 'none',
            boxShadow: `0 4px 14px ${card.accent}44`,
          }}>
            {card.icon}
          </div>
          <h3 style={{
            fontSize: 22, fontWeight: 700,
            color: card.accentText,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            margin: 0,
          }}>
            {card.title}
          </h3>
        </div>

        {/* Body text — bold segments handled inline */}
        <p style={{
          fontSize: 15, lineHeight: 1.75,
          color: card.accentText + 'cc',
          margin: 0,
          position: 'relative', zIndex: 1,
        }}>
          {card.body.map((seg, i) =>
            seg.bold
              ? <strong key={i} style={{ color: card.accentText, fontWeight: 700 }}>{seg.text}</strong>
              : <span key={i}>{seg.text}</span>
          )}
        </p>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────
const Mission = () => {
  const [headerRef, headerVisible] = useReveal(ANIM.headerDelay)

  return (
    <>
      <style>{`
        @keyframes missionPulse {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0;   transform: scale(1.8); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <section style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: 'transparent' }}>

        {/* Section header — fades in when scrolled into view */}
        <div ref={headerRef} style={{ ...revealStyle(headerVisible), textAlign: 'center', marginBottom: 48 }}>
          {/* Live dot + eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#ea580c', marginBottom: 14,
          }}>
            <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: '#22c55e', opacity: 0.3, animation: 'missionPulse 1.6s ease infinite' }} />
            </span>
            Who We Are
          </div>

          {/* ✏️ Edit the section headline below */}
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: 700, color: '#0a0a0a',
            letterSpacing: '-0.035em', lineHeight: 1.1,
            margin: '0 0 12px',
          }}>
            Built with{' '}
            <em style={{
              fontStyle: 'normal',
              background: 'linear-gradient(135deg,#f97316,#ea580c,#ff8c42)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Purpose</em>
          </h2>

          {/* ✏️ Edit the section subtitle below */}
          <p style={{ fontSize: 16, color: '#9ca3af', margin: 0 }}>
            The principles that drive everything we build at CareerVerse
          </p>
        </div>

        {/* Two cards — Mission and Vision
            Delay staggered by ANIM.cardDelay ms             */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 460px))',
          justifyContent: 'center',
          marginBottom: '16px',
          gap: 16,
        }}>
          {CARDS.map((card, i) => (
            <MissionCard
              key={card.id}
              card={card}
              delay={i * ANIM.cardDelay}  // each card staggers by cardDelay ms
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Mission