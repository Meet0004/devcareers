import React, { useState, useEffect } from 'react'
import ContactBlock from '../../components/common/ContactBlock'

const FOUNDER_NAME    = import.meta.env.VITE_FOUNDER_NAME     || 'Meet Soni'
const FOUNDER_LOC     = import.meta.env.VITE_FOUNDER_LOCATION || 'Shimoga, Karnataka, India'
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL  || 'hello@devcareers.in'
const SITE_NAME       = import.meta.env.VITE_SITE_NAME        || 'DevCareers'

const metrics = [
  { num: '50K+',  label: 'Monthly reach'   },
  { num: '4',     label: 'Platforms'        },
  { num: 'India', label: 'Primary market'   },
]

const segments = [
  { tag: 'Segment 01', title: 'Final-year college students', sub: 'Across India → first job',       bar: '80%' },
  { tag: 'Segment 02', title: 'Tech graduates',              sub: 'Entry-level roles',               bar: '65%' },
  { tag: 'Segment 03', title: 'Active job seekers',          sub: 'Internships & fresher roles',     bar: '55%' },
  { tag: 'Segment 04', title: 'Career transitioners',        sub: 'Upskilling → new field',          bar: '40%' },
]

const reach = [
  { platform: 'Website',   detail: 'Job listings, career guides, and company reviews',      pill: 'Live',    pillClass: 'pill-web' },
  { platform: 'YouTube',   detail: 'Career videos, job tips, application strategy',         pill: 'Active',  pillClass: 'pill-yt'  },
  { platform: 'WhatsApp',  detail: 'Daily job alerts to an active community',               pill: 'Daily',   pillClass: 'pill-wa'  },
  { platform: 'LinkedIn',  detail: 'Job opportunities and career advice posts',              pill: 'Regular', pillClass: 'pill-li'  },
]

const accepted = [
  'Companies hiring freshers or interns in tech, finance, or operations',
  'EdTech platforms offering legitimate certifications',
  'SaaS tools that help job seekers like resume builders, portfolio platforms',
  'Creators or mentors offering career guidance to students',
]

const formats = [
  { title: 'Website Banner Ads',      billing: 'Monthly rate' },
  { title: 'Sponsored Job Listings',  billing: 'Per listing'  },
  { title: 'Newsletter Sponsorships', billing: 'Per edition'  },
  { title: 'YouTube Sponsorships',    billing: 'Per video'    },
]

export default function Advertise_with_us() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  return (
    <div className="min-h-screen bg-white mb-12">
      <style>{`
        @keyframes shimmerText {
          0%   { background-position: 0% center }
          100% { background-position: 200% center }
        }
        .shimmer-text {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 45%, #ff8c42 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 3s linear infinite;
        }
        .seg-card {
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 12px 14px;
          position: relative;
          overflow: hidden;
          background: #fff;
        }
        .seg-bar-track {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: #f97316;
        }
        .pill-web { background: #fff7ed; color: #c2410c; }
        .pill-yt  { background: #fef2f2; color: #b91c1c; }
        .pill-wa  { background: #f0fdf4; color: #15803d; }
        .pill-li  { background: #eff6ff; color: #1d4ed8; }
      `}</style>

      {/* ── Header ── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #f97316, transparent)' }}
        />
        <div className="relative z-10 px-4 sm:px-8 md:px-12 sm:pt-14 md:pt-14 pb-2 max-w-[1100px] mx-auto text-center">
          <h1 style={fade(80)} className="text-[clamp(28px,7vw,64px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#0a0a0a] mb-2">
            Advertise with <span className="shimmer-text">{SITE_NAME}</span>
          </h1>
          <p style={fade(160)} className="text-[15px] sm:text-[17px] text-gray-500 leading-[1.65] max-w-[500px] mx-auto mb-7">
            Reach students and early-career professionals actively looking for jobs, tools, and career resources.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-0 space-y-10">

        {/* ── Audience + Platform ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left — metrics + segments */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.08em] uppercase text-orange-500 mb-1.5">Who you reach</p>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Our audience</h2>
            </div>

            {/* Metric chips */}
            <div className="grid grid-cols-3 gap-2">
              {metrics.map((m) => (
                <div key={m.label} className="border border-gray-200 rounded-lg p-3">
                  <span className="block text-xl font-bold text-orange-500 leading-tight">{m.num}</span>
                  <span className="block text-[11px] text-gray-900 mt-0.5">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Segment grid */}
            <div className="grid grid-cols-2 gap-2">
              {segments.map((s) => (
                <div key={s.tag} className="seg-card">
                  {/* <span className="seg-bar-track" style={{ width: s.bar }} /> */}
                  <span className="block text-[10px] font-semibold tracking-widest uppercase text-orange-500 mb-1">{s.tag}</span>
                  <span className="block text-[13px] font-semibold text-gray-900 leading-snug">{s.title}</span>
                  <span className="block text-[11px] text-gray-900 mt-1.5">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — platform presence */}
          <div className="flex flex-col gap-3">
            <h3 className="text-m font-semibold text-gray-900 mt-5 md:mt-[65px]">Platform presence</h3>
            {reach.map((item) => (
              <div
                key={item.platform}
                className="grid items-center gap-3 border border-gray-200 rounded-xl px-4 py-3"
                style={{ gridTemplateColumns: '80px 1fr 56px' }}
              >
                <span className="text-sm font-semibold text-gray-900">{item.platform}</span>
                <span className="text-xs text-gray-900 leading-snug">{item.detail}</span>
                <span className={`text-[10px] font-semibold rounded-full px-2 py-1 text-center whitespace-nowrap ${item.pillClass}`}>
                  {item.pill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Formats ── */}
        <section>
          <p className="text-xs font-bold tracking-[0.08em] uppercase text-orange-500 mb-1.5">What we offer</p>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Advertising formats</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-xl">
            All pricing is discussed directly and tailored to your budget. Reach out to start a conversation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {formats.map((f) => (
              <div key={f.title} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3.5 hover:border-orange-200 hover:shadow-sm transition-all duration-200">
                <span className="text-sm font-semibold text-gray-900">{f.title}</span>
                <span className="text-xs font-semibold bg-gray-100 text-gray-600 rounded-full px-3 py-0.5 ml-3 whitespace-nowrap">{f.billing}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Who we work with ── */}
        <section>
          <p className="text-xs font-bold tracking-[0.08em] uppercase text-orange-500 mb-1.5">Content policy</p>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Who we partner with</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-xl">
            We only partner with brands that genuinely benefit students and early-career professionals. Every request is reviewed personally before going live.
          </p>
          <div className="flex flex-col gap-2">
            {accepted.map((item) => (
              <div key={item} className="flex items-start gap-2.5 bg-green-50 text-green-800 rounded-xl px-3.5 py-2.5 text-sm leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-[0.45rem]" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <ContactBlock description="For partnership enquiries, reach out directly." />
      </div>
    </div>
  )
}