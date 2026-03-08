import React, { useState, useEffect, useRef } from 'react'

const ROLES = [
  { title: "Frontend Software Engineer", company: "Tesla", tag: "Full-time", color: "#CC0000" },
  { title: "Web Application Engineer", company: "Google", tag: "Full-time", color: "#4285F4" },
  { title: "Technical Consultant", company: "Adobe", tag: "Full-time", color: "#FF0000" },
  { title: "Associate Software Dev Engineer", company: "Swiggy", tag: "Full-time", color: "#FC8019" },
  { title: "AI Engineer", company: "eBay", tag: "Full-time", color: "#E53238" },
  { title: "Software Engineer I", company: "Intuit", tag: "Full-time", color: "#0077C5" },
  { title: "Associate Software Engineer", company: "Red Hat", tag: "Full-time", color: "#EE0000" },
  { title: "Associate Software Engineer", company: "Coursera", tag: "Full-time", color: "#0056D2" },
  { title: "Front-End Developer", company: "Meesho", tag: "Full-time", color: "#9B26AF" },
  { title: "Data Engineer", company: "Siemens Healthcare", tag: "Full-time", color: "#009999" },
  { title: "2026 Campus Hire Engineer SW", company: "Qualcomm", tag: "Campus", color: "#3253DC" },
  { title: "SharePoint Intern", company: "EY", tag: "Intern", color: "#FFE600" },
  { title: "Analyst Trainee GenC", company: "Cognizant", tag: "Trainee", color: "#1261C4" },
  { title: "Technology Engineering Trainee", company: "Equifax", tag: "Trainee", color: "#C62032" },
  { title: "Fullstack SDE Intern", company: "Fynd", tag: "Intern", color: "#F05A28" },
  { title: "Software Engineer", company: "Procore", tag: "Full-time", color: "#F96302" },
  { title: "Full Stack Platform Engineer", company: "eBay", tag: "Full-time", color: "#E53238" },
  { title: "Graduate Apprentice Trainee", company: "Volvo", tag: "Trainee", color: "#003057" },
  { title: "Apprentice SDE", company: "S&P Global", tag: "Apprentice", color: "#0073A1" },
  { title: "Data Engineer", company: "Fractal", tag: "Full-time", color: "#6D2BD4" },
  { title: "Software Engineer", company: "HCL", tag: "Full-time", color: "#0082CB" },
  { title: "Associate QA Engineer", company: "Harmonic", tag: "Full-time", color: "#2ECC71" },
  { title: "SDE Intern", company: "SuperProcure", tag: "Intern", color: "#7C3AED" },
  { title: "Frontend Engineer", company: "AiRA", tag: "Full-time", color: "#F43F5E" },
]

const TRACK_ITEMS = [...ROLES, ...ROLES]

