import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID_MEETSONI;
const EMAILJS_PURCHASE_QUERY_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PURCHASE_QUERY_MEETSONI;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_MEETSONI;
const email = import.meta.env.VITE_RECIPIENT_EMAIL;

const RESOURCES = [
  'SQL Beginner to Advanced (0 - 100)',
  '2000+ HR emails & Famous IT companies emails',
  'HTML CSS Interview Questions',
  '50+ Page Complete JS Cheatsheet',
  '40 Node.js Interview Questions + Answers',
  '100+ Tips, Templates, Harvard Sample & Rules',
  '100+ JavaScript Functions & Methods Cheatsheet',
  'CSS Complete Cheatsheet',
  'OOPS Concept in Java – Complete Notes + Code',
  'Pentest CheatSheets',
  '100 JavaScript Interview Questions',
  'Complete Interview Preparation Pack (HR + Aptitude + Verbal + Reasoning)',
  'Redis Cheatsheet',
  'System Desgin Handbook 70+ pages',
  'Test Automation with Playwright & TypeScript',
  'FrontEnd Notes - Html, AJAX, jQuery, Bootstrap, JS',
  '150 Most Asked Java Interview Questions',
  'Oracle - DSA Interview Question with Solutions',
  '100+ React Interview Questions + Guide (8 PDFs)',
  '100+ DSA Questions with solutions',
  'Master the MERN Stack 270+ pages',
  'Git complete Cheatsheet',
  'Node.js Cheat Sheet',
  'React.js Vs Next.js Notes',
  'Node.js CheatSheet - 0 to Deployment',
  'Promise vs Async_Await',
  '40 Basic Coding ques should do before starting DSA',
  '30+ JavaScript APIs',
  'MERN Stack Roadmap (0 - 100)',
  'MongoDB Cheatsheet',
  '15+ Top Company wise Leetcode Questions',
  '7 Coding Principles Every Developer Should Know'
];

const FAQS = [
  {
    q: "I paid but never received the download link. What should I do?",
    a: "All our resources are sold on Topmate.io — after completing your payment, the download is available directly on the Topmate page. Please check the Topmate purchase confirmation page or your Topmate account for the download. If you accidentally closed the page or missed it, submit a query using the same email you used to purchase on Topmate. Once we verify your payment, we'll send the resource directly to that email."
  },
  {
    q: "Can I get a refund for a digital product?",
    a: "Because our products are digital downloads, we generally do not offer refunds once the file has been delivered. However, if you received a corrupt file, the wrong resource, or a duplicate charge, please raise a query and we'll resolve it promptly."
  },
  {
    q: "I received the wrong resource. How do I get the correct one?",
    a: "We're sorry about that! Submit a query with your order details and the name of the resource you actually purchased. We'll verify and send you the correct file within 6 hours."
  },
  {
    q: "The file I downloaded is corrupted or won't open. What now?",
    a: "Try downloading it again using the original link. If the problem persists, raise a query and we'll send you a fresh copy or an alternative format (PDF, ZIP, etc.) as applicable."
  },
  {
    q: "I purchased the same resource twice by accident. Can I get a refund for the duplicate?",
    a: "Yes — duplicate charges are fully refundable. Please submit a query with both transaction details and we'll process the refund or credit within 2–3 business days."
  },
  {
    q: "How long does it take to get a response?",
    a: "We aim to respond to all queries within 6 hours on business days. For urgent issues you can also email us directly at meetsoni04@gmail.com."
  },
  {
    q: "Is my payment information secure?",
    a: "We do not store any card or payment details. All transactions are processed through secure, PCI-compliant payment gateways. We only receive a confirmation of your purchase."
  },
  {
    q: "Can I share the resource I purchased with others?",
    a: "Our digital resources are licensed for personal use only. Sharing, redistributing, or reselling them is not permitted under our Terms & Conditions."
  },
];

