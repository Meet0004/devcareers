import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/company-details', label: 'Job Posting' },
  { href: '/resources', label: 'Resources' },
  { href: '/Blogs', label: 'Blogs' },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const textColor = scrolled
    ? 'text-gray-900 hover:text-orange-500'
    : 'text-gray-700 hover:text-orange-500'
  const barColor = scrolled ? 'bg-gray-900' : 'bg-gray-700'

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link-item {
          animation: slideDown 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .nav-link-item:nth-child(1) { animation-delay: 0.04s; }
        .nav-link-item:nth-child(2) { animation-delay: 0.08s; }
        .nav-link-item:nth-child(3) { animation-delay: 0.12s; }
        .nav-link-item:nth-child(4) { animation-delay: 0.16s; }
        .nav-link-item:nth-child(5) { animation-delay: 0.20s; }
        .nav-link-item:nth-child(6) { animation-delay: 0.24s; }

        .mobile-overlay {
          transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      visibility 0.3s;
        }
        .mobile-drawer {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ham-bar {
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 0.25s ease,
                      background-color 0.3s ease;
        }
      `}</style>

      <div className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/30 backdrop-blur-2xl shadow-2xl border-b border-white/30'
          : 'bg-white shadow-lg'
      }`}>
        <div className="py-5 px-8 sm:px-8 flex justify-between items-center">
          <h2 className="md:ml-5 sm:ml-1 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            <a href="/">Dev Careers</a>
          </h2>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-xl font-medium mr-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-colors duration-200 relative group ${textColor}`}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(p => !p)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 space-y-1.5 focus:outline-none rounded-xl active:bg-orange-50 transition-colors duration-150"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`ham-bar block w-6 h-0.5 rounded-full ${barColor} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`ham-bar block w-6 h-0.5 rounded-full ${barColor} ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`ham-bar block w-6 h-0.5 rounded-full ${barColor} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <div className={`h-1 transition-all duration-500 ${
          scrolled
            ? 'bg-gradient-to-t from-orange-500/40 to-transparent'
            : 'bg-gradient-to-t from-orange-500 to-transparent'
        }`} />
      </div>

      {/* Mobile Full-screen Overlay */}
      <div
        className={`mobile-overlay fixed inset-0 z-40 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      >
        {/* Blurred dark backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      {/* Mobile Slide-down Drawer */}
      <nav
        className={`mobile-drawer fixed left-0 right-0 z-40 md:hidden ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        style={{ top: '73px' }}
        aria-label="Mobile navigation"
      >
        <div className={`mx-3 rounded-2xl overflow-hidden shadow-2xl border border-white/40 ${
          scrolled ? 'bg-white/80 backdrop-blur-2xl' : 'bg-white/95 backdrop-blur-xl'
        }`}>
          <div className="flex flex-col p-3">
            {isMenuOpen && NAV_LINKS.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link-item group flex items-center gap-3 py-3.5 px-4 rounded-xl text-lg font-medium text-gray-800 hover:text-orange-500 hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                {label}
              </a>
            ))}
          </div>

          {/* Bottom accent strip */}
          <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 opacity-60" />
        </div>
      </nav>
    </>
  )
}

export default Header