import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/company-details', label: 'Job Posting' },
  { href: '/resources', label: 'Resources' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link-item {
          animation: slideDown 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .nav-link-item:nth-child(1) { animation-delay: 0.03s; }
        .nav-link-item:nth-child(2) { animation-delay: 0.06s; }
        .nav-link-item:nth-child(3) { animation-delay: 0.09s; }
        .nav-link-item:nth-child(4) { animation-delay: 0.12s; }
        .nav-link-item:nth-child(5) { animation-delay: 0.15s; }
        .nav-link-item:nth-child(6) { animation-delay: 0.18s; }

        .mobile-overlay {
          transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.3s;
        }
        .mobile-drawer {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ham-bar {
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease, background-color 0.3s ease;
        }

        .desk-link {
          position: relative;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: #52525b;
          text-decoration: none;
          transition: color 0.18s ease;
          padding: 4px 0;
        }
        .desk-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          border-radius: 2px;
          transition: width 0.22s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .desk-link:hover { color: #0a0a0a; }
        .desk-link:hover::after { width: 100%; }

        .scrolled-link { color: #3f3f46; }
        .scrolled-link:hover { color: #0a0a0a; }
      `}</style>

      <div className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/60 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-white border-b border-black/[0.05] shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
      }`}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}
          className="py-4 px-6 sm:px-10 flex justify-between items-center">

          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
            }}>
              Dev Careers
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center" style={{ gap: 32 }}>
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={`desk-link ${scrolled ? 'scrolled-link' : ''}`}>
                {label}
              </a>
            ))}

            {/* CTA pill */}
            {/* <a href="/contact-us" style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: 13, fontWeight: 700,
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: 100,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(249,115,22,0.28)',
              transition: 'filter 0.2s ease, transform 0.15s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = 'brightness(1.08)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = 'brightness(1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get in touch
            </a> */}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(p => !p)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 focus:outline-none rounded-xl active:bg-orange-50 transition-colors duration-150"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            style={{ gap: 5 }}
          >
            <span className={`ham-bar block rounded-full bg-zinc-700 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              style={{ width: 20, height: 1.5 }} />
            <span className={`ham-bar block rounded-full bg-zinc-700 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
              style={{ width: 20, height: 1.5 }} />
            <span className={`ham-bar block rounded-full bg-zinc-700 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              style={{ width: 20, height: 1.5 }} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay fixed inset-0 z-40 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      </div>

      {/* Mobile Drawer */}
      <nav
        className={`mobile-drawer fixed left-0 right-0 z-40 md:hidden ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ top: 57 }}
        aria-label="Mobile navigation"
      >
        <div className="mx-3"
          style={{
            borderRadius: 16,
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
          }}>
          <div style={{ padding: '8px 8px' }}>
            {isMenuOpen && NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link-item group"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '11px 14px',
                  borderRadius: 10,
                  fontSize: 15, fontWeight: 500,
                  color: '#3f3f46',
                  textDecoration: 'none',
                  transition: 'background 0.15s, color 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(249,115,22,0.07)'
                  e.currentTarget.style.color = '#ea580c'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#3f3f46'
                }}
              >
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#f97316,#ea580c)',
                  flexShrink: 0, opacity: 0.45,
                }} />
                {label}
              </a>
            ))}
          </div>

          {/* Bottom accent strip */}
          <div style={{ height: 3, background: 'linear-gradient(90deg, #f97316, #ea580c)', opacity: 0.7 }} />
        </div>
      </nav>
    </>
  )
}

export default Header