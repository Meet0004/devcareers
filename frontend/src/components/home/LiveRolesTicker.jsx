import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import companiesData from '../../data/jobData/jobData.js'

// ============================================================
// 🎛️  ANIMATION SETTINGS
// ============================================================
const ANIM = {
  revealDuration: 0.55,
  revealSlide: 18,
  staggerStep: 5,
  countTickMs: 20,
  countStartMs: 400,
}

// ============================================================
// 🎯  CONFIG — set the featured job ID here
// ============================================================
const FEATURED_JOB_ID = 120
// console.log('DATA:', companiesData)
// ============================================================
// 🎨  TAG COLORS
// ============================================================
const TAG_COLORS = {
  'Full Time': { bg: '#F0FDF4', text: '#15803d', border: '#BBF7D0' },
  'Full-time': { bg: '#F0FDF4', text: '#15803d', border: '#BBF7D0' },
  'Intern': { bg: '#EFF6FF', text: '#1d4ed8', border: '#BFDBFE' },
  'Internship': { bg: '#EFF6FF', text: '#1d4ed8', border: '#BFDBFE' },
  'Campus': { bg: '#FFF7ED', text: '#c2410c', border: '#FED7AA' },
  'Trainee': { bg: '#FDF4FF', text: '#7e22ce', border: '#E9D5FF' },
  'Apprentice': { bg: '#F0FDFA', text: '#0f766e', border: '#99F6E4' },
  'New Grad': { bg: '#EFF6FF', text: '#1d4ed8', border: '#BFDBFE' },
  'Part Time': { bg: '#FEFCE8', text: '#a16207', border: '#FDE68A' },
}

// ── Derive a display colour from company name (deterministic) ──
const COMPANY_COLORS = {
  Qualcomm: { color: '#3253DC', bg: '#eef2ff' },
  Tesla: { color: '#CC0000', bg: '#fff0f0' },
  Intuit: { color: '#0077C5', bg: '#e8f4ff' },
  Swiggy: { color: '#FC8019', bg: '#fff5ee' },
  Meesho: { color: '#9B26AF', bg: '#fdf4ff' },
  Google: { color: '#4285F4', bg: '#e8f4ff' },
  Fynd: { color: '#F05A28', bg: '#fff5f0' },
  eBay: { color: '#E53238', bg: '#fff0f0' },
  default: { color: '#6366f1', bg: '#f0f0ff' },
}

// ── Safe companyMeta ─────────────────────────────────────────
const companyMeta = (company = '') => {
  if (COMPANY_COLORS[company]) return COMPANY_COLORS[company]
  const c0 = company.charCodeAt(0) || 0
  const c1 = company.charCodeAt(1) || 0
  return {
    color: '#' + ((c0 * 997 + c1 * 37) & 0xFFFFFF).toString(16).padStart(6, '0').slice(0, 6),
    bg: '#f4f4f4',
  }
}

const initials = (company = '') =>
  company.split(/\s+/).map(w => w[0]).join('').slice(0, 3).toUpperCase()

// ── UI helpers ───────────────────────────────────────────────
const ArrowIcon = ({ size = 12, color = '#f97316' }) => (
  <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const Tag = ({ label }) => {
  const t = TAG_COLORS[label] || TAG_COLORS['Full Time']
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', padding: '3px 9px', borderRadius: 100, background: t.bg, color: t.text, border: `1px solid ${t.border}` }}>
      {label}
    </span>
  )
}

const ArrowBtn = ({ hovered, dark = false }) => (
  <div style={{ width: 28, height: 28, borderRadius: '50%', background: hovered ? '#f97316' : dark ? 'rgba(249,115,22,0.2)' : 'rgba(249,115,22,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)', transform: hovered ? 'scale(1.1) rotate(-30deg)' : 'none', flexShrink: 0 }}>
    <ArrowIcon size={12} color={hovered ? '#fff' : '#f97316'} />
  </div>
)

const shimmerLine = (hovered, radius = 18) => ({
  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
  background: 'linear-gradient(90deg, transparent, #f97316, transparent)',
  opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
  borderRadius: `${radius}px ${radius}px 0 0`,
})

// ── Scroll-reveal hook ───────────────────────────────────────
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

// ── Card components ──────────────────────────────────────────

