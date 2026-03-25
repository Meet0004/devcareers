import React, { useState, useRef, useEffect } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const FAQS = [
    { q: 'How do I access the resource after payment?', a: `The resource link will appear instantly on this page after successful payment - COPY it right away. In case you missed copying the resource link, please go to purchase-query page OR DM ${import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL} and we will send it to you within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN} - ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MAX} hours.` },
    { q: 'Is this a one-time payment?', a: 'Yes, this is a one-time payment. You get lifetime access to the resource with all future updates included.' },
    { q: 'Why Razorpay for payments?', a: "We were originally integrated with a different payment provider, but due to an ongoing dispute over pending payments, we had to switch mid-way. We moved to Razorpay - one of India's most trusted payment gateways, used by 10M+ businesses. It supports UPI, cards, net banking, and wallets with bank-grade encryption. Safe, reliable, and battle-tested." },
    { q: 'Missed copying the resource link?', a: `No worries! Head to the bottom of this page and click "Purchase Query". Fill in your name, email, the resource you purchased, and the date of purchase - and we'll send it to you via email within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN} hours.` },
    { q: 'What if I face any issues?', a: `Our support team is available 24/7. You can reach us at ${import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL}` },
    { q: 'Is my payment secure?', a: 'Absolutely! We use Razorpay for payment processing, which uses industry-standard encryption to protect your information.' },
  ]

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div>
      <div className="mt-8 bg-white rounded-2xl shadow-lg py-8 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const FaqItem = ({ faq, isOpen, onToggle }) => {
  const bodyRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      className={`rounded-lg overflow-hidden transition-shadow duration-300 ${
        isOpen ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 rounded-lg ${
          isOpen
            ? 'bg-blue-50 hover:bg-blue-100'
            : 'bg-gray-50 hover:bg-gray-100'
        }`}
      >
        <span
          className={`font-semibold transition-colors duration-200 ${
            isOpen ? 'text-blue-700' : 'text-gray-900'
          }`}
        >
          {faq.q}
        </span>
        <span
          className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-blue-600 rotate-180' : 'bg-gray-200 rotate-0'
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors duration-200 ${
              isOpen ? 'text-white' : 'text-gray-500'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        style={{
          height: `${height}px`,
          transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        }}
      >
        <div ref={bodyRef}>
          <p
            className="text-gray-600 px-4 pb-4 pt-3 leading-relaxed"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 0.25s ease 0.1s, transform 0.25s ease 0.1s',
            }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq