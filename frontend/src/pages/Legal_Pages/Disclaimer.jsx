import React from 'react'
import PageHero        from '../../components/legal/PageHero'
import SectionHeading  from '../../components/legal/SectionHeading'
import ContactInfoBox  from '../../components/legal/ContactInfoBox'
import BulletList      from '../../components/legal/BulletList'

function Disclaimer () {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-black/10 shadow-sm p-6 md:p-10">

        <h2 className="text-2xl font-bold text-black mb-6 border-b border-black/10 pb-3">
          Legal Disclaimer
        </h2>

        <div className="space-y-4 text-sm leading-relaxed text-black/70">

          <section>
            <h3 className="font-semibold text-black mb-2">Platform Purpose</h3>
            <p>
              This platform provides informational content regarding job opportunities, internships,
              and educational resources primarily targeted at early-career professionals. All content
              is provided for informational purposes only and should not be construed as professional
              career advice, employment guarantees, or binding commitments.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">No Employment Relationship</h3>
            <p>
              Nothing on this platform creates or implies an employment, recruitment, or agency
              relationship between Dev Careers, its operators, and any user or visitor. We are
              an independent information aggregator and educational resource platform — not a
              recruiter, staffing agency, or employer. Listing a job or opportunity on this
              platform does not constitute an offer of employment. Any hiring, selection, or
              employment decisions are made solely by the respective employers or organizations
              posting those opportunities.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Age Restriction</h3>
            <p>
              This platform is intended for users who are <span className="font-medium text-black">18 years of age or older</span>.
              By using this platform, you confirm that you meet this age requirement. If you are
              under 18, please do not use this platform or provide any personal information. We
              reserve the right to restrict access to users who do not meet this requirement. This
              age restriction is in place as the platform deals with professional career
              opportunities, financial transactions, and legally binding terms.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">No Warranty or Guarantee</h3>
            <p>We make no representations or warranties of any kind, express or implied, regarding:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The accuracy, completeness, or timeliness of information provided</li>
              <li>The availability or authenticity of any job listings or opportunities</li>
              <li>Employment outcomes or success rates from using this platform</li>
              <li>The quality, effectiveness, or results from any resources provided</li>
              <li>Uninterrupted or error-free operation of the platform</li>
            </ul>
            <p className="mt-2">
              <span className="font-medium text-black uppercase">All content is provided "as is"
              and "as available" without warranty of any kind.</span> Users assume full responsibility
              for verifying all information independently before making any decisions.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Third-Party Listings</h3>
            <p>
              Job postings, internship opportunities, and external links are aggregated from various
              third-party sources. We do not control, endorse, or assume responsibility for any
              third-party content, websites, employers, or opportunities. Users engage with third
              parties entirely at their own risk. We are not liable for any harm, loss, or damages
              arising from interactions with third parties found through this platform.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Paid Digital Resources & Payment Processing</h3>
            <p>
              Certain premium educational resources (PDFs, guides, cheat sheets, and learning materials)
              are offered for purchase to support ongoing platform maintenance and content creation.
              <span className="font-medium text-black"> All payments are currently processed securely through Topmate.io</span>,
              a trusted and regulated creator monetization platform. We may in future integrate
              additional payment gateways including Razorpay, a licensed payment gateway regulated
              by the Reserve Bank of India, for direct purchases. Users will be informed of any
              such changes before they take effect.
            </p>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Payment Processing via Topmate:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All transactions are processed through Topmate.io's secure payment infrastructure</li>
                <li>We do not store or have access to your complete credit/debit card details</li>
                <li>Payment information is encrypted using industry-standard SSL/TLS protocols</li>
                <li>Topmate is PCI DSS compliant, ensuring the highest security standards</li>
                <li>Accepted payment methods depend on Topmate's supported options at the time of purchase</li>
                <li>By making a purchase, you also agree to Topmate's Terms of Service and Privacy Policy</li>
              </ul>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Purchase Terms:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All prices are displayed in Indian Rupees (INR) inclusive of applicable taxes</li>
                <li>Upon successful payment, you will receive instant access to the resource via Topmate</li>
                <li>Resources are delivered as digital downloads (PDFs, guides, or Google Drive links)</li>
                <li>You have lifetime access to download purchased resources</li>
                <li>All sales are final — digital products cannot be returned once accessed</li>
              </ul>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Access Issues & Support:</p>
              <p>If you experience any issues with your purchase, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payment completed but resource not accessible</li>
                <li>Unable to access the download link provided</li>
                <li>Broken or expired download links</li>
                <li>Payment deducted but resource not received</li>
              </ul>
              <p className="mt-2">
                <span className="font-medium text-black">Please email us at {import.meta.env.VITE_RECIPIENT_EMAIL}</span> with
                your name, email used during payment, and resource ID. We will send you the resource link
                within 6 hours. We maintain records of all successful transactions and are committed to
                ensuring you receive your purchased materials.
              </p>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Data Collection:</p>
              <p>When you make a purchase, we collect only the following information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your name (as entered during checkout)</li>
                <li>Your email address (for transaction records and support)</li>
                <li>Resource ID of the purchased item</li>
                <li>Transaction timestamp and payment ID (from Topmate)</li>
              </ul>
              <p className="mt-2">
                This information is used solely for transaction processing, providing customer support,
                and maintaining purchase records. We do not share your personal information with third
                parties except as required by Topmate for payment processing or as mandated by law.
                For full details on how we handle your data, please refer to our Privacy Policy.
              </p>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Refund Policy:</p>
              <p>
                Due to the instant digital nature of our products, <span className="font-medium text-black">
                all sales are final and non-refundable</span> once the resource has been accessed
                or downloaded. However, refunds may be considered in the following exceptional circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Technical error resulting in double payment for the same resource</li>
                <li>Inability to provide the purchased resource due to server/technical issues on our end</li>
                <li>Resource content is significantly different from what was advertised</li>
              </ul>
              <p className="mt-2">
                Refund requests must be submitted within 24 hours of purchase to {import.meta.env.VITE_RECIPIENT_EMAIL}
                with your transaction details. Approved refunds will be processed within 5-7 business days
                to the original payment method used during purchase.
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Contributor & Revenue Share Program</h3>
            <p>
              Dev Careers allows third-party contributors — educators, creators, and professionals —
              to list their digital resources (PDFs, guides, cheat sheets, templates, etc.) on this
              platform. The following terms govern contributor participation:
            </p>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Free Resources:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contributors who list free resources will receive full attribution and credit on the platform</li>
                <li>Your name, handle, or brand will be displayed alongside your resource listing</li>
                <li>You retain full ownership and intellectual property rights over your content</li>
                <li>You grant Dev Careers a non-exclusive license to display and distribute the resource on the platform</li>
              </ul>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Paid Resources — Revenue Share:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contributors who list paid resources are eligible to earn <span className="font-medium text-black">5% to 10% of all sales</span> generated by their resource</li>
                <li>The exact percentage is agreed upon between Dev Careers and the contributor prior to listing</li>
                <li>All sales are recorded and tracked transparently through <span className="font-medium text-black">Topmate.io</span>, a trusted creator platform — ensuring full transparency and verifiability of earnings</li>
                <li>Revenue share payouts are processed periodically as agreed; contributors will be informed of the payout schedule at onboarding</li>
                <li>Dev Careers is not responsible for delays caused by Topmate's payment infrastructure</li>
              </ul>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Contributor Responsibilities:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contributors are solely responsible for the accuracy, legality, and quality of their listed resources</li>
                <li>Resources must not infringe upon any third-party intellectual property rights</li>
                <li>Contributors must not list resources that are misleading, harmful, or violate our community guidelines</li>
                <li>Dev Careers reserves the right to remove, modify, or delist any resource at its sole discretion without prior notice</li>
                <li>Contributors indemnify Dev Careers against any claims arising from their listed content</li>
              </ul>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Becoming a Contributor:</p>
              <p>
                If you are interested in listing your resources on Dev Careers, please reach out to us at
                <span className="font-medium text-black"> {import.meta.env.VITE_RECIPIENT_EMAIL}</span> with details about
                your resource, your background, and your preferred arrangement. We review all
                contributor applications and will respond within 48 hours.
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Affiliate & Revenue Disclosure</h3>
            <p>
              In the interest of transparency and in compliance with applicable advertising and
              disclosure regulations in India, we disclose the following:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Dev Careers may earn revenue from the sale of digital resources listed on this platform, including those created by third-party contributors</li>
              <li>Where third-party contributor resources are listed, Dev Careers retains a platform fee from each sale, with the remainder forming the contributor's revenue share</li>
              <li>We may also feature sponsored content, affiliate links, or partner listings on the platform; such content will be clearly labelled where required by law</li>
              <li>Our editorial decisions — including what job listings, resources, or opportunities are featured — are independent of commercial arrangements unless explicitly disclosed otherwise</li>
              <li>We are committed to only recommending or featuring content we genuinely believe provides value to our users</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Intellectual Property</h3>
            <p>
              All content, resources, and materials provided on this platform are protected by intellectual
              property laws. We respect the intellectual property rights of others and expect users to do
              the same. If you believe any content on this platform infringes your copyright or other
              intellectual property rights, please contact us immediately at {import.meta.env.VITE_RECIPIENT_EMAIL} with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Detailed description of the copyrighted work or intellectual property</li>
              <li>Proof of ownership or authorization to act on behalf of the owner</li>
              <li>URL or location of the allegedly infringing content on our platform</li>
              <li>Your contact information for resolution</li>
            </ul>
            <p className="mt-2">
              Upon verification, we will investigate the claim and may remove, modify, or provide proper
              attribution for the content. We are committed to resolving intellectual property disputes
              in good faith.
            </p>
            <p className="mt-3 font-medium text-black">Purchased Resources Usage Rights:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Resources are for personal, educational, and non-commercial use only</li>
              <li>You may not resell, redistribute, or share purchased resources with others</li>
              <li>You may not upload purchased resources to public file-sharing platforms</li>
              <li>Violation of these terms may result in legal action</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Anti-Spam & Misuse Policy</h3>
            <p>
              To protect the integrity of this platform and its users, the following activities are
              strictly prohibited:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Scraping, crawling, or automated harvesting of job listings, resources, or any platform content</li>
              <li>Bulk downloading of resources beyond personal use</li>
              <li>Creating fake accounts or impersonating other users or contributors</li>
              <li>Submitting fraudulent payment disputes or chargebacks in bad faith</li>
              <li>Using the platform to distribute spam, phishing links, or malicious content</li>
              <li>Attempting to reverse-engineer, modify, or disrupt the platform's functionality</li>
              <li>Using any information obtained from this platform to contact employers or users unsolicited at scale</li>
            </ul>
            <p className="mt-2">
              Violations of this policy may result in immediate suspension of access, reporting to
              relevant authorities, and/or legal action. We reserve the right to take any action
              necessary to protect our platform and community.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Limitation of Liability</h3>
            <p className="font-medium text-black">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Loss of profits, revenue, data, or opportunities</li>
              <li>Business interruption or employment-related losses</li>
              <li>Costs of procurement of substitute services</li>
              <li>Any damages arising from use or inability to use this platform</li>
              <li>Reliance on any information provided on the platform</li>
              <li>Payment processing delays or failures caused by third-party payment processors including Topmate</li>
              <li>Inability to access digital resources due to your internet connection or device issues</li>
              <li>Actions or content of third-party contributors listed on the platform</li>
            </ul>
            <p className="mt-2">
              Our total liability for any claim arising out of or relating to these terms or use
              of the platform shall not exceed the amount paid by you for the specific resource
              in question.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless this platform, its operators,
              affiliates, and their respective officers, directors, employees, and agents from
              any claims, damages, losses, liabilities, and expenses (including legal fees) arising
              from your use of the platform, violation of these terms, unauthorized sharing of
              purchased resources, or infringement of any rights of another party.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">User Responsibilities</h3>
            <p>Users are solely responsible for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Verifying the accuracy and legitimacy of all job postings and opportunities</li>
              <li>Conducting due diligence before engaging with any employer or third party</li>
              <li>Protecting personal information and account credentials</li>
              <li>Compliance with all applicable laws and regulations</li>
              <li>Any consequences resulting from use of information on this platform</li>
              <li>Saving and backing up downloaded resources — we are not responsible for lost files</li>
              <li>Ensuring compatible devices and software to access digital resources</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Payment Security & Third-Party Services</h3>
            <p>By using our payment system, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Topmate.io is an independent third-party platform that handles payment processing on our behalf</li>
              <li>You are subject to Topmate's Terms of Service and Privacy Policy when making purchases</li>
              <li>We are not responsible for Topmate's service availability or technical issues</li>
              <li>Payment disputes must be resolved with Topmate as per their policies</li>
              <li>You are responsible for ensuring sufficient funds/credit for transactions</li>
              <li>Future integration of Razorpay or other payment gateways will be communicated to users in advance</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Relationship with Other Policies</h3>
            <p>
              This disclaimer should be read in conjunction with our other policy documents, all
              of which form part of your agreement with us when using this platform:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-medium text-black">Privacy Policy</span> — governs how we collect, store, and use your personal data</li>
              <li><span className="font-medium text-black">Terms &amp; Conditions</span> — sets out the full legal agreement between you and Dev Careers</li>
              <li><span className="font-medium text-black">About Us</span> — provides context about who we are and the purpose behind this platform</li>
            </ul>
            <p className="mt-2">
              In the event of any conflict between this disclaimer and the Terms &amp; Conditions,
              the Terms &amp; Conditions shall prevail. If you have not already read these documents,
              we strongly encourage you to do so.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Modifications to Terms</h3>
            <p>
              We reserve the right to modify, update, or discontinue these terms or any part of
              the platform at any time without prior notice. Continued use of the platform after
              changes constitutes acceptance of modified terms. It is your responsibility to review
              these terms periodically. The "Last Updated" date at the bottom of this page indicates
              when these terms were last revised.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Governing Law and Jurisdiction</h3>
            <p>
              These terms shall be governed by and construed in accordance with the laws of
              India, without regard to its conflict of law provisions. Any disputes
              arising from these terms or use of the platform shall be subject to the exclusive
              jurisdiction of the courts located in Shimoga, Karnataka, India.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Severability</h3>
            <p>
              If any provision of these terms is found to be invalid, illegal, or unenforceable,
              the remaining provisions shall continue in full force and effect. The invalid provision
              shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Contact Information</h3>
            <p>
              For questions, concerns, or notices regarding these terms, payment issues, access problems,
              contributor inquiries, or any service-related matters, please contact us:
            </p>
            <div className="mt-3">
              <ContactInfoBox
                responseTime="Within 6 hours for payment/access issues, 24–48 hours for general and contributor inquiries"
                note="When contacting us regarding payment issues, please include: your name, email used during purchase, resource ID, transaction date, and Topmate payment/order ID (if available)."
              />
            </div>
          </section>

        </div>

        <div className="mt-8 pt-6 border-t border-black/10 text-xs text-black/50">
          <p>Last updated: March 2026</p>
          <p className="mt-1">Version 3.0 — Updated to reflect Topmate payment integration, Contributor Program, Age Restriction, Revenue Disclosure, and Anti-Spam Policy</p>
          <p className="mt-2">
            By using this platform and making any purchases, you acknowledge that you have read,
            understood, and agree to be bound by these terms and conditions.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Disclaimer