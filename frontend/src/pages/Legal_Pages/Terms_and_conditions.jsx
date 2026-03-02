import React, { useState } from 'react'

const sections = [
  { id: 'agreement',       title: 'Agreement to Terms',       emoji: '📜' },
  { id: 'eligibility',     title: 'Eligibility',              emoji: '🎓' },
  { id: 'services',        title: 'Our Services',             emoji: '🛠️' },
  { id: 'permitted-use',   title: 'Permitted Use',            emoji: '✅' },
  { id: 'prohibited-use',  title: 'Prohibited Use',           emoji: '🚫' },
  { id: 'intellectual',    title: 'Intellectual Property',    emoji: '©️'  },
  { id: 'purchases',       title: 'Purchases & Refunds',      emoji: '🛒' },
  { id: 'disclaimer',      title: 'Disclaimers',              emoji: '⚠️' },
  { id: 'liability',       title: 'Limitation of Liability',  emoji: '⚖️' },
  { id: 'third-party',     title: 'Third-Party Links',        emoji: '🔗' },
  { id: 'termination',     title: 'Termination',              emoji: '🔒' },
  { id: 'changes',         title: 'Changes to Terms',         emoji: '📝' },
  { id: 'governing-law',   title: 'Governing Law',            emoji: '🏛️' },
  { id: 'contact',         title: 'Contact Us',               emoji: '💬' },
]

const SectionCard = ({ id, emoji, title, children, borderColor }) => (
  <div id={id} className={`bg-white rounded-2xl shadow-lg border-l-4 ${borderColor} p-8 scroll-mt-24`}>
    <div className="flex items-center gap-3 mb-5">
      <span className="text-3xl">{emoji}</span>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
  </div>
)

const Highlight = ({ children, color = 'amber' }) => {
  const map = {
    amber:  'bg-amber-50  border-amber-300  text-amber-900',
    green:  'bg-green-50  border-green-300  text-green-900',
    blue:   'bg-blue-50   border-blue-300   text-blue-900',
    red:    'bg-red-50    border-red-300    text-red-900',
    purple: 'bg-purple-50 border-purple-300 text-purple-900',
  }
  return <div className={`border-2 rounded-xl p-4 ${map[color]}`}>{children}</div>
}

