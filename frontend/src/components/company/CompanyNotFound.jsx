import React, { useMemo } from 'react'
import companiesData from '../../data/jobData/jobData'

const CompanyNotFound = ({ searchTerm, setSearchTerm }) => {

  const { topCompanies, topRoles } = useMemo(() => {
    const sorted = [...companiesData].sort((a, b) => b.id - a.id)

    // 4 unique company names
    const seenCompanies = new Set()
    const topCompanies = []
    for (const c of sorted) {
      if (!seenCompanies.has(c.company)) {
        seenCompanies.add(c.company)
        topCompanies.push(c.company)
      }
      if (topCompanies.length === 4) break
    }

    // 3 unique role names (random from full list)
    const shuffled = [...companiesData].sort(() => Math.random() - 0.5)
    const seenRoles = new Set()
    const topRoles = []
    for (const c of shuffled) {
      if (!seenRoles.has(c.role)) {
        seenRoles.add(c.role)
        topRoles.push(c.role)
      }
      if (topRoles.length === 3) break
    }

    return { topCompanies, topRoles }
  }, [])

  const handleChip = (term) => {
    setSearchTerm(term)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">

      {/* Animated icon */}
      <div className="relative mx-auto mb-8 w-28 h-28">
        <div
          className="absolute inset-0 rounded-full bg-[#FA5500]/10 animate-ping"
          style={{ animationDuration: '2.5s' }}
        />
        <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-[#FA5500]/10">
          <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="20" width="48" height="36" rx="4" fill="#FA5500" fillOpacity="0.15" stroke="#FA5500" strokeWidth="2"/>
            <rect x="20" y="8" width="24" height="16" rx="3" fill="#FA5500" fillOpacity="0.25" stroke="#FA5500" strokeWidth="2"/>
            <line x1="32" y1="32" x2="32" y2="44" stroke="#FA5500" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="32" cy="28" r="2" fill="#FA5500"/>
          </svg>
        </div>
      </div>

      {/* Text */}
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
        No listings found
      </h3>
      <p className="text-gray-400 text-sm mb-2">
        No results for{' '}
        <span className="font-semibold text-gray-600">"{searchTerm}"</span>
      </p>
      <p className="text-gray-400 text-sm mb-8">
        Try a different company name, role, or location.
      </p>

      {/* Clear search CTA */}
      <button
        onClick={() => setSearchTerm('')}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FA5500] text-white font-semibold text-sm shadow-md hover:bg-[#e04d00] transition-colors mb-10"
      >
        ✕ Clear Search
      </button>

      {/* Suggestions */}
      <div className="w-full max-w-lg text-left border-t border-gray-100 pt-6 space-y-4">

        {/* Companies */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Companies
          </p>
          <div className="flex flex-wrap gap-2">
            {topCompanies.map((name, i) => (
              <button
                key={i}
                onClick={() => handleChip(name)}
                className="text-sm px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#FA5500] hover:text-[#FA5500] transition-colors"
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Roles
          </p>
          <div className="flex flex-wrap gap-2">
            {topRoles.map((role, i) => (
              <button
                key={i}
                onClick={() => handleChip(role)}
                className="text-sm px-3 py-1.5 rounded-full bg-white border border-orange-200 text-orange-500 hover:border-[#FA5500] hover:text-[#FA5500] transition-colors"
              >
                {role}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CompanyNotFound