const FeaturedCard = ({ job, delay }) => {
  const [hov, setHov] = useState(false)
  const [ref, visible] = useReveal(delay)
  const navigate = useNavigate()
  const meta = companyMeta(job.company)

  return (
    <div ref={ref} style={revealStyle(visible)}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={() => navigate(`/jobs/${job.id}`)}
        style={{ height: '100%', gridColumn: 'span 2', gridRow: 'span 2', background: hov ? 'linear-gradient(135deg,#fff5f0 0%,#fff 100%)' : 'linear-gradient(135deg,#fff8f5 0%,#fff 100%)', border: hov ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(249,115,22,0.15)', borderRadius: 20, padding: 24, cursor: 'pointer', transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)', transform: hov ? 'translateY(-6px) scale(1.01)' : 'none', boxShadow: hov ? '0 20px 48px rgba(249,115,22,0.14)' : '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', overflow: 'hidden' }}
      >
        <div style={shimmerLine(hov, 20)} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(249,115,22,0.1)', color: '#ea580c', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, alignSelf: 'flex-start' }}>
          <span style={{ width: 6, height: 6, background: '#f97316', borderRadius: '50%' }} /> Featured Role
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: meta.bg, color: meta.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)', transform: hov ? 'scale(1.12) rotate(-5deg)' : 'none' }}>
            {initials(job.company)}
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{job.role}</div>
            <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 3, fontWeight: 500 }}>{job.company}</div>
          </div>
        </div>
        {/* Overview: first 180 chars */}
        <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.65, margin: 0 }}>
          {job.overview?.slice(0, 180).trimEnd()}…
        </p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[['Location', job.location], ['Experience', job.experience], ['Type', job.jobType]].map(([label, val]) => val && (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.02em' }}>{val}</span>
              <span style={{ fontSize: 11, color: '#c4c9d4', marginTop: 1 }}>{label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <Tag label={job.jobType} />
          <ArrowBtn hovered={hov} />
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ total, delay }) => {
  const [hov, setHov] = useState(false)
  const [ref, visible] = useReveal(delay)
  return (
    <div ref={ref} style={revealStyle(visible)}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ height: '100%', background: 'linear-gradient(135deg,#f97316,#ea580c)', border: '1px solid transparent', borderRadius: 18, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'default', transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)', transform: hov ? 'translateY(-5px) scale(1.01)' : 'none', boxShadow: hov ? '0 20px 48px rgba(249,115,22,0.4)' : '0 2px 8px rgba(249,115,22,0.2)', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)', opacity: hov ? 1 : 0, transition: 'opacity 0.3s' }} />
        <div>
          <div style={{ fontSize: 34, fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{total}+</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 4, fontWeight: 500 }}>Jobs posted this year</div>
        </div>
        <svg width={28} height={28} fill="none" stroke="rgba(255,255,255,0.5)" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  )
}

const BrowseCard = ({ delay }) => {
  const [hov, setHov] = useState(false)
  const [ref, visible] = useReveal(delay)
  const navigate = useNavigate()
  return (
    <div ref={ref} style={revealStyle(visible)}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={() => navigate('/jobs')}
        style={{ height: '100%', background: hov ? '#111' : '#0a0a0a', border: hov ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: 20, cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34,1.2,0.64,1)', transform: hov ? 'translateY(-5px) scale(1.01)' : 'none', boxShadow: hov ? '0 16px 40px rgba(0,0,0,0.35)' : '0 1px 4px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #f97316, transparent)', opacity: hov ? 1 : 0, transition: 'opacity 0.3s', borderRadius: '18px 18px 0 0' }} />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: 'rgba(249,115,22,0.15)', color: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)', transform: hov ? 'scale(1.12) rotate(-5deg)' : 'none' }}>
            <ArrowIcon size={16} color="#f97316" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: 2 }}>Browse All Roles</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', padding: '3px 9px', borderRadius: 100, background: 'rgba(249,115,22,0.15)', color: '#f97316', border: '1px solid rgba(249,115,22,0.25)' }}>
            Updated daily
          </span>
          <ArrowBtn hovered={hov} dark={true} />
        </div>
      </div>
    </div>
  )
}

