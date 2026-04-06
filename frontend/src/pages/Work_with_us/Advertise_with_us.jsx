import React, { useState, useEffect } from 'react'
import ContactBlock from '../../components/common/ContactBlock'

const FOUNDER_NAME    = import.meta.env.VITE_FOUNDER_NAME     || 'Meet Soni'
const FOUNDER_LOC     = import.meta.env.VITE_FOUNDER_LOCATION || 'Shimoga, Karnataka, India'
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL  || 'hello@devcareers.in'
const SITE_NAME       = import.meta.env.VITE_SITE_NAME        || 'DevCareers'

const audience = [
  'Final-year college students across India',
  'Graduates in the tech field',
  'Students actively applying to entry-level roles and internships',
  'Professionals upskilling for career transitions',
]

const reach = [
  { platform: 'Website',  detail: 'Job listings, career guides, and company reviews' },
  { platform: 'YouTube',  detail: 'Career-focused videos on job tips and application strategy' },
  { platform: 'WhatsApp', detail: 'Active community receiving daily job alerts' },
  { platform: 'LinkedIn', detail: 'Regular posts on job opportunities and career advice' },
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
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes shimmerText {
          0%   { background-position: 0% center }
          100% { background-position: 200% center }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.5 }
          100% { transform: scale(2.4); opacity: 0 }
        }
        .shimmer-text {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 45%, #ff8c42 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 3s linear infinite;
        }
        .pulse-ring { animation: pulseRing 1.8s ease infinite; }
      `}</style>

      {/* ── Header ── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #f97316, transparent)' }}
        />
        <div className="relative z-10 px-4 sm:px-8 md:px-12 pt-10 sm:pt-14 md:pt-16 pb-8 max-w-[1100px] mx-auto text-center">

          <div style={fade(0)} className="inline-flex items-center gap-[7px] bg-orange-500/[0.08] border border-orange-500/[0.22] text-orange-500 text-[11px] font-bold px-4 py-1.5 rounded-full tracking-[0.08em] uppercase mb-5">
            <span className="relative inline-block w-[7px] h-[7px] bg-green-500 rounded-full shrink-0">
              <span className="pulse-ring absolute inset-[-3px] rounded-full bg-green-500" />
            </span>
            Partner with us
          </div>

          <h1 style={fade(80)} className="text-[clamp(28px,7vw,64px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#0a0a0a] mb-4">
            Advertise with <span className="shimmer-text">{SITE_NAME}</span>
          </h1>

          <p style={fade(160)} className="text-[15px] sm:text-[17px] text-gray-500 leading-[1.65] max-w-[500px] mx-auto mb-7">
            Reach students and early-career professionals actively looking for jobs, tools, and career resources.
          </p>

        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-14">

        {/* Advertising Disclosure — stated once, here only */}
        <div className="bg-amber-50 border-l-4 border-orange-500 rounded-r-lg px-4 py-3.5 text-sm text-gray-700 leading-relaxed">
          <strong className="text-orange-700">Advertising disclosure:</strong>{' '}
          {SITE_NAME} displays advertisements through direct sponsorship arrangements. All sponsored content is clearly labelled as such. Our editorial decisions — including which job listings and resources we feature — are made independently of any commercial relationships. For more information see our{' '}
          <a href="/disclaimer" className="text-orange-500 hover:underline">Disclaimer</a> and{' '}
          <a href="/privacy-policy" className="text-orange-500 hover:underline">Privacy Policy</a>.
        </div>

        {/* Audience */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.08em] uppercase text-orange-500 mb-1.5">Who you reach</p>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">Our audience</h2>
            <div className="flex flex-col gap-2.5">
              {audience.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-[0.45rem]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 mt-7 md:mt-9">Platform presence</h3>
            <div className="flex flex-col gap-3">
              {reach.map((item) => (
                <div key={item.platform} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <p className="font-semibold text-sm text-gray-900 mb-0.5">{item.platform}</p>
                  <p className="text-xs text-gray-500 m-0">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats — titles + billing only, no repetitive descriptions */}
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

        {/* Who we work with */}
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