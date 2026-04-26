import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import blogData from '../../data/blogData'

// ─── Fonts ────────────────────────────────────────────────────────────────────
// Display/Headings : Fraunces (editorial, a bit literary — pairs perfectly with blog content)
// Body             : Source Serif 4 (very readable, warm, not boring)
// Accent/Labels    : DM Sans (clean, modern contrast to the serifs)

// ─── Reading Progress Bar ────────────────────────────────────────────────────
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-orange-500/10">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-[width] duration-100 linear shadow-[0_0_8px_rgba(249,115,22,0.6)]"
      />
    </div>
  )
}

// ─── Table of Contents ────────────────────────────────────────────────────────
const TableOfContents = ({ sections, activeId }) => {
  const [open, setOpen] = useState(true)
  const [manuallyToggled, setManuallyToggled] = useState(false)

  useEffect(() => {
    if (activeId && !manuallyToggled) setOpen(true)
  }, [activeId, manuallyToggled])

  const handleToggle = () => {
    setManuallyToggled(true)
    setOpen(o => !o)
  }

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl border border-orange-500/[0.14] rounded-2xl overflow-hidden mb-2">
      <button
        onClick={handleToggle}
        className="w-full px-[18px] py-[10px] flex items-center justify-between bg-transparent border-none cursor-pointer text-[13px] font-bold text-[#0a0a0a] tracking-[-0.01em]"
        style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
      >
        <span className="flex items-center gap-2">
          <svg width={14} height={14} fill="none" stroke="#f97316" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
          </svg>
          Table of Contents
        </span>
        <svg
          width={13} height={13} fill="none" stroke="#9ca3af" viewBox="0 0 24 24"
          className="transition-transform duration-[250ms]"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: open ? '600px' : '0px' }}
      >
        <div className="border-t border-orange-500/10 py-2 pb-[10px]">
          {sections.map(s => {
            const isActive = activeId === s.id
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={e => handleLinkClick(e, s.id)}
                className="block px-[18px] py-[7px] text-[12px] no-underline transition-all duration-200 leading-[1.4]"
                style={{
                  fontFamily: "'verdana', system-ui, sans-serif",
                  color: isActive ? '#f97316' : '#6b7280',
                  fontWeight: isActive ? 700 : 400,
                  borderLeft: isActive ? '3px solid #f97316' : '3px solid transparent',
                  background: isActive ? 'rgba(249,115,22,0.05)' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#f97316'
                    e.currentTarget.style.background = 'rgba(249,115,22,0.03)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#6b7280'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {s.heading}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── Share + Subscribe ────────────────────────────────────────────────────────
const ShareAndSubscribe = ({ title }) => {
  const url = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')
  const text = encodeURIComponent(title)
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    {
      label: 'X',
      color: '#000',
      bg: 'rgba(0,0,0,0.06)',
      bgHover: 'rgba(0,0,0,0.13)',
      border: 'rgba(0,0,0,0.12)',
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      icon: (
        <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.735-8.848L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      color: '#0a66c2',
      bg: 'rgba(10,102,194,0.08)',
      bgHover: 'rgba(10,102,194,0.16)',
      border: 'rgba(10,102,194,0.2)',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
      icon: (
        <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      color: '#25d366',
      bg: 'rgba(37,211,102,0.08)',
      bgHover: 'rgba(37,211,102,0.16)',
      border: 'rgba(37,211,102,0.2)',
      href: `https://wa.me/?text=${text}%20${url}`,
      icon: (
        <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.565 4.155 1.55 5.887L.057 23.61a.75.75 0 00.926.93l5.808-1.522A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.67-.502-5.21-1.385l-.375-.214-3.878 1.017 1.002-3.762-.228-.378A9.977 9.977 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white/90 backdrop-blur-xl border border-orange-500/[0.14] rounded-2xl p-4">
      <p
        className="text-[10px] font-bold text-gray-400 tracking-[0.08em] uppercase mt-0 mb-[10px]"
        style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
      >
        Share
      </p>

      <div className="flex gap-2 flex-wrap mb-[10px]">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${s.label}`}
            className="flex items-center justify-center rounded-[8px] no-underline transition-all duration-150"
            style={{ width: 34, height: 34, background: s.bg, border: `0.5px solid ${s.border}`, color: s.color }}
            onMouseEnter={e => e.currentTarget.style.background = s.bgHover}
            onMouseLeave={e => e.currentTarget.style.background = s.bg}
          >
            {s.icon}
          </a>
        ))}

        <button
          onClick={copy}
          title="Copy link"
          className="flex items-center justify-center rounded-[8px] cursor-pointer transition-all duration-150"
          style={{
            width: 34, height: 34,
            background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(107,114,128,0.07)',
            border: `0.5px solid ${copied ? 'rgba(34,197,94,0.3)' : 'rgba(107,114,128,0.18)'}`,
            color: copied ? '#22c55e' : '#6b7280',
          }}
        >
          {copied
            ? <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            : <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          }
        </button>
      </div>

      <a
        href="/subscribe-us"
        className="block text-center text-white text-[12px] font-semibold py-[9px] rounded-[8px] no-underline transition-opacity duration-150"
        style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Subscribe free →
      </a>
    </div>
  )
}

// ─── Related Blog Card ────────────────────────────────────────────────────────
const RelatedCard = ({ blog }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={`/blogs/${blog.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block no-underline rounded-[14px] px-[18px] py-4 transition-all duration-[250ms] ease-in-out"
      style={{
        background: hovered ? 'rgba(249,115,22,0.04)' : '#fff',
        border: hovered ? '1.5px solid rgba(249,115,22,0.30)' : '1.5px solid rgba(249,115,22,0.10)',
        transform: hovered ? 'translateY(-3px)' : 'none',
      }}
    >
      <span
        className="inline-block text-[9.5px] font-bold px-[9px] py-[3px] rounded-full tracking-[0.05em] mb-2"
        style={{
          fontFamily: "'Nunito Sans', system-ui, sans-serif",
          background: blog.categoryColor + '18',
          border: `1px solid ${blog.categoryColor}30`,
          color: blog.categoryColor,
        }}
      >
        {blog.category}
      </span>
      <p
        className="text-[14px] font-bold mt-0 mb-[6px] leading-[1.35] transition-colors duration-200"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          color: hovered ? '#ea580c' : '#0a0a0a',
        }}
      >
        {blog.title}
      </p>
      <p
        className="text-[11.5px] text-gray-400 m-0 leading-[1.5]"
        style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
      >
        {blog.readTime}
      </p>
    </Link>
  )
}

// ════════════════════════════════════════════════════════
// TEMPLATE 1: Q&A
// ════════════════════════════════════════════════════════

// Answer box — clean left-border, no heavy header bar
const AnswerBox = ({ label, text }) => (
  <div
    className="relative mt-8 mb-5 px-5 pt-5 pb-4 rounded-[12px]"
    style={{ border: '1.5px solid #f5a86e' }}
  >
    <span
      className="absolute text-[10px] font-[800] tracking-[0.08em] uppercase px-[8px]"
      style={{
        top: -10,
        left: 14,
        fontFamily: "'Nunito Sans', system-ui, sans-serif",
        background: '#fafafa',
        color: '#e07020',
      }}
    >
      {label}
    </span>
    <p
      className="text-[15px] text-gray-700 leading-[1.75] m-0"
      style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif", fontStyle: 'italic', fontWeight: 400 }}
    >
      {text}
    </p>
  </div>
)

// Quick-Fire Table
const QuickFireTable = ({ items }) => (
  <div className="my-6 overflow-x-auto">
    <table className="w-full border-separate border-spacing-0 rounded-[14px] overflow-hidden text-[13px]" style={{ border: '1.5px solid rgba(249,115,22,0.14)' }}>
      <thead>
        <tr style={{ background: 'linear-gradient(90deg, rgba(249,115,22,0.08), rgba(249,115,22,0.04))' }}>
          <th
            className="px-[18px] py-3 text-left text-[11px] font-bold text-orange-500  tracking-[-0.025em] w-[42%]"
            style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif", borderBottom: '1px solid rgba(249,115,22,0.12)' }}
          >
            Question
          </th>
          <th
            className="px-[18px] py-3 text-left text-[11px] font-bold text-orange-500 tracking-[0.05em]"
            style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif", borderBottom: '1px solid rgba(249,115,22,0.12)' }}
          >
            One-Line Answer
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'rgba(249,115,22,0.015)' }}>
            <td
              className="px-[18px] py-3 text-[#111] font-semibold leading-[1.4] align-top"
              style={{
                fontFamily: "'Nunito Sans', system-ui, sans-serif",
                fontSize: 13,
                borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
              }}
            >
              {item.question}
            </td>
            <td
              className="px-[18px] py-3 text-gray-600 leading-[1.55] align-top"
              style={{
                fontFamily: "'Nunito Sans', system-ui, sans-serif",
                fontSize: 13,
                borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
              }}
            >
              {item.answer}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

// QA Section Block
const QASectionBlock = ({ section, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={section.id}
      className="mb-[44px] transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${Math.min(index * 40, 200)}ms`,
      }}
    >
      {/* Q marker + heading */}
      <div className="mb-3">
        {section.question && (
          <span
            className="text-[11px] font-[800] text-orange-400 tracking-[0.08em] uppercase block mb-[5px]"
            style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
          >
            {section.question}
          </span>
        )}
        <h2
          className="text-[21px] font-[800] text-[#0a0a0a] mt-0 mb-0  tracking-[-0.025em]"
          style={{ fontFamily: "'verdana', Georgia, serif" }}
        >
          {section.heading}
        </h2>
        {section.subheading && (
          <p
            className="text-[13px] text-gray-400 font-[600] mt-[5px] mb-0 leading-[1.4]  tracking-[-0.025em]"
            style={{ fontFamily: "'verdana', system-ui, sans-serif" }}
          >
            {section.subheading}
          </p>
        )}
      </div>

      {/* Paragraphs */}
      {section.paragraphs && section.paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[15.5px] text-gray-600 leading-[1.82] mb-[10px]"
          style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
        >
          {p}
        </p>
      ))}

      {/* Answer box */}
      {section.answer && <AnswerBox label={section.answer.label} text={section.answer.text} />}

      {/* Quick fire */}
      {section.quickfire && <QuickFireTable items={section.quickfire} />}
    </div>
  )
}

// ════════════════════════════════════════════════════════
// TEMPLATE 2: ARTICLE (Subtitle + Paragraph)
// ════════════════════════════════════════════════════════

const ArticleSectionBlock = ({ section, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.06 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={section.id}
      className="mb-[52px] transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transitionDelay: `${Math.min(index * 40, 200)}ms`,
      }}
    >
      {/* Section number line */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-[11px] font-bold text-orange-400  tracking-[-0.025em] uppercase"
          style={{ fontFamily: "'verdana', system-ui, sans-serif" }}
        >
          0{index + 1}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent" />
      </div>

      {/* Heading */}
      <h2
        className="text-[26px] font-[800] text-[#0a0a0a] mt-0 mb-2 leading-[1.18] tracking-[-0.025em]"
        style={{ fontFamily: "'verdana', Georgia, serif" }}
      >
        {section.heading}
      </h2>

      {/* Subheading */}
      {section.subheading && (
        <p
          className="text-[14px] font-[600] text-gray-400 mt-0 mb-5 leading-[1.45] tracking-[-0.025em]"
          style={{ fontFamily: "'verdana', system-ui, sans-serif" }}
        >
          {section.subheading}
        </p>
      )}

      {/* Paragraphs */}
      {section.paragraphs && section.paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[16px] text-gray-700 leading-[1.85] mb-[10px]"
          style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
        >
          {p}
        </p>
      ))}
    </div>
  )
}

