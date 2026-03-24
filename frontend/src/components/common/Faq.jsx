import React from 'react'

const Faq = () => {
	const FAQS = [
  { q: 'How do I access the resource after payment?', a: `The resource link will appear instantly on this page after successful payment — COPY it right away. In case you missed copying the resource link, please go to https://devcareersone.vercel.app/purchase-query OR DM ${import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL} and we will send it to you within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN} - ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MAX} hours.` },
  { q: 'Is this a one-time payment?', a: 'Yes, this is a one-time payment. You get lifetime access to the resource with all future updates included.' },
  { q: 'Why Razorpay for payments?', a: "We were originally integrated with a different payment provider, but due to an ongoing dispute over pending payments, we had to switch mid-way. We moved to Razorpay — one of India's most trusted payment gateways, used by 10M+ businesses. It supports UPI, cards, net banking, and wallets with bank-grade encryption. Safe, reliable, and battle-tested." },
  { q: 'Missed copying the resource link?', a: `No worries! Head to the bottom of this page and click \"Purchase Query\". Fill in your name, email, the resource you purchased, and the date of purchase — and we'll send it to you via email within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN} hours.` },
  { q: 'What if I face any issues?', a: `Our support team is available 24/7. You can reach us at ${import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL}` },
  { q: 'Is my payment secure?', a: 'Absolutely! We use Razorpay for payment processing, which uses industry-standard encryption to protect your information.' },
]

const TRUST_ITEMS = [
  { label: 'Quick Response', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
  { label: '24/7 Support', multi: true, d: ['M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z', 'M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'] },
  { label: '100% Satisfaction', d: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
]

  return (
	<div>
	  {/* FAQ */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between cursor-pointer bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600 px-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
	</div>
  )
}

export default Faq