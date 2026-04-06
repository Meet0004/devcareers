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
// QUICK INFO FIELDS — shown as a table
// Only displayed if the field exists and is non-empty
// deadline falls back to 'ASAP' if not provided
// ─────────────────────────────────────────────────────────────
const QUICK_FIELDS = [
  { key: 'experience', label: 'Experience'                },
  { key: 'location',   label: 'Location'                  },
  { key: 'salary',     label: 'Salary'                    },
  { key: 'jobType',    label: 'Job Type'                  },
  { key: 'workMode',   label: 'Work Mode'                 },
  { key: 'openings',   label: 'Openings'                  },
  { key: 'deadline',   label: 'Deadline', default: 'ASAP' },
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
      <div
        style={{
          width: '100%', background: colorLight,
          borderBottom: open ? `1px solid ${colorBorder}` : 'none',
          padding: '12px 20px',
          display: 'flex', alignItems: 'center', gap: 10,
          transition: 'background 0.2s',
        }}
      >
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: color, flexShrink: 0,
          boxShadow: `0 0 0 3px ${color}22`,
        }} />
        <span style={{
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.09em',
          textTransform: 'uppercase', color,
          flex: 1, textAlign: 'left',
        }}>
          {label}
        </span>

      </div>

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
// QuickInfoBar — full-width table, no emojis
// Alternating row shading, label | value layout
// deadline always shows — falls back to 'ASAP' if missing
// ─────────────────────────────────────────────────────────────
const QuickInfoBar = ({ job }) => {
  const rows = QUICK_FIELDS.filter(f => job[f.key]?.trim() || f.default)
  if (rows.length === 0) return null

  return (
    <div style={{
      marginBottom: 20,
      border: '1px solid #e5e7eb',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 13,
      }}>
        <thead>
          <tr>
            <th
              colSpan={2}
              style={{
                background: 'linear-gradient(135deg, #fff7ed, #fffbeb)',
                borderBottom: '1px solid #fed7aa',
                padding: '9px 16px',
                textAlign: 'left',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: '#f97316',
              }}
            >
              Job at a Glance
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((f, i) => (
            <tr
              key={f.key}
              style={{
                borderTop: '1px solid #f3f4f6',
                background: i % 2 === 0 ? '#fff' : '#fafafa',
              }}
            >
              <td style={{
                padding: '10px 16px',
                width: '35%',
                color: '#6b7280',
                fontWeight: 600,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderRight: '1px solid #f3f4f6',
                whiteSpace: 'nowrap',
              }}>
                {f.label}
              </td>
              <td style={{
                padding: '10px 20px',
                color: '#111827',
                fontWeight: 600,
                fontSize: 14,
              }}>
                {job[f.key] || f.default}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

  const filledSections = SECTIONS.filter(s => selectedCompany[s.key]?.trim())

  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', marginTop: 28 }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', margin: 0, whiteSpace: 'nowrap' }}>
          Job Description
        </h3>
        <span style={{
          fontSize: 11, fontWeight: 700, color: '#f97316',
          background: '#fff7ed', border: '1px solid #fed7aa',
          borderRadius: 100, padding: '2px 10px',
        }}>
          {filledSections.length} sections
        </span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #e5e7eb, transparent)' }} />
      </div>

      <QuickInfoBar job={selectedCompany} />

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