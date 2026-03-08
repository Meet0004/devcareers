import React, { useEffect, useState } from 'react'

function ResourceNotFound({ searchQuery, selectedFilters, onClearSearch, onClearFilters }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  const suggestions = [
   'DSA', 'React', 'JavaScript', 'CSS', 'Node.js','cheatsheet', 'interview', 'redis'
  ]

  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {/* Floating orbs background */}
      <div className="relative mb-10">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            width: '140px',
            height: '140px',
            background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />

        {/* Orbiting dot */}
        <div
          style={{
            position: 'absolute',
            width: '140px',
            height: '140px',
            animation: 'spin 4s linear infinite',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#F59E0B',
              position: 'absolute',
              top: '4px',
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 8px rgba(245,158,11,0.8)',
            }}
          />
        </div>

        {/* Center icon circle */}
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(251,191,36,0.06) 100%)',
            border: '1.5px solid rgba(245,158,11,0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
            <circle cx="27" cy="27" r="14" stroke="#F59E0B" strokeWidth="2.5" fill="rgba(245,158,11,0.1)"/>
            <line x1="37" y1="37" x2="52" y2="52" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
            <text x="22" y="33" fontSize="14" fontWeight="bold" fill="#F59E0B" fontFamily="serif">?</text>
          </svg>
        </div>
      </div>

      {/* Text content */}
      <div className="text-center mb-8" style={{ maxWidth: '380px' }}>
        <h3
          className="font-black text-gray-900 mb-3"
          style={{ fontSize: '1.6rem', letterSpacing: '-0.03em', lineHeight: 1.2 }}
        >
          Nothing here… yet
        </h3>

        {searchQuery ? (
          <p className="text-gray-500 text-sm leading-relaxed mb-1">
            We searched everywhere for{' '}
            <span
              className="font-semibold px-2 py-0.5 rounded-md"
              style={{ background: 'rgba(245,158,11,0.12)', color: '#92400e' }}
            >
              "{searchQuery}"
            </span>{' '}
            but came up empty.
          </p>
        ) : null}

        {selectedFilters?.length > 0 ? (
          <p className="text-gray-500 text-sm leading-relaxed mb-1">
            No resources match{' '}
            <span className="font-semibold text-gray-700">
              {selectedFilters.length} active filter{selectedFilters.length > 1 ? 's' : ''}
            </span>.
          </p>
        ) : null}

        <p className="text-gray-400 text-sm mt-2">
          Try broadening your search or explore a suggestion below.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        {searchQuery && onClearSearch && (
          <button
            onClick={() => onClearSearch('')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
              boxShadow: '0 4px 14px rgba(245,158,11,0.35)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Clear Search
          </button>
        )}
        {selectedFilters?.length > 0 && onClearFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-600 transition-all duration-200"
            style={{
              background: 'white',
              border: '1.5px solid #e5e7eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#F59E0B'
              e.currentTarget.style.color = '#92400e'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e5e7eb'
              e.currentTarget.style.color = '#4b5563'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M6 6V4h12v2M19 6l-1 14H6L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Remove Filters
          </button>
        )}
      </div>

      {/* Suggestion chips — clicking fills the search bar + scrolls up */}
      <div className="text-center" style={{ maxWidth: '420px' }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Try searching for
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => onClearSearch && onClearSearch(s)}
              className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200"
              style={{
                background: 'white',
                border: '1.5px solid #e5e7eb',
                color: '#6b7280',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(245,158,11,0.08)'
                e.currentTarget.style.borderColor = '#F59E0B'
                e.currentTarget.style.color = '#92400e'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.color = '#6b7280'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default ResourceNotFound