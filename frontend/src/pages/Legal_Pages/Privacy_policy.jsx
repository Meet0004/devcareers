import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactBlock from '../../components/common/ContactBlock'
import { siteData } from '../../config/siteData'

const FOUNDER_NAME = siteData.founder.name
const FOUNDER_LOCATION = siteData.founder.location
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL
const SITE_NAME = import.meta.env.VITE_SITE_NAME
const LAST_UPDATED = import.meta.env.VITE_POLICY_LAST_UPDATED

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'data-collected', title: 'Data We Collect' },
  { id: 'how-collected', title: 'How We Collect Data' },
  { id: 'how-used', title: 'How We Use Your Data' },
  { id: 'storage', title: 'Data Storage and Security' },
  { id: 'analytics', title: 'Analytics and Cookies' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'communications', title: 'Communications' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'changes', title: 'Policy Changes' },
  { id: 'contact', title: 'Contact' },
]

export default function Privacy_Policy() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('overview')
  const observerRef = useRef(null)

  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)

  useEffect(() => {
    const onScroll = () => { lastScrollY.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scrollingDown = window.scrollY >= lastScrollY.current

          if (scrollingDown && entry.isIntersecting) {
            // Scrolling down: activate when section enters the top zone
            setActiveSection(entry.target.id)
          } else if (!scrollingDown && !entry.isIntersecting) {
            // Scrolling up: activate the previous section when current one leaves top
            const idx = sections.findIndex(s => s.id === entry.target.id)
            if (idx > 0) setActiveSection(sections[idx - 1].id)
          }
        })
      },
      { rootMargin: '-10% 0px -85% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 80 // adjust this to match your navbar height in px
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .policy-body h2 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; padding-bottom: 0.5rem;}
        .policy-body h3 { font-size: 1rem; font-weight: 600; color: #1f2937; margin: 1.25rem 0 0.5rem; }
        .policy-body p  { font-size: 0.9375rem; color: #374151; line-height: 1.75; margin-bottom: 0.75rem; }
        .policy-body ul { list-style: none; padding: 0; margin: 0.5rem 0 0.75rem; }
        .policy-body ul li { font-size: 0.9375rem; color: #374151; line-height: 1.75; padding-left: 1.25rem; position: relative; margin-bottom: 0.25rem; }
        .policy-body ul li::before { content: ''; position: absolute; left: 0; top: 0.7rem; width: 5px; height: 5px; border-radius: 50%; background: #f97316; }
        .policy-body a  { color: #ea580c; text-decoration: underline; }
        .policy-body a:hover { color: #ea580c; }
        .policy-body .notice { background: #fff7ed; border-left: 3px solid #f97316; padding: 0.875rem 1rem; border-radius: 0 0.5rem 0.5rem 0; margin: 1rem 0; font-size: 0.9rem; color: #374151; line-height: 1.7; }
        .policy-body .notice strong { color: #c2410c; }
        .policy-body .notice-green { background: #f0fdf4; border-left-color: #22c55e; }
        .policy-body .notice-red   { background: #fff5f5; border-left-color: #ef4444; }
        .policy-body section { padding: 1.2rem 0; border-bottom: 1px solid #f3f4f6; }
        .policy-body section:last-child { border-bottom: none; }
        .sidebar-link { display: block; padding: 0.375rem 0.75rem; font-size: 0.8125rem; color: #6b7280; border-left: 2px solid transparent; transition: all 0.15s; line-height: 1.5; cursor: pointer; background: none; border-top: none; border-right: none; border-bottom: none; text-align: left; width: 100%; }
        .sidebar-link:hover  { color: #f97316; border-left-color: #fed7aa; }
        .sidebar-link.active { color: #f97316; border-left-color: #f97316; font-weight: 600; background: #fff7ed; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 0.75rem 0; }
        @media (max-width: 640px) { .two-col { grid-template-columns: 1fr; } }
        .data-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; }
        .data-box h3 { margin-top: 0; }
        .three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 0.75rem 0; }
        @media (max-width: 640px) { .three-col { grid-template-columns: 1fr; } }
        .right-item { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; }
        .right-item h3 { margin-top: 0; }
        .service-block { border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; margin-bottom: 0.75rem; }
        .service-block h3 { margin-top: 0; }
        .service-block a { font-size: 0.8125rem; }
      `}</style>

      {/* Top bar */}
      <div style={{ background: '#fff7ed', borderBottom: '1px solid #fed7aa', padding: '0.625rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8125rem', color: '#92400e', fontWeight: 500 }}>Last Updated: {LAST_UPDATED}</span>
          <span style={{ fontSize: '0.8125rem', color: '#92400e' }}>Operated by {FOUNDER_NAME} · {FOUNDER_LOCATION}</span>
        </div>
      </div>

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '2.5rem 1rem 4rem' }}>
        {/* Page header */}
        <div style={{ marginBottom: '.5rem' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.7 }}>
            We believe in complete transparency about how your data is handled. This policy explains exactly what we collect, why we collect it, and what rights you have over it.
          </p>
        </div>

        {/* Layout */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>

          {/* Main content */}
          <main style={{ flex: 1, minWidth: 0 }} className="policy-body">

            <section id="overview">
              <h2>Overview</h2>
              <p>
                Welcome to <strong>{SITE_NAME}</strong>. This Privacy Policy explains how we handle your personal information when you visit our website, subscribe to our newsletter, make a purchase, or contact us.
              </p>
              <p>
                {SITE_NAME} is a solo-operated platform run entirely by <strong>{FOUNDER_NAME}</strong>. There are no corporate shareholders, no data brokerage deals, and no hidden agenda. This is a passion project built to help students find jobs.
              </p>
              <div className="notice">
                <strong>Our privacy promise:</strong> We will never sell your personal data to any third party, under any circumstance. If you have questions, reach out via our <a href="/contact-us">Contact page</a>.
              </div>
              <p>
                By using {SITE_NAME}, you agree to the practices described in this policy. This policy should be read alongside our <a href="/terms-and-conditions">Terms and Conditions</a> and <a href="/disclaimer">Disclaimer</a>.
              </p>
            </section>

            <section id="data-collected">
              <h2>Data We Collect</h2>
              <p>We collect only the minimum data necessary to provide our services. Here is exactly what we collect and nothing more.</p>
              <div className="two-col">
                <div className="data-box">
                  <h3>Personal Information</h3>
                  <ul>
                    <li><strong>Name</strong> - collected via subscription form, contact form, or Topmate bookings</li>
                    <li><strong>Email address</strong> - collected via subscription form, contact form, or Topmate bookings</li>
                    <li><strong>Phone number</strong> - collected only through Topmate when you make a purchase</li>
                    <li><strong>Message content</strong> - when you contact us through our contact form</li>
                  </ul>
                </div>
                <div className="data-box">
                  <h3>Usage Data (Anonymous)</h3>
                  <ul>
                    <li><strong>Pages visited</strong> - which pages you view on our site</li>
                    <li><strong>Traffic sources</strong> - how you found {SITE_NAME}</li>
                    <li><strong>Device and browser type</strong> - for platform optimisation</li>
                    <li><strong>Geographic region</strong> - country and city level only, via Google Analytics</li>
                    <li><strong>Performance metrics</strong> - page load times and error rates</li>
                  </ul>
                </div>
              </div>
              <div className="notice notice-green">
                <strong>What we do not collect:</strong> passwords, payment card details (handled entirely by Topmate), government IDs, social security numbers, biometric data, or any sensitive personal information not listed above.
              </div>
              <h3>Google AdSense and Advertising Cookies</h3>
              <p>
                We currently use Google AdSense to display advertisements on this platform. Google AdSense uses cookies and similar tracking technologies to serve advertisements that are relevant to you based on your browsing activity. This includes the use of the DoubleClick cookie, which enables Google and its partners to serve ads based on your visit to this site and other sites on the internet.
              </p>
              <p>
                You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>. You can also opt out of a third-party vendor's use of cookies by visiting the <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.
              </p>
            </section>

            <section id="how-collected">
              <h2>How We Collect Data</h2>
              <p>Your data reaches us through the following touchpoints only.</p>

              <h3>Email Subscription Form</h3>
              <p>When you subscribe on our website to receive weekly job alerts and platform updates, you voluntarily provide your name and email address. Subscription is entirely optional and you can unsubscribe at any time.</p>

              <h3>Contact and Query Forms</h3>
              <p>When you fill out our contact form or purchase query form, you provide your name, email, and the content of your message. This information is used solely to respond to your enquiry.</p>

              <h3>Topmate Bookings and Purchases</h3>
              <p>When you book a session or purchase a resource via Topmate, your name and email are shared with us through Topmate's platform. Topmate's own privacy policy also applies to these transactions. We encourage you to review it at <a href="https://topmate.io/privacy" target="_blank" rel="noopener noreferrer">topmate.io/privacy</a>.</p>

              <h3>Google Analytics (Automatic)</h3>
              <p>We use Google Analytics to collect anonymous usage data including page views, traffic sources, session duration, device type, and geographic region. This data is aggregated and cannot be used to identify you personally. Google Analytics uses cookies to collect this information. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

              <h3>Google AdSense (Advertising)</h3>
              <p>
                Google AdSense automatically collects certain information through cookies and web beacons when you visit pages on our site that display ads. This collection is subject to Google's privacy policy, which you can review at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
              </p>
            </section>

            <section id="how-used">
              <h2>How We Use Your Data</h2>
              <p>Your data is used only to provide and improve {SITE_NAME}'s services. We do not use your data for any purpose you have not explicitly consented to.</p>

              <h3>Delivering Services</h3>
              <ul>
                <li>Sending weekly job alerts and platform updates to subscribers</li>
                <li>Responding to your queries sent through our contact form</li>
                <li>Processing and confirming resource purchases made through Topmate</li>
                <li>Delivering digital resources to your email when purchased</li>
              </ul>

              <h3>Improving the Platform</h3>
              <ul>
                <li>Analysing anonymous Google Analytics data to understand which pages are most useful</li>
                <li>Identifying and fixing technical issues and broken links</li>
                <li>Improving page performance and user experience based on usage patterns</li>
              </ul>

              <h3>Legal and Compliance</h3>
              <ul>
                <li>Maintaining transaction records as required by applicable Indian law</li>
                <li>Responding to lawful requests from government or regulatory authorities</li>
                <li>Enforcing our Terms and Conditions and protecting our rights</li>
              </ul>

              <div className="notice notice-red">
                <strong>We will never:</strong> sell your data, share it with advertisers for targeting purposes, use it for profiling unrelated to our services, send unsolicited promotional emails, or use it for any purpose not listed in this policy.
              </div>
            </section>

            <section id="storage">
              <h2>Data Storage and Security</h2>
              <p>We take reasonable and appropriate measures to protect your data. Here is exactly where and how your information is stored.</p>

              <h3>Subscriber Data</h3>
              <p>Subscriber names and email addresses are stored in a private Google Sheet accessible only by {FOUNDER_NAME}. This sheet is protected by Google account security with two-factor authentication enabled.</p>

              <h3>Website Hosting</h3>
              <p>Our website is hosted on Hostinger's infrastructure, which employs industry-standard security practices. You can review Hostinger's security and privacy practices at <a href="https://www.hostinger.com/privacy-policy" target="_blank" rel="noopener noreferrer">hostinger.com/privacy-policy</a>.</p>

              <h3>Purchase and Booking Data</h3>
              <p>Booking and payment data is stored securely on Topmate's platform. We do not store, process, or have access to your payment card information at any point.</p>

              <h3>Data Retention</h3>
              <p>We retain your personal data only for as long as necessary to provide our services or as required by applicable law. If you request deletion of your data, we will remove it from our records within seven business days.</p>

              <div className="notice">
                <strong>Security limitation notice:</strong> While we take reasonable precautions, no method of electronic storage is 100% secure. In the unlikely event of a data breach that affects your personal information, we will notify you promptly by email.
              </div>
            </section>

            <section id="analytics">
              <h2>Analytics and Cookies</h2>

              <h3>Google Analytics</h3>
              <p>
                We use Google Analytics to understand how visitors use {SITE_NAME}. This collects anonymous, aggregated data including page views, visitor counts, referral sources, session duration, device types, and geographic region. Google Analytics uses cookies to collect this data. While the data is aggregated and non-personally-identifying on our end, Google's own data practices apply - you can review them at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>. To opt out of Google Analytics tracking entirely, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
              </p>

              <h3>Cookies</h3>
              <p>
                Our website uses cookies for the following purposes:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for the website to function correctly. These cannot be disabled.</li>
                <li><strong>Analytics cookies:</strong> Used by Google Analytics to collect anonymous usage statistics. These do not identify you personally on our end, though they are subject to Google's data policies.</li>
                <li><strong>Advertising cookies:</strong> Used by Google AdSense to serve relevant advertisements. These may track your browsing activity across websites to personalise the ads you see.</li>
              </ul>

              <h3>Managing Cookie Preferences</h3>
              <p>
                You can control advertising cookies at any time through <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. You can opt out of Google Analytics through the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Add-on</a>. You can also disable cookies entirely through your browser settings, though this may affect how parts of the website function. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when cookies are set.
              </p>

              <h3>Google AdSense and the DoubleClick Cookie</h3>
              <p>
                Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DoubleClick cookie enables it and its partners to serve ads based on your visit to this site and other sites on the internet. Users may opt out of the use of the DoubleClick cookie by visiting the <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings page</a>. Alternatively, you can opt out of a third-party vendor's use of cookies by visiting the <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a> opt-out page.
              </p>
            </section>

            <section id="third-party">
              <h2>Third-Party Services</h2>
              <p>{SITE_NAME} integrates with a small number of trusted third-party services. Each operates under its own privacy policy, which we encourage you to review.</p>

              <div className="service-block">
                <h3>Topmate</h3>
                <p>Handles resource purchases and session bookings. Collects your name, email, and payment information on their platform. We receive only your name, email, and details of what you purchased.</p>
                <a href="https://topmate.io/privacy" target="_blank" rel="noopener noreferrer">View Topmate's Privacy Policy</a>
              </div>

              <div className="service-block">
                <h3>Hostinger</h3>
                <p>Our website is hosted on Hostinger's servers. Hostinger provides the infrastructure on which {SITE_NAME} runs. Server-level logs (such as IP addresses and request timestamps) may be retained by Hostinger in accordance with their own data retention policies.</p>
                <a href="https://www.hostinger.com/privacy-policy" target="_blank" rel="noopener noreferrer">View Hostinger's Privacy Policy</a>
              </div>

              <div className="service-block">
                <h3>Google Analytics</h3>
                <p>Used to collect anonymous, aggregated data about how visitors use {SITE_NAME}, including page views, traffic sources, session duration, device types, and geographic region. This helps us understand what content is most useful and how to improve the platform. Google Analytics uses cookies and may process data on Google's servers. You can opt out at any time using the Google Analytics Opt-out Browser Add-on.</p>
                <a href="https://support.google.com/analytics/answer/7318509?hl=en" target="_blank" rel="noopener noreferrer">View Google's Privacy Policy</a>
              </div>

              <div className="service-block">
                <h3>Google AdSense</h3>
                <p>Used to display relevant advertisements on our platform to support its continued operation. Google may use cookies to serve ads based on your prior visits to this website and other websites. You may opt out of personalised advertising through Google's ad settings.</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">View Google's Privacy Policy</a>
              </div>

              <div className="service-block">
                <h3>EmailJS</h3>
                <p>Used to transmit messages submitted through our contact form to our email inbox. Your name, email, and message content are passed through EmailJS's servers solely to deliver your message. EmailJS does not retain your data after delivery.</p>
                <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">View EmailJS's Privacy Policy</a>
              </div>

              <p>We do not embed any social media tracking pixels such as Facebook Pixel or Twitter Pixel on our website.</p>
            </section>

            <section id="communications">
              <h2>Communications</h2>
              <p>If you subscribe to {SITE_NAME}, here is exactly what you will receive from us and nothing else.</p>

              <h3>What We Send</h3>
              <ul>
                <li><strong>Weekly job alerts:</strong> Curated internships and entry-level roles verified from company career pages, delivered once per week.</li>
                <li><strong>New resource announcements:</strong> Notifications when new guides, templates, or cheat sheets become available on the platform.</li>
                <li><strong>Platform updates:</strong> Occasional notices about significant changes to {SITE_NAME}, our policies, or features.</li>
                <li><strong>Purchase confirmations:</strong> Transactional emails confirming your resource purchase and delivery details.</li>
              </ul>

              <h3>Unsubscribing</h3>
              <p>
                Every email we send contains an unsubscribe link at the bottom. You can also reach out via our <a href="/contact-us">Contact page</a> to be removed from our mailing list. We will process your request within 48 hours.
              </p>

              <div className="notice notice-green">
                We will never send unsolicited promotional emails, spam, or sell access to our mailing list to any third party.
              </div>
            </section>

            <section id="your-rights">
              <h2>Your Rights</h2>
              <p>
                You have full control over your personal data. To exercise any of the rights below, email {RECIPIENT_EMAIL} with the subject line "Data Rights Request". We respond to all requests within seven business days at no charge.
              </p>

              <div className="three-col">
                {[
                  { title: 'Right to Access', desc: 'Request a copy of all personal data we hold about you.' },
                  { title: 'Right to Correction', desc: 'Ask us to correct inaccurate or incomplete information.' },
                  { title: 'Right to Deletion', desc: 'Request that we permanently delete all your personal data within 7 business days.' },
                  { title: 'Right to Portability', desc: 'Request your data in a portable, machine-readable format such as CSV.' },
                  { title: 'Right to Withdraw Consent', desc: 'Unsubscribe from emails or withdraw consent for data processing at any time.' },
                  { title: 'Right to Object', desc: 'Object to your data being used for any purpose beyond those you originally consented to.' },
                ].map((item) => (
                  <div key={item.title} className="right-item">
                    <h3>{item.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="children">
              <h2>Children's Privacy</h2>
              <p>
                {SITE_NAME} is intended for users who are 18 years of age or older. We do not knowingly collect personal data from anyone under the age of 18.
              </p>
              <p>
                If you are a parent or guardian and believe your child under 18 has provided us with personal data, please contact us immediately at {RECIPIENT_EMAIL}. We will delete that information promptly upon verification.
              </p>
              <p>
                By using {SITE_NAME} and providing us with your personal information, you represent that you are at least 18 years of age.
              </p>
            </section>

            <section id="changes">
              <h2>Policy Changes</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, the services we offer, or applicable legal requirements. When we make changes:
              </p>
              <ul>
                <li>The "Last Updated" date at the top of this page will be revised immediately.</li>
                <li>For significant changes such as the introduction of new data collection practices or new advertising partners, we will notify subscribers by email at least seven days before the changes take effect.</li>
                <li>Continued use of {SITE_NAME} after a policy update constitutes your acceptance of the revised policy.</li>
                <li>If you disagree with any updated terms, you may unsubscribe and discontinue use of the platform. You may also request deletion of your data as described in the Your Rights section above.</li>
              </ul>
              <p>
                Previous versions of this policy are available upon request by contacting us via our <a href="/contact-us">Contact page</a>.
              </p>
            </section>

            <section id="contact">
              <ContactBlock
  description="For privacy-related questions or data requests, contact us directly."
  note={`We respond to privacy requests within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN}–${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MAX} hours.`}
/>
            </section>

          </main>

          {/* Sticky sidebar */}
          <aside style={{ width: '220px', flexShrink: 0, position: 'sticky', top: '5.5rem', alignSelf: 'flex-start', display: 'none' }} className="policy-sidebar">
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.75rem', paddingLeft: '0.75rem' }}>On this page</p>
            <nav>
              {sections.map(({ id, title }) => (
                <button key={id} onClick={() => scrollTo(id)} className={`sidebar-link ${activeSection === id ? 'active' : ''}`}>
                  {title}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) { .policy-sidebar { display: block !important; } }
      `}</style>
    </div>
  )
}