import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from '../../assets/myImage.avif'

const email = import.meta.env.VITE_RECIPIENT_EMAIL
const phone = import.meta.env.VITE_PHONE_NUMBER

const PURCHASE_QUERY_ICON = "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"

const CONTACT_REASONS = [
  { title: 'Job & Internship Inquiries', desc: 'Questions about listings and opportunities' },
  { title: 'Technical Support', desc: 'Help with platform issues or bugs' },
  { title: 'Resource Issues', desc: 'Problems with purchased or downloaded materials', hasButton: true },
  { title: 'Feedback & Complaints', desc: 'Share your experience or concerns', hasButton: true },
  { title: 'Partnership Opportunities', desc: 'Collaborate or work together' },
  { title: 'General Questions', desc: "Anything else you'd like to know" },
]

const ReasonCard = ({ title, desc, hasButton, onNavigate }) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-md">
    <div className="w-2 h-2 bg-[#FA5500] rounded-full mt-2 flex-shrink-0" />
    <div className="flex-1">
      <h3 className="font-semibold text-black text-sm">{title}</h3>
      <p className="text-xs text-black/60 mt-1">{desc}</p>
      {hasButton && (
        <button
          onClick={onNavigate}
          className="mt-2.5 flex items-center gap-1.5 px-3 py-1.5 bg-[#FA5500] hover:bg-orange-600 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={PURCHASE_QUERY_ICON} />
          </svg>
          Purchase Query
        </button>
      )}
    </div>
  </div>
)

const CopyButton = ({ onClick, copied }) => (
  <button
    onClick={onClick}
    className="p-1.5 bg-white hover:bg-orange-50 text-[#FA5500] rounded-md border border-orange-200 transition-all hover:border-orange-400 active:scale-95"
  >
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
        copied
          ? "M5 13l4 4L19 7"
          : "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      } />
    </svg>
  </button>
)

const Contact_Us = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const navigate = useNavigate()

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText(phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-black/60 text-sm md:text-base">Have questions or need support? We're here to help.</p>
        </div>

        <div className="bg-gradient-to-b from-white to-orange-50 rounded-2xl border border-orange-200 shadow-lg p-6 md:p-10 mb-6">

          {/* Profile + Contact Card */}
          <div className="mb-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
            <div className="flex flex-col items-center text-center gap-3">

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-300 shadow-md">
                <img src={myImage} alt="Meet Soni" className="w-full h-full object-cover" />
              </div>

              {/* Name & Role */}
              <div>
                <h2 className="text-xl font-bold text-black">Meet Soni</h2>
                <p className="text-xs text-[#FA5500] font-medium mt-0.5">Founder & Solo Operator, DevCareers</p>
              </div>

              {/* Email & Phone rows */}
              <div className="flex flex-col gap-2 w-full max-w-sm mt-1">

                {/* Email row */}
                <div className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-2.5 border border-orange-200">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg className="w-4 h-4 text-[#FA5500] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${email}`} className="text-sm font-medium text-gray-800 hover:text-[#FA5500] transition-colors truncate">
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {copiedEmail && <span className="text-xs text-orange-500 font-medium">Copied!</span>}
                    <CopyButton onClick={copyEmail} copied={copiedEmail} />
                  </div>
                </div>

                {/* Phone row */}
                {phone && (
                  <div className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-2.5 border border-orange-200">
                    <div className="flex items-center gap-2 min-w-0">
                      <svg className="w-4 h-4 text-[#FA5500] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${phone}`} className="text-sm font-medium text-gray-800 hover:text-[#FA5500] transition-colors truncate">
                        {phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {copiedPhone && <span className="text-xs text-orange-500 font-medium">Copied!</span>}
                      <CopyButton onClick={copyPhone} copied={copiedPhone} />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Contact Reasons */}
          <div>
            <h2 className="text-lg font-bold text-black mb-6 text-center">What can we help you with?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CONTACT_REASONS.map(({ title, desc, hasButton }) => (
                <ReasonCard key={title} title={title} desc={desc} hasButton={hasButton} onNavigate={() => navigate('/purchase-query')} />
              ))}
            </div>
          </div>

          <div className="border-t border-orange-200 my-8" />

          {/* Response Time */}
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl p-5 border border-orange-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-orange-300 flex-shrink-0">
                <svg className="w-6 h-6 text-[#FA5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black text-sm">Quick Response Time</h3>
                <p className="text-xs text-black/70 mt-1">We aim to respond within 24–48 hours</p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center bg-white rounded-xl border border-orange-200 p-4 shadow-sm">
          <p className="text-xs text-black/60">
            <span className="font-semibold text-[#FA5500]">Pro tip:</span> For urgent matters, please mention "URGENT" in your email subject line
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contact_Us