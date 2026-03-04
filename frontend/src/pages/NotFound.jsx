import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: '🏠 Home',              to: '/'                    },
  { label: '💼 Jobs',              to: '/company-details'     },
  { label: '📚 Resources',         to: '/resources'           },
  { label: '👤 About Us',          to: '/about-us'},
  { label: '📩 Subscribe',         to: '/subscribe-us'        },
  { label: '💬 Contact Us',        to: '/contact-us'          },
]

const NotFound = () => {
  const navigate  = useNavigate()
  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count === 0) { navigate('/'); return }
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count, navigate])

  /* ring progress: 10 → 0 mapped to 0 → 100 % of circumference */
  const r   = 20
  const circ = 2 * Math.PI * r
  const dash = circ - (count / 10) * circ

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex flex-col items-center justify-center px-4 py-16 text-center">

      {/* ── Big illustrated number ── */}
      <div className="relative select-none mb-6">
        <span
          className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter"
          style={{ color: 'transparent', WebkitTextStroke: '3px #FA5500', opacity: 0.12 }}
        >
          404
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl md:text-8xl">🗺️</span>
        </div>
      </div>

      {/* ── Heading ── */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-500 text-base md:text-lg max-w-md mb-2">
        Looks like this page took a wrong turn on the job hunt. It doesn't exist — or may have moved.
      </p>

      {/* ── Countdown ring ── */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <svg width="48" height="48" className="rotate-180">
          <circle cx="24" cy="24" r={r} fill="none" stroke="#fed7aa" strokeWidth="3" />
          <circle
            cx="24" cy="24" r={r}
            fill="none"
            stroke="#FA5500"
            strokeWidth="3"
            strokeDasharray={circ}
            strokeDashoffset={dash}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.9s linear' }}
          />
          <text
            x="24" y="24"
            textAnchor="middle"
            dominantBaseline="central"
            className="rotate-90"
            style={{ fontSize: 13, fill: '#FA5500', fontWeight: 700, transform: 'rotate(90deg)', transformOrigin: '24px 24px' }}
          >
            {count}
          </text>
        </svg>
        <span>Redirecting to home in <strong className="text-[#FA5500]">{count}s</strong></span>
      </div>

      {/* ── Primary CTA ── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-7 py-3.5 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-md"
        >
          🏠 Go Home Now
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-400 text-amber-700 font-bold px-7 py-3.5 rounded-xl hover:bg-amber-50 transition-all"
        >
          ← Go Back
        </button>
      </div>

      {/* ── Quick nav ── */}
      <div className="w-full max-w-lg bg-white rounded-2xl border border-orange-100 shadow-sm p-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Or jump to a page
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-gray-700 hover:text-[#FA5500] hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors text-left"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Footer note ── */}
      <p className="mt-8 text-xs text-gray-400">
        Think this is a mistake?{' '}
        <Link to="/contact-us" className="text-[#FA5500] hover:underline font-medium">
          Let us know →
        </Link>
      </p>

    </div>
  )
}

export default NotFound