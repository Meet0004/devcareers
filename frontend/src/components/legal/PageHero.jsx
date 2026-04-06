import React, { useEffect, useState } from 'react'

const PageHero = ({ title, subtitle, badges = [], eyebrow, children }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t) }, [])

  return (
    <>
      <style>{`
        @keyframes orbFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-24px) scale(1.05)} }
        @keyframes shimmerText { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes pulseRing { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(2.4);opacity:0} }
        .orb-1 { animation: orbFloat 8s ease-in-out infinite; }
        .orb-2 { animation: orbFloat 11s ease-in-out infinite reverse; }
        .shimmer-text {
          background: linear-gradient(135deg,#f97316 0%,#ea580c 45%,#ff8c42 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 3s linear infinite;
        }
        .pulse-ring { animation: pulseRing 1.8s ease infinite; }
      `}</style>

      <div className="relative bg-transparent overflow-hidden font-sans">

        {/* Top accent line REMOVED — was causing the weird border artifact */}

        <div className="relative z-10 px-12 pt-8 pb-2 max-w-[1100px] mx-auto text-center">

          {/* Eyebrow */}
          {eyebrow && (
            <div
              className={`
                inline-flex items-center gap-[7px]
                bg-orange-500/[0.08] border border-orange-500/[0.22]
                text-orange-500 text-[11px] font-bold
                px-4 py-1.5 rounded-full
                tracking-[0.08em] uppercase mb-5
                transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[50ms]
              `}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(14px)',
              }}
            >
              <span className="relative inline-block w-[7px] h-[7px] bg-green-500 rounded-full shrink-0">
                <span className="pulse-ring absolute inset-[-3px] rounded-full bg-green-500" />
              </span>
              {eyebrow}
            </div>
          )}

          {/* Title */}
          <h1
            className="text-[clamp(40px,6vw,64px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#0a0a0a] mt-0 mb-[18px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[120ms]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="shimmer-text">
              {title.split(' ').slice(-1)[0]}
            </span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className="text-[17px] font-normal text-gray-500 leading-[1.65] max-w-auto mx-auto mb-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[220ms]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Badges */}
          {badges.length > 0 && (
            <div
              className="flex justify-center gap-2.5 flex-wrap text-black transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[300ms]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-orange-500 text-black text-xs font-semibold py-[7px] px-[18px] rounded-full inline-block"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Children */}
          {children && (
            <div
              className="mt-7 transition-opacity duration-700 ease-linear delay-[400ms]"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {children}
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default PageHero