const Terms_and_conditions = () => {
  const [activeSection, setActiveSection] = useState('agreement')

  const scrollTo = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const borderColors = [
    'border-amber-400', 'border-orange-400', 'border-blue-400',   'border-green-400',
    'border-red-400',   'border-purple-400', 'border-teal-400',   'border-pink-400',
    'border-yellow-400','border-indigo-400', 'border-rose-400',   'border-cyan-400',
    'border-emerald-400','border-orange-500',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📜 Please Read Carefully
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms &amp; Conditions</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            These terms govern your use of DevCareers. By using our platform, you agree to everything below.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">📅 Last Updated: March 2026</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">🏠 Operated by Meet Soni</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">📍 Shimoga, Karnataka, India</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">

        {/* ── Sticky Sidebar ── */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-8 bg-white rounded-2xl shadow-lg p-5 border border-amber-100">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">Contents</p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeSection === s.id
                      ? 'bg-amber-100 text-amber-800 font-bold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{s.emoji}</span>
                  <span>{s.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 space-y-8 min-w-0">

          {/* 1. Agreement */}
          <SectionCard id="agreement" emoji="📜" title="Agreement to Terms" borderColor="border-amber-400">
            <p>
              Welcome to <strong className="text-gray-900">DevCareers</strong> (formerly Tech Job Alert), owned and
              operated by <strong className="text-gray-900">Meet Soni</strong>, a solo developer based in Shimoga,
              Karnataka, India.
            </p>
            <p>
              These Terms &amp; Conditions (<strong>"Terms"</strong>) govern your access to and use of the DevCareers
              website, newsletter, digital resources, and any related services (collectively, the{' '}
              <strong>"Platform"</strong>).
            </p>
            <Highlight color="amber">
              <p className="font-semibold">
                📌 By visiting our website, subscribing to our newsletter, or purchasing any resource, you confirm
                that you have read, understood, and agree to be bound by these Terms. If you do not agree, please
                do not use the Platform.
              </p>
            </Highlight>
            <p>
              These Terms apply alongside our{' '}
              <a href="/privacy-policy" className="text-amber-600 hover:underline font-medium">Privacy Policy</a>,
              which is incorporated herein by reference.
            </p>
          </SectionCard>

          {/* 2. Eligibility */}
          <SectionCard id="eligibility" emoji="🎓" title="Eligibility" borderColor="border-orange-400">
            <p>To use DevCareers, you must meet the following conditions:</p>
            <div className="space-y-3">
              {[
                { icon: '🔞', title: 'Minimum Age', desc: 'You must be at least 13 years old to use this Platform. Users aged 13–17 should review these Terms with a parent or guardian.' },
                { icon: '🤝', title: 'Legal Capacity', desc: 'By using DevCareers, you confirm you have the legal capacity to enter into a binding agreement under applicable Indian law.' },
                { icon: '✅', title: 'Accurate Information', desc: 'You agree to provide accurate and truthful information when subscribing, purchasing, or contacting us. False information may result in termination of access.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 3. Services */}
          <SectionCard id="services" emoji="🛠️" title="Our Services" borderColor="border-blue-400">
            <p>DevCareers provides the following services to students and early-career professionals:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '💼', title: 'Job Listings', desc: 'Curated internship and entry-level job opportunities aggregated from 300+ companies. Listings are manually verified before being posted.' },
                { icon: '📧', title: 'Email Alerts', desc: 'Weekly newsletters delivering curated job opportunities, resource announcements, and platform updates directly to your inbox.' },
                { icon: '📚', title: 'Digital Resources', desc: 'Guides, templates, cheat sheets, and interview prep materials. Over 50% are free; premium resources are priced affordably (₹1–₹49).' },
                { icon: '📅', title: 'Topmate Sessions', desc: 'Career guidance sessions and resource purchases handled through the Topmate platform, subject to Topmate\'s own terms.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-amber-900 mt-2 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <Highlight color="blue">
              <p className="text-sm">
                ℹ️ DevCareers is a <strong>solo-operated passion project</strong>. We strive to maintain high
                quality and daily updates, but services may occasionally be interrupted for maintenance or personal
                reasons. We appreciate your understanding.
              </p>
            </Highlight>
          </SectionCard>

          {/* 4. Permitted Use */}
          <SectionCard id="permitted-use" emoji="✅" title="Permitted Use" borderColor="border-green-400">
            <p>You are welcome to use DevCareers for the following purposes:</p>
            <div className="space-y-3">
              {[
                'Browse and apply to job listings posted on the Platform for your own personal job search.',
                'Subscribe to our newsletter to receive weekly job alerts and platform updates.',
                'Purchase and use digital resources (guides, templates, cheat sheets) strictly for your own personal career development.',
                'Book sessions via Topmate for personal career guidance.',
                'Share links to DevCareers pages with friends or on social media.',
                'Contact us with questions, feedback, or partnership enquiries.',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                  <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 5. Prohibited Use */}
          <SectionCard id="prohibited-use" emoji="🚫" title="Prohibited Use" borderColor="border-red-400">
            <p>
              The following actions are <strong className="text-gray-900">strictly prohibited</strong> on DevCareers.
              Violation may result in immediate termination of your access without notice:
            </p>
            <div className="space-y-3">
              {[
                { icon: '🤖', title: 'Scraping or Automated Access', desc: 'Using bots, scrapers, crawlers, or any automated tools to extract job listings, resources, or any other content from the Platform without prior written permission.' },
                { icon: '💰', title: 'Reselling Resources', desc: 'Reproducing, redistributing, reselling, or commercially exploiting any digital resource purchased from DevCareers. All resources are for personal use only.' },
                { icon: '📢', title: 'Spamming', desc: 'Using any contact information obtained from the Platform to send unsolicited emails, messages, or promotional content to other users or to Meet Soni.' },
                { icon: '👤', title: 'Fake Accounts or Impersonation', desc: 'Creating fictitious identities, impersonating another person or entity, or providing false information when subscribing or purchasing.' },
                { icon: '⚖️', title: 'Unlawful Use', desc: 'Using the Platform for any illegal purpose, including fraud, harassment, or violation of any applicable Indian or international law.' },
                { icon: '🔓', title: 'Circumventing Access Controls', desc: 'Attempting to gain unauthorised access to any part of the Platform, its hosting infrastructure, or any system connected to it.' },
                { icon: '📋', title: 'Reproducing Content', desc: 'Copying, republishing, or claiming ownership of any original content (guides, articles, newsletters) created by DevCareers without explicit permission.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-red-50 rounded-xl border border-red-200">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-red-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 6. Intellectual Property */}
          <SectionCard id="intellectual" emoji="©️" title="Intellectual Property" borderColor="border-purple-400">
            <p>All content on DevCareers falls into two categories of ownership:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
                <h3 className="font-bold text-purple-900 mb-3">📚 DevCareers Owned Content</h3>
                <p className="text-sm text-gray-700 mb-3">
                  The following are the exclusive intellectual property of <strong>Meet Soni / DevCareers</strong>:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {['Digital resources (guides, templates, cheat sheets)', 'Newsletter content and job curation', 'Platform design, code, and branding', 'Original articles and career guidance content', 'The DevCareers name and logo'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">🏢 Third-Party Owned Content</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Job listings are sourced from and remain the property of the respective{' '}
                  <strong>hiring companies</strong>. DevCareers does not claim ownership of:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {['Company names, logos, and branding', 'Job descriptions and requirements', 'Company career pages and application portals', 'Any content belonging to Topmate or other platforms'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Highlight color="amber">
              <p className="text-sm">
                🔒 <strong>Personal Use License:</strong> When you purchase a digital resource from DevCareers, you
                receive a non-exclusive, non-transferable licence to use that resource for your own personal career
                development only. You may <strong>not</strong> share, copy, resell, or redistribute it in any form.
              </p>
            </Highlight>
          </SectionCard>

          {/* 7. Purchases & Refunds */}
          <SectionCard id="purchases" emoji="🛒" title="Purchases & Refunds" borderColor="border-teal-400">
            <p>
              Premium digital resources are currently sold via <strong>Topmate</strong>. Razorpay integration is
              coming soon for direct in-platform purchases.
            </p>

            <div className="space-y-4">
              <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-5">
                <h3 className="font-bold text-teal-900 mb-3">💳 Payment</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold mt-0.5">•</span><span>All payments are processed securely through <strong>Topmate</strong>. DevCareers does not store your payment card details.</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold mt-0.5">•</span><span>Prices are listed in <strong>Indian Rupees (₹)</strong> and are inclusive of any applicable taxes.</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold mt-0.5">•</span><span>Resource prices range from <strong>Free to ₹49</strong> to ensure accessibility for all students.</span></li>
                </ul>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
                <h3 className="font-bold text-orange-900 mb-3">↩️ Refund Policy</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Because our products are <strong>digital downloads</strong>, all sales are generally final.
                  However, we handle refund requests on a <strong>case-by-case basis</strong> with genuine empathy:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span><span><strong>Eligible:</strong> Resource is significantly different from its description, file is corrupted or inaccessible, or technical error prevented delivery.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span><span><strong>Not eligible:</strong> Change of mind after download, or claiming a resource is "not useful" after full access has been granted.</span></li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  To request a refund, email <strong>info.techjobalert@gmail.com</strong> with your order details
                  and reason. We will respond within <strong>48 hours</strong>.
                </p>
              </div>
            </div>
          </SectionCard>

          {/* 8. Disclaimers */}
          <SectionCard id="disclaimer" emoji="⚠️" title="Disclaimers" borderColor="border-pink-400">
            <p>Please read these disclaimers carefully before using DevCareers:</p>

            <div className="space-y-4">
              {[
                {
                  icon: '💼',
                  title: 'No Job Placement Guarantee',
                  desc: 'DevCareers provides verified job listings and career resources as guidance tools. We do not guarantee job placement, interview success, or any specific career outcome. Results depend entirely on the individual user\'s skills, effort, and circumstances.',
                  color: 'bg-yellow-50 border-yellow-200',
                  headColor: 'text-yellow-900',
                },
                {
                  icon: '📋',
                  title: 'Job Listings Accuracy',
                  desc: 'While we manually verify every listing before publishing, job markets change rapidly. Listings may become outdated, deadlines may pass, or companies may close roles without notice. We are not liable for changes that occur after a listing is published.',
                  color: 'bg-orange-50 border-orange-200',
                  headColor: 'text-orange-900',
                },
                {
                  icon: '🏢',
                  title: 'Employer Relationship',
                  desc: 'DevCareers is an independent aggregation platform. We have no formal relationship with any employer listed on the Platform. We are not responsible for the hiring decisions, employment terms, workplace conditions, or conduct of any employer.',
                  color: 'bg-red-50 border-red-200',
                  headColor: 'text-red-900',
                },
                {
                  icon: '📚',
                  title: 'Educational Resources',
                  desc: 'All guides, templates, and resources are provided for informational and educational purposes only. They represent our best knowledge at time of publication but should not be treated as professional legal, financial, or career advice.',
                  color: 'bg-blue-50 border-blue-200',
                  headColor: 'text-blue-900',
                },
                {
                  icon: '🔧',
                  title: 'Platform Availability',
                  desc: 'DevCareers is provided "as is" and "as available." As a solo-operated platform, we cannot guarantee 100% uptime. Scheduled or unscheduled maintenance may temporarily affect access.',
                  color: 'bg-purple-50 border-purple-200',
                  headColor: 'text-purple-900',
                },
              ].map((item, idx) => (
                <div key={idx} className={`border-2 rounded-xl p-5 ${item.color}`}>
                  <h3 className={`font-bold text-lg mb-2 flex items-center gap-2 ${item.headColor}`}>
                    <span>{item.icon}</span> {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 9. Limitation of Liability */}
          <SectionCard id="liability" emoji="⚖️" title="Limitation of Liability" borderColor="border-yellow-400">
            <p>
              To the fullest extent permitted by applicable Indian law, DevCareers and Meet Soni shall not be liable
              for any of the following:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                'Loss of employment opportunities or failure to secure a job through listings on the Platform.',
                'Any direct, indirect, incidental, or consequential damages arising from your use of the Platform.',
                'Loss of data, interruption of service, or technical errors on the Platform.',
                'Actions, decisions, or conduct of any employer to whom you apply via a listing on DevCareers.',
                'Any loss arising from your reliance on information or resources provided on the Platform.',
                'Unauthorised access to your data due to circumstances beyond our reasonable control.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">→</span>
                  <span className="text-gray-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <Highlight color="amber">
              <p className="text-sm">
                In any event, our maximum liability to you shall not exceed the amount you paid for the specific
                resource or service that gave rise to the claim.
              </p>
            </Highlight>
          </SectionCard>

          {/* 10. Third-Party Links */}
          <SectionCard id="third-party" emoji="🔗" title="Third-Party Links & Services" borderColor="border-indigo-400">
            <p>
              DevCareers contains links to external websites including company career pages, Topmate, YouTube, LinkedIn,
              WhatsApp groups, and other platforms. Our relationship with these links is as follows:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-2">✅ What We Do</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">•</span><span>Manually verify job listing links before posting to confirm they lead to legitimate company career pages.</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">•</span><span>Remove or update broken/expired links when reported or discovered.</span></li>
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-900 mb-2">❌ What We Cannot Control</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span><span>Content, privacy practices, or terms of any third-party website after you leave DevCareers.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span><span>Changes made to external links or pages after we verify and publish them.</span></li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Clicking any external link means you are leaving DevCareers and are subject to the terms and privacy
              policy of that third-party site. We recommend reviewing those policies before proceeding.
            </p>
          </SectionCard>

          {/* 11. Termination */}
          <SectionCard id="termination" emoji="🔒" title="Termination" borderColor="border-rose-400">
            <p>
              DevCareers reserves the right to restrict, suspend, or permanently terminate your access to the
              Platform — <strong className="text-gray-900">without prior notice</strong> — if we determine, at our
              sole discretion, that you have:
            </p>
            <div className="space-y-3">
              {[
                'Violated any provision of these Terms & Conditions.',
                'Engaged in scraping, automated access, or attempted to reverse-engineer the Platform.',
                'Purchased a resource and then redistributed or resold it to others.',
                'Provided false information during subscription or purchase.',
                'Engaged in any activity that could harm DevCareers, its users, or its reputation.',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-rose-50 rounded-xl border border-rose-200">
                  <span className="text-rose-500 font-bold flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>
            <Highlight color="amber">
              <p className="text-sm">
                If your access is terminated due to a Terms violation, you will <strong>not be entitled to a
                refund</strong> for any purchases made. If you believe a termination was made in error, you may
                appeal by emailing <strong>info.techjobalert@gmail.com</strong>.
              </p>
            </Highlight>
          </SectionCard>

          {/* 12. Changes to Terms */}
          <SectionCard id="changes" emoji="📝" title="Changes to Terms" borderColor="border-cyan-400">
            <p>
              We may update these Terms from time to time to reflect changes in our services, legal requirements,
              or business practices. Here's our commitment when we do:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                'The "Last Updated" date at the top of this page will be revised immediately.',
                'For significant changes (e.g., new restrictions, pricing changes, or new services), we will notify all subscribers via email before the changes take effect.',
                'Continued use of DevCareers after updated Terms are published constitutes your acceptance of the revised Terms.',
                'If you disagree with any updated Terms, you may unsubscribe and discontinue use of the Platform.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-cyan-50 rounded-xl border border-cyan-200">
                  <span className="text-cyan-500 font-bold flex-shrink-0 mt-0.5">→</span>
                  <span className="text-gray-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* 13. Governing Law */}
          <SectionCard id="governing-law" emoji="🏛️" title="Governing Law & Disputes" borderColor="border-emerald-400">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of{' '}
              <strong className="text-gray-900">India</strong>, including but not limited to:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '💻', title: 'IT Act, 2000', desc: 'The Information Technology Act and its amendments governing digital platforms and electronic commerce in India.' },
                { icon: '🛡️', title: 'Consumer Protection Act, 2019', desc: 'Governs consumer rights in e-commerce, digital goods, and online service transactions.' },
                { icon: '©️', title: 'Copyright Act, 1957', desc: 'Protects DevCareers\' original content including guides, resources, and platform design.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-bold text-emerald-900 mt-2 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Any disputes arising out of or in connection with these Terms shall first be attempted to be resolved
              amicably by contacting Meet Soni at <strong>info.techjobalert@gmail.com</strong>. If unresolved, disputes
              shall be subject to the jurisdiction of the courts in{' '}
              <strong>Shimoga (Shivamogga), Karnataka, India</strong>.
            </p>
          </SectionCard>

          {/* 14. Contact */}
          <SectionCard id="contact" emoji="💬" title="Contact Us" borderColor="border-orange-500">
            <p>
              If you have any questions about these Terms &amp; Conditions, please reach out. Meet personally reads
              and responds to every message — no bots, no auto-replies.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md flex-shrink-0">
                  MS
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Meet Soni</h3>
                  <p className="text-amber-700 font-medium text-sm">Founder & Solo Operator, DevCareers</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Primary Email:</strong>{' '}
                  <a href="mailto:info.techjobalert@gmail.com" className="text-amber-600 hover:underline">
                    info.techjobalert@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Alternative Email:</strong>{' '}
                  <a href="mailto:meethcodes@gmail.com" className="text-amber-600 hover:underline">
                    meethcodes@gmail.com
                  </a>
                </p>
                <p><strong>Response Time:</strong> Within 6–48 hours</p>
                <p><strong>Location:</strong> Shimoga, Karnataka, India</p>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 italic">
              You can also use the{' '}
              <a href="/contact-us" className="text-amber-600 hover:underline font-medium">Contact Us page</a>{' '}
              on our website for a quicker response.
            </p>
          </SectionCard>

        </main>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-4 mt-4">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-gray-400 text-sm">Last updated: March 2026</p>
          <p className="text-gray-400 text-sm">© 2026 DevCareers. All rights reserved.</p>
          <p className="text-gray-300 font-medium">Built with ❤️ by Meet Soni for students everywhere</p>
        </div>
      </div>

    </div>
  )
}

export default Terms_and_conditions