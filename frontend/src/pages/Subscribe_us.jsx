import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { metrics } from '../config/metrics';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID_MEETSONI;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_SUBSCRIBE_US_MEETSONI;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_MEETSONI;
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL;
const YOUTUBE_LINK = import.meta.env.VITE_YOUTUBE_LINK;
const WHATSAPP_LINK = import.meta.env.VITE_WHATSAPP_LINK;
const TOTAL_SUBS = metrics.totalSubs;
const TOTAL_MEMBERS = metrics.totalMembers;

const CATEGORIES = [
  'Software Developer', 'Java Developer', 'Python Developer', 'Frontend Developer',
  'Backend Developer', 'Full Stack Developer', 'Mobile Developer', 'DevOps Engineer',
  'Data Scientist', 'ML Engineer', 'UI/UX Designer', 'Product Manager',
  'QA Engineer', 'Cloud Engineer', 'Cybersecurity',
]

const WHY_SUBSCRIBE = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" color='black'>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-5.5 4.2L18 21l-6-4-6 4 1.5-7.8L2 9h7l3-7z"/>
      </svg>
    ),
    title: 'Curated for Freshers',
    desc: 'Only entry-level, internship, and campus roles'
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"  color='black'>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
      </svg>
    ),
    title: 'Early Access',
    desc: 'Get notified about new job postings before they fill up.'
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"  color='black'>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v13H6.5A2.5 2.5 0 004 19.5V4z"/>
      </svg>
    ),
    title: 'Free Resources',
    desc: 'Receive cheatsheets, roadmaps, and interview prep guides directly in your inbox.'
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" color='black'>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2.032 2.032 0 0118 14.16V11a6.002 6.002 0 00-4-5.65V5a2 2 0 10-4 0v.35C7.67 6.17 6 8.39 6 11v3.16c0 .54-.21 1.06-.59 1.44L4 17h5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v1a3 3 0 006 0v-1"/>
      </svg>
    ),
    title: 'No Spam, Ever',
    desc: 'We send only what matters. You can unsubscribe any time in one click.'
  }
]

const SOCIAL_CHANNELS = [
  {
    href: YOUTUBE_LINK,
    accentBorder: '#fca5a5',        // red-300 — soft left border
    iconBg: '#fff1f1',              // very pale red
    iconColor: '#dc2626',           // red-600
    statColor: '#dc2626',
    ctaBg: '#fef2f2',
    ctaText: '#dc2626',
    ctaBorder: '#fecaca',
    ctaHover: '#fee2e2',
    label: 'YouTube',
    tag: 'Watch & Learn',
    desc: 'Career tips, job walkthroughs, interview prep videos, and company-specific advice',
    stat: TOTAL_SUBS,
    statLabel: 'Subscribers',
    cta: 'Subscribe on YouTube',
    svgPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    href: WHATSAPP_LINK,
    accentBorder: '#86efac',        // green-300 — soft left border
    iconBg: '#f0fdf4',              // very pale green
    iconColor: '#16a34a',           // green-600
    statColor: '#16a34a',
    ctaBg: '#f0fdf4',
    ctaText: '#16a34a',
    ctaBorder: '#bbf7d0',
    ctaHover: '#dcfce7',
    label: 'WhatsApp',
    tag: 'Instant Alerts',
    desc: 'Get real-time job alerts and internship drops straight to your WhatsApp. Never miss a fresh opening.',
    stat: TOTAL_MEMBERS,
    statLabel: 'Members',
    cta: 'Join WhatsApp Group',
    svgPath: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
  },
]

const useCountUp = (target, isVisible) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const frameRate = 1000 / 60
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0
    const counter = setInterval(() => {
      frame++
      const ease = 1 - Math.pow(1 - frame / totalFrames, 4)
      setCount(Math.round(ease * target))
      if (frame === totalFrames) clearInterval(counter)
    }, frameRate)
    return () => clearInterval(counter)
  }, [isVisible, target])
  return count
}

