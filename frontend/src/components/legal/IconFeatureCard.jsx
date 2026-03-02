import React from 'react'

/**
 * IconFeatureCard
 *
 * Colored card with an emoji/icon, title, description, and optional tags.
 * Used in About Us ("What We Do"), Advertise ("Ad Formats", "Why Advertise"),
 * T&C ("Disclaimers"), and Privacy Policy ("Your Rights").
 *
 * Props:
 *  - icon        {string|node}  Required. Emoji string or JSX icon.
 *  - title       {string}       Required.
 *  - desc        {string}       Required.
 *  - tags        {string[]}     Optional. Small pill labels below the description.
 *  - color       {string}       Optional. Tailwind bg + border classes for the card background.
 *                               Defaults to 'bg-white border-gray-200'.
 *  - headColor   {string}       Optional. Tailwind text color for the title.
 *                               Defaults to 'text-gray-900'.
 *  - tagColor    {string}       Optional. Tailwind classes for tag pills.
 *                               Defaults to 'bg-gray-100 text-gray-700'.
 *  - iconBg      {string}       Optional. If provided, wraps the icon in a colored circle
 *                               (useful when icon is an SVG node rather than emoji).
 *  - hover       {boolean}      Optional. Adds hover shadow + border transition. Defaults to true.
 *
 * Usage — emoji variant (About Us / Advertise):
 *   <IconFeatureCard
 *     icon="💼"
 *     title="Job Aggregation"
 *     desc="We scan 500+ companies daily..."
 *     color="bg-blue-50 border-blue-200"
 *     headColor="text-blue-900"
 *   />
 *
 * Usage — with tags (Ad Formats):
 *   <IconFeatureCard
 *     icon="📌"
 *     title="Sponsored Job Listings"
 *     desc="Pin your hiring opportunity..."
 *     tags={['Top placement', 'Targeted reach']}
 *     color="bg-green-50 border-green-200"
 *     headColor="text-green-900"
 *     tagColor="bg-green-100 text-green-700"
 *   />
 */
const IconFeatureCard = ({
  icon,
  title,
  desc,
  tags        = [],
  color       = 'bg-white border-gray-200',
  headColor   = 'text-gray-900',
  tagColor    = 'bg-gray-100 text-gray-700',
  iconBg,
  hover       = true,
}) => (
  <div
    className={`border-2 rounded-2xl p-6 transition-all ${color} ${
      hover ? 'hover:shadow-xl hover:border-opacity-80' : ''
    }`}
  >
    {/* Icon */}
    {iconBg ? (
      <div className={`w-14 h-14 ${iconBg} rounded-full flex items-center justify-center mb-4`}>
        {typeof icon === 'string'
          ? <span className="text-2xl">{icon}</span>
          : icon
        }
      </div>
    ) : (
      <span className="text-4xl block mb-3">{icon}</span>
    )}

    {/* Title */}
    <h3 className={`text-lg font-bold mb-2 ${headColor}`}>{title}</h3>

    {/* Description */}
    <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>

    {/* Tags */}
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, i) => (
          <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColor}`}>
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
)

export default IconFeatureCard
