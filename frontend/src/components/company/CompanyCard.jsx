import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = ({ hovered }) => (
  <svg
    width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24"
    style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(3px)' : 'none', flexShrink: 0 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const LocationIcon = () => (
  <svg width={11} height={11} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CompanyCard = ({ company }) => {
  const [hovered, setHovered] = useState(false)

  const initials = company.company
    ? company.company.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
    : '??'

  return (
    <Link
      to={`/company-details/${encodeURIComponent(company.company)}/${encodeURIComponent(company.role)}`}
      className="block w-full no-underline"
      style={{ overflow: 'hidden', maxWidth: '100%', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative flex flex-col gap-3 p-4 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          minWidth: 0,
          width: '100%',
          boxSizing: 'border-box',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(249,115,22,0.5)',
          boxShadow
            : '0 1px 4px rgba(0,0,0,0.04)',
          transform: hovered ? 'Scale(1)' : 'none',
        }}
      >
        {/* Shimmer top line */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)',
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Header: avatar + company + role */}
        <div className="flex items-start gap-3" style={{ minWidth: 0, overflow: 'hidden' }}>
          {/* Avatar */}
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-xl text-xs font-bold tracking-tight transition-all duration-300"
            style={{
              width: 42, height: 42,
              background: hovered ? 'rgba(249,115,22,0.18)' : 'rgba(249,115,22,0.10)',
              color: '#f97316',
              transform: hovered ? 'scale(1.08) rotate(-4deg)' : 'none',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {initials}
          </div>

          {/* Company + Role */}
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
            <h3 className="text-sm font-bold text-gray-900 truncate m-0 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              {company.company}
            </h3>
            <p className="text-xs font-medium truncate m-0 mt-0.5" style={{ color: '#f97316' }}>
              {company.role}
            </p>
          </div>
        </div>

        {/* Tags row */}
        {(company.location || company.jobType || company.experience) && (
          <div className="flex flex-wrap gap-1.5 items-center" style={{ minWidth: 0 }}>
            {company.location && (
              <span className="inline-flex items-center gap-1 text-gray-800 font-normal" style={{ fontSize: 11, minWidth: 0, overflow: 'hidden' }}>
                <LocationIcon />
                <span className="truncate" style={{ maxWidth: 120 }}>{company.location}</span>
              </span>
            )}
            {company.jobType && (
              <span
                className="text- text-gray-800 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                style={{ fontSize: 10, color: '#f97316', background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.18)' }}
              >
                {company.jobType}
              </span>
            )}
            {company.experience && (
              <span
                className="text-xs text-gray-800 font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
                style={{ fontSize: 10, color: '#6b7280', background: 'rgba(107,114,128,0.08)', border: '1px solid rgba(107,114,128,0.15)' }}
              >
                {company.experience}
              </span>
            )}
          </div>
        )}

        {/* Footer: deadline + CTA */}
        <div className="flex items-center justify-between mt-auto pt-0.5" style={{ minWidth: 0 }}>
          {company.deadline
            ? <span className="text-gray-800 font-normal" style={{ fontSize: 10 }}>Due {company.deadline}</span>
            : <span />
          }
          <span
            className="inline-flex items-center font-semibold ml-auto transition-all duration-200"
            style={{
              gap: hovered ? 7 : 4,
              color: '#f97316',
              fontSize: 12,
              flexShrink: 0,
            }}
          >
            View Details <ArrowIcon hovered={hovered} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CompanyCard