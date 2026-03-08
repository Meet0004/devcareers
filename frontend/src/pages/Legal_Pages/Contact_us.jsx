import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from '../../assets/myImage.avif'

const email = import.meta.env.VITE_RECIPIENT_EMAIL
const phone = import.meta.env.VITE_PHONE_NUMBER

const PURCHASE_QUERY_ICON = "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"

const CONTACT_REASONS = [
  {
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: 'Job & Internship Inquiries',
    desc: 'Questions about listings, roles, and opportunities posted on the platform.'
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: 'Technical Support',
    desc: 'Help with platform issues, broken links, or anything not working as expected.'
  },
  {
    icon: PURCHASE_QUERY_ICON,
    title: 'Resource Issues',
    desc: 'Problems with purchased or downloaded materials from Topmate.',
    hasButton: true
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: 'Feedback & Complaints',
    desc: 'Share your experience, suggestions, or raise a concern.',
    hasButton: true
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: 'Partnership Opportunities',
    desc: 'Interested in collaborating, sponsoring, or working together?'
  },
  {
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: 'General Questions',
    desc: "Anything else you'd like to ask — we read every message."
  },
]

const FAQS = [
  {
    q: "How quickly will I get a reply?",
    a: "We aim to respond within 24–48 hours on weekdays. For purchase-related queries, we usually respond within 6 hours. If your issue is urgent, put 'URGENT' in your subject line."
  },
  {
    q: "I bought a resource on Topmate but missed the download. What do I do?",
    a: "Head to the Purchase Query page and fill in the form using the same email you used on Topmate. Once we verify your payment, we'll send the resource directly to your email within 6 hours."
  },
  {
    q: "Can I suggest a resource or topic you should cover?",
    a: "Absolutely — we love community input. Email us with your suggestion and we'll consider it for an upcoming resource. We read every suggestion, even if we can't always respond individually."
  },
  {
    q: "I found a broken link or bug on the site. How do I report it?",
    a: "Email us with the page URL and a brief description of the issue. Screenshot if possible. We treat bug reports as high priority and typically fix them within 24 hours."
  },
  {
    q: "I want to advertise or sponsor content on DevCareers. Who do I contact?",
    a: "Email us directly with your proposal. Include your brand, target audience, and what kind of collaboration you have in mind. We review all partnership proposals and respond within 2–3 business days."
  },
  {
    q: "Is my personal information safe when I contact you?",
    a: "Yes. Any information you share over email is used solely to resolve your query. We do not share, sell, or store your personal data beyond what's needed to respond to you. See our Privacy Policy for full details."
  },
]

const CHECKLIST = [
  { emoji: "📧", text: "Use the same email address associated with your account or purchase" },
  { emoji: "📝", text: "Include a clear subject line — e.g. 'Missing resource – SQL Cheatsheet'" },
  { emoji: "📅", text: "Mention the date of your purchase or the action that caused the issue" },
  { emoji: "🔗", text: "Share any relevant URLs, order IDs, or screenshots if applicable" },
  { emoji: "🚨", text: "Add 'URGENT' to the subject for time-sensitive matters" },
]

const ABOUT_POINTS = [
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Verified Job Listings",
    desc: "Every role posted on DevCareers is manually reviewed before going live. We don't auto-scrape or post unverified listings."
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Curated Career Resources",
    desc: "All cheatsheets, interview guides, and study packs are written and curated by experienced developers — not AI-generated filler."
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Built for Freshers & Students",
    desc: "DevCareers focuses specifically on entry-level roles, internships, and campus hiring — not senior positions that flood most job boards."
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Direct & Personal Support",
    desc: "There's no support ticket system or bot here. Every message goes directly to Meet Soni — the founder — and gets a real, personal reply."
  },
]

