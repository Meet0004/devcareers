import React from 'react'

/**
 * StatGrid
 *
 * Metric badges / stats grid. Used in the About Us hero (pill style)
 * and the Advertise hero (card style with larger numbers).
 *
 * Props:
 *  - stats    {Array}   Required. Array of { icon, number, label } objects.
 *  - variant  {'pill'|'card'}  Optional.
 *               'pill' → compact inline pills (About Us hero)
 *               'card' → larger centered cards with big numbers (Advertise hero)
 *             Defaults to 'pill'.
 *  - className {string}  Optional. Wrapper class override.
 *
 * Usage — pill (About Us):
 *   <StatGrid
 *     variant="pill"
 *     stats={[
 *       { label: '🎯 10,000+ Active Users' },
 *       { label: '💼 300+ Companies Tracked' },
 *     ]}
 *   />
 *
 * Usage — card (Advertise):
 *   <StatGrid
 *     variant="card"
 *     stats={[
 *       { icon: '👥', number: '10,000+', label: 'Active Users' },
 *       { icon: '👁️', number: '60,000+', label: 'Website Views' },
 *     ]}
 *   />
 */
const StatGrid = ({ stats = [], variant = 'pill', className }) => {
  if (variant === 'pill') {
    return (
      <div className={`flex justify-center gap-4 flex-wrap ${className ?? ''}`}>
        {stats.map((s, i) => (
          <span key={i} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
            {s.label}
          </span>
        ))}
      </div>
    )
  }

  // card variant
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className ?? ''}`}>
      {stats.map((s, i) => (
        <div key={i} className="text-center text-white">
          <div className="text-5xl md:text-6xl font-bold mb-2">{s.icon} {s.number}</div>
          <div className="text-white/80 text-xs uppercase tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatGrid
