import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContactBlock from '../../components/common/ContactBlock'

const FOUNDER_NAME     = import.meta.env.VITE_FOUNDER_NAME     || 'Meet Soni'
const FOUNDER_LOCATION = import.meta.env.VITE_FOUNDER_LOCATION || 'Shimoga, Karnataka, India'
const RECIPIENT_EMAIL  = import.meta.env.VITE_RECIPIENT_EMAIL  || 'hello@devcareers.in'
const SITE_NAME        = import.meta.env.VITE_SITE_NAME        || 'DevCareers'
const LAST_UPDATED     = import.meta.env.VITE_POLICY_LAST_UPDATED || 'March 2026'
const COMPANIES_COUNT  = import.meta.env.VITE_TOTAL_COMPANIES_TRACKED || '300'
const TOPMATE_URL      = import.meta.env.VITE_TOPMATE_URL      || 'https://topmate.io'

export default function Disclaimer() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .disc-body { font-family: inherit; }
        .disc-body h2 { font-size: 1.125rem; font-weight: 700; color: #111827; margin: 2rem 0 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #f3f4f6; }
        .disc-body h3 { font-size: 0.9375rem; font-weight: 600; color: #1f2937; margin: 1.25rem 0 0.375rem; }
        .disc-body p  { font-size: 0.9375rem; color: #374151; line-height: 1.75; margin-bottom: 0.75rem; }
        .disc-body ul { list-style: none; padding: 0; margin: 0.5rem 0 0.75rem; }
        .disc-body ul li { font-size: 0.9375rem; color: #374151; line-height: 1.75; padding-left: 1.25rem; position: relative; margin-bottom: 0.25rem; }
        .disc-body ul li::before { content: ''; position: absolute; left: 0; top: 0.7rem; width: 5px; height: 5px; border-radius: 50%; background: #f97316; }
        .disc-body a  { color: #f97316; text-decoration: underline; }
        .disc-body a:hover { color: #ea580c; }
        .disc-body .notice { background: #fff7ed; border-left: 3px solid #f97316; padding: 0.875rem 1rem; border-radius: 0 0.5rem 0.5rem 0; margin: 1rem 0; font-size: 0.9rem; color: #374151; line-height: 1.7; }
        .disc-body .notice strong { color: #c2410c; }
        .disc-body section { padding: 0; margin-bottom: 0; }
        .disc-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; }
        .disc-box h3 { margin-top: 0; }
      `}</style>

      {/* Top bar */}
      <div style={{ background: '#fff7ed', borderBottom: '1px solid #fed7aa', padding: '0.625rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8125rem', color: '#92400e', fontWeight: 500 }}>Last Updated: {LAST_UPDATED}</span>
          <span style={{ fontSize: '0.8125rem', color: '#92400e' }}>Operated by {FOUNDER_NAME} · {FOUNDER_LOCATION}</span>
        </div>
      </div>

      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '2.5rem 1rem 4rem' }}>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Disclaimer</h1>
        <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '2rem' }}>
          This disclaimer sets out important limitations and clarifications about our services, content, and your responsibilities when using {SITE_NAME}. Please read it carefully.
        </p>

        <div className="disc-body">

          <h2>Platform Purpose and Nature of Information</h2>
          <p>
            {SITE_NAME} is an independent information aggregation and educational resource platform. All content provided on this platform, including job listings, career guides, templates, newsletter content, and any other materials, is provided for informational and educational purposes only.
          </p>
          <p>
            Nothing on this platform should be construed as professional career advice, legal advice, financial advice, or binding commitments of any kind. Users are encouraged to exercise independent judgment and seek professional advice where appropriate.
          </p>

          <h2>No Employment Relationship</h2>
          <p>
            Nothing on this platform creates or implies an employment, recruitment, placement, or staffing agency relationship between {SITE_NAME}, its operator {FOUNDER_NAME}, and any user or visitor. We are an independent information aggregator, not a recruiter, staffing agency, or employer.
          </p>
          <p>
            Listing a job or opportunity on this platform does not constitute an offer of employment, nor does it represent an endorsement of any employer. All hiring, selection, and employment decisions are made solely by the respective employers or organisations that posted those opportunities.
          </p>

          <h2>Age Restriction</h2>
          <p>
            This platform is intended for users who are 18 years of age or older. By using this platform, you confirm that you meet this age requirement. If you are under 18, please do not use this platform or provide any personal information. We reserve the right to restrict access to users who do not meet this requirement.
          </p>
          <p>
            This restriction exists because the platform involves professional career opportunities, financial transactions for digital resources, and legally binding terms of service.
          </p>

          <h2>No Warranty or Guarantee</h2>
          <p>We make no representations or warranties of any kind, express or implied, regarding:</p>
          <ul>
            <li>The accuracy, completeness, or timeliness of any information provided on the platform</li>
            <li>The availability or ongoing validity of any job listings or opportunities</li>
            <li>Employment outcomes, interview success rates, or salary results from using this platform</li>
            <li>The quality, effectiveness, or suitability of any resources provided for your specific needs</li>
            <li>Uninterrupted, error-free, or secure operation of the platform at all times</li>
          </ul>
          <p>
            All content is provided on an "as is" and "as available" basis without warranty of any kind. Users assume full responsibility for independently verifying all information before making any decisions based on it.
          </p>

          <h2>Third-Party Job Listings</h2>
          <p>
            Job postings, internship opportunities, and external links are sourced from over {COMPANIES_COUNT} company career pages and other public sources. We manually verify each listing before publishing it, but we do not control, endorse, or assume responsibility for any third-party content, websites, employers, or opportunities listed on the platform.
          </p>
          <p>
            Job listings may become outdated, application windows may close, or companies may withdraw roles at any time without notice to us. We encourage you to verify the current status of any listing directly with the employer before investing significant time in an application.
          </p>
          <p>
            Users engage with third-party employers and their websites entirely at their own risk. We are not liable for any harm, loss, discrimination, or damages arising from interactions with employers or organisations found through this platform.
          </p>

          <h2>Paid Digital Resources and Payment Processing</h2>
          <p>
            Certain premium educational resources including PDFs, guides, cheat sheets, and templates are offered for purchase through <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">Topmate.io</a>. All payments are processed securely through Topmate's payment infrastructure. {SITE_NAME} does not store, process, or have access to your complete payment card details.
          </p>

          <h3>Payment Security</h3>
          <ul>
            <li>All transactions are processed through Topmate's secure payment infrastructure</li>
            <li>Payment information is encrypted using industry-standard SSL and TLS protocols</li>
            <li>We do not store or have access to your complete credit or debit card details</li>
            <li>By making a purchase, you also agree to Topmate's Terms of Service and Privacy Policy</li>
          </ul>

          <h3>Purchase Terms</h3>
          <ul>
            <li>All prices are displayed in Indian Rupees inclusive of applicable taxes</li>
            <li>Upon successful payment, you will receive access to the resource via Topmate</li>
            <li>Resources are delivered as digital downloads, PDFs, or Google Drive links</li>
            <li>All sales are final once access has been granted</li>
          </ul>

          <h3>Access Issues and Support</h3>
          <p>
            If you experience issues with your purchase including payment completed but resource not accessible, broken download links, or payment deducted but resource not received, please contact us at <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a> with your name, the email used during payment, and the resource name. We will send you the resource within six hours and maintain records of all successful transactions.
          </p>

          <h3>Refund Policy</h3>
          <p>
            Due to the instant digital nature of our products, all sales are generally final and non-refundable once access has been granted. Refunds may be considered in exceptional circumstances such as: a technical error resulting in double payment, inability to deliver the resource due to a fault on our end, or resource content significantly different from what was described.
          </p>
          <p>
            Refund requests must be submitted within 48 hours of purchase to <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a> with your transaction details. Approved refunds will be processed through Topmate within five to seven business days to your original payment method.
          </p>

          <h2>Revenue Disclosure</h2>
          <p>
            In the interest of transparency, {SITE_NAME} currently earns revenue solely from the sale of digital resources on this platform. Our editorial decisions, including which job listings, resources, or opportunities are featured, are made independently and are not influenced by any commercial arrangements.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All original content on this platform including guides, templates, cheat sheets, newsletter content, platform design, code, and branding is the intellectual property of {FOUNDER_NAME} and {SITE_NAME}, protected under the Copyright Act, 1957 and other applicable Indian and international intellectual property laws.
          </p>
          <p>
            If you believe any content on the platform infringes your copyright or other intellectual property rights, please contact us immediately at <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a> with a description of the copyrighted work, proof of ownership, and the URL of the allegedly infringing content. We will investigate in good faith and respond within seven business days.
          </p>

          <h3>Purchased Resource Usage Rights</h3>
          <ul>
            <li>Resources are licensed for personal, educational, and non-commercial use only</li>
            <li>You may not resell, redistribute, or share purchased resources with others</li>
            <li>You may not upload purchased resources to public file-sharing platforms</li>
            <li>Violation of these usage terms may result in legal action under applicable law</li>
          </ul>

          <h2>Anti-Spam and Misuse Policy</h2>
          <p>To protect the integrity of this platform and its users, the following activities are strictly prohibited:</p>
          <ul>
            <li>Scraping, crawling, or automated harvesting of job listings, resources, or any other platform content</li>
            <li>Creating fake accounts or impersonating other users</li>
            <li>Submitting fraudulent payment disputes or chargebacks in bad faith</li>
            <li>Using the platform to distribute spam, phishing links, or malicious content</li>
            <li>Attempting to reverse-engineer, modify, or disrupt the platform's functionality</li>
            <li>Using contact information obtained from this platform to contact employers or users at scale without consent</li>
          </ul>
          <p>
            Violations may result in immediate suspension of access, reporting to relevant authorities, and legal action. We reserve the right to take any action necessary to protect the platform and its community.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, {SITE_NAME} and {FOUNDER_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages including but not limited to:
          </p>
          <ul>
            <li>Loss of profits, revenue, employment opportunities, or data</li>
            <li>Business interruption or career-related losses of any kind</li>
            <li>Any damages arising from use of or inability to use this platform</li>
            <li>Reliance on any information provided on the platform</li>
            <li>Payment processing delays or failures caused by Topmate or other third-party services</li>
            <li>Actions or content of employers or third parties listed or linked from the platform</li>
          </ul>
          <p>
            Our total liability for any claim arising out of or relating to use of the platform shall not exceed the amount paid by you for the specific resource in question.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless {SITE_NAME}, {FOUNDER_NAME}, and their respective agents from any claims, damages, losses, liabilities, and expenses including legal fees arising from your use of the platform, violation of these terms, unauthorised sharing of purchased resources, or infringement of any rights of another party.
          </p>

          <h2>User Responsibilities</h2>
          <p>Users are solely responsible for:</p>
          <ul>
            <li>Independently verifying the accuracy and legitimacy of all job postings and opportunities before applying</li>
            <li>Conducting due diligence before engaging with any employer or third party</li>
            <li>Protecting their personal information and any account credentials</li>
            <li>Complying with all applicable laws and regulations in their jurisdiction</li>
            <li>Any consequences resulting from decisions made based on information found on this platform</li>
            <li>Saving and backing up downloaded resources after purchase</li>
            <li>Ensuring compatible devices and software to access digital resources</li>
          </ul>

          <h2>Relationship with Other Policies</h2>
          <p>This disclaimer should be read together with our other policy documents, all of which form part of your agreement with us when using this platform:</p>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a> - governs how we collect, store, and use your personal data.</li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a> - sets out the full legal agreement between you and {SITE_NAME}.</li>
            <li><a href="/about-us">About Us</a> - provides context about who we are and the purpose behind this platform.</li>
          </ul>
          <p>
            In the event of any conflict between this disclaimer and the Terms and Conditions, the Terms and Conditions shall prevail.
          </p>

          <h2>Modifications to Terms</h2>
          <p>
            We reserve the right to modify, update, or discontinue these terms or any part of the platform at any time. Significant changes will be communicated to subscribers by email before they take effect. Continued use of the platform after changes constitutes acceptance of the modified terms. The "Last Updated" date at the top of this page indicates when these terms were last revised.
          </p>

          <h2>Governing Law and Jurisdiction</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or use of the platform shall be subject to the exclusive jurisdiction of the courts located in Shimoga, Karnataka, India. We encourage all users to contact us at <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a> before initiating any formal legal process, as we are committed to resolving disputes amicably.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the original intent.
          </p>

        </div>

<ContactBlock
  description="If you have concerns about any content on this platform, get in touch."
  note={`We take content concerns seriously and respond within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN}–${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MAX} hours.`}
/>
      </div>
    </div>
  )
}  