const RoleCard = ({ job, delay, wide = false }) => {
  const [hov, setHov] = useState(false)
  const [ref, visible] = useReveal(delay)
  const navigate = useNavigate()
  const meta = companyMeta(job.company)

  return (
    <div ref={ref} style={{ ...revealStyle(visible), gridColumn: wide ? 'span 2' : 'span 1' }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={() => navigate(`/jobs/${job.id}`)}
        style={{ height: '100%', background: '#fff', border: hov ? '1px solid rgba(249,115,22,0.25)' : '1px solid rgba(0,0,0,0.07)', borderRadius: 18, padding: 20, cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34,1.2,0.64,1)', transform: hov ? 'translateY(-5px) scale(1.01)' : 'none', boxShadow: hov ? '0 16px 40px rgba(249,115,22,0.12)' : '0 1px 4px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden' }}
      >
        <div style={shimmerLine(hov)} />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: meta.bg, color: meta.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)', transform: hov ? 'scale(1.12) rotate(-5deg)' : 'none' }}>
            {initials(job.company)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#111', lineHeight: 1.3, marginBottom: 2 }}>{job.role}</div>
            <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>
              {job.company}{job.location ? ` · ${job.location}` : ''}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <Tag label={job.jobType} />
          <ArrowBtn hovered={hov} />
        </div>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────
const LiveRolesTicker = () => {
  const [count, setCount] = useState(0)
  const [headerRef, headerVisible] = useReveal(0)

  // Pick featured job by ID; rest = most recent N jobs (excluding featured)
const JOBS = Array.isArray(companiesData) 
  ? [...companiesData].filter(j => j?.id != null).sort((a, b) => b.id - a.id) 
  : []
const featuredJob = JOBS.find(j => j.id === FEATURED_JOB_ID) ?? JOBS[0]
const recentJobs = JOBS.filter(j => j.id !== featuredJob?.id).slice(0, 8)

    .filter(j => j.id !== featuredJob.id)
    .slice(0, 8)   // show up to 8 in the grid (fills 4 role slots + browse + stat)

  useEffect(() => {
    let c = 0; const target = companiesData.length
    const step = () => { c++; setCount(c); if (c < target) setTimeout(step, ANIM.countTickMs) }
    setTimeout(step, ANIM.countStartMs)
  }, [])

  const d = (row, col) => (row * 4 + col) * ANIM.staggerStep

  // Slice out the 7 visible role cards from recentJobs
  const [r0, r1, r2, r3, r4, r5, r6, r7] = recentJobs

  return (
    <>
      <style>{`
        @keyframes lrOrbFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-22px) scale(1.04)} }
        @keyframes lrShimmer  { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes lrPulse    { 0%,100%{transform:scale(1);opacity:.3} 50%{transform:scale(1.8);opacity:0} }
        .lr-bento {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: auto;
          gap: 12px;
        }
        .lr-bento > *:first-child { grid-column: span 2; grid-row: span 2; }
        @media(max-width:900px){ .lr-bento{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:500px){ .lr-bento{ grid-template-columns:1fr; } }
        @media(prefers-reduced-motion:reduce){ *{animation:none!important;transition:none!important;} }
      `}</style>

      <section style={{ background: 'transparent', padding: '55px 32px', position: 'relative', overflow: 'hidden', fontFamily: 'system-ui,-apple-system,sans-serif' }}>

        {/* Header */}
        <div ref={headerRef} style={{ ...revealStyle(headerVisible), textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ea580c', marginBottom: 14 }}>
            <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: '#22c55e', opacity: 0.3, animation: 'lrPulse 1.6s ease infinite' }} />
            </span>
            Live Opportunities
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.035em', lineHeight: 1.1, margin: '0 0 12px' }}>
            Fresh Roles,{' '}
            <em style={{ fontStyle: 'normal', background: 'linear-gradient(135deg,#f97316,#ea580c,#ff8c42)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% auto', animation: 'lrShimmer 3s linear infinite' }}>Every Day</em>
          </h2>
          <p style={{ fontSize: 16, color: '#9ca3af' }}>
            <strong style={{ fontSize: 20, fontWeight: 700, color: '#f97316' }}>Multiple</strong> active roles across top companies
          </p>
        </div>

        {/* Bento grid */}
<div className="lr-bento" style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 2 }}>
  {/* Featured (2×2) */}
  <FeaturedCard job={featuredJob} delay={d(0, 0)} />

  {/* Row 1 right */}
  {r0 && <RoleCard job={r0} delay={d(0, 2)} />}
  {r1 && <RoleCard job={r1} delay={d(0, 3)} />}

  {/* Row 2 right */}
  <StatCard total={companiesData.length} delay={d(1, 2)} />
  {r2 && <RoleCard job={r2} delay={d(1, 3)} />}

  {/* Row 3 */}
  {r3 && <RoleCard job={r3} delay={d(2, 0)} wide />}
  {r4 && <RoleCard job={r4} delay={d(2, 2)} />}
  {r5 && <RoleCard job={r5} delay={d(2, 3)} />}

  {/* Row 4 */}
{r6 && <RoleCard job={r6} delay={d(3, 0)} wide />}
{r7 && <RoleCard job={r7} delay={d(3, 2)} />}
<BrowseCard delay={d(3, 3)} />
</div>
      </section>
    </>
  )
}

export default LiveRolesTicker