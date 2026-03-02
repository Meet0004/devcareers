import React, { useState } from 'react'

const sections = [
  { id: 'overview', title: 'Overview', emoji: '🛡️' },
  { id: 'data-collected', title: 'Data We Collect', emoji: '📋' },
  { id: 'how-collected', title: 'How We Collect Data', emoji: '🔍' },
  { id: 'how-used', title: 'How We Use Your Data', emoji: '⚙️' },
  { id: 'storage', title: 'Data Storage & Security', emoji: '🔒' },
  { id: 'analytics', title: 'Analytics & Cookies', emoji: '📊' },
  { id: 'third-party', title: 'Third-Party Services', emoji: '🔗' },
  { id: 'communications', title: 'Communications', emoji: '📧' },
  { id: 'your-rights', title: 'Your Rights', emoji: '✅' },
  { id: 'children', title: "Children's Privacy", emoji: '👶' },
  { id: 'changes', title: 'Policy Changes', emoji: '📝' },
  { id: 'contact', title: 'Contact Us', emoji: '💬' },
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
  const colorMap = {
    amber: 'bg-amber-50 border-amber-300 text-amber-900',
    green: 'bg-green-50 border-green-300 text-green-900',
    blue: 'bg-blue-50 border-blue-300 text-blue-900',
    red: 'bg-red-50 border-red-300 text-red-900',
  }
  return (
    <div className={`border-2 rounded-xl p-4 ${colorMap[color]}`}>
      {children}
    </div>
  )
}

