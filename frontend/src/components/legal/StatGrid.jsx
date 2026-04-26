import React from 'react'

const StatGrid = ({ stats = [], variant = 'pill', className }) => {
  if (variant === 'pill') {
  return (
    <div className={`flex justify-center gap-3 flex-wrap ${className ?? ''}`}>
      {stats.map((s, i) => (
        <span
          key={i}
          className="
            px-5 py-2.5 rounded-full text-sm font-semibold
            text-black
            backdrop-blur-md
            bg-white/20
            border border-white/30
            shadow-[0_4px_20px_rgba(0,0,0,0.08)]
            hover:bg-white/30
            transition-all duration-300
          "
        >
          {s.label}
        </span>
      ))}
    </div>
  )
}

  // card variant — unchanged
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className ?? ''}`}>
      {stats.map((s, i) => (
        <div key={i} className="text-center text-black">
          <div className="text-5xl md:text-6xl font-bold mb-2">{s.icon} {s.number}</div>
          <div className="text-white/80 text-xs uppercase tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatGrid