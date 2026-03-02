import React from 'react'

/**
 * BulletList
 *
 * Styled list with check ✓ / cross ✗ / arrow → / dot • variants.
 * Used in T&C (permitted/prohibited use, refund policy), Advertise
 * (brand safety), and Disclaimer (user responsibilities).
 *
 * Props:
 *  - items    {string[]|{text, strong?}[]}  Required. Plain strings or objects with { text, strong }.
 *  - variant  {'check'|'cross'|'arrow'|'dot'}  Optional. Defaults to 'check'.
 *  - bg       {string}  Optional. Tailwind bg + border for each row. Overrides default per-variant bg.
 *
 * Variant defaults:
 *  - check  → green icon, green-50 row bg
 *  - cross  → red icon,   red-50   row bg
 *  - arrow  → amber icon, gray-50  row bg
 *  - dot    → gray icon,  transparent row bg (inline bullet style)
 *
 * Usage:
 *   <BulletList
 *     variant="check"
 *     items={[
 *       'Browse and apply to job listings for your own personal job search.',
 *       'Subscribe to our newsletter.',
 *     ]}
 *   />
 *
 *   <BulletList
 *     variant="cross"
 *     items={['MLM / Pyramid Schemes', 'Fake Job Scams']}
 *   />
 */
const variantConfig = {
  check: {
    icon:    '✓',
    iconCls: 'text-green-500 font-bold',
    rowCls:  'bg-green-50 border border-green-200 rounded-xl px-4 py-3',
  },
  cross: {
    icon:    '✗',
    iconCls: 'text-red-500 font-bold',
    rowCls:  'bg-red-50 border border-red-200 rounded-xl px-4 py-3',
  },
  arrow: {
    icon:    '→',
    iconCls: 'text-amber-500 font-bold',
    rowCls:  'bg-gray-50 border border-gray-200 rounded-xl px-4 py-3',
  },
  dot: {
    icon:    '•',
    iconCls: 'text-gray-400 font-bold',
    rowCls:  '',
  },
}

const BulletList = ({ items = [], variant = 'check', bg }) => {
  const cfg = variantConfig[variant] ?? variantConfig.check
  const rowCls = bg ?? cfg.rowCls

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const text = typeof item === 'string' ? item : item.text
        return (
          <div key={idx} className={`flex items-start gap-3 ${rowCls}`}>
            <span className={`flex-shrink-0 mt-0.5 ${cfg.iconCls}`}>{cfg.icon}</span>
            <span className="text-gray-700 text-sm">{text}</span>
          </div>
        )
      })}
    </div>
  )
}

export default BulletList
