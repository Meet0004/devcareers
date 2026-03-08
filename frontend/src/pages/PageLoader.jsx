import React, { useEffect, useRef } from 'react'

const PageLoader = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700;800&family=Outfit:wght@700;800&display=swap');

        .pl-root {
          min-height: 100vh;
          background: linear-gradient(to bottom, #ffffff, #fff7ed);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* scanlines */
        .pl-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(249,115,22,0.03) 2px,
            rgba(249,115,22,0.03) 4px
          );
          pointer-events: none;
          z-index: 0;
        }

        .pl-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(249,115,22,0.06) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .pl-canvas {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .pl-body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          animation: plFadeUp 0.5s ease both;
        }

        @keyframes plFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Spinner ── */
        .pl-spinner-wrap {
          position: relative;
          width: 72px;
          height: 72px;
          margin-bottom: 28px;
        }

        .pl-ring-track {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2.5px solid rgba(249,115,22,0.12);
        }

        .pl-ring-spin {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2.5px solid transparent;
          border-top-color: #f97316;
          animation: spinRing 0.9s cubic-bezier(0.5,0,0.5,1) infinite;
          filter: drop-shadow(0 0 5px rgba(249,115,22,0.6));
        }

        .pl-ring-spin2 {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-bottom-color: rgba(249,115,22,0.35);
          animation: spinRing 1.4s cubic-bezier(0.5,0,0.5,1) infinite reverse;
        }

        @keyframes spinRing {
          to { transform: rotate(360deg); }
        }

        .pl-center-dot {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pl-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #f97316;
          box-shadow: 0 0 10px rgba(249,115,22,0.8);
          animation: dotPulse 1.2s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(0.5); opacity: 0.4; }
        }

        /* ── Brand ── */
        .pl-brand {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: -0.02em;
          color: #111827;
          margin-bottom: 10px;
        }

        .pl-brand span {
          color: #f97316;
          text-shadow: 0 0 12px rgba(249,115,22,0.45);
        }

        /* ── Terminal dots ── */
        .pl-dots {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .pl-dots span {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(249,115,22,0.5);
          animation: dotBounce 1.1s ease-in-out infinite;
        }
        .pl-dots span:nth-child(2) { animation-delay: 0.18s; }
        .pl-dots span:nth-child(3) { animation-delay: 0.36s; }

        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.35; }
          40%            { transform: scale(1);   opacity: 1; }
        }

        /* ── Sub label ── */
        .pl-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 0.08em;
          margin-top: 10px;
        }
      `}</style>

      <div className="pl-root">
        <canvas ref={canvasRef} className="pl-canvas" />
        <div className="pl-vignette" />

        <div className="pl-body">
          {/* Spinner */}
          <div className="pl-spinner-wrap">
            <div className="pl-ring-track" />
            <div className="pl-ring-spin" />
            <div className="pl-ring-spin2" />
            <div className="pl-center-dot">
              <div className="pl-dot" />
            </div>
          </div>

          {/* Brand */}
          <p className="pl-brand">Dev<span>Careers</span></p>

          {/* Bouncing dots */}
          <div className="pl-dots">
            <span /><span /><span />
          </div>

          {/* Sub */}
          <p className="pl-sub">// loading</p>
        </div>
      </div>
    </>
  )
}

export default PageLoader