import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactBlock from '../../components/common/ContactBlock'
const FOUNDER_NAME = import.meta.env.VITE_FOUNDER_NAME || 'Meet Soni'
const FOUNDER_LOCATION = import.meta.env.VITE_FOUNDER_LOCATION || 'Shimoga, Karnataka, India'
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL || 'hello@devcareers.in'
const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'DevCareers'
const LAST_UPDATED = import.meta.env.VITE_POLICY_LAST_UPDATED || 'March 2026'
const COMPANIES_COUNT = import.meta.env.VITE_TOTAL_COMPANIES_TRACKED || '300'
const RESOURCES_COUNT = import.meta.env.VITE_TOTAL_RESOURCES || '50'
const TOPMATE_URL = import.meta.env.VITE_TOPMATE_URL || 'https://topmate.io'

const sections = [
  { id: 'agreement', title: 'Agreement to Terms' },
  { id: 'eligibility', title: 'Eligibility' },
  { id: 'services', title: 'Our Services' },
  { id: 'permitted', title: 'Permitted Use' },
  { id: 'prohibited', title: 'Prohibited Use' },
  { id: 'intellectual', title: 'Intellectual Property' },
  { id: 'purchases', title: 'Purchases and Refunds' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'third-party', title: 'Third-Party Links' },
  { id: 'termination', title: 'Termination' },
  { id: 'changes', title: 'Changes to Terms' },
  { id: 'governing', title: 'Governing Law' },
  { id: 'contact', title: 'Contact' },
]

