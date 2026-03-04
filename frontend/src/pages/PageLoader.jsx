import React from 'react'

/**
 * PageLoader
 *
 * Full-page loading spinner used as the Suspense fallback in App.jsx.
 * Matches DevCareers amber/orange brand.
 *
 * Usage in App.jsx:
 *   import PageLoader from './components/common/PageLoader'
 *   <Suspense fallback={<PageLoader />}>
 */
const PageLoader = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-orange-50">

      {/* Animated rings */}
      <div className="relative w-16 h-16 mb-6">
        {/* Outer ring */}
        <span
          className="absolute inset-0 rounded-full border-4 border-orange-100"
        />
        {/* Spinning arc */}
        <span
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FA5500] animate-spin"
          style={{ animationDuration: '0.8s' }}
        />
        {/* Inner pulse dot */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-3 h-3 bg-[#FA5500] rounded-full animate-pulse" />
        </span>
      </div>

      {/* Brand name */}
      <p className="text-base font-bold text-gray-800 tracking-wide">
        Dev<span className="text-[#FA5500]">Careers</span>
      </p>
      <p className="text-xs text-gray-400 mt-1">Loading, please wait…</p>

    </div>
  )
}

export default PageLoader