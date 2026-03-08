import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',      emoji: '⌂',  to: '/'                },
  { label: 'Jobs',      emoji: '◈',  to: '/company-details' },
  { label: 'Resources', emoji: '◉',  to: '/resources'       },
  { label: 'About',     emoji: '◎',  to: '/about-us'        },
  { label: 'Subscribe', emoji: '◆',  to: '/subscribe-us'    },
  { label: 'Contact',   emoji: '◇',  to: '/contact-us'      },
]

const MESSAGES = [
  'Route not found in the system.',
  'This URL has gone off the grid.',
  'Even Google can\'t find this one.',
  'You\'ve entered uncharted territory.',
]

export default function NotFound() {
  const navigate = useNavigate()
  const [count, setCount]       = useState(10)
  const [msgIndex]              = useState(() => Math.floor(Math.random() * MESSAGES.length))
  const [typed, setTyped]       = useState('')
  const [glitch, setGlitch]     = useState(false)
  const [mounted, setMounted]   = useState(false)
  const [leaving, setLeaving]   = useState(false)
  const canvasRef               = useRef(null)

  // Mount entrance
  useEffect(() => { setTimeout(() => setMounted(true), 40) }, [])

  // Countdown
  useEffect(() => {
    if (count === 0) { setLeaving(true); setTimeout(() => navigate('/'), 600); return }
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count, navigate])

  // Typewriter
  useEffect(() => {
    const msg = MESSAGES[msgIndex]
    if (typed.length >= msg.length) return
    const t = setTimeout(() => setTyped(msg.slice(0, typed.length + 1)), 55)
    return () => clearTimeout(t)
  }, [typed, msgIndex])

  // Glitch trigger every ~3s
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 350)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }))

    let rafId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249,115,22,${p.alpha})`
        ctx.fill()
      })
      rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(rafId)
  }, [])

  const r    = 18
  const circ = 2 * Math.PI * r
  const dash = circ - (count / 10) * circ

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Outfit:wght@300;600;800&display=swap');

        :root {
          --bg:      #0d0d0f;
          --surface: #141418;
          --border:  #2a2a30;
          --orange:  #f97316;
          --orange2: #fb923c;
          --muted:   #6b7280;
          --text:    #e5e7eb;
          --dim:     #9ca3af;
        }

        .nf-root {
          min-height: 100vh;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 20px;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* scanlines overlay */
        .nf-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
          z-index: 0;
        }

        .nf-canvas {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        /* vignette */
        .nf-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%);
          pointer-events: none;
          z-index: 1;
        }

        .nf-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 600px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .nf-content.in {
          opacity: 1;
          transform: translateY(0);
        }
        .nf-content.out {
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        /* ── Big 404 ── */
        .nf-404-wrap {
          position: relative;
          line-height: 1;
          margin-bottom: 8px;
          user-select: none;
        }

        .nf-404 {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(96px, 22vw, 200px);
          letter-spacing: -0.04em;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(249,115,22,0.25);
          position: relative;
          display: block;
        }

        .nf-404-fill {
          position: absolute;
          inset: 0;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(96px, 22vw, 200px);
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #f97316 0%, #fb923c 40%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.15;
        }

        /* glitch layers */
        .nf-404-glitch::before,
        .nf-404-glitch::after {
          content: '404';
          position: absolute;
          inset: 0;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(96px, 22vw, 200px);
          letter-spacing: -0.04em;
        }
        .nf-404-glitch::before {
          color: rgba(249,115,22,0.55);
          clip-path: polygon(0 20%, 100% 20%, 100% 38%, 0 38%);
          transform: translateX(-6px);
          animation: glitchA 0.3s steps(2) both;
        }
        .nf-404-glitch::after {
          color: rgba(251,191,36,0.45);
          clip-path: polygon(0 58%, 100% 58%, 100% 74%, 0 74%);
          transform: translateX(5px);
          animation: glitchB 0.3s steps(2) both;
        }

        @keyframes glitchA {
          0%   { transform: translateX(-6px) scaleY(1); }
          50%  { transform: translateX(8px) scaleY(1.04); }
          100% { transform: translateX(0); }
        }
        @keyframes glitchB {
          0%   { transform: translateX(5px); }
          50%  { transform: translateX(-7px); }
          100% { transform: translateX(0); }
        }

        /* ── Error badge ── */
        .nf-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.28);
          color: var(--orange2);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .nf-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 6px var(--orange);
          animation: pulse-dot 1.4s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }

        /* ── Heading ── */
        .nf-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 5vw, 38px);
          color: var(--text);
          letter-spacing: -0.025em;
          margin-bottom: 10px;
          line-height: 1.15;
        }

        /* ── Terminal line ── */
        .nf-terminal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 28px;
          min-height: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nf-terminal-prefix { color: var(--orange); }
        .nf-cursor {
          display: inline-block;
          width: 8px; height: 14px;
          background: var(--orange);
          opacity: 0.85;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
          border-radius: 1px;
        }
        @keyframes blink {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 0; }
        }

        /* ── Countdown ── */
        .nf-countdown {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          font-size: 13px;
          color: var(--dim);
          font-family: 'JetBrains Mono', monospace;
        }

        /* ── CTA buttons ── */
        .nf-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 36px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: var(--orange);
          color: #000;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 26px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: transform 0.18s, background 0.18s, box-shadow 0.18s;
          box-shadow: 0 0 18px rgba(249,115,22,0.3);
        }
        .btn-primary:hover {
          background: var(--orange2);
          transform: translateY(-2px);
          box-shadow: 0 0 28px rgba(249,115,22,0.5);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: transparent;
          color: var(--dim);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 10px;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: border-color 0.18s, color 0.18s, transform 0.18s;
        }
        .btn-ghost:hover {
          border-color: rgba(249,115,22,0.45);
          color: var(--orange2);
          transform: translateY(-2px);
        }

        /* ── Nav grid ── */
        .nf-nav-card {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px;
          margin-bottom: 24px;
        }
        .nf-nav-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 14px;
        }
        .nf-nav-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .nf-nav-link {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 9px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          color: var(--dim);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 13px;
          text-decoration: none;
          transition: border-color 0.16s, color 0.16s, background 0.16s, transform 0.16s;
        }
        .nf-nav-link:hover {
          border-color: rgba(249,115,22,0.4);
          color: var(--orange2);
          background: rgba(249,115,22,0.06);
          transform: translateY(-1px);
        }
        .nf-nav-link-emoji {
          font-size: 12px;
          opacity: 0.6;
        }

        /* ── Footer ── */
        .nf-foot {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .nf-foot a {
          color: var(--orange);
          text-decoration: none;
          font-weight: 700;
        }
        .nf-foot a:hover { text-decoration: underline; }

        /* Stagger delays */
        .nf-s0 { animation: slideUp 0.55s ease both 0.05s; }
        .nf-s1 { animation: slideUp 0.55s ease both 0.15s; }
        .nf-s2 { animation: slideUp 0.55s ease both 0.28s; }
        .nf-s3 { animation: slideUp 0.55s ease both 0.40s; }
        .nf-s4 { animation: slideUp 0.55s ease both 0.52s; }
        .nf-s5 { animation: slideUp 0.55s ease both 0.64s; }
        .nf-s6 { animation: slideUp 0.55s ease both 0.74s; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .nf-nav-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="nf-root">
        <canvas ref={canvasRef} className="nf-canvas" />
        <div className="nf-vignette" />

        <div className={`nf-content ${mounted ? 'in' : ''} ${leaving ? 'out' : ''}`}>

          {/* Badge */}
          <div className="nf-badge nf-s0">
            <span className="nf-badge-dot" />
            Error 404 — Not Found
          </div>

          {/* 404 number */}
          <div className={`nf-404-wrap nf-s1 ${glitch ? 'nf-404-glitch' : ''}`}>
            <span className="nf-404">404</span>
            <span className="nf-404-fill" aria-hidden="true">404</span>
          </div>

          {/* Heading */}
          <h1 className="nf-heading nf-s2">
            Lost in the void.
          </h1>

          {/* Terminal typewriter */}
          <div className="nf-terminal nf-s3">
            <span className="nf-terminal-prefix">→</span>
            <span>{typed}</span>
            <span className="nf-cursor" />
          </div>

          {/* Countdown */}
          <div className="nf-countdown nf-s3">
            <svg width="44" height="44" style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
              <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="3" />
              <circle
                cx="22" cy="22" r={r}
                fill="none"
                stroke="#f97316"
                strokeWidth="3"
                strokeDasharray={circ}
                strokeDashoffset={dash}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.9s cubic-bezier(0.4,0,0.2,1)', filter: 'drop-shadow(0 0 4px rgba(249,115,22,0.6))' }}
              />
              <text
                x="22" y="22"
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                  fontSize: 11,
                  fill: '#f97316',
                  fontWeight: 800,
                  fontFamily: 'JetBrains Mono, monospace',
                  transform: 'rotate(90deg)',
                  transformOrigin: '22px 22px',
                }}
              >
                {count}
              </text>
            </svg>
            <span>auto-redirect in <strong style={{ color: '#f97316' }}>{count}s</strong></span>
          </div>

          {/* CTA Buttons */}
          <div className="nf-btns nf-s4">
            <Link to="/" className="btn-primary">
              ↩ Take me home
            </Link>
            <button className="btn-ghost" onClick={() => navigate(-1)}>
              ← Go back
            </button>
          </div>

          {/* Nav grid */}
          <div className="nf-nav-card nf-s5">
            <p className="nf-nav-label">// navigate to</p>
            <div className="nf-nav-grid">
              {NAV_LINKS.map(({ label, emoji, to }) => (
                <Link key={to} to={to} className="nf-nav-link">
                  <span className="nf-nav-link-emoji">{emoji}</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="nf-foot nf-s6">
            think this is wrong? <Link to="/contact-us">tell us →</Link>
          </p>

        </div>
      </div>
    </>
  )
}