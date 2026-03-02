import React from 'react'

/**
 * Highlight
 *
 * Colored callout/alert box used to draw attention to important information.
 * Used in Privacy Policy, Terms & Conditions, and Disclaimer.
 *
 * Props:
 *  - color    {'amber'|'green'|'blue'|'red'|'purple'}  Optional. Defaults to 'amber'.
 *  - children {node}  Required. Content inside the highlight box.
 *
 * Usage:
 *   <Highlight color="green">
 *     <p>✅ We will <strong>never sell your data</strong> to any third party.</p>
 *   </Highlight>
 *
 *   <Highlight color="red">
 *     <p>🚫 This action is strictly prohibited.</p>
 *   </Highlight>
 */
const colorMap = {
  amber:  'bg-amber-50  border-amber-300  text-amber-900',
  green:  'bg-green-50  border-green-300  text-green-900',
  blue:   'bg-blue-50   border-blue-300   text-blue-900',
  red:    'bg-red-50    border-red-300    text-red-900',
  purple: 'bg-purple-50 border-purple-300 text-purple-900',
}

const Highlight = ({ children, color = 'amber' }) => (
  <div className={`border-2 rounded-xl p-4 ${colorMap[color] ?? colorMap.amber}`}>
    {children}
  </div>
)

export default Highlight
