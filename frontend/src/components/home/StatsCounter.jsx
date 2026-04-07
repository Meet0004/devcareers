import React, { useState, useEffect, useRef } from 'react'
import { metrics } from '../../config/metrics'

const TOPMATE_LINK = import.meta.env.VITE_TOPMATELINK || 'https://topmate.io/meet_g/'

const STATS = [
  {
    id: 'jobs',
    envKey: 'VITE_TOTAL_JOBS',
    target: metrics.totalJobs,
    suffix: '+',
    label: 'Job Opportunities Posted',
    // subtitle: { type: 'text', text: 'Updated daily' },
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    verified: false,
  },
  {
    id: 'customers',
    envKey: 'VITE_TOTAL_CUSTOMERS',
    target: metrics.totalCustomers,
    suffix: '+',
    label: 'Happy Customers',
    // subtitle: { type: 'false' },
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    verified: true,
  },
  {
    id: 'sales',
    envKey: 'VITE_TOTAL_SALES',
    target: metrics.totalCustomers,
    suffix: '',
    label: 'Successful Purchases',
    // subtitle: { type: 'false' },
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    verified: true,
  },
]

const TRUST_BADGES = [
  {
    label: '100% Secure Platform',
    color: '#22c55e',
    fill: true,
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    viewBox: "0 0 20 20",
  },
  {
    label: 'Trusted Service',
    color: '#f97316',
    fill: false,
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    viewBox: "0 0 24 24",
  },
  {
    label: '24/7 Support Available',
    color: '#6b7280',
    fill: false,
    d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    viewBox: "0 0 24 24",
  },
]

const VerifiedBadge = () => (
  <a
    href={TOPMATE_LINK}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: 'rgba(34,197,94,0.08)',
      border: '1px solid rgba(34,197,94,0.22)',
      color: '#15803d',
      fontSize: 11, fontWeight: 600,
      padding: '3px 10px', borderRadius: 100,
      textDecoration: 'none',
      transition: 'background 0.2s',
    }}
  >
    <svg width={10} height={10} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    Verified by topmate.io
  </a>
)

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

const StatCard = ({ stat, count }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: hovered ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(249,115,22,0.12)',
        borderRadius: 20,
        padding: '28px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 48px rgba(249,115,22,0.12)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        cursor: 'default',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, #f97316, #ea580c)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
        borderRadius: '20px 20px 0 0',
      }} />

      {/* Icon */}
      <div style={{
        width: 52, height: 52,
        background: hovered ? 'rgba(249,115,22,0.15)' : 'rgba(249,115,22,0.08)',
        borderRadius: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 18px',
        transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        transform: hovered ? 'scale(1.12) rotate(-5deg)' : 'scale(1) rotate(0deg)',
      }}>
        <svg width={24} height={24} fill="none" stroke="#f97316" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
        </svg>
      </div>

      {/* Number */}
      <div style={{
        fontSize: 48, fontWeight: 700, color: '#0a0a0a',
        letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {count.toLocaleString()}{stat.suffix}
      </div>

      {/* Label */}
      <div style={{ fontSize: 14, color: '#6b7280', fontWeight: 500, marginBottom: 10 }}>
        {stat.label}
      </div>

      {/* Subtitle
      {stat.subtitle.type === 'verified' ? (
        <VerifiedBadge />
      ) : (
        <div style={{ fontSize: 12, color: '#d1d5db', fontStyle: 'italic' }}>
          {stat.subtitle.text}
        </div>
      )} */}
    </div>
  )
}
// ============================================================
const ANIM = {
  revealDuration: 0.55,
  revealSlide: 18,
  staggerStep: 5,
  countTickMs: 20,
  countStartMs: 400,
}
const useReveal = (delay = 0) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return [ref, visible]
}

const revealStyle = (visible) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : `translateY(${ANIM.revealSlide}px)`,
  transition: `opacity ${ANIM.revealDuration}s cubic-bezier(0.22,1,0.36,1), transform ${ANIM.revealDuration}s cubic-bezier(0.22,1,0.36,1)`,
})
const StatsCounter = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !isVisible) setIsVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const fps = 1000 / 60
    const totalFrames = Math.round(duration / fps)
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const p = easeOutQuart(Math.min(frame / totalFrames, 1))
      setCounts(STATS.map(s => Math.round(p * s.target)))
      if (frame >= totalFrames) clearInterval(timer)
    }, fps)

    return () => clearInterval(timer)
  }, [isVisible])
  const [headerRef, headerVisible] = useReveal(0)
  const [count, setCount] = useState(0)

  return (
    <>
      <style>{`
        @keyframes scOrbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.05); }
        }
        @keyframes scShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @media (max-width: 640px) {
          .sc-cards-grid { grid-template-columns: 1fr !important; }
          .sc-trust-row { gap: 16px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div
        ref={sectionRef}
        style={{
          background: '#fff',
          padding: '10px 24px 0px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background:"transparent"
        }}
      >
        {/* Ambient orbs */}
        {/* <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: '#ff6b00', filter: 'blur(90px)', opacity: 0.07, top: -180, right: -120, animation: 'scOrbFloat 8s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: '#ff9440', filter: 'blur(80px)', opacity: 0.06, bottom: 0, left: -80, animation: 'scOrbFloat 12s ease-in-out infinite reverse', pointerEvents: 'none' }} /> */}

        {/* Header */}
        {/* Header */}
        <div ref={headerRef} style={{ ...revealStyle(headerVisible), textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.035em', lineHeight: 1.1, margin: '0 0 12px' }}>
            Trusted by{' '}
            <em style={{ fontStyle: 'normal', background: 'linear-gradient(135deg,#f97316,#ea580c,#ff8c42)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% auto', animation: 'lrShimmer 3s linear infinite' }}>Professionals</em> Worldwide
          </h2>
          
          {/* <p style={{ fontSize: 16, color: '#9ca3af' }}>
            <strong style={{ fontSize: 20, fontWeight: 700, color: '#f97316' }}>{count}+</strong> 
          </p> */}
         
        </div>

        {/* Stat cards */}
        <div
          className="sc-cards-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto 24px' }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} count={counts[i]} />
          ))}
        </div>

        {/* Trust badges */}
        <div
          className="sc-trust-row"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 32, flexWrap: 'wrap',
            paddingTop: 12, borderTop: '1px solid #f3f4f6',
            maxWidth: 900, margin: '0 auto',
          }}
        >
          {TRUST_BADGES.map(({ label, color, fill, d, viewBox }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#9ca3af', fontWeight: 500 }}>
              <svg width={16} height={16} fill={fill ? color : 'none'} stroke={fill ? 'none' : color} viewBox={viewBox}>
                {fill
                  ? <path fillRule="evenodd" d={d} clipRule="evenodd" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                }
              </svg>
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default StatsCounter