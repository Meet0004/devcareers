import React, { useState, useEffect, useMemo } from 'react'
import blogData from '../data/blogData'

// ─── SearchBar ──────────────────────────────────────────────────────────────
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
      <div style={{
        position: 'relative', width: '100%', maxWidth: 560,
        transition: 'transform 0.2s ease',
        transform: focused ? 'scale(1.015)' : 'scale(1)',
      }}>
        <div style={{
          position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: focused ? '#f97316' : '#9ca3af',
          transition: 'color 0.2s', display: 'flex', alignItems: 'center',
        }}>
          <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search blogs by topic, category, or keyword..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', padding: '14px 48px 14px 50px',
            fontSize: 15, fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 400, color: '#111',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: focused ? '1.5px solid rgba(249,115,22,0.55)' : '1.5px solid rgba(249,115,22,0.18)',
            borderRadius: 100, outline: 'none', boxSizing: 'border-box',
            boxShadow: focused
              ? '0 8px 32px rgba(249,115,22,0.14), 0 2px 8px rgba(0,0,0,0.04)'
              : '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            style={{
              position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(249,115,22,0.1)', border: 'none', borderRadius: '50%',
              width: 26, height: 26, display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', color: '#f97316',
              padding: 0, transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(249,115,22,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(249,115,22,0.10)'}
          >
            <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Category Filter Pill ───────────────────────────────────────────────────
// const FilterPill = ({ label, active, onClick }) => {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         padding: '7px 18px', borderRadius: 100, fontSize: 12, fontWeight: 600,
//         fontFamily: 'system-ui, -apple-system, sans-serif',
//         cursor: 'pointer', border: 'none', transition: 'all 0.2s ease',
//         background: active ? '#f97316' : hovered ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.06)',
//         color: active ? '#fff' : hovered ? '#f97316' : '#9ca3af',
//         boxShadow: active ? '0 4px 14px rgba(249,115,22,0.30)' : 'none',
//         transform: hovered && !active ? 'translateY(-1px)' : 'none',
//       }}
//     >
//       {label}
//     </button>
//   )
// }

// ─── Vertical Blog Card ─────────────────────────────────────────────────────
const BlogCard = ({ blog, index, visible }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={`/blogs/${blog.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: hovered
          ? '1.5px solid rgba(249,115,22,0.40)'
          : '1.5px solid rgba(249,115,22,0.12)',
        borderRadius: 20,
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.34,1.1,0.64,1)',
        transform: hovered
          ? 'translateY(-7px) scale(1.012)'
          : visible ? 'translateY(0)' : 'translateY(30px)',
        boxShadow: hovered
          ? '0 24px 52px rgba(249,115,22,0.13), 0 4px 14px rgba(0,0,0,0.05)'
          : '0 2px 10px rgba(0,0,0,0.04)',
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 60}ms` : '0ms',
        cursor: 'pointer',
        position: 'relative',
        minHeight: 420,
      }}
    >
      {/* Top accent bar — color per category */}
      <div style={{
        height: 4,
        background: `linear-gradient(90deg, ${blog.categoryColor}, ${blog.categoryColor}66)`,
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.3s',
        flexShrink: 0,
      }} />

      {/* Card body */}
      <div style={{
        display: 'flex', flexDirection: 'column', flex: 1,
        padding: '20px 20px 18px',
      }}>

        {/* Category + read time */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: 12, gap: 8,
        }}>
          <span style={{
            background: blog.categoryColor + '15',
            border: `1px solid ${blog.categoryColor}30`,
            color: blog.categoryColor,
            fontSize: 10, fontWeight: 700,
            padding: '4px 11px', borderRadius: 100,
            letterSpacing: '0.05em', whiteSpace: 'nowrap',
          }}>
            {blog.category}
          </span>
          <span style={{ fontSize: 10.5, color: '#9ca3af', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {blog.readTime}
          </span>
        </div>

        {/* Featured badge */}
        {blog.featured && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            background: 'rgba(249,115,22,0.08)',
            border: '1px solid rgba(249,115,22,0.22)',
            color: '#f97316', fontSize: 9.5, fontWeight: 700,
            padding: '3px 9px', borderRadius: 100,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            width: 'fit-content', marginBottom: 10,
          }}>
            ★ Featured
          </div>
        )}

        {/* Title */}
        <h2 style={{
          fontSize: 16.5, fontWeight: 700,
          color: hovered ? '#ea580c' : '#0a0a0a',
          margin: '0 0 9px', lineHeight: 1.35,
          letterSpacing: '-0.02em',
          transition: 'color 0.2s',
        }}>
          {blog.title}
        </h2>

        {/* Overview */}
        <p style={{
          fontSize: 12, color: '#6b7280', lineHeight: 1.65,
          margin: '0 0 16px',
        }}>
          {blog.overview}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(0,0,0,0.05)', marginBottom: 12 }} />

        {/* What's covered label */}
        <p style={{
          fontSize: 9.5, fontWeight: 700, color: '#9ca3af',
          letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 8px',
        }}>
          What's covered
        </p>

        {/* Cover points — vertical list, grows to fill card */}
        <ul style={{
          listStyle: 'none', padding: 0, margin: '0 0 16px',
          display: 'flex', flexDirection: 'column', gap: 6,
          flex: 1,
        }}>
          {blog.covers.map((point, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 8,
              fontSize: 11.5, color: '#374151', lineHeight: 1.45,
            }}>
              <span style={{
                width: 15, height: 15, borderRadius: '50%',
                background: 'rgba(34,197,94,0.10)',
                border: '1px solid rgba(34,197,94,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginTop: 1,
              }}>
                <svg width={7} height={7} fill="#22c55e" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>

        {/* Footer: tags + Read CTA */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 8,
          paddingTop: 12,
          borderTop: '1px solid rgba(0,0,0,0.05)',
          marginTop: 'auto',
        }}>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', flex: 1, minWidth: 0 }}>
            {blog.tags.slice(0, 2).map(tag => (
              <span key={tag} style={{
                fontSize: 9.5, color: '#9ca3af', fontWeight: 500,
                background: '#f9fafb', border: '1px solid #f0f0f0',
                padding: '2px 8px', borderRadius: 100, whiteSpace: 'nowrap',
              }}>
                #{tag}
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 4,
            color: '#f97316', fontSize: 11.5, fontWeight: 700,
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            Read article
            <svg
              width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24"
              style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(3px)' : 'none' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

      </div>
    </a>
  )
}

// ─── Empty State ────────────────────────────────────────────────────────────
const EmptyState = ({ searchTerm }) => (
  <div style={{ textAlign: 'center', padding: '72px 24px', gridColumn: '1 / -1' }}>
    <div style={{
      width: 64, height: 64, borderRadius: '50%',
      background: 'rgba(249,115,22,0.08)',
      border: '1.5px solid rgba(249,115,22,0.18)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto 20px',
    }}>
      <svg width={28} height={28} fill="none" stroke="#f97316" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <p style={{ fontSize: 16, fontWeight: 600, color: '#374151', margin: '0 0 6px' }}>
      No blogs found{searchTerm ? ` for "${searchTerm}"` : ''}
    </p>
    <p style={{ fontSize: 13, color: '#9ca3af', margin: 0 }}>
      Try a different keyword or browse all categories.
    </p>
  </div>
)

const ALL_CATEGORIES = ['All', ...Array.from(new Set(blogData.map(b => b.category)))]

// ─── Main Page ──────────────────────────────────────────────────────────────
const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const filtered = useMemo(() => {
    return blogData.filter(blog => {
      const matchesCategory = activeCategory === 'All' || blog.category === activeCategory
      const q = searchTerm.toLowerCase()
      const matchesSearch = !q || [
        blog.title, blog.overview, blog.category,
        ...blog.covers, ...blog.tags,
      ].some(str => str.toLowerCase().includes(q))
      return matchesCategory && matchesSearch
    })
  }, [searchTerm, activeCategory])

  return (
    <>
      <style>{`
        @keyframes orbFloat    { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.04)} }
        @keyframes shimmerText { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes pulseRing   { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(2.4);opacity:0} }

        .blogs-page * { box-sizing: border-box; }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          align-items: start;
        }

        @media (max-width: 640px) {
          .blogs-hero-title { font-size: 32px !important; }
          .blogs-hero-sub   { font-size: 14px !important; }
          .blogs-wrap       { padding: 36px 18px 60px !important; }
          .blogs-grid       { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .blogs-hero-title { font-size: 44px !important; }
          .blogs-wrap       { padding: 48px 32px 72px !important; }
          .blogs-grid       { grid-template-columns: repeat(2, 1fr) !important; }
        }
          @media (max-width: 640px) {
  .card-covers { display: none !important; }
}
      `}</style>

      <div className="blogs-page" style={{
        position: 'relative', overflow: 'hidden',
        background: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        minHeight: '100vh',
      }}>

        {/* Ambient orbs */}
        <div style={{
          position: 'absolute', width: 440, height: 440, borderRadius: '50%',
          background: '#ff6b00', filter: 'blur(90px)', opacity: 0.09,
          top: -130, right: -90, animation: 'orbFloat 9s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 280, height: 280, borderRadius: '50%',
          background: '#ff9440', filter: 'blur(80px)', opacity: 0.07,
          bottom: 80, left: -70, animation: 'orbFloat 13s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />

        <div className="blogs-wrap" style={{
          maxWidth: 1440, margin: '0 auto',
          padding: '56px 64px 80px',
          position: 'relative', zIndex: 5
        }}>

          {/* ── Hero Header ── */}
          <div style={{
            marginBottom: 44,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1)',
            textAlign: 'center'
          }}>
            {/* <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#f97316', marginBottom: 16,
            }}>
              <span style={{
                width: 7, height: 7, background: '#22c55e', borderRadius: '50%',
                position: 'relative', display: 'inline-block', flexShrink: 0,
              }}>
                <span style={{
                  position: 'absolute', inset: -3, borderRadius: '50%',
                  background: '#22c55e', animation: 'pulseRing 1.8s ease infinite',
                }} />
              </span>
              Career Guides & Resources
            </div> */}

            <h1 className="blogs-hero-title" style={{
              fontSize: 56, fontWeight: 700, color: '#0a0a0a',
              margin: '0 0 14px', lineHeight: 1.05, letterSpacing: '-0.03em',
            }}>
              Learn.{' '}
              <span style={{
                background: 'linear-gradient(135deg,#f97316 0%,#ea580c 45%,#ff8c42 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                animation: 'shimmerText 3s linear infinite',
              }}>
                Prepare.
              </span>{' '}
              Get Hired.
            </h1>

            <p className="blogs-hero-sub" style={{
              fontSize: 16,
              color: '#6b7280',
              lineHeight: 1.65,
              maxWidth: 480,
              margin: '0 auto',   // THIS centers the block
              textAlign: 'center' // THIS centers the text inside
            }}>
              In-depth guides, roadmaps, and tips crafted to help freshers land their first job faster.
            </p>
          </div>

          {/* ── Search Bar ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* ── Filters + count row ── */}
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap',
            gap: 12, marginBottom: 28,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s',
          }}>
            {/* <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {ALL_CATEGORIES.map(cat => (
                <FilterPill
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div> */}
            {/* <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' ? ` · ${activeCategory}` : ''}
            </span> */}
          </div>

          {/* ── 3-Column Cards Grid ── */}
          <div className="blogs-grid">
            {filtered.length > 0
              ? filtered.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} index={i} visible={visible} />
              ))
              : <EmptyState searchTerm={searchTerm} />
            }
          </div>

          {/* ── Subscribe CTA ── */}
          {filtered.length > 0 && (
            <div style={{
              marginTop: 52, padding: '28px 32px',
              background: 'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0.03) 100%)',
              border: '1.5px solid rgba(249,115,22,0.14)',
              borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 20, flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.6s',
            }}>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#111', margin: '0 0 4px' }}>
                  Don't miss new guides
                </p>
                <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>
                  Get the latest articles & job updates in your inbox.
                </p>
              </div>
              <a
                href="/subscribe-us"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: '#f97316', color: '#fff', fontSize: 13, fontWeight: 600,
                  padding: '11px 22px', borderRadius: 100, textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
                  whiteSpace: 'nowrap', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.42)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(249,115,22,0.35)'
                }}
              >
                Subscribe Free
                <svg width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default Blogs