const Privacy_Policy = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const scrollTo = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const borderColors = [
    'border-amber-400', 'border-orange-400', 'border-blue-400', 'border-green-400',
    'border-purple-400', 'border-teal-400', 'border-pink-400', 'border-yellow-400',
    'border-indigo-400', 'border-rose-400', 'border-cyan-400', 'border-emerald-400',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">

      {/* Hero */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔒 Your Privacy Matters
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            We believe in complete transparency. Here's exactly what data we collect, how we use it, and your rights.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">📅 Last Updated: March 2026</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">🏠 Solo Operated by Meet Soni</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">📍 Shimoga, Karnataka, India</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">

        {/* Sticky Sidebar Nav */}
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

        {/* Main Content */}
        <main className="flex-1 space-y-8 min-w-0">

          {/* 1. Overview */}
          <SectionCard id="overview" emoji="🛡️" title="Overview" borderColor="border-amber-400">
            <p>
              Welcome to <strong className="text-gray-900">DevCareers</strong> (formerly Tech Job Alert). This Privacy
              Policy explains how we handle your personal information when you visit our website, subscribe to our
              newsletter, make a purchase, or contact us.
            </p>
            <p>
              DevCareers is a <strong className="text-gray-900">solo-operated platform</strong> run entirely by{' '}
              <strong className="text-gray-900">Meet Soni</strong>. There are no corporate shareholders, no data
              brokerage deals, and no hidden agenda — just a passion project built to help students find jobs.
            </p>
            <Highlight color="amber">
              <p className="font-semibold">
                🤝 Our Privacy Promise: We will <u>never sell your personal data</u> to any third party. Ever.
              </p>
            </Highlight>
            <p>
              By using DevCareers, you agree to the practices described in this policy. If you have any questions,
              reach out at <strong>info.techjobalert@gmail.com</strong>.
            </p>
          </SectionCard>

          {/* 2. Data We Collect */}
          <SectionCard id="data-collected" emoji="📋" title="Data We Collect" borderColor="border-orange-400">
            <p>We collect only the minimum data necessary to provide our services. Here's exactly what we collect:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">👤 Personal Information</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span><strong>Name</strong> — collected via subscription form, purchase/query form, or Topmate bookings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span><strong>Email Address</strong> — collected via subscription form, purchase/query form, or Topmate bookings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span><strong>Phone Number</strong> — collected only Topmate wher you buy something</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">📊 Usage Data (Anonymous)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">•</span>
                    <span><strong>Pages visited</strong> — which pages you view on our site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">•</span>
                    <span><strong>Traffic sources</strong> — how you found DevCareers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">•</span>
                    <span><strong>Device/browser type</strong> — for platform optimisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">•</span>
                    <span><strong>Geographic region</strong> — country/city level only, via Vercel Analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            <Highlight color="green">
              <p className="text-sm">
                ✅ <strong>We do NOT collect:</strong> passwords, payment card details (handled entirely by Topmate),
                government IDs, or any sensitive personal information.
              </p>
            </Highlight>
          </SectionCard>

          {/* 3. How We Collect Data */}
          <SectionCard id="how-collected" emoji="🔍" title="How We Collect Data" borderColor="border-blue-400">
            <p>Your data reaches us through the following touchpoints only:</p>

            <div className="space-y-4">
              {[
                {
                  emoji: '📬',
                  title: 'Email Subscription Form',
                  desc: 'When you subscribe on our website to receive weekly job alerts and platform updates, you provide your name, email address and job category. This is entirely voluntary.',
                },
                {
                  emoji: '🛒',
                  title: 'Purchase / Query Form',
                  desc: 'When you fill out a form to buy a resource or enquire about a product, you provide your name, email, and optionally phone number. Used solely to process your request.',
                },
                {
                  emoji: '📅',
                  title: 'Topmate Bookings',
                  desc: "When you book a session or purchase a resource via Topmate, your name and email are shared with us through Topmate's platform. Topmate's own privacy policy also applies.",
                },
                {
                  emoji: '📈',
                  title: 'Vercel Analytics (Automatic)',
                  desc: 'Our website is hosted on Vercel, which automatically collects anonymous usage data (page views, performance metrics, device type). Not linked to any individual identity.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 4. How We Use Your Data */}
          <SectionCard id="how-used" emoji="⚙️" title="How We Use Your Data" borderColor="border-green-400">
            <p>Your data is used for one purpose only: to provide and improve DevCareers' services for you.</p>

            <div className="space-y-3">
              {[
                { icon: '📧', title: 'Send weekly job alerts & updates', desc: 'We email you curated job opportunities, new resource announcements, and platform news — only if you subscribed.' },
                { icon: '💬', title: 'Respond to your queries', desc: 'If you fill out a purchase/query form or contact us, we use your details to respond to you directly.' },
                { icon: '🛒', title: 'Process resource purchases', desc: 'Name and email are used to deliver digital products and confirm transactions made through Topmate.' },
                { icon: '📊', title: 'Improve the platform', desc: 'Anonymous Vercel Analytics data helps us understand which pages are popular, identify bugs, and improve performance.' },
                { icon: '🔔', title: 'Important service announcements', desc: 'Occasionally we may send you notices about significant platform changes or policy updates.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 hover:bg-amber-50 rounded-xl transition-colors border border-transparent hover:border-amber-200">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Highlight color="red">
              <p className="font-semibold">
                🚫 <strong>We will NEVER:</strong> sell your data, share it with advertisers, use it for profiling,
                send unsolicited spam, or use it for any purpose beyond those listed above.
              </p>
            </Highlight>
          </SectionCard>

          {/* 5. Storage & Security */}
          <SectionCard id="storage" emoji="🔒" title="Data Storage & Security" borderColor="border-purple-400">
            <p>We take reasonable steps to keep your data safe. Here's exactly how your information is stored:</p>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5 space-y-4">
              {[
                {
                  icon: '📄',
                  title: 'Google Sheets (Subscriber Data)',
                  desc: 'Subscriber names and emails are stored in a private Google Sheet accessible only by Meet Soni, protected by Google account security with 2-factor authentication.',
                },
                {
                  icon: '🌐',
                  title: 'Vercel (Website Hosting)',
                  desc: "Our website is hosted on Vercel's infrastructure with industry-standard security. Anonymous analytics data is stored on Vercel's servers per their data retention policy.",
                },
                {
                  icon: '📅',
                  title: 'Topmate (Booking & Purchase Data)',
                  desc: 'Booking and payment data is stored securely on Topmate\'s platform. We do not store payment card information ourselves.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-purple-900">{item.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              We retain your personal data for as long as needed to provide services. If you request deletion, we
              will remove your data from our records within <strong>7 business days</strong>.
            </p>

            <Highlight color="amber">
              <p className="text-sm">
                ⚠️ <strong>Note:</strong> While we take reasonable precautions, no method of electronic storage is
                100% secure. We encourage you to use strong passwords on your email account.
              </p>
            </Highlight>
          </SectionCard>

          {/* 6. Analytics & Cookies */}
          <SectionCard id="analytics" emoji="📊" title="Analytics & Cookies" borderColor="border-teal-400">
            <h3 className="font-bold text-gray-900 text-lg">Vercel Analytics</h3>
            <p>
              We use <strong>Vercel Analytics</strong> to understand how visitors use DevCareers. This collects
              anonymous, aggregated data including page views, visitor counts, referral sources, device types, and
              geographic region. This data is <strong>not linked to any individual identity</strong>.
            </p>

            <h3 className="font-bold text-gray-900 text-lg">Cookies</h3>
            <p>
              Currently, DevCareers does <strong>not use cookies</strong> for tracking or advertising purposes.
            </p>

            <Highlight color="amber">
              <p className="text-sm">
                🔜 <strong>Future Update — Google AdSense:</strong> We plan to introduce Google AdSense ads to help
                sustain the platform. When implemented, AdSense uses cookies to serve relevant ads. We will update
                this policy and add a cookie consent banner <strong>before</strong> enabling ads. You will be
                informed and given a choice.
              </p>
            </Highlight>

            <p className="text-sm text-gray-600">
              Once ads are enabled, you can manage cookie preferences via the consent banner or your browser's
              built-in settings.
            </p>
          </SectionCard>

          {/* 7. Third-Party Services */}
          <SectionCard id="third-party" emoji="🔗" title="Third-Party Services" borderColor="border-pink-400">
            <p>
              DevCareers integrates with a small number of trusted third-party services. Each has its own privacy
              policy which we encourage you to review:
            </p>

            <div className="space-y-4">
              {[
                {
                  name: 'Topmate',
                  url: 'https://topmate.io/privacy',
                  purpose: 'Handles bookings and resource purchases. Collects your name, email, and payment information on their platform.',
                  color: 'bg-purple-50 border-purple-200',
                  headColor: 'text-purple-900',
                },
                {
                  name: 'Vercel',
                  url: 'https://vercel.com/legal/privacy-policy',
                  purpose: 'Website hosting and anonymous performance analytics. Data is aggregated and non-identifiable.',
                  color: 'bg-gray-50 border-gray-200',
                  headColor: 'text-gray-900',
                },
                {
                  name: 'Google AdSense (Upcoming)',
                  url: 'https://policies.google.com/privacy',
                  purpose: 'Will be used for non-intrusive ads to sustain the platform. Uses cookies for ad personalisation. Will only be implemented with proper user consent.',
                  color: 'bg-blue-50 border-blue-200',
                  headColor: 'text-blue-900',
                },
              ].map((service, idx) => (
                <div key={idx} className={`border-2 rounded-xl p-5 ${service.color}`}>
                  <h3 className={`font-bold text-lg mb-1 ${service.headColor}`}>{service.name}</h3>
                  <p className="text-sm text-gray-700 mb-2">{service.purpose}</p>
                  <a href={service.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-amber-600 hover:underline font-medium">
                    View their Privacy Policy →
                  </a>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              We do not embed any social media tracking pixels (e.g. Facebook Pixel, Twitter Pixel) on our website.
            </p>
          </SectionCard>

          {/* 8. Communications */}
          <SectionCard id="communications" emoji="📧" title="Communications" borderColor="border-yellow-400">
            <p>If you subscribe to DevCareers, here's exactly what you'll receive from us:</p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '💼', title: 'Weekly Job Alerts', desc: 'Curated internships and entry-level roles from 300+ companies, delivered weekly.' },
                { icon: '📚', title: 'New Resource Announcements', desc: 'Notifications when new guides, templates, or cheat sheets become available.' },
                { icon: '🔔', title: 'Platform Updates', desc: 'Important news about DevCareers features, improvements, or policy changes.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-bold text-amber-900 mt-2 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <Highlight color="green">
              <p className="text-sm">
                🚪 <strong>Unsubscribe anytime:</strong> Every email contains an unsubscribe link at the bottom.
                You can also email <strong>info.techjobalert@gmail.com</strong> to be removed. We'll process your
                request within 48 hours.
              </p>
            </Highlight>

            <p className="text-sm text-gray-600">
              We will never send unsolicited promotional emails, spam, or sell access to our mailing list.
            </p>
          </SectionCard>

          {/* 9. Your Rights */}
          <SectionCard id="your-rights" emoji="✅" title="Your Rights" borderColor="border-indigo-400">
            <p>
              You have full control over your personal data. Exercise any of the rights below by emailing{' '}
              <strong>info.techjobalert@gmail.com</strong> or using our contact form:
            </p>

            <div className="space-y-3">
              {[
                { icon: '👁️', right: 'Right to Access', desc: 'Request a copy of all personal data we hold about you.' },
                { icon: '✏️', right: 'Right to Correction', desc: 'Ask us to correct inaccurate or incomplete information.' },
                { icon: '🗑️', right: 'Right to Deletion', desc: 'Request that we delete all your personal data. We will process this within 7 business days.' },
                { icon: '📤', right: 'Right to Portability', desc: 'Request your data in a portable format (e.g., CSV).' },
                { icon: '🚫', right: 'Right to Withdraw Consent', desc: 'Unsubscribe from emails or withdraw consent for data processing at any time.' },
                { icon: '🛑', right: 'Right to Object', desc: 'Object to your data being used for any purpose beyond those you originally consented to.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.right}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              We respond to all requests within <strong>7 business days</strong>. There is no fee for exercising
              your rights.
            </p>
          </SectionCard>

          {/* 10. Children's Privacy */}
          <SectionCard id="children" emoji="👶" title="Children's Privacy" borderColor="border-rose-400">
            <p>
              DevCareers is open to users aged <strong>13 and above</strong>. We do not knowingly collect personal
              data from children under 13.
            </p>
            <p>
              If you are a parent or guardian and believe your child under 13 has provided us with personal data,
              please contact us immediately at <strong>info.techjobalert@gmail.com</strong> and we will delete that
              information promptly.
            </p>
            <Highlight color="amber">
              <p className="text-sm">
                📌 <strong>For users aged 13–17:</strong> We recommend reviewing this policy with a parent or
                guardian. Our platform contains career guidance and job listings appropriate for students of all ages.
              </p>
            </Highlight>
          </SectionCard>

          {/* 11. Policy Changes */}
          <SectionCard id="changes" emoji="📝" title="Policy Changes" borderColor="border-cyan-400">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. When we do:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                'The "Last Updated" date at the top will be revised.',
                'For significant changes (e.g., introduction of ads or new data collection), we will notify subscribers via email in advance.',
                'Continued use of DevCareers after a policy update constitutes acceptance of the revised policy.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">→</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              Previous versions of this policy can be requested by emailing us.
            </p>
          </SectionCard>

          {/* 12. Contact */}
          <SectionCard id="contact" emoji="💬" title="Contact Us" borderColor="border-emerald-400">
            <p>
              Have questions, concerns, or data requests? As a solo-operated platform, Meet personally reads and
              responds to every message.
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
              <a href="/contact-us" className="text-amber-600 hover:underline font-medium">
                Contact Us page
              </a>{' '}
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
          <p className="text-gray-500 text-xs mt-3">
            Future domain: devcareers.com • Currently operating as solo passion project
          </p>
        </div>
      </div>

    </div>
  )
}

export default Privacy_Policy