const HOW_STEPS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Fill the Form",
    desc: "Enter your name, the email used at checkout, the resource you purchased, and the purchase date."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: "Submit Your Query",
    desc: "Hit Submit and your request lands directly in our support inbox. You'll see a confirmation on screen."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "We Verify & Respond",
    desc: "Our team checks your purchase record and sends the resource link (or resolution) to your email within 6 hours."
  },
];

const QUERY_TYPES = [
  { icon: "📦", label: "Missing Link", desc: "Missed the download on Topmate? Submit a query from your purchase email and we'll send it to you." },
  { icon: "🔄", label: "Wrong Resource", desc: "Received a different resource than what you ordered" },
  { icon: "🗂️", label: "Corrupt File", desc: "Downloaded file is broken or won't open" },
  { icon: "💳", label: "Duplicate Charge", desc: "Charged more than once for the same purchase" },
  { icon: "📋", label: "Need a Copy", desc: "Lost access and need the resource re-sent" },
  { icon: "❓", label: "Other Issue", desc: "Any other concern related to your purchase" },
];

const PurchaseQueryPage = () => {
  const navigate = useNavigate();
  const [form, setForm]             = useState({ name: '', email: '', resource: '', date: '' });
  const [query, setQuery]           = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [errors, setErrors]         = useState({});
  const [loading, setLoading]       = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [openFaq, setOpenFaq]       = useState(null);

  const filtered = RESOURCES.filter(r =>
    r.toLowerCase().includes(query.toLowerCase())
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name     = 'Name is required';
    if (!form.email.trim())    e.email    = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                               e.email    = 'Enter a valid email';
    if (!form.resource.trim()) e.resource = 'Please select a resource';
    if (!form.date)            e.date     = 'Purchase date is required';
    return e;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_PURCHASE_QUERY_ID,
        {
          from_name:      form.name,
          from_email:     form.email,
          resource_title: form.resource,
          purchase_date:  form.date,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error('Submit failed:', err);
      alert(`Something went wrong. Please email us directly at ${email}`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Query Submitted!</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          We've received your request. Your resource link will be sent to{' '}
          <strong className="text-gray-800">{email}</strong> within 6 hours.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold text-sm transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">

      {/* ── Hero Banner ── */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-400 py-12 px-4 text-center">
        <p className="text-amber-100 text-xs font-bold tracking-widest uppercase mb-3">Support Centre</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Purchase Query & Support</h1>
        <p className="text-amber-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Our resources are sold via <strong className="text-white">Topmate.io</strong> — the download is available on the Topmate page right after payment. Missed it? Submit a query using the same email you used on Topmate and we'll resend it within <strong className="text-white">6 hours</strong>.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-14">

        {/* ── Back Button ── */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* ── What Kind of Query Section ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">What can we help you with?</h2>
          <p className="text-gray-500 text-sm mb-6">
            We handle all post-purchase concerns for our digital resources — from missing links to wrong files. Select the category that fits your issue below, then use the form to reach us.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {QUERY_TYPES.map((qt) => (
              <div key={qt.label} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-amber-200 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{qt.icon}</div>
                <div className="font-semibold text-gray-800 text-sm">{qt.label}</div>
                <div className="text-xs text-gray-500 mt-0.5 leading-snug">{qt.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">How the process works</h2>
          <p className="text-gray-500 text-sm mb-6">
            Getting your issue resolved is simple and takes less than 2 minutes on your end.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
                <div className="w-11 h-11 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">Step {i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Form ── */}
        <section id="query-form">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Submit Your Query</h2>
          <p className="text-gray-500 text-sm mb-6">
            Fill in all fields accurately so we can locate your purchase quickly. We respond to every query — usually within 6 hours on weekdays.
          </p>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* stripe */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-400 px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Purchase Query Form</h3>
                  <p className="text-amber-100 text-xs mt-0.5">Missed your Topmate download? Submit using your purchase email and we'll resend within 6 hours.</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-7 space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => {
                    setForm(p => ({ ...p, name: e.target.value }));
                    if (errors.name) setErrors(p => ({ ...p, name: '' }));
                  }}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => {
                    setForm(p => ({ ...p, email: e.target.value }));
                    if (errors.email) setErrors(p => ({ ...p, email: '' }));
                  }}
                  placeholder="The same email you used on Topmate"
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                    errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Resource Search */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Resource Purchased <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={query || form.resource}
                    onChange={e => {
                      setQuery(e.target.value);
                      setForm(p => ({ ...p, resource: '' }));
                      setShowDropdown(true);
                      if (errors.resource) setErrors(p => ({ ...p, resource: '' }));
                    }}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                    placeholder="Type to search resource..."
                    className={`w-full pl-9 pr-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                      errors.resource ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                {showDropdown && query && filtered.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-1 max-h-48 overflow-y-auto">
                    {filtered.map((r, i) => (
                      <li
                        key={i}
                        onMouseDown={() => {
                          setForm(p => ({ ...p, resource: r }));
                          setQuery('');
                          setShowDropdown(false);
                          if (errors.resource) setErrors(p => ({ ...p, resource: '' }));
                        }}
                        className="px-4 py-2.5 text-sm text-gray-800 hover:bg-amber-50 cursor-pointer transition-colors first:rounded-t-xl last:rounded-b-xl"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
                {form.resource && (
                  <p className="text-xs text-amber-600 mt-1.5 font-medium flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {form.resource}
                  </p>
                )}
                {errors.resource && <p className="text-xs text-red-500 mt-1">{errors.resource}</p>}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Date of Purchase <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={form.date}
                  max={new Date().toISOString().split('T')[0]}
                  onChange={e => {
                    setForm(p => ({ ...p, date: e.target.value }));
                    if (errors.date) setErrors(p => ({ ...p, date: '' }));
                  }}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                    errors.date ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}
                />
                {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-sm transition-colors shadow-sm mt-1"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Submit Query
                  </>
                )}
              </button>
            </div>

            <div className="px-8 pb-6">
              <p className="text-xs text-gray-400 text-center">
                Need immediate help? Email us at{' '}
                <a href={`mailto:${email}`} className="text-amber-500 font-medium hover:underline">
                  {email}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm mb-6">
            Quick answers to the most common questions about our digital product purchases and support process.
          </p>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-amber-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-amber-500 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Policy Note ── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-amber-500">📋</span> Our Digital Product Policy
          </h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              All our resources are sold exclusively through <strong className="text-gray-800">Topmate.io</strong>. After completing your payment on Topmate, the download is available immediately on the purchase confirmation page. We recommend downloading it right away — if you close the page, you can re-access it from your Topmate account or raise a query here.
            </p>
            <p>
              Because digital goods are delivered instantly and cannot be "returned," our general policy is <strong className="text-gray-800">no refunds after delivery</strong>. However, we make exceptions in good faith for cases involving wrong delivery, corrupt files, duplicate payments, or technical failures on our end.
            </p>
            <p>
              Every resource is created and curated by experienced developers and is intended for <strong className="text-gray-800">individual, personal use only</strong>. Redistribution or resale of purchased materials violates our Terms & Conditions and may result in account suspension.
            </p>
            <p>
              If you have a dispute that is not resolved through this form, you may also reach us directly at{' '}
              <a href={`mailto:${email}`} className="text-amber-500 hover:underline font-medium">{email}</a>.
              We treat every support request seriously and aim to close all tickets within one business day.
            </p>
          </div>
        </section>

        {/* ── Contact Strip ── */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg">Still need help?</h3>
            <p className="text-amber-100 text-sm mt-0.5">Drop us a direct email and we'll get back to you within 6 hours.</p>
          </div>
          <a
            href={`/contact-us`}
            className="flex-shrink-0 bg-white text-amber-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors shadow-sm"
          >
            Email Us →
          </a>
        </section>

      </div>
    </div>
  );
};

export default PurchaseQueryPage;