import React from 'react'

// ─────────────────────────────────────────────────────────────
// SECTION CONFIG — order here = display order on page
// Each key matches a flat field on the job object
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  { key: 'overview',        label: 'Role Overview',         color: '#f97316', colorLight: '#fff7ed', colorBorder: '#fed7aa' },
  { key: 'responsibilities', label: 'Responsibilities',     color: '#3b82f6', colorLight: '#eff6ff', colorBorder: '#bfdbfe' },
  { key: 'skills',          label: 'Skills & Requirements', color: '#8b5cf6', colorLight: '#faf5ff', colorBorder: '#ddd6fe' },
  { key: 'nice_to_have',    label: 'Nice to Have',          color: '#10b981', colorLight: '#f0fdf4', colorBorder: '#bbf7d0' },
  { key: 'benefits',        label: 'What You Get',          color: '#f59e0b', colorLight: '#fffbeb', colorBorder: '#fde68a' },
  { key: 'work_details',    label: 'Work Details',          color: '#6366f1', colorLight: '#eef2ff', colorBorder: '#c7d2fe' },
  { key: 'education',       label: 'Education',             color: '#0891b2', colorLight: '#ecfeff', colorBorder: '#a5f3fc' },
  { key: 'about_company',   label: 'About the Company',     color: '#64748b', colorLight: '#f8fafc', colorBorder: '#cbd5e1' },
  { key: 'contact',         label: 'Contact & Application', color: '#db2777', colorLight: '#fdf2f8', colorBorder: '#fbcfe8' },
]

// ─────────────────────────────────────────────────────────────
// QUICK INFO FIELDS — shown as pills at the top
// Only displayed if the field exists and is non-empty
// ─────────────────────────────────────────────────────────────
const QUICK_FIELDS = [
  { key: 'experience', label: 'Experience' },
  { key: 'location',   label: 'Location'   },
  { key: 'salary',     label: 'Salary'     },
  { key: 'jobType',    label: 'Job Type'   },
  { key: 'workMode',   label: 'Work Mode'  },
  { key: 'openings',   label: 'Openings'   },
  { key: 'deadline',   label: 'Deadline'   },
]

// ─────────────────────────────────────────────────────────────
// BulletLine — single bullet point
// Auto-bolds "Label:" prefix if colon is within first 40 chars
// ─────────────────────────────────────────────────────────────
const BulletLine = ({ text, color }) => {
  const colonIdx = text.indexOf(':')
  const hasLabel = colonIdx > 0 && colonIdx < 40
  return (
    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', lineHeight: 1.75 }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: color + '99', flexShrink: 0, marginTop: 8,
        boxShadow: `0 0 0 2px ${color}22`,
      }} />
      <span style={{ color: '#4b5563', fontSize: 14 }}>
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
// SectionCard — one collapsible section block
// Hidden automatically if string is empty/missing
// ─────────────────────────────────────────────────────────────
const SectionCard = ({ label, color, colorLight, colorBorder, text }) => {
  const [open, setOpen] = React.useState(true)
  if (!text?.trim()) return null

  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
  if (lines.length === 0) return null

  return (
    <div style={{
      background: '#fff',
      border: `1px solid ${colorBorder}`,
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      transition: 'box-shadow 0.25s ease',
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 28px ${color}15`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}
    >
      {/* Header — click to collapse */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: colorLight,
          borderBottom: open ? `1px solid ${colorBorder}` : 'none',
          padding: '12px 20px',
          display: 'flex', alignItems: 'center', gap: 10,
          cursor: 'pointer', border: 'none', outline: 'none',
          transition: 'background 0.2s',
        }}
      >
        {/* Colored dot */}
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: color, flexShrink: 0,
          boxShadow: `0 0 0 3px ${color}22`,
        }} />

        {/* Label */}
        <span style={{
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.09em',
          textTransform: 'uppercase', color,
          flex: 1, textAlign: 'left',
        }}>
          {label}
        </span>

        {/* Count badge */}
        <span style={{
          fontSize: 10, fontWeight: 700,
          background: color + '18', color,
          border: `1px solid ${color}30`,
          borderRadius: 100, padding: '1px 8px',
          marginRight: 8,
        }}>
          {lines.length}
        </span>

        {/* Chevron */}
        <svg
          width={14} height={14} viewBox="0 0 24 24" fill="none"
          stroke={color} strokeWidth={2.5} strokeLinecap="round"
          style={{ transition: 'transform 0.25s', transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', flexShrink: 0 }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Body — collapsible */}
      <div style={{
        maxHeight: open ? 2000 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div style={{ padding: '14px 20px 16px' }}>
          <ul style={{
            margin: 0, padding: 0, listStyle: 'none',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            {lines.map((line, i) => (
              <BulletLine key={i} text={line} color={color} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// QuickInfoBar — pill row of at-a-glance details
// ─────────────────────────────────────────────────────────────
const QuickInfoBar = ({ job }) => {
  const pills = QUICK_FIELDS.filter(f => job[f.key]?.trim())
  if (pills.length === 0) return null

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20,
      padding: '14px 10px',
      background: 'linear-gradient(135deg, #fafaf9, #fff)',
      border: '1px solid #e5e7eb',
      borderRadius: 14,
      boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
    }}>
      {pills.map(f => (
        <div key={f.key} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: 100, padding: '5px 14px',
          fontSize: 12,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316aa'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(249,115,22,0.12)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)' }}
        >
          <span style={{ color: '#9ca3af', fontWeight: 600, fontSize: 11 }}>{f.label}</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#d1d5db', flexShrink: 0 }} />
          <span style={{ color: '#111827', fontWeight: 600 }}>{job[f.key]}</span>
        </div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// JobDescription — main component
// Reads flat fields from selectedCompany
// Missing/empty fields are safely ignored — no errors
// ─────────────────────────────────────────────────────────────
const JobDescription = ({ selectedCompany }) => {
  if (!selectedCompany) return null

  // Count how many sections have content
  const filledSections = SECTIONS.filter(s => selectedCompany[s.key]?.trim())

  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', marginTop: 28 }}>

      {/* Section heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', margin: 0, whiteSpace: 'nowrap' }}>
          Job Description
        </h3>
        {/* Section count badge */}
        <span style={{
          fontSize: 11, fontWeight: 700, color: '#f97316',
          background: '#fff7ed', border: '1px solid #fed7aa',
          borderRadius: 100, padding: '2px 10px',
        }}>
          {filledSections.length} sections
        </span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #e5e7eb, transparent)' }} />
      </div>

      {/* Quick info pills */}
      <QuickInfoBar job={selectedCompany} />

      {/* Section cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {SECTIONS.map(s => (
          <SectionCard
            key={s.key}
            label={s.label}
            color={s.color}
            colorLight={s.colorLight}
            colorBorder={s.colorBorder}
            text={selectedCompany[s.key]}
          />
        ))}
      </div>

    </div>
  )
}

export default JobDescription