const SocialChannels = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const counts = [
    useCountUp(Number(SOCIAL_CHANNELS[0].stat) || 0, isVisible),
    useCountUp(Number(SOCIAL_CHANNELS[1].stat) || 0, isVisible),
  ]

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-5 mb-10">
      {SOCIAL_CHANNELS.map(({ href, accentBorder, iconBg, iconColor, statColor, ctaBg, ctaText, ctaBorder, ctaHover, label, tag, desc, cta, svgPath, statLabel }, i) => (
        <div
          key={label}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
          style={{ border: '1.5px solid #f3f4f6', borderLeft: `4px solid ${accentBorder}` }}
        >
          {/* Card top row */}
          <div className="px-6 pt-5 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: iconColor }}>
                  <path d={svgPath} />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">{label}</h3>
                <span className="text-xs font-semibold text-gray-400">{tag}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-extrabold text-2xl leading-none" style={{ color: statColor }}>{counts[i]}+</p>
              <p className="text-xs text-gray-400 mt-0.5">{statLabel}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-gray-100" />

          {/* Body */}
          <div className="px-6 py-4">
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all"
              style={{ background: ctaBg, color: ctaText, border: `1.5px solid ${ctaBorder}` }}
              onMouseEnter={e => e.currentTarget.style.background = ctaHover}
              onMouseLeave={e => e.currentTarget.style.background = ctaBg}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={svgPath} />
              </svg>
              {cta}
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      ))}
        </div>

  )
}

const SubscribeUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', category: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        category: formData.category,
        message: `New subscription request from ${formData.name} (${formData.email}) interested in ${formData.category}`
      }, EMAILJS_PUBLIC_KEY)
      setSubmitStatus({ type: 'success', message: "🎉 You're subscribed! Check your inbox for a confirmation." })
      setFormData({ name: '', email: '', category: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 3000)
    }
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.45s ease both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.12s; }
        .d3 { animation-delay: 0.20s; }
        .d4 { animation-delay: 0.28s; }
        .d5 { animation-delay: 0.36s; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm mb-8 transition-colors fu">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          {/* Hero */}
          <div className="text-center mb-10 fu d1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.025em' }}>
              Stay Connected<br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">With DevCareers</span>
            </h1>
            <p className="text-gray-500 text-base max-w-md mx-auto">
              Join thousands of developers getting fresh jobs, resources, and career tips
            </p>
          </div>

          {/* ── Social Channels (at top as requested) ── */}
          <div className="fu d2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">Join our channels</p>
            <SocialChannels />
          </div>

          
          {/* ── Newsletter Form ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden mb-10 fu d4">
            {/* Form header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Newsletter Subscription</h2>
                  <p className="text-orange-100 text-xs mt-0.5">Personalised job alerts based on your role</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 border border-gray-200 bg-gray-50 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 border border-gray-200 bg-gray-50 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Job Category</label>
                  <div className="relative">
                    <select
                      name="category" value={formData.category} onChange={handleChange} required
                      className="w-full px-4 py-2.5 border border-gray-200 bg-gray-50 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition appearance-none cursor-pointer"
                    >
                      <option value="">Select your interest</option>
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat.toLowerCase().replace(/\s+/g, '-').replace('/', '-')}>{cat}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Status */}
                {submitStatus.message && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit" disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${isSubmitting ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="px-8 pb-6 text-center">
  <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
    
    {/* Lock SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-900"
    >
      <rect x="3" y="11" width="18" height="11" rx="2"></rect>
      <path d="M7 11V7a5 5 0 0110 0v4"></path>
    </svg>

    <span className="text-gray-900">
      We respect your privacy. To unsubscribe or request deletion of your data,
      please fill out the form on our{" "}
      <a
        href="/contact-us"
        className="text-indigo-600 hover:underline font-medium"
      >
        Contact Us
      </a>{" "}
      page.
    </span>

  </p>
</div>
          </div>
{/* ── Why Subscribe ── */}
          <div className="mb-8 fu d3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">Why subscribe?</p>
            <div className="grid grid-cols-2 gap-3">
              {WHY_SUBSCRIBE.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-orange-200 hover:shadow-sm transition-all">
                  <div className="text-2xl mb-2">{icon}</div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default SubscribeUs;