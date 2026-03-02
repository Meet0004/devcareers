import React from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { number: '10,000+',  label: 'Active Users',      icon: '👥' },
  { number: '60,000+',  label: 'Website Views',     icon: '👁️' },
  { number: '300+',     label: 'Companies Tracked', icon: '🏢' },
  { number: 'Top 0.1%', label: 'Topmate Creator',   icon: '⭐' },
]

const adFormats = [
  {
    icon: '🖼️',
    title: 'Website Banner Ads',
    billing: 'Monthly rate',
    desc: 'Your brand displayed prominently across DevCareers pages visited by 10,000+ students every month.',
    tags: ['High visibility', 'Brand awareness', 'Mobile-friendly'],
    color: 'bg-blue-50 border-blue-200',
    head: 'text-blue-900',
    tag: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '📌',
    title: 'Sponsored Job Listings',
    billing: 'Per listing',
    desc: 'Pin your hiring opportunity at the top of our job board. Reach motivated, job-ready students actively applying.',
    tags: ['Top placement', 'Targeted reach', 'Verified audience'],
    color: 'bg-green-50 border-green-200',
    head: 'text-green-900',
    tag: 'bg-green-100 text-green-700',
  },
  {
    icon: '📧',
    title: 'Newsletter Shoutouts',
    billing: 'Per edition',
    desc: 'Feature your product or course in our weekly job alert email to 500–2,000 highly engaged subscribers.',
    tags: ['Direct inbox', 'High open rates', 'Engaged readers'],
    color: 'bg-amber-50 border-amber-200',
    head: 'text-amber-900',
    tag: 'bg-amber-100 text-amber-700',
  },
  {
    icon: '🎬',
    title: 'YouTube Sponsorships',
    billing: 'Per video',
    desc: 'Get a dedicated shoutout or integration in our career-focused YouTube videos targeting students and freshers.',
    tags: ['Video content', 'Long shelf-life', 'Growing channel'],
    color: 'bg-red-50 border-red-200',
    head: 'text-red-900',
    tag: 'bg-red-100 text-red-700',
  },
]

const idealFor = [
  { icon: '🏢', title: 'Tech Companies Hiring Freshers',  desc: 'Reach candidates actively applying for entry-level roles and internships.' },
  { icon: '📖', title: 'EdTech Platforms & Bootcamps',     desc: 'Promote courses and certifications to students already investing in their skills.' },
  { icon: '🙋', title: 'Individual Creators & Mentors',    desc: 'Grow your community or sell resources to a ready, engaged student audience.' },
  { icon: '🛠️', title: 'SaaS Tools for Job Seekers',      desc: 'Showcase resume builders, portfolio tools, or productivity apps to job-hunters.' },
  { icon: '🌐', title: 'Google Ads (Programmatic)',        desc: 'AdSense integration coming soon — programmatic ad slots opening up automatically.' },
]

const perks = [
  { icon: '💬', title: 'WhatsApp Community Shoutout', desc: 'Your brand announced directly in our active WhatsApp job alert community.' },
  { icon: '🔗', title: 'LinkedIn Featured Post',      desc: 'Dedicated LinkedIn post promoting your brand to our professional network.' },
  { icon: '📊', title: 'Performance Report',          desc: 'Post-campaign report with impressions, clicks, and reach data for your format.' },
  { icon: '⬆️', title: 'Priority Placement',          desc: 'Your sponsored content appears above all organic listings and posts.' },
]

const notAllowed = [
  'MLM / Pyramid Schemes',
  'Fake Job or Internship Scams',
  'Crypto, Gambling, or Betting',
  'Products Unrelated to Students or Careers',
]

