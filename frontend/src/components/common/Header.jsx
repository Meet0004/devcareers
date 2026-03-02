import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/company-details', label: 'Job Posting' },
  { href: '/resources', label: 'Resources' },
  { href: '/subscribe-us', label: 'Subscribe' },
  {href: '/about-us', label:'About Us'},
  { href: '/contact-us', label: 'Contact Us' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColor = scrolled ? 'text-gray-900 hover:text-orange-500' : 'text-gray-700 hover:text-orange-500'
  const barColor = scrolled ? 'bg-gray-900' : 'bg-gray-700'

  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/30 backdrop-blur-2xl shadow-2xl border-b border-white/30' : 'bg-white shadow-lg'
    }`}>
      <div className="py-5 px-8 sm:px-8 flex justify-between items-center">
        <h2 className="md:ml-5 sm:ml-1 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Dev Careers
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-xl font-medium mr-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={`transition-colors duration-200 relative group ${textColor}`}>
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(p => !p)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${barColor} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${barColor} ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${barColor} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className={`flex flex-col py-4 px-4 space-y-4 ${scrolled ? 'bg-white/20 backdrop-blur-xl' : 'bg-gray-50'}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors duration-200 text-lg font-medium py-2 border-l-4 border-transparent hover:border-orange-500 pl-4 ${textColor}`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className={`h-1 transition-all duration-500 ${
        scrolled ? 'bg-gradient-to-t from-orange-500/40 to-transparent' : 'bg-gradient-to-t from-orange-500 to-transparent'
      }`} />
    </div>
  )
}

export default Header