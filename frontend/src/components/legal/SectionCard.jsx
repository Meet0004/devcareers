import React from 'react'

/**
 * SectionCard
 *
 * White card with a colored left border, emoji icon, and section title.
 * Used as the main content container in Privacy Policy and Terms & Conditions.
 *
 * Props:
 *  - id          {string}  Required. HTML id for scroll-to anchor navigation.
 *  - emoji       {string}  Required. Emoji displayed next to the title.
 *  - title       {string}  Required. Section heading text.
 *  - borderColor {string}  Required. Tailwind border-l color class e.g. 'border-amber-400'.
 *  - children    {node}    Required. Section body content.
 *
 * Usage:
 *   <SectionCard id="overview" emoji="🛡️" title="Overview" borderColor="border-amber-400">
 *     <p>Content goes here...</p>
 *   </SectionCard>
 */
const SectionCard = ({ id, emoji, title, children, borderColor }) => (
  <div id={id} className={`bg-white rounded-2xl shadow-lg border-l-4 ${borderColor} p-8 scroll-mt-24`}>
    <div className="flex items-center gap-3 mb-5">
      <span className="text-3xl">{emoji}</span>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
)

export default SectionCard