const steps = [
  { number: '01', icon: '📩', title: 'Reach Out',        desc: 'Head to our Contact Us page and tell us about your brand and what you want to promote.' },
  { number: '02', icon: '💬', title: 'We Discuss',       desc: 'Meet personally reviews every request and responds within 48 hrs to discuss format, fit, and pricing.' },
  { number: '03', icon: '✅', title: 'Review & Approve', desc: 'All ads are reviewed against our brand safety guidelines before going live.' },
  { number: '04', icon: '🚀', title: 'Go Live',          desc: 'Your ad launches across agreed channels. We share confirmation and track performance for you.' },
]

const faqs = [
  { q: 'Is there a minimum budget?',              a: 'No. We work with all budgets — from individual creators to growing companies. Just tell us what you have in mind.' },
  { q: 'How quickly can my ad go live?',           a: 'After approval, typically within 2–5 business days depending on the format.' },
  { q: 'Can I run ads across multiple formats?',   a: 'Absolutely. We can put together a custom multi-format deal around your specific goals and budget.' },
  { q: 'What about Google AdSense slots?',         a: 'Google AdSense integration is coming soon. Once live, programmatic ad slots will be available automatically.' },
]

// ─── Component ───────────────────────────────────────────────────────────────

const Advertise_with_us = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-5">
            📣 Reach 10,000+ Motivated Students
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">Advertise with DevCareers</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8">
            Put your brand, product, or opportunity in front of India's most ambitious students
            and early-career professionals — at a fraction of the cost of big platforms.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl text-center">
                <div className="text-2xl font-bold">{s.icon} {s.number}</div>
                <div className="text-white/80 text-xs mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-amber-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            📩 Get in Touch
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* ── Why Advertise ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Advertise with DevCareers?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A niche, high-intent audience at affordable rates — something the big job boards simply can't offer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Hyper-Niche Audience',    desc: 'Every user is a student or early-career professional actively seeking jobs, internships, or career tools. Zero ad wastage.' },
              { icon: '💰', title: 'Affordable vs Big Boards', desc: 'LinkedIn, Naukri, and Indeed charge thousands for basic visibility. DevCareers gives you direct reach at a fraction of the cost.' },
              { icon: '🤝', title: 'Personal Partnership',     desc: 'No ad dashboards or bots. Meet personally reviews every deal to ensure it\'s the right fit for you and the audience.' },
              { icon: '📊', title: 'Multi-Channel Reach',      desc: 'One campaign can span your website, YouTube, WhatsApp, and LinkedIn — everywhere your audience lives.' },
              { icon: '✅', title: 'Brand-Safe Environment',   desc: 'Strictly no scams, MLMs, or irrelevant content. Your brand sits alongside trusted, student-loved content only.' },
              { icon: '⚡', title: 'High-Intent Users',        desc: 'Our audience is in active job-hunt mode — motivated, engaged, and ready to click, sign up, or apply.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:border-amber-200 transition-all group">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Audience ── */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-3xl p-10 md:p-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Who You're Reaching</h2>
            <p className="text-white/80 max-w-xl mx-auto">A single, clearly defined audience — making targeting effortless.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-5">🧑‍💻 Audience Profile</h3>
              <div className="space-y-3">
                {[
                  { icon: '🎓', label: 'Final-year college students' },
                  { icon: '💻', label: 'BCA / B.Tech / MCA graduates' },
                  { icon: '🔍', label: 'Active job & internship seekers' },
                  { icon: '📚', label: 'Career-upskilling professionals' },
                  { icon: '🇮🇳', label: 'Primarily India-based audience' },
                  { icon: '⚡', label: 'High intent — ready to act' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-5">📈 Platform Reach</h3>
              <div className="space-y-4">
                {[
                  { platform: '🌐 Website',             detail: '10,000+ active users · 60,000+ total views as of March 2026' },
                  { platform: '▶️ YouTube',              detail: 'Growing channel focused on student jobs and career guidance' },
                  { platform: '💬 WhatsApp & LinkedIn',  detail: 'Active community receiving daily job alerts and updates' },
                  { platform: '🌐 Google Ads (Soon)',    detail: 'AdSense integration coming — programmatic slots opening soon' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/15 rounded-xl px-4 py-3">
                    <p className="font-bold text-sm">{item.platform}</p>
                    <p className="text-white/80 text-sm mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Ad Formats ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Advertising Formats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the format that fits your goal — or combine them for maximum impact. All pricing is custom.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {adFormats.map((f, idx) => (
              <div key={idx} className={`border-2 rounded-2xl p-7 hover:shadow-lg transition-all ${f.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{f.icon}</span>
                  <span className="text-xs font-bold bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600">
                    {f.billing}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${f.head}`}>{f.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${f.tag}`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Google AdSense Notice */}
          <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex gap-4 items-start">
            <span className="text-3xl flex-shrink-0">🌐</span>
            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-1">Google AdSense — Coming Soon</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                We're in the process of integrating <strong>Google AdSense</strong> into DevCareers. Once live,
                programmatic Google Ads will automatically serve to our audience based on relevance — opening up
                an additional advertising channel for brands running Google Ads campaigns.
                <span className="ml-1 font-semibold">We'll announce when it's live!</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── Perks ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Advertisers Get</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Perks that go beyond just running an ad — included depending on the format agreed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:border-amber-300 hover:shadow-lg transition-all">
                <span className="text-4xl">{perk.icon}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-600">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ideal For ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Who Should Advertise?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfect for anyone trying to reach India's student and fresher community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealFor.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:border-amber-300 hover:shadow-lg transition-all">
                <span className="text-4xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Simple, personal, and fast — no ad dashboards or automated systems.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-amber-200 mx-28" />
            <div className="grid md:grid-cols-4 gap-6 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg relative z-10">
                    {step.icon}
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Step {step.number}</span>
                    <h3 className="font-bold text-gray-900 text-lg mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand Safety ── */}
        <section className="bg-gray-900 text-white rounded-3xl p-10 md:p-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Our Brand Safety Commitment</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We take our audience's trust seriously. We will{' '}
              <strong className="text-white">reject any ad</strong> that doesn't meet our standards — no exceptions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-red-400 text-lg mb-4">🚫 We Do NOT Accept Ads For:</h3>
              <div className="space-y-3">
                {notAllowed.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-red-900/30 border border-red-700/40 rounded-xl px-4 py-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-green-400 text-lg mb-4">✅ We Welcome Ads That:</h3>
              <div className="space-y-3">
                {[
                  'Help students find genuine jobs or internships',
                  'Offer legitimate courses, certifications, or skill training',
                  'Provide tools that make the job hunt easier',
                  'Connect students with credible mentors or creators',
                  'Add real value to the DevCareers community',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-green-900/30 border border-green-700/40 rounded-xl px-4 py-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-gray-200 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ + CTA ── */}
        <section>
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
              <h3 className="font-bold text-gray-900 text-2xl mb-6">❓ Frequently Asked Questions</h3>
              <div className="space-y-5">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Q: {faq.q}</p>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-10 text-center shadow-xl flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">
                📩
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Advertise?</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                  All pricing is negotiable and tailored to your budget. Meet personally handles every
                  advertising partnership — no middlemen.
                </p>
              </div>
              <div className="space-y-3 w-full max-w-xs">
                <a
                  href="/contact-us"
                  className="block w-full bg-white text-amber-600 font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-md text-center text-lg"
                >
                  Get in Touch →
                </a>
                <p className="text-white/70 text-xs">We respond within 6–48 hours</p>
              </div>
              <div className="bg-white/15 rounded-xl px-5 py-4 w-full max-w-xs text-sm space-y-1">
                <p><strong>📧</strong> info.techjobalert@gmail.com</p>
                <p><strong>📍</strong> Shimoga, Karnataka, India</p>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-4 mt-4">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-gray-400 text-sm">© 2026 DevCareers. All rights reserved.</p>
          <p className="text-gray-300 font-medium">Built with ❤️ by Meet Soni for students everywhere</p>
        </div>
      </div>

    </div>
  )
}

export default Advertise_with_us