const Contact_Us = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
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
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .fade-up  { animation: fadeUp 0.5s ease both; }
        .scale-in { animation: scaleIn 0.4s ease both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.12s; }
        .d3 { animation-delay: 0.18s; }
        .d4 { animation-delay: 0.24s; }
        .d5 { animation-delay: 0.30s; }
        .d6 { animation-delay: 0.36s; }
        .d7 { animation-delay: 0.42s; }
        .d8 { animation-delay: 0.48s; }

        .hero-card {
          background: linear-gradient(135deg, #fff7ed 0%, #ffffff 60%, #fff3e8 100%);
          border: 1.5px solid #fed7aa;
          border-radius: 24px;
          box-shadow: 0 8px 40px rgba(249,115,22,0.10), 0 2px 8px rgba(0,0,0,0.04);
          overflow: hidden;
          position: relative;
        }
        .hero-card::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .avatar-ring {
          width: 96px; height: 96px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #f97316, #fb923c, #fdba74);
          box-shadow: 0 4px 20px rgba(249,115,22,0.35);
          flex-shrink: 0;
        }
        .avatar-ring img {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
        }

        .contact-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1.5px solid #fed7aa;
          border-radius: 14px;
          padding: 10px 14px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-pill:hover {
          border-color: #fb923c;
          box-shadow: 0 2px 12px rgba(249,115,22,0.12);
        }

        .copy-btn {
          margin-left: auto;
          flex-shrink: 0;
          width: 30px; height: 30px;
          border-radius: 8px;
          border: 1.5px solid #fed7aa;
          background: #fff7ed;
          display: flex; align-items: center; justify-content: center;
          color: #f97316;
          cursor: pointer;
          transition: all 0.15s;
        }
        .copy-btn:hover {
          background: #f97316;
          color: #fff;
          border-color: #f97316;
          transform: scale(1.08);
        }

        .reason-card {
          background: #fff;
          border: 1.5px solid #f3f4f6;
          border-radius: 16px;
          padding: 18px;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .reason-card:hover {
          border-color: #fed7aa;
          box-shadow: 0 4px 18px rgba(249,115,22,0.10);
          transform: translateY(-2px);
        }

        .reason-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #fff7ed, #ffedd5);
          display: flex; align-items: center; justify-content: center;
          color: #f97316;
          flex-shrink: 0;
        }

        .query-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 7px 14px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(249,115,22,0.30);
        }
        .query-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(249,115,22,0.40);
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #fed7aa, transparent);
          margin: 8px 0;
        }

        .sla-bar {
          background: linear-gradient(135deg, #fff7ed, #ffedd5);
          border: 1.5px solid #fed7aa;
          border-radius: 16px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pro-tip {
          background: #fff;
          border: 1.5px solid #fed7aa;
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .faq-item {
          background: #fff;
          border: 1.5px solid #f3f4f6;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .faq-item:hover { border-color: #fed7aa; }

        .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 18px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s;
        }
        .faq-btn:hover { background: #fff7ed; }

        .faq-chevron {
          width: 18px; height: 18px;
          color: #f97316;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .faq-chevron.open { transform: rotate(180deg); }

        .faq-answer {
          padding: 0 18px 16px;
          font-size: 13px;
          color: #4b5563;
          line-height: 1.7;
          border-top: 1px solid #f3f4f6;
          padding-top: 12px;
        }

        .about-card {
          background: #fff;
          border: 1.5px solid #f3f4f6;
          border-radius: 16px;
          padding: 18px;
          display: flex;
          gap: 14px;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .about-card:hover {
          border-color: #fed7aa;
          box-shadow: 0 4px 18px rgba(249,115,22,0.08);
          transform: translateY(-2px);
        }

        .about-icon {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #fff7ed, #ffedd5);
          display: flex; align-items: center; justify-content: center;
          color: #f97316;
          flex-shrink: 0;
        }

        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 13px 16px;
          background: #fff;
          border: 1.5px solid #f3f4f6;
          border-radius: 12px;
          transition: border-color 0.15s;
        }
        .checklist-item:hover { border-color: #fed7aa; }

        .cta-strip {
          background: linear-gradient(135deg, #f97316, #ea580c);
          border-radius: 20px;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          box-shadow: 0 8px 32px rgba(249,115,22,0.30);
        }

        .cta-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #ea580c;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        }
        .cta-email-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.14);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* ── Page Title ── */}
          <div className="text-center fade-up">
            <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-2">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.025em' }}>
              Contact Us
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
              Have a question, issue, or just want to say hi? We read every message and reply promptly.
            </p>
          </div>

          {/* ── Hero Profile Card ── */}
          <div className="hero-card p-7 fade-up d1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="avatar-ring scale-in d2">
                <img src={myImage} alt="Meet Soni" />
              </div>
              <div className="flex-1 w-full">
                <div className="text-center sm:text-left mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Meet Soni</h2>
                  <p className="text-xs text-orange-500 font-semibold mt-0.5 uppercase tracking-wide">
                    Founder & Solo Operator · DevCareers
                  </p>
                </div>
                <div className="space-y-2.5">
                  <div className="contact-pill">
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${email}`} className="text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors truncate">
                      {email}
                    </a>
                    <button className="copy-btn" onClick={copyEmail} title="Copy email">
                      {copiedEmail
                        ? <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        : <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      }
                    </button>
                    {copiedEmail && <span className="text-xs text-orange-500 font-semibold">Copied!</span>}
                  </div>
                  {phone && (
                    <div className="contact-pill">
                      <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${phone}`} className="text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors truncate">
                        {phone}
                      </a>
                      <button className="copy-btn" onClick={copyPhone} title="Copy phone">
                        {copiedPhone
                          ? <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          : <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        }
                      </button>
                      {copiedPhone && <span className="text-xs text-orange-500 font-semibold">Copied!</span>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── What Can We Help With ── */}
          <div className="fade-up d3">
            <h2 className="text-lg font-bold text-gray-800 mb-1">What can we help you with?</h2>
            <p className="text-sm text-gray-500 mb-5">Pick the category that best fits your question — we'll route it to the right place.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTACT_REASONS.map(({ icon, title, desc, hasButton }, i) => (
                <div key={title} className="reason-card">
                  <div className="flex items-start gap-3">
                    <div className="reason-icon">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
                      {hasButton && (
                        <button className="query-btn" onClick={() => navigate('/purchase-query')}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={PURCHASE_QUERY_ICON} />
                          </svg>
                          Purchase Query
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider" />

          {/* ── About DevCareers ── */}
          <div className="fade-up d4">
            <h2 className="text-lg font-bold text-gray-800 mb-1">About DevCareers</h2>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              DevCareers is a solo-built platform by <strong className="text-gray-700">Meet Soni</strong> focused entirely on helping freshers, students, and early-career developers land their first tech job. The platform curates verified job listings, internships, campus hiring drives, and career resources — all in one place.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT_POINTS.map(({ icon, title, desc }) => (
                <div key={title} className="about-card">
                  <div className="about-icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider" />

          {/* ── Before You Email Checklist ── */}
          <div className="fade-up d5">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Before you email — a quick checklist</h2>
            <p className="text-sm text-gray-500 mb-5">
              Including these details upfront means we can resolve your issue on the first reply — no back-and-forth needed.
            </p>
            <div className="space-y-2.5">
              {CHECKLIST.map(({ emoji, text }) => (
                <div key={text} className="checklist-item">
                  <span className="text-lg leading-none mt-0.5">{emoji}</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider" />

          {/* ── FAQ ── */}
          <div className="fade-up d6">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-500 mb-5">Quick answers to the most common questions we receive.</p>
            <div className="space-y-2.5">
              {FAQS.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="text-sm font-semibold text-gray-800 pr-4">{faq.q}</span>
                    <svg
                      className={`faq-chevron ${openFaq === i ? 'open' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider" />

          {/* ── SLA + Pro Tip ── */}
          <div className="space-y-3 fade-up d7">
            <div className="sla-bar">
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center border-2 border-orange-200 flex-shrink-0">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Response within 24–48 hours</p>
                <p className="text-xs text-gray-500 mt-0.5">We reply to every query — usually much faster on weekdays. Purchase issues are prioritised at 6 hours.</p>
              </div>
            </div>
            <div className="pro-tip">
              <span className="text-lg">💡</span>
              <p className="text-xs text-gray-600">
                <span className="font-bold text-orange-500">Pro tip:</span> For urgent matters, mention{' '}
                <span className="font-bold text-gray-800">"URGENT"</span> in your email subject line to get a faster response.
              </p>
            </div>
          </div>

          {/* ── CTA Strip ── */}
          <div className="cta-strip fade-up d8">
            <div>
              <p className="text-white font-bold text-xl mb-1">Still have a question?</p>
              <p className="text-orange-100 text-sm max-w-sm mx-auto">
                Drop us an email — we read and personally reply to every single one.
              </p>
            </div>
            <a href={`mailto:${email}`} className="cta-email-btn">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send us an Email →
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact_Us