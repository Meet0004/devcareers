import React from 'react'

/**
 * PageHero
 *
 * The amber-to-orange gradient hero banner used across all legal/info pages.
 *
 * Props:
 *  - title        {string}   Required. Main heading text.
 *  - subtitle     {string}   Optional. Subheading below the title.
 *  - badges       {Array}    Optional. Array of { label: string } objects shown as pills.
 *  - eyebrow      {string}   Optional. Small pill text shown above the title (e.g. "🔒 Your Privacy Matters").
 *  - children     {node}     Optional. Any extra content rendered below badges (e.g. CTA buttons).
 *
 * Usage:
 *   <PageHero
 *     eyebrow="📜 Please Read Carefully"
 *     title="Terms & Conditions"
 *     subtitle="These terms govern your use of DevCareers."
 *     badges={[
 *       { label: '📅 Last Updated: March 2026' },
 *       { label: '🏠 Operated by Meet Soni' },
 *       { label: '📍 Shimoga, Karnataka, India' },
 *     ]}
 *   />
 */
const PageHero = ({ title, subtitle, badges = [], eyebrow, children }) => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {eyebrow && (
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {eyebrow}
          </div>
        )}

        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>

        {subtitle && (
          <p className="text-xl font-light max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>
        )}

        {badges.length > 0 && (
          <div className="mt-6 flex justify-center gap-4 flex-wrap text-sm">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold"
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}

        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}

      </div>
    </div>
  )
}

export default PageHero
