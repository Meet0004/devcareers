import React from 'react'

// ─────────────────────────────────────────────────────────────
// SECTION CONFIG — defines all possible section types.
// Each section has a label, accent color, and light bg color.
// Add new section types here if needed.
// ─────────────────────────────────────────────────────────────
const SECTION_STYLES = {
  overview:        { label: 'Role Overview',          color: '#f97316', colorLight: '#fff7ed', colorBorder: '#fed7aa' },
  responsibilities:{ label: 'Responsibilities',       color: '#3b82f6', colorLight: '#eff6ff', colorBorder: '#bfdbfe' },
  skills:          { label: 'Skills & Requirements',  color: '#8b5cf6', colorLight: '#faf5ff', colorBorder: '#ddd6fe' },
  nice_to_have:    { label: 'Nice to Have',           color: '#10b981', colorLight: '#f0fdf4', colorBorder: '#bbf7d0' },
  benefits:        { label: 'What You Get',           color: '#f59e0b', colorLight: '#fffbeb', colorBorder: '#fde68a' },
  salary:          { label: 'Salary & Compensation',  color: '#059669', colorLight: '#ecfdf5', colorBorder: '#a7f3d0' },
  work_details:    { label: 'Work Details',           color: '#6366f1', colorLight: '#eef2ff', colorBorder: '#c7d2fe' },
  education:       { label: 'Education',              color: '#0891b2', colorLight: '#ecfeff', colorBorder: '#a5f3fc' },
  about_company:   { label: 'About the Company',      color: '#64748b', colorLight: '#f8fafc', colorBorder: '#cbd5e1' },
  contact:         { label: 'Contact & Application',  color: '#db2777', colorLight: '#fdf2f8', colorBorder: '#fbcfe8' },
}

// ─────────────────────────────────────────────────────────────
// BulletLine — renders a single line. If the text contains ":"
// it bolds the label part (e.g. "Min Salary: ₹4,80,000/Year")
// ─────────────────────────────────────────────────────────────
const BulletLine = ({ text, color }) => {
  const colonIdx = text.indexOf(':')
  const hasLabel = colonIdx > 0 && colonIdx < 40

  return (
    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', lineHeight: 1.7 }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%',
        background: color, flexShrink: 0, marginTop: 9,
      }} />
      <span style={{ color: '#374151', fontSize: 14 }}>
        {hasLabel ? (
          <>
            <strong style={{ color: '#111827', fontWeight: 600 }}>
              {text.slice(0, colonIdx)}
            </strong>
            {text.slice(colonIdx)}
          </>
        ) : text}
      </span>
    </li>
  )
}

// ─────────────────────────────────────────────────────────────
// SectionCard — renders one section block
// ─────────────────────────────────────────────────────────────
const SectionCard = ({ type, items }) => {
  const style = SECTION_STYLES[type]
  if (!style || !items || items.length === 0) return null

  const { label, color, colorLight, colorBorder } = style

  return (
    <div
      style={{
        background: '#fff',
        border: `1px solid ${colorBorder}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 6px 24px ${color}18`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}
    >
      {/* Header */}
      <div style={{
        background: colorLight,
        borderBottom: `1px solid ${colorBorder}`,
        padding: '11px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: color, flexShrink: 0,
        }} />
        <span style={{
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color,
        }}>
          {label}
        </span>
        <div style={{
          flex: 1, height: 1,
          background: `linear-gradient(90deg, ${color}30, transparent)`,
        }} />
      </div>

      {/* Body */}
      <div style={{ padding: '14px 20px' }}>
        <ul style={{
          margin: 0, padding: 0, listStyle: 'none',
          display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {items.map((item, i) => (
            <BulletLine key={i} text={item} color={color} />
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// QuickInfoBar — compact pill row for at-a-glance details
// Reads from job.quickInfo array. Only shown if it has items.
// ─────────────────────────────────────────────────────────────
const QuickInfoBar = ({ quickInfo }) => {
  if (!quickInfo || quickInfo.length === 0) return null
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20,
      padding: '12px 16px',
      background: '#fafaf9',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
    }}>
      {quickInfo.map((q, i) => (
        <div key={i} style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: '#fff', border: '1px solid #e5e7eb',
          borderRadius: 100, padding: '4px 12px',
          fontSize: 12,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }}>
          <span style={{ color: '#9ca3af', fontWeight: 600 }}>{q.label}:</span>
          <span style={{ color: '#111827', fontWeight: 600 }}>{q.value}</span>
        </div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// JobDescription — main component
// Reads job.quickInfo and job.sections — no auto-parsing.
// Sections with empty/missing items arrays are automatically hidden.
// ─────────────────────────────────────────────────────────────
const JobDescription = ({ selectedCompany }) => {
  if (!selectedCompany) return null
  const { quickInfo, sections } = selectedCompany

  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', marginTop: 24 }}>

      {/* Section heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', margin: 0, whiteSpace: 'nowrap' }}>
          Job Description
        </h3>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #e5e7eb, transparent)' }} />
      </div>

      {/* Quick info pills */}
      <QuickInfoBar quickInfo={quickInfo} />

      {/* Section cards — null items = hidden automatically */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {sections?.map((section, i) => (
          <SectionCard key={i} type={section.type} items={section.items} />
        ))}
      </div>

    </div>
  )
}

export default JobDescription