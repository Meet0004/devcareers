import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import myImage from '../../assets/myImage.avif'

const email = import.meta.env.VITE_RECIPIENT_EMAIL
const phone  = import.meta.env.VITE_PHONE_NUMBER

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID_CONTACT_US
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT_US
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CONTACT_US

const PURCHASE_QUERY_ICON = "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"

import resourceData from '../../data/resourceData/resourceData'
import packageData from '../../data/resourceData/packagesData'

const RESOURCES = [
  ...resourceData.map(r => r.title),
  ...packageData.map(p => p.title)
]

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
    title: 'Resource / Purchase Issue',
    desc: 'Problems with purchased or downloaded materials from Topmate.',
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: 'Feedback & Complaints',
    desc: 'Share your experience, suggestions, or raise a concern.',
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
    a: "Select 'Resource / Purchase Issue' in the contact form above, pick the resource you bought, and submit. Once we verify your payment, we'll send the resource directly to your email within 6 hours."
  },
  {
    q: "Can I suggest a resource or topic you should cover?",
    a: "Absolutely — we love community input. Send us a message and we'll consider it for an upcoming resource. We read every suggestion, even if we can't always respond individually."
  },
  {
    q: "I found a broken link or bug on the site. How do I report it?",
    a: "Use the contact form above and select 'Technical Support'. Include the page URL and a brief description. Screenshot if possible — we treat bug reports as high priority and typically fix them within 24 hours."
  },
  {
    q: "I want to advertise or sponsor content on DevCareers. Who do I contact?",
    a: "Use the contact form and select 'Partnership Opportunity'. Include your brand, target audience, and what kind of collaboration you have in mind. We respond within 2–3 business days."
  },
  {
    q: "Is my personal information safe when I contact you?",
    a: "Yes. Any information you share is used solely to resolve your query. We do not share, sell, or store your personal data beyond what's needed to respond to you."
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

const SUBJECT_OPTIONS = [
  { value: '',                          label: 'Select a topic…' },
  { value: 'Job & Internship Inquiry',  label: 'Job & Internship Inquiry' },
  { value: 'Technical Support',         label: 'Technical Support' },
  { value: 'Resource / Purchase Issue', label: 'Resource / Purchase Issue' },
  { value: 'Feedback & Complaint',      label: 'Feedback & Complaint' },
  { value: 'Partnership Opportunity',   label: 'Partnership Opportunity' },
  { value: 'General Question',          label: 'General Question' },
]

const IS_PURCHASE = 'Resource / Purchase Issue'

// ── Resource Picker (from PurchaseQueryPage) ──────────────────────────────────
const ResourcePicker = ({ value, onChange, error, onClearError }) => {
  const [query, setQuery]               = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const filtered = RESOURCES.filter(r =>
    r.toLowerCase().includes(query.toLowerCase())
  )

  const selectResource = (r) => {
    onChange(r)
    setQuery('')
    setShowDropdown(false)
    onClearError()
  }

  return (
    <div className="resource-picker-wrap">
      {/* Info pill */}
      <div className="purchase-info-pill">
        <svg className="w-4 h-4 flex-shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-xs text-orange-700">
          Our resources are sold on <strong>Topmate.io</strong>. After payment the download is on the Topmate page. Missed it? Submit below and we'll resend within <strong>6 hours</strong>.
        </p>
      </div>

      {/* Label */}
      <label className="form-label" style={{ marginTop: 14 }}>
        Resource Purchased <span className="req">*</span>
      </label>

      {/* Search input */}
      <div style={{ position: 'relative' }}>
        <svg
          className="w-4 h-4"
          style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query || value}
          onChange={e => {
            setQuery(e.target.value)
            onChange('')
            setShowDropdown(true)
            onClearError()
          }}
          onFocus={() => { setShowDropdown(true); if (value) { setQuery(''); onChange('') } }}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          placeholder="Type to search resource…"
          className={`form-input ${error ? 'error' : ''}`}
          style={{ paddingLeft: 38 }}
        />

        {/* Dropdown */}
        {showDropdown && query && filtered.length > 0 && (
          <ul className="resource-dropdown">
            {filtered.map((r, i) => (
              <li
                key={i}
                onMouseDown={() => selectResource(r)}
                className="resource-dropdown-item"
              >
                <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        )}

        {showDropdown && query && filtered.length === 0 && (
          <div className="resource-dropdown" style={{ padding: '14px 16px', color: '#9ca3af', fontSize: 13 }}>
            No matching resource found.
          </div>
        )}
      </div>

      {/* Selected badge */}
      {value && (
        <div className="resource-selected-badge">
          <svg className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-medium text-orange-700 truncate">{value}</span>
          <button
            type="button"
            onClick={() => { onChange(''); setQuery('') }}
            className="ml-auto flex-shrink-0 text-orange-400 hover:text-orange-600 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Purchase date */}
      <label className="form-label" style={{ marginTop: 14 }}>
        Date of Purchase <span className="req">*</span>
      </label>

      {error && (
        <p className="form-error-msg">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
const Contact_Us = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [openFaq, setOpenFaq]         = useState(null)
  const navigate = useNavigate()

  // Form state
  const formRef = useRef(null)
  const MAX_CHARS = 1000
  const [formData, setFormData] = useState({
    from_name:      '',
    from_email:     '',
    subject:        '',
    message:        '',
    resource_title: '',   // only used when subject === IS_PURCHASE
    purchase_date:  '',   // only used when subject === IS_PURCHASE
  })
  const [formErrors, setFormErrors] = useState({})
  const [formStatus, setFormStatus] = useState('idle') // idle | sending | success | error
  const [charCount, setCharCount]   = useState(0)

  const isPurchase = formData.subject === IS_PURCHASE

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

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'message') setCharCount(value.length)
    // When topic changes away from purchase, clear purchase-specific fields
    if (name === 'subject' && value !== IS_PURCHASE) {
      setFormData(prev => ({ ...prev, subject: value, resource_title: '', purchase_date: '' }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }))
  }

  const setResource = (val) => setFormData(prev => ({ ...prev, resource_title: val }))
  const clearResourceError = () => {
    if (formErrors.resource_title) setFormErrors(prev => ({ ...prev, resource_title: '' }))
  }

  const validate = () => {
    const errors = {}
    if (!formData.from_name.trim())  errors.from_name  = 'Name is required.'
    if (!formData.from_email.trim()) errors.from_email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email))
      errors.from_email = 'Enter a valid email address.'
    if (!formData.subject)           errors.subject    = 'Please select a topic.'
    if (isPurchase) {
      if (!formData.resource_title.trim()) errors.resource_title = 'Please select the resource you purchased.'
      if (!formData.purchase_date)         errors.purchase_date  = 'Purchase date is required.'
    }
    if (!formData.message.trim())    errors.message    = 'Message cannot be empty.'
    else if (formData.message.trim().length < 20)
      errors.message = 'Please provide at least 20 characters.'
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length) { setFormErrors(errors); return }

    setFormStatus('sending')
    try {
      // Template variables sent to EmailJS:
      // {{from_name}}, {{from_email}}, {{reply_to}}, {{subject}},
      // {{message}}, {{sent_at}}, {{resource_title}}, {{purchase_date}}
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:      formData.from_name.trim(),
          from_email:     formData.from_email.trim(),
          reply_to:       formData.from_email.trim(),
          subject:        formData.subject,
          message:        formData.message.trim(),
          sent_at:        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          resource_title: formData.resource_title || 'N/A',
          purchase_date:  formData.purchase_date  || 'N/A',
        },
        EMAILJS_PUBLIC_KEY
      )
      setFormStatus('success')
      setFormData({ from_name: '', from_email: '', subject: '', message: '', resource_title: '', purchase_date: '' })
      setCharCount(0)
    } catch (err) {
      console.error('EmailJS error:', err)
      setFormStatus('error')
    }
  }

  const resetForm = () => { setFormStatus('idle'); setFormErrors({}) }

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
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.7); }
          70%  { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up  { animation: fadeUp 0.5s ease both; }
        .scale-in { animation: scaleIn 0.4s ease both; }
        .pop-in   { animation: popIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both; }
        .slide-down { animation: slideDown 0.25s ease both; }
        .d1{animation-delay:.05s} .d2{animation-delay:.12s} .d3{animation-delay:.18s}
        .d4{animation-delay:.24s} .d5{animation-delay:.30s} .d6{animation-delay:.36s}
        .d7{animation-delay:.42s} .d8{animation-delay:.48s}

        /* Hero Card */
        .hero-card {
          background: linear-gradient(135deg, #fff7ed 0%, #ffffff 60%, #fff3e8 100%);
          border: 1.5px solid #fed7aa;
          border-radius: 24px;
          box-shadow: 0 8px 40px rgba(249,115,22,0.10), 0 2px 8px rgba(0,0,0,0.04);
          overflow: hidden; position: relative;
        }
        .hero-card::before {
          content:''; position:absolute; top:-60px; right:-60px;
          width:200px; height:200px;
          background: radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%);
          pointer-events:none;
        }
        .avatar-ring {
          width:96px; height:96px; border-radius:50%; padding:3px;
          background: linear-gradient(135deg,#f97316,#fb923c,#fdba74);
          box-shadow: 0 4px 20px rgba(249,115,22,0.35); flex-shrink:0;
        }
        .avatar-ring img {
          width:100%; height:100%; border-radius:50%; object-fit:cover; border:2px solid #fff;
        }
        .contact-pill {
          display:flex; align-items:center; gap:10px;
          background:#fff; border:1.5px solid #fed7aa; border-radius:14px;
          padding:10px 14px; transition:border-color .2s,box-shadow .2s;
        }
        .contact-pill:hover { border-color:#fb923c; box-shadow:0 2px 12px rgba(249,115,22,0.12); }
        .copy-btn {
          margin-left:auto; flex-shrink:0; width:30px; height:30px;
          border-radius:8px; border:1.5px solid #fed7aa; background:#fff7ed;
          display:flex; align-items:center; justify-content:center;
          color:#f97316; cursor:pointer; transition:all .15s;
        }
        .copy-btn:hover { background:#f97316; color:#fff; border-color:#f97316; transform:scale(1.08); }

        /* Contact Form */
        .contact-form-card {
          background:#fff; border:1.5px solid #fed7aa; border-radius:24px; padding:28px;
          box-shadow:0 4px 24px rgba(249,115,22,0.08); position:relative; overflow:hidden;
        }
        .contact-form-card::before {
          content:''; position:absolute; bottom:-40px; left:-40px;
          width:160px; height:160px;
          background:radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 70%);
          pointer-events:none;
        }

        /* Form elements */
        .form-label { display:block; font-size:13px; font-weight:600; color:#374151; margin-bottom:6px; letter-spacing:.01em; }
        .form-label .req { color:#f97316; margin-left:2px; }
        .form-input, .form-select, .form-textarea {
          width:100%; background:#fafafa; border:1.5px solid #e5e7eb;
          border-radius:12px; padding:11px 14px; font-size:14px; color:#111827;
          outline:none; transition:border-color .2s,box-shadow .2s,background .2s; font-family:inherit;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color:#f97316; background:#fff; box-shadow:0 0 0 3px rgba(249,115,22,0.10);
        }
        .form-input.error, .form-select.error, .form-textarea.error {
          border-color:#ef4444; background:#fff9f9; box-shadow:0 0 0 3px rgba(239,68,68,0.08);
        }
        .form-select {
          appearance:none;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat:no-repeat; background-position:right 12px center;
          padding-right:38px; cursor:pointer;
        }
        .form-textarea { resize:vertical; min-height:120px; line-height:1.6; }
        .form-error-msg { display:flex; align-items:center; gap:5px; font-size:12px; color:#ef4444; margin-top:5px; font-weight:500; }
        .char-counter { font-size:11px; color:#9ca3af; text-align:right; margin-top:4px; }
        .char-counter.warn { color:#f97316; }
        .char-counter.over { color:#ef4444; }

        /* Resource Picker */
        .resource-picker-wrap { background:#fff8f2; border:1.5px solid #fed7aa; border-radius:16px; padding:16px; }
        .purchase-info-pill {
          display:flex; align-items:flex-start; gap:10px;
          background:#fff; border:1.5px solid #fed7aa; border-radius:12px; padding:12px 14px;
        }
        .resource-dropdown {
          position:absolute; z-index:20; width:100%;
          background:#fff; border:1.5px solid #fed7aa; border-radius:14px;
          box-shadow:0 8px 32px rgba(249,115,22,0.12); margin-top:4px;
          max-height:200px; overflow-y:auto;
          animation: slideDown 0.2s ease both;
        }
        .resource-dropdown-item {
          display:flex; align-items:flex-start; gap:8px;
          padding:10px 14px; font-size:13px; color:#374151;
          cursor:pointer; transition:background .12s; border-bottom:1px solid #fef3e8;
        }
        .resource-dropdown-item:last-child { border-bottom:none; }
        .resource-dropdown-item:first-child { border-radius:14px 14px 0 0; }
        .resource-dropdown-item:last-child  { border-radius:0 0 14px 14px; }
        .resource-dropdown-item:hover { background:#fff7ed; }
        .resource-selected-badge {
          display:flex; align-items:center; gap:8px;
          background:#fff; border:1.5px solid #fed7aa; border-radius:10px;
          padding:8px 12px; margin-top:8px;
        }

        /* Submit button */
        .submit-btn {
          width:100%; display:flex; align-items:center; justify-content:center; gap:8px;
          padding:13px 24px; background:linear-gradient(135deg,#f97316,#ea580c);
          color:#fff; font-size:15px; font-weight:700; border-radius:14px; border:none;
          cursor:pointer; transition:all .2s; box-shadow:0 4px 18px rgba(249,115,22,0.30);
          letter-spacing:.01em;
        }
        .submit-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 8px 28px rgba(249,115,22,0.40); }
        .submit-btn:active:not(:disabled) { transform:translateY(0); }
        .submit-btn:disabled { opacity:.75; cursor:not-allowed; }
        .spinner {
          width:18px; height:18px; border:2.5px solid rgba(255,255,255,0.35);
          border-top-color:#fff; border-radius:50%; animation:spin 0.7s linear infinite;
        }

        /* Success */
        .form-success { display:flex; flex-direction:column; align-items:center; text-align:center; padding:32px 16px; gap:12px; }
        .success-icon-wrap {
          width:72px; height:72px; border-radius:50%;
          background:linear-gradient(135deg,#dcfce7,#bbf7d0);
          border:2px solid #86efac; display:flex; align-items:center; justify-content:center;
        }

        /* Error banner */
        .form-error-banner {
          display:flex; align-items:flex-start; gap:10px;
          background:#fff5f5; border:1.5px solid #fca5a5; border-radius:12px;
          padding:14px 16px; margin-bottom:18px;
        }

        /* Reason cards */
        .reason-card {
          background:#fff; border:1.5px solid #f3f4f6; border-radius:16px; padding:18px;
          transition:border-color .2s,box-shadow .2s,transform .2s;
        }
        .reason-card:hover { border-color:#fed7aa; box-shadow:0 4px 18px rgba(249,115,22,0.10); transform:translateY(-2px); }
        .reason-icon {
          width:40px; height:40px; border-radius:12px;
          background:linear-gradient(135deg,#fff7ed,#ffedd5);
          display:flex; align-items:center; justify-content:center; color:#f97316; flex-shrink:0;
        }

        .section-divider { height:1px; background:linear-gradient(to right,transparent,#fed7aa,transparent); margin:8px 0; }

        .sla-bar {
          background:linear-gradient(135deg,#fff7ed,#ffedd5); border:1.5px solid #fed7aa;
          border-radius:16px; padding:18px 22px; display:flex; align-items:center; gap:16px;
        }
        .pro-tip { background:#fff; border:1.5px solid #fed7aa; border-radius:14px; padding:14px 18px; display:flex; align-items:center; gap:10px; }
        .faq-item { background:#fff; border:1.5px solid #f3f4f6; border-radius:14px; overflow:hidden; transition:border-color .2s; }
        .faq-item:hover { border-color:#fed7aa; }
        .faq-btn { width:100%; display:flex; align-items:center; justify-content:space-between; padding:16px 18px; background:none; border:none; cursor:pointer; text-align:left; transition:background .15s; }
        .faq-btn:hover { background:#fff7ed; }
        .faq-chevron { width:18px; height:18px; color:#f97316; flex-shrink:0; transition:transform .2s; }
        .faq-chevron.open { transform:rotate(180deg); }
        .faq-answer { padding:12px 18px 16px; font-size:13px; color:#4b5563; line-height:1.7; border-top:1px solid #f3f4f6; }
        .about-card {
          background:#fff; border:1.5px solid #f3f4f6; border-radius:16px; padding:18px;
          display:flex; gap:14px; transition:border-color .2s,box-shadow .2s,transform .2s;
        }
        .about-card:hover { border-color:#fed7aa; box-shadow:0 4px 18px rgba(249,115,22,0.08); transform:translateY(-2px); }
        .about-icon {
          width:42px; height:42px; border-radius:12px;
          background:linear-gradient(135deg,#fff7ed,#ffedd5);
          display:flex; align-items:center; justify-content:center; color:#f97316; flex-shrink:0;
        }
        .checklist-item {
          display:flex; align-items:flex-start; gap:12px; padding:13px 16px;
          background:#fff; border:1.5px solid #f3f4f6; border-radius:12px; transition:border-color .15s;
        }
        .checklist-item:hover { border-color:#fed7aa; }
        .cta-strip {
          background:linear-gradient(135deg,#f97316,#ea580c); border-radius:20px; padding:28px 32px;
          display:flex; flex-direction:column; align-items:center; text-align:center; gap:16px;
          box-shadow:0 8px 32px rgba(249,115,22,0.30);
        }
        .cta-email-btn {
          display:inline-flex; align-items:center; gap:8px; background:#fff; color:#ea580c;
          font-weight:700; font-size:14px; padding:12px 28px; border-radius:100px;
          text-decoration:none; transition:all .2s; box-shadow:0 2px 12px rgba(0,0,0,0.10);
        }
        .cta-email-btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.14); }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* ── Back ── */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          {/* ── Title ── */}
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

          {/* ── Contact Form ── */}
          <div className="contact-form-card fade-up d2">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Send a Message</h2>
              <p className="text-sm text-gray-500">Fill in the form below — we'll reply to your inbox directly.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="form-success pop-in">
                <div className="success-icon-wrap">
                  <svg className="w-9 h-9 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">Message sent!</p>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">
                    {isPurchase
                      ? "We've received your purchase query. Your resource will be sent to your email within 6 hours."
                      : "Thanks for reaching out. Meet will get back to you within 24–48 hours."
                    }
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="mt-2 px-6 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold text-sm rounded-xl border border-orange-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>

                {formStatus === 'error' && (
                  <div className="form-error-banner">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-red-700">Something went wrong</p>
                      <p className="text-xs text-red-500 mt-0.5">
                        Couldn't send your message. Please try again or email us at{' '}
                        <a href={`mailto:${email}`} className="underline">{email}</a>
                      </p>
                    </div>
                    <button type="button" onClick={resetForm} className="ml-auto flex-shrink-0 text-red-400 hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="form-label" htmlFor="from_name">Your Name <span className="req">*</span></label>
                    <input
                      id="from_name" name="from_name" type="text" autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.from_name} onChange={handleChange}
                      className={`form-input ${formErrors.from_name ? 'error' : ''}`}
                    />
                    {formErrors.from_name && <p className="form-error-msg"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.from_name}</p>}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="from_email">Your Email <span className="req">*</span></label>
                    <input
                      id="from_email" name="from_email" type="email" autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.from_email} onChange={handleChange}
                      className={`form-input ${formErrors.from_email ? 'error' : ''}`}
                    />
                    {formErrors.from_email && <p className="form-error-msg"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.from_email}</p>}
                  </div>
                </div>

                {/* Topic */}
                <div className="mb-5">
                  <label className="form-label" htmlFor="subject">Topic <span className="req">*</span></label>
                  <select
                    id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    className={`form-select ${formErrors.subject ? 'error' : ''}`}
                  >
                    {SUBJECT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>{opt.label}</option>
                    ))}
                  </select>
                  {formErrors.subject && <p className="form-error-msg"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.subject}</p>}
                </div>

                {/* ── Resource Picker — only when topic = IS_PURCHASE ── */}
                {isPurchase && (
                  <div className="mb-5 slide-down">
                    <ResourcePicker
                      value={formData.resource_title}
                      onChange={setResource}
                      error={formErrors.resource_title}
                      onClearError={clearResourceError}
                    />
                    {/* Purchase date rendered inside ResourcePicker label area; input lives here */}
                    <input
                      type="date"
                      name="purchase_date"
                      value={formData.purchase_date}
                      max={new Date().toISOString().split('T')[0]}
                      onChange={handleChange}
                      className={`form-input mt-1.5 ${formErrors.purchase_date ? 'error' : ''}`}
                    />
                    {formErrors.purchase_date && <p className="form-error-msg"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.purchase_date}</p>}
                  </div>
                )}

                {/* Message */}
                <div className="mb-6">
                  <label className="form-label" htmlFor="message">Message <span className="req">*</span></label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder={isPurchase
                      ? "Describe your issue — e.g. 'I purchased the SQL Cheatsheet on Topmate but the download page closed before I could save the file.'"
                      : "Describe your query in detail — the more context you give, the faster we can help."
                    }
                    value={formData.message} onChange={handleChange}
                    maxLength={MAX_CHARS}
                    className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                  />
                  <div className="flex items-start justify-between">
                    <div>
                      {formErrors.message && <p className="form-error-msg"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.message}</p>}
                    </div>
                    <p className={`char-counter ${charCount > MAX_CHARS * 0.9 ? (charCount >= MAX_CHARS ? 'over' : 'warn') : ''}`}>
                      {charCount}/{MAX_CHARS}
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" className="submit-btn" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? (
                    <><div className="spinner" />Sending…</>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {isPurchase ? 'Submit Purchase Query' : 'Send Message'}
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center mt-3">
                  We'll reply to <strong className="text-gray-500">{formData.from_email || 'your email'}</strong>
                  {isPurchase ? ' within 6 hours.' : ' within 24–48 hours.'}
                </p>
              </form>
            )}
          </div>

          <div className="section-divider" />

          {/* ── What Can We Help With ── */}
          <div className="fade-up d3">
            <h2 className="text-lg font-bold text-gray-800 mb-1">What can we help you with?</h2>
            <p className="text-sm text-gray-500 mb-5">Pick the category that best fits your question — we'll route it to the right place.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTACT_REASONS.map(({ icon, title, desc }) => (
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
              DevCareers is a solo-built platform by <strong className="text-gray-700">Meet Soni</strong> focused entirely on helping freshers, students, and early-career developers land their first tech job.
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

          {/* ── Checklist ── */}
          <div className="fade-up d5">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Before you email — a quick checklist</h2>
            <p className="text-sm text-gray-500 mb-5">Including these details upfront means we can resolve your issue on the first reply.</p>
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
                    <svg className={`faq-chevron ${openFaq === i ? 'open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && <div className="faq-answer">{faq.a}</div>}
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
                <p className="text-xs text-gray-500 mt-0.5">Purchase issues are prioritised at 6 hours. We reply to every single query.</p>
              </div>
            </div>
            <div className="pro-tip">
              <span className="text-lg">💡</span>
              <p className="text-xs text-gray-600">
                <span className="font-bold text-orange-500">Pro tip:</span> For urgent matters, mention{' '}
                <span className="font-bold text-gray-800">"URGENT"</span> in your message to get a faster response.
              </p>
            </div>
          </div>

          {/* ── CTA Strip ── */}
          <div className="cta-strip fade-up d8">
            <div>
              <p className="text-white font-bold text-xl mb-1">Prefer to email directly?</p>
              <p className="text-orange-100 text-sm max-w-sm mx-auto">
                Drop us an email — we read and personally reply to every single one.
              </p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=meetgssoni04@gmail.com"
              target="_blank" rel="noopener noreferrer"
              className="cta-email-btn"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Open Gmail →
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact_Us