// ════════════════════════════════════════════════════════
// SHARED: Hook block
// ════════════════════════════════════════════════════════
const HookBlock = ({ hook }) => (
  <div className="mb-10 px-7 py-6 bg-white border border-orange-500/[0.10] rounded-[18px]  tracking-[-0.025em]">
    {hook.paragraphs.map((p, i) => (
      <p
        key={i}
        className="text-[16.5px] text-gray-700 leading-[1.82]"
        style={{
          fontFamily: "'verdana', system-ui, sans-serif",
          margin: i < hook.paragraphs.length - 1 ? '0 0 12px' : '0 0 18px',
        }}
      >
        {p}
      </p>
    ))}
    {hook.closingQuestion && (
      <p
        className="text-[16px] text-orange-500 font-bold m-0  tracking-[-0.025em]"
        style={{ fontFamily: "'verdana', Georgia, serif", fontStyle: 'italic' }}
      >
        {hook.closingQuestion}
      </p>
    )}
  </div>
)

// ════════════════════════════════════════════════════════
// MAIN PAGE
// ════════════════════════════════════════════════════════
const BlogDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogData.find(b => b.id === id)
  const [activeId, setActiveId] = useState('')

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  useEffect(() => {
    if (!blog) return
    const ids = blog.content.sections.map(s => s.id)
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) }) },
      { rootMargin: '-20% 0px -65% 0px' }
    )
    ids.forEach(sid => { const el = document.getElementById(sid); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [blog, id])

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-[20px] text-gray-700" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Article not found.</p>
        <button
          onClick={() => navigate('/blogs')}
          className="px-[22px] py-[10px] rounded-full bg-orange-500 text-white border-none cursor-pointer text-[14px] font-semibold"
          style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
        >
          ← Back to Blogs
        </button>
      </div>
    )
  }

  const { content, template } = blog
  const related = blogData.filter(b => b.id !== blog.id && b.category === blog.category).slice(0, 3)

  // Pick section component based on template
  const SectionBlock = template === 'article' ? ArticleSectionBlock : QASectionBlock

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400;1,600&display=swap');
        @keyframes orbFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-18px) scale(1.03)} }

        @media (max-width: 900px) {
          .detail-layout {
            grid-template-columns: 1fr !important;
            padding: 28px 20px 60px !important;
          }
          .sidebar-sticky {
            position: static !important;
            order: -1;
            margin-bottom: 0px;
          }
        }
        @media (max-width: 600px) {
          .detail-layout { padding: 20px 16px 48px !important; }
          .hero-title { font-size: 30px !important; }
        }
      `}</style>

      <ReadingProgress />

      <div style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif", fontWeight: 400 }} className="bg-[#fafafa] min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-white to-[#fafafa] border-b border-orange-500/10 px-6 pt-14 pb-10 sm:px-[220px]">
          <div className="max-w-[1200px] mx-auto">

            {/* Breadcrumb */}
            <div className="flex items-center gap-[6px] mb-5">
              <Link to="/blogs" className="text-[12px] text-orange-500 no-underline font-semibold flex items-center gap-[5px]">
                <svg width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                All Articles
              </Link>
              <span className="text-gray-300 text-[12px]">/</span>
              <span className="text-[12px] text-gray-400">{blog.category}</span>
            </div>

            {/* Category + Featured + Template badge */}
            <div className="flex gap-2 mb-[18px] flex-wrap items-center">
              <span
                className="text-[11px] font-bold px-[13px] py-1 rounded-full"
                style={{ background: blog.categoryColor + '18', border: `1px solid ${blog.categoryColor}35`, color: blog.categoryColor }}
              >
                {blog.category}
              </span>
              {blog.featured && (
                <span className="bg-orange-500/[0.08] border border-orange-500/[0.22] text-orange-500 text-[10.5px] font-bold px-[10px] py-1 rounded-full">
                  ★ Featured
                </span>
              )}
              {/* Template indicator — subtle, for your reference */}
              <span className="bg-gray-100 text-gray-400 text-[10px] font-bold px-[10px] py-1 rounded-full tracking-[0.05em] uppercase">
                {template === 'qa' ? 'Q&A' : 'Guide'}
              </span>
            </div>

            {/* Title */}
            <h1
              className="hero-title text-[44px] font-[900] text-[#0a0a0a] mt-0 mb-4 leading-[1.1] tracking-[-0.025em]"
              style={{ fontFamily: "'verdana', Georgia, serif" }}
            >
              {blog.title}
            </h1>

            {/* Overview */}
            <p
              className="text-[17px] text-gray-500 leading-[1.72] mt-0 mb-6 italic max-w-[780px]  tracking-[-0.025em]"
              style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}
            >
              {blog.overview}
            </p>

            {/* Meta row */}
            <div className="flex items-center flex-wrap gap-5">
              <div className="flex items-center gap-[10px]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-[14px] font-[800] shadow-[0_4px_12px_rgba(249,115,22,0.30)]"
                  style={{ fontFamily: "'verdana', Georgia, serif" }}
                >
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <p className="m-0 text-[13px] font-bold text-[#111] leading-[1.2]">{blog.author}</p>
                  <p className="m-0 text-[11px] text-gray-400 leading-[1.2]">{blog.date} · {blog.readTime}</p>
                </div>
              </div>
              <div className="flex gap-[6px] flex-wrap">
                {blog.tags.map(tag => (
                  <span key={tag} className="text-[10.5px] text-gray-400 font-medium bg-[#f9fafb] border border-[#ebebeb] px-[10px] py-[3px] rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-7 px-5 py-[18px] bg-gradient-to-br from-orange-500/[0.06] to-orange-500/[0.02] border border-orange-500/[0.14] rounded-[14px]">
              <p
                className="text-[10.5px] font-[800] text-orange-500 tracking-[0.09em] uppercase mt-0 mb-3 flex items-center gap-[6px]"
              >
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth={2.5}>
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                What you'll learn
              </p>
              <ul
                className="list-none p-0 m-0 grid gap-x-8 gap-y-2"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
              >
                {blog.covers.map((c, i) => (
                  <li key={i} className="flex items-start gap-[9px] text-[13.5px] text-gray-700 leading-[1.5]"
                    style={{ fontFamily: "'verdana', system-ui, sans-serif" }}
                  >
                    <span className="w-[18px] h-[18px] rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0 mt-[2px]">
                      <svg width={8} height={8} fill="#22c55e" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Body Layout ── */}
        <div
          className="detail-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 260px',
            gap: '48px',
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '40px 48px 80px',
          }}
        >
          {/* ── Main Content ── */}
          <main>
            {/* Hook */}
            {content.hook && <HookBlock hook={content.hook} />}

            {/* Sections — renders QA or Article blocks */}
            {content.sections.map((section, i) => (
              <React.Fragment key={section.id}>
                <SectionBlock section={section} index={i} />
              </React.Fragment>
            ))}

            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent my-2 mb-10" />

            {/* Conclusion */}
            {content.conclusion && (
              <div className="px-8 py-7 bg-gradient-to-br from-orange-500/[0.06] to-orange-500/[0.02] border border-orange-500/[0.15] rounded-[18px] mb-10">
                <h2
                  className="text-[22px] font-[800] text-[#0a0a0a] mt-0 mb-4 tracking-[-0.025em]"
                  style={{ fontFamily: "'verdana', Georgia, serif" }}
                >
                  {content.conclusion.heading}
                </h2>
                {content.conclusion.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15.5px] text-gray-700 leading-[1.82] mb-3  tracking-[-0.025em]"
                    style={{ fontFamily: "'verdana', system-ui, sans-serif" }}
                  >
                    {p}
                  </p>
                ))}
                {content.conclusion.callToAction && (
                  <p
                    className="text-[14px] text-orange-500 font-bold mt-5 mb-0 px-[18px] py-[14px] bg-white border border-orange-500/20 rounded-[10px]  tracking-[-0.025em]"
                    style={{ fontFamily: "'verdana', system-ui, sans-serif" }}
                  >
                    💡 {content.conclusion.callToAction}
                  </p>
                )}
              </div>
            )}

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h3
                  className="text-[20px] font-[800] text-[#0a0a0a] mt-0 mb-4 tracking-[-0.025em]"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Related Articles
                </h3>
                <div className="flex flex-col gap-3">
                  {related.map(b => <RelatedCard key={b.id} blog={b} />)}
                </div>
              </div>
            )}
          </main>

          {/* ── Sidebar ── */}
          <div className="sidebar-sticky" style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
            <TableOfContents sections={content.sections} activeId={activeId} />
            <ShareAndSubscribe title={blog.title} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailPage