import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ResourcesData from '../../data/resourceData/resourceData'
import ResourcesTopmate from '../../data/resourceData/resourceTopmate'
import NaukriSidebarBanner from '../common/NaukriSidebarBanner'

const CompanyDetailSidebar = () => {
  const shuffledData = useMemo(() => {
    const firstItem = ResourcesData.find(item => item.id === 34)
    const otherItems = ResourcesData.filter(item => item.id !== 34)
    const shuffled = [...otherItems]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    const limitedShuffled = shuffled.slice(0, 25)
    return firstItem ? [firstItem, ...limitedShuffled] : limitedShuffled
  }, [])

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'system-ui,-apple-system,sans-serif' }}>

      {/* Resources Card */}
      <div style={{
        background: '#fff',
        borderRadius: 20,
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        position: 'sticky',
        top: 16,
      }}>

        {/* Header */}
        <div style={{
          padding: '18px 20px 14px',
          borderBottom: '1px solid #f3f4f6',
          background: 'linear-gradient(135deg, #fff8f5 0%, #fff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Ambient orb */}
          <div style={{
            position: 'absolute', top: -30, right: -30,
            width: 100, height: 100, borderRadius: '50%',
            background: '#f97316', opacity: 0.06, filter: 'blur(30px)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            {/* Live dot */}
            <span style={{ position: 'relative', width: 8, height: 8, flexShrink: 0 }}>
              <span style={{
                display: 'block', width: 8, height: 8,
                borderRadius: '50%', background: '#22c55e',
              }} />
              <span style={{
                position: 'absolute', inset: -3, borderRadius: '50%',
                background: '#22c55e', opacity: 0.3,
                animation: 'sidebarPulse 1.6s ease infinite',
              }} />
            </span>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ea580c' }}>
              Curated for You
            </span>
          </div>

          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.3 }}>
            Resources to Crack Interviews
          </h3>
          <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0', fontWeight: 500 }}>
            {shuffledData.length} handpicked resources
          </p>
        </div>

        {/* Resource list */}
        <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 600, overflowY: 'auto' }}>
          {shuffledData.map((item, idx) => {
            const isFree = !item.price || item.price === ''
            const topmateLink = ResourcesTopmate[item.id]
            const isFirst = idx === 0

            const sharedStyle = {
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 10px',
              borderRadius: 12,
              border: isFirst ? '1px solid #fed7aa' : '1px solid rgba(0,0,0,0.06)',
              background: isFirst ? 'linear-gradient(135deg,#fff8f5,#fff)' : '#fafaf9',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s cubic-bezier(0.22,1,0.36,1)',
            }

            const CardContent = ({ hov }) => (
              <>
                {/* Thumbnail */}
                <div style={{
                  width: 60, height: 60, borderRadius: 10, flexShrink: 0,
                  overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)',
                  background: '#f9fafb',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  transform: hov ? 'scale(1.08) rotate(-3deg)' : 'none',
                }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                {/* Title */}
                <span style={{
                  fontSize: 12, fontWeight: 600, color: '#111827',
                  flex: 1, lineHeight: 1.4,
                  display: '-webkit-box', WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {isFirst && (
                    <span style={{
                      display: 'inline-block', fontSize: 9, fontWeight: 700,
                      background: '#f97316', color: '#fff',
                      borderRadius: 4, padding: '1px 5px', marginRight: 5,
                      verticalAlign: 'middle', letterSpacing: '0.05em',
                    }}>TOP</span>
                  )}
                  {item.title}
                </span>

                {/* Arrow */}
                <div style={{
                  width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                  background: hov ? '#f97316' : 'rgba(249,115,22,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                  transform: hov ? 'scale(1.1) rotate(-30deg)' : 'none',
                }}>
                  <svg width={10} height={10} fill="none" stroke={hov ? '#fff' : '#f97316'} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </>
            )

            // Hover wrapper
            const HoverCard = ({ href, to, children }) => {
              const [hov, setHov] = useState(false)
              const style = {
                ...sharedStyle,
                border: isFirst
                  ? `1px solid ${hov ? '#f97316aa' : '#fed7aa'}`
                  : `1px solid ${hov ? 'rgba(249,115,22,0.2)' : 'rgba(0,0,0,0.06)'}`,
                background: hov
                  ? isFirst ? 'linear-gradient(135deg,#fff5ee,#fff)' : '#fff'
                  : isFirst ? 'linear-gradient(135deg,#fff8f5,#fff)' : '#fafaf9',
                boxShadow: hov ? `0 4px 16px rgba(249,115,22,0.1)` : 'none',
                transform: hov ? 'translateY(-1px)' : 'none',
              }
              if (href) return (
                <a href={href} target="_blank" rel="noopener noreferrer"
                  style={style}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                >
                  <CardContent hov={hov} />
                </a>
              )
              return (
                <Link to={to}
                  style={style}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                >
                  <CardContent hov={hov} />
                </Link>
              )
            }

            if (isFree)     return <HoverCard key={item.id} href={item.link} />
            if (topmateLink) return <HoverCard key={item.id} href={topmateLink} />
            return          <HoverCard key={item.id} to={`/resource/${item.id}`} />
          })}
        </div>

        {/* Footer CTA */}
        <div style={{ padding: '0 14px 14px' }}>
          <ViewMoreBtn />
        </div>
      </div>

      <style>{`
        @keyframes sidebarPulse {
          0%,100% { transform: scale(1); opacity: 0.3; }
          50%      { transform: scale(1.8); opacity: 0; }
        }
        /* Custom scrollbar for resource list */
        div::-webkit-scrollbar { width: 4px; }
        div::-webkit-scrollbar-track { background: transparent; }
        div::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
        div::-webkit-scrollbar-thumb:hover { background: #f97316aa; }
      `}</style>
    </div>
  )
}

// Separate component so hover state is isolated
const ViewMoreBtn = () => {
  const [hov, setHov] = useState(false)
  return (
    <Link
      to="/resources"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: '10px 16px',
        background: hov ? 'linear-gradient(135deg,#f97316,#ea580c)' : 'linear-gradient(135deg,#fff8f5,#fff)',
        border: `1px solid ${hov ? 'transparent' : '#fed7aa'}`,
        borderRadius: 12,
        fontSize: 12, fontWeight: 700,
        color: hov ? '#fff' : '#ea580c',
        textDecoration: 'none',
        transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
        boxShadow: hov ? '0 4px 14px rgba(249,115,22,0.3)' : 'none',
        transform: hov ? 'translateY(-1px)' : 'none',
      }}
    >
      View All Resources
      <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24"
        style={{ transition: 'transform 0.25s', transform: hov ? 'translateX(3px)' : 'none' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  )
}

export default CompanyDetailSidebar