export default function Terms_and_conditions() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('agreement')
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -85% 0px' }
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
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .tc-body h2 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; padding-bottom: 0.5rem;}
        .tc-body h3 { font-size: 1rem; font-weight: 600; color: #1f2937; margin: 1.25rem 0 0.5rem; }
        .tc-body p  { font-size: 0.9375rem; color: #374151; line-height: 1.75; margin-bottom: 0.75rem; }
        .tc-body ul { list-style: none; padding: 0; margin: 0.5rem 0 0.75rem; }
        .tc-body ul li { font-size: 0.9375rem; color: #374151; line-height: 1.75; padding-left: 1.25rem; position: relative; margin-bottom: 0.25rem; }
        .tc-body ul li::before { content: ''; position: absolute; left: 0; top: 0.7rem; width: 5px; height: 5px; border-radius: 50%; background: #f97316; }
        .tc-body a  { color: #f97316; text-decoration: underline; }
        .tc-body a:hover { color: #ea580c; }
        .tc-body .notice { background: #fff7ed; border-left: 3px solid #f97316; padding: 0.875rem 1rem; border-radius: 0 0.5rem 0.5rem 0; margin: 1rem 0; font-size: 0.9rem; color: #374151; line-height: 1.7; }
        .tc-body .notice strong { color: #c2410c; }
        .tc-body .notice-red   { background: #fff5f5; border-left-color: #ef4444; }
        .tc-body .notice-green { background: #f0fdf4; border-left-color: #22c55e; }
        .tc-body section { padding: 1.2rem 0; border-bottom: 1px solid #f3f4f6; }
        .tc-body section:last-child { border-bottom: none; }
        .tc-sidebar-link { display: block; padding: 0.375rem 0.75rem; font-size: 0.8125rem; color: #6b7280; border-left: 2px solid transparent; transition: all 0.15s; line-height: 1.5; cursor: pointer; background: none; border-top: none; border-right: none; border-bottom: none; text-align: left; width: 100%; }
        .tc-sidebar-link:hover  { color: #f97316; border-left-color: #fed7aa; }
        .tc-sidebar-link.active { color: #f97316; border-left-color: #f97316; font-weight: 600; background: #fff7ed; }
        .tc-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 0.75rem 0; }
        @media (max-width: 640px) { .tc-two-col { grid-template-columns: 1fr; } }
        .tc-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; }
        .tc-box h3 { margin-top: 0; }
        .tc-three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 0.75rem 0; }
        @media (max-width: 640px) { .tc-three-col { grid-template-columns: 1fr; } }
        .tc-grid-item { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; }
        .tc-grid-item h3 { margin-top: 0; }
        #contact a.link {
  color: white;
}
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
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Terms and Conditions</h1>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.7 }}>
            These terms govern your use of {SITE_NAME}. By using our platform, you agree to everything described below. Please read this carefully before using our services.
          </p>
        </div>

        {/* Layout */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>

          {/* Main content */}
          <main style={{ flex: 1, minWidth: 0 }} className="tc-body">

            <section id="agreement">
              <h2>Agreement to Terms</h2>
              <p>
                Welcome to <strong>{SITE_NAME}</strong>, owned and operated by <strong>{FOUNDER_NAME}</strong>, a solo developer based in {FOUNDER_LOCATION}.
              </p>
              <p>
                These Terms and Conditions govern your access to and use of the {SITE_NAME} website, newsletter, digital resources, and any related services (collectively, the "Platform").
              </p>
              <div className="notice">
                <strong>By visiting our website, subscribing to our newsletter, or purchasing any resource, you confirm that you have read, understood, and agree to be bound by these Terms.</strong> If you do not agree, please do not use the Platform.
              </div>
              <p>
                These Terms apply alongside our <a href="/privacy-policy">Privacy Policy</a> and <a href="/disclaimer">Disclaimer</a>, both of which are incorporated herein by reference. In the event of a conflict between these Terms and any other document, these Terms shall prevail.
              </p>
            </section>

            <section id="eligibility">
              <h2>Eligibility</h2>
              <p>To use {SITE_NAME}, you must meet all of the following conditions:</p>

              <h3>Minimum Age</h3>
              <p>You must be at least 18 years of age to use this Platform. By using {SITE_NAME}, you represent and warrant that you are 18 or older. If you are under 18, please do not use this Platform or provide any personal information.</p>

              <h3>Legal Capacity</h3>
              <p>You confirm that you have the legal capacity to enter into a binding agreement under applicable Indian law. If you are accessing the Platform on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.</p>

              <h3>Accurate Information</h3>
              <p>You agree to provide accurate and truthful information when subscribing, purchasing, or contacting us. Providing false or misleading information may result in immediate termination of your access to the Platform without notice or refund.</p>

              <h3>Compliance with Laws</h3>
              <p>You agree to use {SITE_NAME} only in compliance with all applicable local, state, national, and international laws and regulations.</p>
            </section>

            <section id="services">
              <h2>Our Services</h2>
              <p>{SITE_NAME} provides the following services to students and early-career professionals:</p>

              <div className="tc-two-col">
                <div className="tc-box">
                  <h3>Job Listings</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Curated internship and entry-level job opportunities sourced from {COMPANIES_COUNT}+ company career pages. Every listing is manually verified before being posted on the Platform.</p>
                </div>
                <div className="tc-box">
                  <h3>Email Alerts</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Weekly newsletters delivering curated job opportunities, resource announcements, and platform updates directly to your inbox. You may unsubscribe at any time.</p>
                </div>
                <div className="tc-box">
                  <h3>Digital Resources</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Guides, templates, cheat sheets, and interview preparation materials. Over 50% of our resources are free. Premium resources are priced affordably and sold via Topmate.</p>
                </div>
                <div className="tc-box">
                  <h3>Topmate Sessions</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Career guidance sessions and resource purchases handled through the Topmate platform, subject to Topmate's own terms of service and privacy policy.</p>
                </div>
              </div>

              <div className="notice">
                <strong>Solo-operated notice:</strong> {SITE_NAME} is built and maintained by one person. We strive to maintain high quality and frequent updates, but services may occasionally be interrupted for maintenance or personal reasons. We appreciate your understanding.
              </div>
            </section>

            <section id="permitted">
              <h2>Permitted Use</h2>
              <p>You are welcome to use {SITE_NAME} for the following purposes:</p>
              <ul>
                <li>Browse and apply to job listings posted on the Platform for your own personal job search.</li>
                <li>Subscribe to our newsletter to receive weekly job alerts and platform updates.</li>
                <li>Purchase and use digital resources strictly for your own personal, non-commercial career development.</li>
                <li>Book sessions via Topmate for personal career guidance.</li>
                <li>Share links to {SITE_NAME} pages with friends or on social media.</li>
                <li>Contact us with questions, feedback, or partnership enquiries.</li>
                <li>Download and save purchased resources for personal offline use.</li>
              </ul>
            </section>

            <section id="prohibited">
              <h2>Prohibited Use</h2>
              <p>The following actions are strictly prohibited on {SITE_NAME}. Violation may result in immediate termination of your access without notice or refund.</p>

              <h3>Scraping and Automated Access</h3>
              <p>Using bots, scrapers, crawlers, spiders, or any other automated tools to extract job listings, resources, or any other content from the Platform without prior written permission from {FOUNDER_NAME}.</p>

              <h3>Reselling Resources</h3>
              <p>Reproducing, redistributing, reselling, sublicensing, or commercially exploiting any digital resource purchased from {SITE_NAME}. All resources are licensed for personal use only.</p>

              <h3>Spam and Unsolicited Contact</h3>
              <p>Using any contact information obtained from the Platform to send unsolicited emails, messages, or promotional content to other users or to {FOUNDER_NAME}.</p>

              <h3>Impersonation and False Accounts</h3>
              <p>Creating fictitious identities, impersonating another person or entity, or providing false or misleading information when subscribing, contacting us, or making a purchase.</p>

              <h3>Unlawful Activity</h3>
              <p>Using the Platform for any illegal purpose, including but not limited to fraud, harassment, defamation, or violation of any applicable Indian or international law.</p>

              <h3>Circumventing Access Controls</h3>
              <p>Attempting to gain unauthorised access to any part of the Platform, its hosting infrastructure, databases, or any system connected to it.</p>

              <h3>Reproducing Original Content</h3>
              <p>Copying, republishing, or claiming ownership of any original content including guides, articles, newsletters, or platform design created by {SITE_NAME} without explicit written permission.</p>

              <h3>Interfering with the Platform</h3>
              <p>Taking any action that could impose an unreasonable load on our infrastructure, or that interferes with the proper functioning of the Platform for other users.</p>
            </section>

            <section id="intellectual">
              <h2>Intellectual Property</h2>
              <p>All content on {SITE_NAME} falls into one of two categories of ownership.</p>

              <div className="tc-two-col">
                <div className="tc-box">
                  <h3>{SITE_NAME} Owned Content</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>The following are the exclusive intellectual property of {FOUNDER_NAME} and {SITE_NAME}:</p>
                  <ul>
                    <li>Digital resources including guides, templates, and cheat sheets</li>
                    <li>Newsletter content and job curation methodology</li>
                    <li>Platform design, code, and branding</li>
                    <li>Original articles and career guidance content</li>
                    <li>The {SITE_NAME} name and logo</li>
                  </ul>
                </div>
                <div className="tc-box">
                  <h3>Third-Party Owned Content</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Job listings are sourced from and remain the property of the respective hiring companies. {SITE_NAME} does not claim ownership of:</p>
                  <ul>
                    <li>Company names, logos, and branding</li>
                    <li>Job descriptions and role requirements</li>
                    <li>Company career pages and application portals</li>
                    <li>Content belonging to Topmate or other third-party platforms</li>
                  </ul>
                </div>
              </div>

              <h3>Personal Use License</h3>
              <p>
                When you purchase a digital resource from {SITE_NAME}, you receive a non-exclusive, non-transferable, revocable licence to use that resource for your own personal, non-commercial career development only. You may not share, copy, modify, resell, or redistribute it in any form without explicit written permission.
              </p>

              <h3>Copyright Infringement Claims</h3>
              <p>
                If you believe any content on the Platform infringes your copyright or other intellectual property rights, please contact us at {RECIPIENT_EMAIL} with a description of the work, proof of ownership, and the URL of the allegedly infringing content. We will investigate and respond within seven business days.
              </p>
            </section>

            <section id="purchases">
              <h2>Purchases and Refunds</h2>
              <p>Premium digital resources are currently sold via <strong>Topmate</strong>. Direct in-platform purchases via Razorpay may be introduced in future, and users will be informed before any such changes take effect.</p>

              <h3>Payment</h3>
              <ul>
                <li>All payments are processed securely through Topmate. {SITE_NAME} does not store, process, or have access to your payment card details at any point.</li>
                <li>Prices are listed in Indian Rupees and are inclusive of any applicable taxes.</li>
                <li>By making a purchase, you also agree to Topmate's Terms of Service and Privacy Policy.</li>
                <li>Upon successful payment, you will receive access to your purchased resource via Topmate.</li>
              </ul>

              <h3>Refund Policy</h3>
              <p>Because our products are digital downloads, all sales are generally final. However, we handle refund requests on a case-by-case basis with genuine empathy.</p>

              <div className="tc-two-col">
                <div className="tc-box">
                  <h3>Eligible for Refund</h3>
                  <ul>
                    <li>Resource is significantly different from its description</li>
                    <li>File is corrupted or inaccessible after purchase</li>
                    <li>Technical error prevented delivery of the resource</li>
                    <li>Double payment for the same resource due to technical fault</li>
                  </ul>
                </div>
                <div className="tc-box">
                  <h3>Not Eligible for Refund</h3>
                  <ul>
                    <li>Change of mind after download or access has been granted</li>
                    <li>Claiming a resource is "not useful" after full access</li>
                    <li>Failure to read the resource description before purchasing</li>
                    <li>Requests submitted more than 48 hours after purchase</li>
                  </ul>
                </div>
              </div>

              <p>To request a refund or raise a purchase concern, use our <a href="/contact-us">Contact Us page</a> and select "Resource or Purchase Issue". We will respond within 48 hours.</p>

              <h3>Duplicate Purchase and Goodwill Policy</h3>
              <p>
                If you accidentally purchase a resource already included in a bundle you own, we do not issue cash refunds in such cases. Instead, as a goodwill gesture, you may choose any other resource of equivalent value at no extra cost. To claim this, submit a purchase query through our <a href="/contact-us">Contact Us page</a>. We will personally review it and follow up within 48 hours.
              </p>

              <div className="notice notice-green">
                <strong>Tip:</strong> Before purchasing an individual resource, check whether it is already included in any bundle listed on our Resources page to avoid duplicate purchases.
              </div>
            </section>

            <section id="disclaimers">
              <h2>Disclaimers</h2>
              <p>Please read these disclaimers carefully. They are an important part of your agreement with us.</p>

              <h3>No Job Placement Guarantee</h3>
              <p>
                {SITE_NAME} provides verified job listings and career resources as guidance tools. We do not guarantee job placement, interview success, salary levels, or any specific career outcome. Results depend entirely on the individual user's skills, effort, preparation, and the decisions of third-party employers.
              </p>

              <h3>Job Listing Accuracy</h3>
              <p>
                While we manually verify every listing before publishing, job markets change rapidly. Listings may become outdated, application deadlines may pass, or companies may close roles without notice. We are not liable for changes that occur after a listing is published. We encourage users to verify the status of any listing directly with the employer before applying.
              </p>

              <h3>No Employer Relationship</h3>
              <p>
                {SITE_NAME} is an independent aggregation and educational platform. We have no formal relationship with any employer listed on the Platform. We are not responsible for the hiring decisions, employment terms, workplace conditions, salary offers, or conduct of any employer. Listing a job on {SITE_NAME} does not constitute an endorsement of that employer.
              </p>

              <h3>Educational Resources</h3>
              <p>
                All guides, templates, and resources are provided for informational and educational purposes only. They represent our best knowledge at time of publication but should not be treated as professional legal, financial, medical, or career advice. Users should exercise independent judgment.
              </p>

              <h3>Platform Availability</h3>
              <p>
                {SITE_NAME} is provided on an "as is" and "as available" basis. As a solo-operated platform, we cannot guarantee 100% uptime. Scheduled or unscheduled maintenance may temporarily affect access. We will make reasonable efforts to minimise disruption.
              </p>

              <h3>Advertising</h3>
              <p>
                {SITE_NAME} may display advertisements through Google AdSense. These advertisements are served by Google and are subject to Google's advertising policies. We do not control the specific ads displayed and are not responsible for the content of third-party advertisements. Clicking on an advertisement will take you to a third-party website, and your interaction with that website is governed by their own terms and privacy policy.
              </p>
            </section>

            <section id="liability">
              <h2>Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable Indian law, {SITE_NAME} and {FOUNDER_NAME} shall not be liable for any of the following:</p>
              <ul>
                <li>Loss of employment opportunities or failure to secure a job through listings on the Platform.</li>
                <li>Any direct, indirect, incidental, special, or consequential damages arising from your use of the Platform.</li>
                <li>Loss of data, interruption of service, or technical errors on the Platform.</li>
                <li>Actions, decisions, or conduct of any employer to whom you apply via a listing on {SITE_NAME}.</li>
                <li>Any loss arising from your reliance on information or resources provided on the Platform.</li>
                <li>Unauthorised access to your data due to circumstances beyond our reasonable control.</li>
                <li>Delays or failures in payment processing caused by Topmate or other third-party services.</li>
                <li>Content displayed through Google AdSense or any third-party advertising network.</li>
              </ul>
              <div className="notice">
                In any event, our maximum aggregate liability to you shall not exceed the total amount you paid for the specific resource or service that directly gave rise to the claim.
              </div>
            </section>

            <section id="third-party">
              <h2>Third-Party Links and Services</h2>
              <p>
                {SITE_NAME} contains links to external websites including company career pages, Topmate, YouTube, LinkedIn, WhatsApp groups, and other platforms. We also display advertisements through Google AdSense, which may link to third-party websites.
              </p>

              <div className="tc-two-col">
                <div className="tc-box">
                  <h3>What We Do</h3>
                  <ul>
                    <li>Manually verify job listing links before posting to confirm they lead to legitimate company career pages.</li>
                    <li>Remove or update broken or expired links when reported or discovered.</li>
                    <li>Clearly identify sponsored or advertising content where required.</li>
                  </ul>
                </div>
                <div className="tc-box">
                  <h3>What We Cannot Control</h3>
                  <ul>
                    <li>Content, privacy practices, or terms of any third-party website after you leave {SITE_NAME}.</li>
                    <li>Changes made to external links or pages after we verify and publish them.</li>
                    <li>The content of advertisements served by Google AdSense.</li>
                  </ul>
                </div>
              </div>

              <p>Clicking any external link means you are leaving {SITE_NAME} and are subject to the terms and privacy policy of that third-party site. We recommend reviewing those policies before proceeding. {SITE_NAME} is not responsible for the content, accuracy, or practices of any third-party website.</p>
            </section>

            <section id="termination">
              <h2>Termination</h2>
              <p>
                {SITE_NAME} reserves the right to restrict, suspend, or permanently terminate your access to the Platform without prior notice if we determine, at our sole discretion, that you have:
              </p>
              <ul>
                <li>Violated any provision of these Terms and Conditions.</li>
                <li>Engaged in scraping, automated access, or attempted to reverse-engineer the Platform.</li>
                <li>Purchased a resource and then redistributed, resold, or shared it with others.</li>
                <li>Provided false or misleading information during subscription or purchase.</li>
                <li>Engaged in any activity that could harm {SITE_NAME}, its users, or its reputation.</li>
                <li>Used the Platform for any fraudulent or unlawful purpose.</li>
              </ul>
              <div className="notice notice-red">
                If your access is terminated due to a Terms violation, you will not be entitled to a refund for any purchases made. If you believe a termination was made in error, you may appeal by emailing {RECIPIENT_EMAIL} with full details of your situation.
              </div>
            </section>

            <section id="changes">
              <h2>Changes to Terms</h2>
              <p>We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices.</p>
              <ul>
                <li>The "Last Updated" date at the top of this page will be revised immediately upon any change.</li>
                <li>For significant changes such as new restrictions, pricing changes, or introduction of advertising, we will notify all subscribers via email before the changes take effect.</li>
                <li>Continued use of {SITE_NAME} after updated Terms are published constitutes your acceptance of the revised Terms.</li>
                <li>If you disagree with any updated Terms, you may unsubscribe and discontinue use of the Platform. You may also request deletion of your personal data as described in our Privacy Policy.</li>
              </ul>
              <p>Previous versions of these Terms are available upon request by our <a href="/contact-us">Contact page</a>.</p>
            </section>

            <section id="governing">
              <h2>Governing Law and Disputes</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India, including but not limited to:</p>

              <div className="tc-three-col">
                {[
                  { title: 'Information Technology Act, 2000', desc: 'Governs digital platforms and electronic commerce in India, including data protection obligations.' },
                  { title: 'Consumer Protection Act, 2019', desc: 'Governs consumer rights in e-commerce, digital goods, and online service transactions.' },
                  { title: 'Copyright Act, 1957', desc: "Protects DevCareers' original content including guides, resources, and platform design from reproduction without permission." },
                ].map((item) => (
                  <div key={item.title} className="tc-grid-item">
                    <h3>{item.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3>Dispute Resolution</h3>
              <p>
                Any disputes arising out of or in connection with these Terms shall first to be resolved amicably by contacting {FOUNDER_NAME} directly at {RECIPIENT_EMAIL}. We ask that you give us a fair opportunity to resolve your concern before escalating.
              </p>
              <p>
                If a dispute cannot be resolved amicably within 30 days of notice, it shall be subject to the exclusive jurisdiction of the courts located in Shimoga (Shivamogga), Karnataka, India.
              </p>
            </section>
            <section id='contact'>
              <ContactBlock
                description="For questions about these terms or your obligations under them, reach out below."
                note={`We respond to legal queries within ${import.meta.env.VITE_PARTNERSHIP_RESPONSE_TIME_MIN}-${import.meta.env.VITE_PARTNERSHIP_RESPONSE_TIME_MAX} business days.`}
              />
            </section>
          </main>

          {/* Sticky sidebar */}
          <aside style={{ width: '220px', flexShrink: 0, position: 'sticky', top: '5.5rem', alignSelf: 'flex-start', display: 'none' }} className="tc-sidebar">
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.75rem', paddingLeft: '0.75rem' }}>On this page</p>
            <nav>
              {sections.map(({ id, title }) => (
                <button key={id} onClick={() => scrollTo(id)} className={`tc-sidebar-link ${activeSection === id ? 'active' : ''}`}>
                  {title}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) { .tc-sidebar { display: block !important; } }
      `}</style>
    </div>
  )
}