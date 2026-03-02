import React from 'react'

function Disclaimer () {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-orange-50  px-4 py-12">
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
            <h3 className="font-semibold text-black mb-2">No Warranty or Guarantee</h3>
            <p>
              We make no representations or warranties of any kind, express or implied, regarding:
            </p>
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
            <h3 className="font-semibold text-black mb-2">Paid Digital Resources</h3>
            <p>
              Certain premium educational resources (PDFs, guides, cheat sheets, and learning materials) 
              are offered for purchase to support ongoing platform maintenance and content creation. 
              <span className="font-medium text-black"> All payments are processed securely through Razorpay</span>, 
              a licensed payment gateway regulated by the Reserve Bank of India.
            </p>
            
            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Payment Processing:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All transactions are processed through Razorpay's secure payment gateway</li>
                <li>We do not store or have access to your complete credit/debit card details</li>
                <li>Payment information is encrypted using industry-standard SSL/TLS protocols</li>
                <li>Razorpay is PCI DSS compliant, ensuring the highest security standards</li>
                <li>Accepted payment methods: Credit Cards, Debit Cards, Net Banking, UPI, and Wallets</li>
              </ul>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Purchase Terms:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All prices are displayed in Indian Rupees (INR) inclusive of applicable taxes</li>
                <li>Upon successful payment, you will receive instant access to the resource link on the same page</li>
                <li>The Google Drive download link is displayed immediately after payment confirmation</li>
                <li>Resources are delivered as digital downloads via Google Drive links</li>
                <li>You have lifetime access to download purchased resources</li>
                <li>All sales are final — digital products cannot be returned once accessed</li>
              </ul>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Access Issues & Support:</p>
              <p>
                If you experience any issues with your purchase, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payment completed but link not displayed</li>
                <li>Unable to copy or access the Google Drive link</li>
                <li>Broken or expired download links</li>
                <li>Payment deducted but resource not received</li>
              </ul>
              <p className="mt-2">
                <span className="font-medium text-black">Please email us at info.techjobalert@gmail.com</span> with 
                your name, email used during payment, and resource ID. We will send you the resource link 
                within 6 hours. We maintain records of all successful transactions and are committed to 
                ensuring you receive your purchased materials.
              </p>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Data Collection:</p>
              <p>
                When you make a purchase, we collect only the following information:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your name (as entered during checkout)</li>
                <li>Your email address (for transaction records and support)</li>
                <li>Resource ID of the purchased item</li>
                <li>Transaction timestamp and payment ID (from Razorpay)</li>
              </ul>
              <p className="mt-2">
                This information is used solely for transaction processing, providing customer support, 
                and maintaining purchase records. We do not share your personal information with third 
                parties except as required by Razorpay for payment processing or as mandated by law.
              </p>
            </div>

            <div className="mt-3 space-y-2">
              <p className="font-medium text-black">Refund Policy:</p>
              <p>
                Due to the instant digital nature of our products, <span className="font-medium text-black">
                all sales are final and non-refundable</span> once the Google Drive link has been accessed 
                or downloaded. However, refunds may be considered in the following exceptional circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Technical error resulting in double payment for the same resource</li>
                <li>Inability to provide the purchased resource due to server/technical issues on our end</li>
                <li>Resource content is significantly different from what was advertised</li>
              </ul>
              <p className="mt-2">
                Refund requests must be submitted within 24 hours of purchase to info.techjobalert@gmail.com 
                with your transaction details. Approved refunds will be processed within 5-7 business days 
                to the original payment method used during purchase.
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">Intellectual Property</h3>
            <p>
              All content, resources, and materials provided on this platform are protected by intellectual 
              property laws. We respect the intellectual property rights of others and expect users to do 
              the same. If you believe any content on this platform infringes your copyright or other 
              intellectual property rights, please contact us immediately at growwmeet@gmail.com with:
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
            
            <p className="mt-3 font-medium text-black">
              Purchased Resources Usage Rights:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Resources are for personal, educational, and non-commercial use only</li>
              <li>You may not resell, redistribute, or share purchased resources with others</li>
              <li>You may not upload purchased resources to public file-sharing platforms</li>
              <li>Violation of these terms may result in legal action</li>
            </ul>
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
              <li>Payment processing delays or failures caused by third-party payment processors</li>
              <li>Inability to access Google Drive links due to your internet connection or device issues</li>
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
            <p>
              By using our payment system, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Razorpay is an independent third-party payment processor</li>
              <li>You are subject to Razorpay's Terms of Service and Privacy Policy</li>
              <li>We are not responsible for Razorpay's service availability or technical issues</li>
              <li>Payment disputes must be resolved with Razorpay as per their policies</li>
              <li>You are responsible for ensuring sufficient funds/credit for transactions</li>
            </ul>
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
              jurisdiction of the courts located in Hubballi, Karnataka, India.
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
              or any service-related matters, please contact us:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li><span className="font-medium text-black">Email (Primary):</span> info.techjobalert@gmail.com</li>
              <li><span className="font-medium text-black">Email (Alternative):</span> growwmeet@gmail.com</li>
              <li><span className="font-medium text-black">Response Time:</span> Within 6 hours for payment/access issues, 24-48 hours for general inquiries</li>
            </ul>
            <p className="mt-2">
              When contacting us regarding payment issues, please include: your name, email used during 
              purchase, resource ID, transaction date, and Razorpay payment ID (if available).
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-black/10 text-xs text-black/50">
          <p>Last updated: February 2026</p>
          <p className="mt-1">Version 2.0 — Updated to reflect Razorpay payment integration</p>
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