import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID_MEETCODES;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_SUBSCRIBE_US_MEETCODES;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_MEETCODES;
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL;
const YOUTUBE_LINK = import.meta.env.VITE_YOUTUBE_LINK;
const WHATSAPP_LINK = import.meta.env.VITE_WHATSAPP_LINK;
const TOTAL_SUBS = import.meta.env.VITE_TOTAL_SUBS;
const TOTAL_MEMBERS = import.meta.env.VITE_TOTAL_MEMBERS;

const CATEGORIES = [
  'Software Developer', 'Java Developer', 'Python Developer', 'Frontend Developer',
  'Backend Developer', 'Full Stack Developer', 'Mobile Developer', 'DevOps Engineer',
  'Data Scientist', 'ML Engineer', 'UI/UX Designer', 'Product Manager',
  'QA Engineer', 'Cloud Engineer', 'Cybersecurity',
]

const SOCIAL_CHANNELS = [
  {
    href: YOUTUBE_LINK,
    border: 'border-red-500',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
    label: 'YouTube',
    desc: 'Job Opportunities, tips & career advice',
    stat: TOTAL_SUBS,
    statLabel: 'Subscribers',
    svgPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    href: WHATSAPP_LINK,
    border: 'border-green-500',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    label: 'WhatsApp',
    desc: 'Get instant job alerts & updates',
    stat: TOTAL_MEMBERS,
    statLabel: 'Members',
    svgPath: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
  },
]

const INPUT_CLASS = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-gray-900'

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
      const easeOutQuart = 1 - Math.pow(1 - frame / totalFrames, 4)
      setCount(Math.round(easeOutQuart * target))
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
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const counts = [
    useCountUp(SOCIAL_CHANNELS[0].stat, isVisible),
    useCountUp(SOCIAL_CHANNELS[1].stat, isVisible),
  ]

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-12">
      {SOCIAL_CHANNELS.map(({ href, border, iconBg, iconColor, label, desc, svgPath, statLabel }, i) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 ${border} group`}
        >
          <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
            <svg className={`w-10 h-10 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
              <path d={svgPath} />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{label}</h3>
          <p className="text-2xl font-bold text-gray-900 text-center">{counts[i]}+</p>
          <p className="text-sm text-gray-500 text-center mb-2">{statLabel}</p>
          <p className="text-gray-600 text-center text-sm">{desc}</p>
        </a>
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
      setSubmitStatus({ type: 'success', message: "Thank you for subscribing! We'll keep you updated." })
      setFormData({ name: '', email: '', category: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 2000)
    }
  }

  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm mb-6 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Stay Connected With Us</h1>
          <p className="text-lg text-gray-600">Join our community across multiple platforms and never miss an update</p>
        </div>

        <SocialChannels />

        <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 text-center mb-8">Get personalized job recommendations based on your interests</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
                <input type={type} id={id} name={id} value={formData[id]} onChange={handleChange} required className={INPUT_CLASS} placeholder={placeholder} />
              </div>
            ))}

            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">Job Category</label>
              <select
                id="category" name="category" value={formData.category} onChange={handleChange} required
                className={`${INPUT_CLASS} bg-white text-gray-800 cursor-pointer appearance-none`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ff6b35'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
              >
                <option value="">Select your interest</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat.toLowerCase().replace(/\s+/g, '-').replace('/', '-')} className="text-gray-800">{cat}</option>
                ))}
              </select>
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                {submitStatus.message}
              </div>
            )}

            <button type="submit" disabled={isSubmitting}
              className={`w-full font-semibold py-4 rounded-lg transition-colors inline-flex items-center justify-center group ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
            >
              {isSubmitting ? 'Subscribing...' : (
                <>
                  Subscribe Now
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  );
};

export default SubscribeUs;