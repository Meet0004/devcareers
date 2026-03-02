import React from 'react'

/**
 * SectionHeading
 *
 * Centered section title + optional subtitle. Appears ~15 times across
 * About Us and Advertise pages before grid/list sections.
 *
 * Props:
 *  - title     {string}  Required.
 *  - subtitle  {string}  Optional. Smaller gray text below the title.
 *  - className {string}  Optional. Extra classes on the wrapper (e.g. custom bottom margin).
 *
 * Usage:
 *   <SectionHeading
 *     title="What We Do"
 *     subtitle="Everything you need to land your first role, in one place."
 *   />
 */
const SectionHeading = ({ title, subtitle, className = 'mb-10' }) => (
  <div className={`text-center ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
    {subtitle && (
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
)

export default SectionHeading
