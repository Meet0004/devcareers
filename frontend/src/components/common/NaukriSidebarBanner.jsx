import React, { useState, useEffect } from 'react'

const NaukriSidebarBanner = ({
  referralLink = "https://www.naukri.com/campus/contests/career-fair-2026?action=enrol&referral=e2000084-rEKBRXA-pses&uapp=801&utm_source=share_desktop&utm_medium=referral"
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const target = new Date('2026-03-16T00:00:00')
    const interval = setInterval(() => {
      const now = new Date()
      const diff = target - now
      if (diff <= 0) { clearInterval(interval); return }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
      backgroundImage: `url("https://static.naukimg.com/s/8/801/i/src/app/contestFlow/careerVerse/mainContent/topSec/assets/bg.4057f74a.png"), linear-gradient(135deg, #22c55e 0%, #15803d 100%)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '14px',
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      overflow: 'hidden',
      position: 'relative',
      marginBottom: '16px',
      boxShadow: '0 4px 16px rgba(34,197,94,0.35)',
      border: '1.5px solid rgba(255,255,255,0.2)',
    }}>
      {/* Logo */}
      <img
        src="https://static.naukimg.com/s/8/801/i/src/app/contestFlow/careerVerse/mainContent/assets/banner-date.e414f12e.png"
        alt="CareerVerse"
        style={{ width: '52px', height: '52px', objectFit: 'contain', flexShrink: 0 }}
      />

      {/* Middle text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          color: '#fff',
          fontWeight: 800,
          fontSize: '12px',
          margin: '0 0 2px',
          lineHeight: 1.3,
          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}>
          25,000+ Jobs · 11–15 Mar
        </p>

        {/* Mini countdown */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {[
            { v: timeLeft.days, l: 'D' },
            { v: timeLeft.hours, l: 'H' },
            { v: timeLeft.mins, l: 'M' },
            { v: timeLeft.secs, l: 'S' },
          ].map(({ v, l }, i, arr) => (
            <React.Fragment key={l}>
              <span style={{ color: '#fbbf24', fontWeight: 900, fontSize: '11px' }}>
                {String(v).padStart(2, '0')}<span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '9px' }}>{l}</span>
              </span>
              {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px' }}>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Enrol button */}
      <a
        href={referralLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#111',
          color: '#fff',
          fontWeight: 800,
          fontSize: '11px',
          padding: '7px 12px',
          borderRadius: '999px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          letterSpacing: '-0.01em',
        }}
      >
        Enrol →
      </a>
    </div>
  )
}

export default NaukriSidebarBanner