const TAG_COLORS = {
  "Full-time":  { bg: "#F0FDF4", text: "#16A34A", border: "#BBF7D0" },
  "Intern":     { bg: "#EFF6FF", text: "#2563EB", border: "#BFDBFE" },
  "Campus":     { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
  "Trainee":    { bg: "#FDF4FF", text: "#9333EA", border: "#E9D5FF" },
  "Apprentice": { bg: "#F0FDFA", text: "#0D9488", border: "#99F6E4" },
}

const RoleCard = ({ title, company, tag, color }) => {
  const tagStyle = TAG_COLORS[tag] || TAG_COLORS["Full-time"]
  return (
    <div className="role-card">
      <div className="role-dot" style={{ background: color }} />
      <div className="role-content">
        <span className="role-title">{title}</span>
        <span className="role-company">{company}</span>
      </div>
      <span className="role-tag" style={{ background: tagStyle.bg, color: tagStyle.text, borderColor: tagStyle.border }}>
        {tag}
      </span>
    </div>
  )
}

const RolesTrack = ({ items, speed, direction = 1 }) => {
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const totalWidth = track.scrollWidth / 2

    const animate = () => {
      posRef.current += speed * direction
      if (posRef.current >= totalWidth) posRef.current = 0
      if (posRef.current < 0) posRef.current = totalWidth - 1
      track.style.transform = `translateX(-${posRef.current}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [speed, direction])

  return (
    <div className="track-wrap">
      <div ref={trackRef} className="track">
        {items.map((role, i) => <RoleCard key={i} {...role} />)}
      </div>
    </div>
  )
}

const LiveRolesTicker = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const target = ROLES.length
    const step = () => {
      current += 1
      setCount(current)
      if (current < target) setTimeout(step, 40)
    }
    setTimeout(step, 400)
  }, [])

  const row1 = TRACK_ITEMS.filter((_, i) => i % 3 === 0)
  const row2 = TRACK_ITEMS.filter((_, i) => i % 3 === 1)
  const row3 = TRACK_ITEMS.filter((_, i) => i % 3 === 2)

  return (
    <>
      <style>{`
        .lr-section {
          padding: 72px 0 80px;
          background: linear-gradient(180deg, #FFF 0%, #FFF7E 100%);
          overflow: hidden;
        }

        .lr-header {
          text-align: center;
          padding: 0 24px;
          margin-bottom: 44px;
        }

        .lr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #E05A00;
          margin-bottom: 16px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #22C55E;
          border-radius: 50%;
          position: relative;
          display: inline-block;
        }

        .live-dot::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: #22C55E;
          opacity: 0.3;
          animation: pulse 1.5s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.6); opacity: 0; }
        }

        .lr-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 12px;
          line-height: 1.2;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          letter-spacing: -0.025em;
        }

        .lr-title em {
          font-style: normal;
          background: linear-gradient(to right, #F97316, #EA580C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .lr-meta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #6B7280;
          font-size: 15px;
        }

        .lr-count {
          font-size: 22px;
          font-weight: 700;
          color: #F97316;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .tracks-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }

        .tracks-container::before,
        .tracks-container::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 24px;
          z-index: 2;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .tracks-container::before,
          .tracks-container::after {
            width: 120px;
          }
        }

        .tracks-container::before {
          left: 0;
          background: linear-gradient(to right, #FFF7ED, transparent);
        }

        .tracks-container::after {
          right: 0;
          background: linear-gradient(to left, #fff, transparent);
        }

        .track-wrap {
          overflow: hidden;
        }

        .track {
          display: flex;
          gap: 12px;
          will-change: transform;
          width: max-content;
        }

        .role-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #F0F0EF;
          border-radius: 12px;
          padding: 12px 16px;
          white-space: nowrap;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
          cursor: pointer;
          flex-shrink: 0;
        }

        .role-card:hover {
          border-color: #FED7AA;
          box-shadow: 0 4px 16px rgba(249,115,22,0.12), 0 0 0 2px rgba(249,115,22,0.08);
          transform: translateY(-2px);
          z-index: 1;
          position: relative;
        }

        .role-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .role-content {
          display: flex;
          flex-direction: column;
        }

        .role-title {
          font-size: 13px;
          font-weight: 600;
          color: #111;
          line-height: 1.3;
        }

        .role-company {
          font-size: 11px;
          color: #9CA3AF;
          margin-top: 1px;
        }

        .role-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 3px 8px;
          border-radius: 100px;
          border: 1px solid;
          margin-left: 4px;
        }

        .lr-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 36px;
          padding: 0 24px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(249,115,22,0.35);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249,115,22,0.45);
        }
      `}</style>

      <section className="lr-section">
        <div className="lr-header">
          <div className="lr-eyebrow">
            <span className="live-dot" />
            Live Opportunities
          </div>
          <h2 className="lr-title">
            Fresh Roles, <em>Every Day</em>
          </h2>
          <div className="lr-meta">
            <span className="lr-count">{count}+</span>
            <span>active roles posted recently</span>
          </div>
        </div>

        <div className="tracks-container">
          <RolesTrack items={row1} speed={0.6} direction={1} />
          <RolesTrack items={row2} speed={0.45} direction={-1} />
          <RolesTrack items={row3} speed={0.55} direction={1} />
        </div>

        <div className="lr-controls">
          <a href="/company-details" className="cta-btn">
            Browse All Roles →
          </a>
        </div>
      </section>
    </>
  )
}

export default LiveRolesTicker