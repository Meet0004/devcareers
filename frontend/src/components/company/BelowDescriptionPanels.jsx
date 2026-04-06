import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import companiesData from '../../data/jobData/jobData'

// ── Icons ──────────────────────────────────────────────────────────────────────
const Icon = {
  Briefcase: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  CheckCircle: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
}

// ── Application Tips ───────────────────────────────────────────────────────────
const APPLICATION_TIPS = [
  {
    title: 'Read the job description fully',
    body: 'The job description tells you what skills matter. Read it carefully and adjust your resume before applying.',
  },
  {
    title: 'Apply early',
    body: 'Apply within the first couple of days after a job is posted. Earlier applications usually get more attention.',
  },
  {
    title: 'Customize your resume',
    body: 'Do not send the same resume everywhere. Use the same keywords mentioned in the job description.',
  },
  {
    title: 'Check details before submitting',
    body: 'Make sure your email, phone number, and resume file name are correct before you apply.',
  },
  {
    title: 'Track your applications',
    body: 'Maintain a simple sheet with company name, role, and date applied so you can track everything easily.',
  },
  {
    title: 'Know the salary range',
    body: 'Check typical salaries for the role so you have a clear answer if HR asks your expectations.',
  },
]

// ── How to Apply Panel — always open, no toggle ────────────────────────────────
const HowToApplyPanel = () => (
  <div
    className="rounded-xl overflow-hidden border bg-white"
    style={{ borderColor: '#e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
  >
    {/* Header */}
    <div
      className="px-5 py-4 flex items-center gap-2.5"
    >
      <span style={{ color: '#FA5500' }}><Icon.CheckCircle /></span>
      <span
        className="font-semibold text-sm tracking-wide uppercase"
        style={{ color: '#FA5500' }}
      >
        How to Apply Successfully
      </span>
    </div>

    {/* Tips as a table */}
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
          <th style={{
            padding: '9px 16px',
            textAlign: 'left',
            fontWeight: 700,
            fontSize: 11,
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            width: '30%',
          }}>
            Step
          </th>
          <th style={{
            padding: '9px 16px',
            textAlign: 'left',
            fontWeight: 700,
            fontSize: 11,
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            What to Do
          </th>
        </tr>
      </thead>
      <tbody>
        {APPLICATION_TIPS.map((tip, i) => (
          <tr
            key={i}
            style={{
              borderTop: '1px solid #f3f4f6',
              background: i % 2 === 0 ? '#ffffff' : '#fafafa',
            }}
          >
            <td style={{
              padding: '11px 16px',
              verticalAlign: 'top',
              fontWeight: 700,
              color: '#111827',
              fontSize: 13,
              borderRight: '1px solid #f3f4f6',
            }}>
              {tip.title}
            </td>
            <td style={{
              padding: '11px 16px',
              verticalAlign: 'top',
              color: '#4b5563',
              lineHeight: 1.65,
              fontSize: 13,
            }}>
              {tip.body}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

// ── Recent Openings ────────────────────────────────────────────────────────────
const RecentOpenings = ({ currentCompany, currentRole }) => {
  const currentJob = companiesData.find(
    c => c?.company === currentCompany && c?.role === currentRole
  )

  const recent = [...companiesData]
    .filter(Boolean)
    .sort((a, b) => b.id - a.id)
    .filter(c => c.id !== currentJob?.id)
    .slice(1, 6)

  return (
    <div
      className="rounded-xl overflow-hidden border bg-white"
      style={{ borderColor: '#e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
    >
      {/* Header */}
      <div className="px-5 py-4 flex items-center gap-2.5">
        <span style={{ color: '#FA5500' }}><Icon.Briefcase /></span>
        <span
          className="font-semibold text-sm tracking-wide uppercase"
          style={{ color: '#FA5500' }}
        >
          Recent Job Openings
        </span>
      </div>

      {/* Jobs table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
            <th style={{
              padding: '9px 16px',
              textAlign: 'left',
              fontWeight: 700,
              fontSize: 11,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Role
            </th>
            <th style={{
              padding: '9px 16px',
              textAlign: 'left',
              fontWeight: 700,
              fontSize: 11,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Company
            </th>
            <th style={{ width: 40 }} /> 
          </tr>
        </thead>
        <tbody>
          {recent.map((item, i) => (
            <tr
              key={item.id}
              style={{
                borderTop: '1px solid #f3f4f6',
                background: i % 2 === 0 ? '#ffffff' : '#fafafa',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#fff5f0'}
              onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? '#ffffff' : '#fafafa'}
            >
              <td style={{ padding: '11px 16px', verticalAlign: 'middle' }}>
                <Link
                  to={`/company-details/${encodeURIComponent(item.company)}/${encodeURIComponent(item.role)}`}
                  style={{
                    fontWeight: 600,
                    color: '#111827',
                    textDecoration: 'none',
                    fontSize: 13,
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FA5500'}
                  onMouseLeave={e => e.currentTarget.style.color = '#111827'}
                >
                  {item.role}
                </Link>
              </td>
              <td style={{
                padding: '11px 16px',
                verticalAlign: 'middle',
                color: '#6b7280',
                fontSize: 13,
              }}>
                {item.company}
              </td>
              <td style={{
                padding: '11px 12px',
                verticalAlign: 'middle',
                textAlign: 'center',
                color: '#d1d5db',
              }}>
                <Link
                  to={`/company-details/${encodeURIComponent(item.company)}/${encodeURIComponent(item.role)}`}
                  style={{ color: 'inherit', display: 'inline-flex' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FA5500'}
                  onMouseLeave={e => e.currentTarget.style.color = '#d1d5db'}
                >
                  <Icon.Arrow />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer link */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid #f3f4f6',
        background: '#fafafa',
      }}>
        <Link
          to="/company-details"
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#FA5500',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
          }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
          View all openings <Icon.Arrow />
        </Link>
      </div>
    </div>
  )
}

// ── Notice Banner ──────────────────────────────────────────────────────────────
const NoticeBanner = () => (
  <div
    className="rounded-xl px-5 py-4 border"
    style={{ background: '#fff8f5', borderColor: '#fcd9c8' }}
  >
    <p className="text-xs text-gray-600 leading-relaxed">
      <span className="font-semibold" style={{ color: '#FA5500' }}>We post only verified openings.</span>{' '}
      Shortlisted candidates are contacted directly by the company. Stay active and check back daily for new listings.
    </p>
  </div>
)

// ── Main Export ────────────────────────────────────────────────────────────────
const BelowDescriptionPanels = ({ currentCompany, currentRole }) => {
  return (
    <div className="mt-8 space-y-4">
      <NoticeBanner />
      <RecentOpenings currentCompany={currentCompany} currentRole={currentRole} />
      <HowToApplyPanel />
    </div>
  )
}

export default BelowDescriptionPanels