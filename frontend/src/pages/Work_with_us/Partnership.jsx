import React from 'react'

const partnerTypes = [
  {
    icon: '🎓',
    title: 'College Clubs & Placement Cells',
    desc: 'Partner with us to bring verified job listings and career resources directly to your campus community.',
  },
  {
    icon: '🎬',
    title: 'Fellow Creators & YouTubers',
    desc: "Into career content, tech, or student life? Let's collaborate on videos, posts, or resource bundles.",
  },
  {
    icon: '📖',
    title: 'EdTech Platforms',
    desc: 'Cross-promote your courses to our 10,000+ active students. We only partner with platforms we genuinely believe in.',
  },
  {
    icon: '💻',
    title: 'Open-Source Contributors',
    desc: 'Want to help build DevCareers? Contribute to the platform and be credited as part of the journey.',
  },
]

const perks = [
  { icon: '📣', label: 'Shoutout to 10,000+ students'       },
  { icon: '🤝', label: 'Co-created content & resources'     },
  { icon: '🌐', label: 'Featured on website & newsletter'   },
  { icon: '💬', label: 'LinkedIn & WhatsApp promotion'      },
]

const Partnership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🤝 Let's Build Together
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner with DevCareers</h1>
          <p className="text-lg font-light max-w-xl mx-auto">
            We're open to meaningful collaborations that genuinely help students. If that sounds like you —
            Let's talk.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14 space-y-14">

        {/* ── Partner Types ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Who We Partner With</h2>
          <p className="text-gray-500 text-center text-sm mb-8">
            We keep partnerships simple, honest, and mutually valuable.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {partnerTypes.map((p, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── What Partners Get ── */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-2 text-center">What You Get</h2>
          <p className="text-white/80 text-sm text-center mb-8">
            DevCareers brings its audience, reach, and content to every partnership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map((perk, idx) => (
              <div key={idx} className="bg-white/15 rounded-xl px-4 py-5 text-center">
                <span className="text-3xl">{perk.icon}</span>
                <p className="text-sm font-semibold mt-2 leading-snug">{perk.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Interested? Let's Chat.</h2>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            All partnerships are handled personally by Meet Soni. Reach out via email or the contact page
            and we'll get back to you within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-7 py-3.5 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-md"
            >
              📩 Go to Contact Page
            </a>
            <a
              href="mailto:meethcodes@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-400 text-amber-700 font-bold px-7 py-3.5 rounded-xl hover:bg-amber-50 transition-all"
            >
              ✉️ Email Directly
            </a>
          </div>

          <p className="text-xs text-gray-400">{import.meta.env.VITE_RECIPIENT_EMAIL} · Response within 6–48 hours</p>
        </section>

      </div>
    </div>
  )
}

export default Partnership