import React from 'react'
import { Youtube, MessageCircle, Linkedin, InstagramIcon } from 'lucide-react'

const youtube_link = import.meta.env.VITE_YOUTUBE_LINK
const whatsapp_link = import.meta.env.VITE_WHATSAPP_LINK
const linkedin_link = import.meta.env.VITE_LINKEDIN_LINK
const instagram_link = import.meta.env.VITE_INSTAGRAM_LINK
const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/company-details', label: 'Job Posting' },
  { href: '/resources', label: 'Resources' },
  { href: '/subscribe-us', label: 'Subscribe Us' },
]

const LEGAL_LINKS = [
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/about-us', label: 'About Us' },
  { href: '/purchase-query', label: 'Purchase Query' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms and Conditions' },
  { href: '/disclaimer', label: 'Disclaimer' },
]

const SOCIAL_LINKS = [
  { href: youtube_link, label: 'YouTube Channel', icon: <Youtube className="w-4 h-4" /> },
  { href: whatsapp_link, label: 'WhatsApp Channel', icon: <MessageCircle className="w-4 h-4" /> },
  { href: instagram_link, label: 'Instagram Profile', icon: <InstagramIcon className="w-4 h-4"/> },
  { href: linkedin_link, label: 'LinkedIn Channel', icon: <Linkedin className="w-4 h-4" /> },
]

const BUSINESS_LINKS = [
  { href: '/advertise-with-us', label: 'Advertise with Us' },
  { href: '/partnership', label: 'Partnership' },
]

const Footer = () => (
  <footer className="bg-[#ff802c] pt-10 pb-6">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

      {/* Column 1 */}
      <div>
        <h3 className="font-bold text-white text-base mb-4 uppercase tracking-wide">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          {QUICK_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:underline hover:text-white/80 transition-colors">{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="font-bold text-white text-base mb-4 uppercase tracking-wide">Legal Links</h3>
        <ul className="space-y-2 text-sm">
          {LEGAL_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:underline hover:text-white/80 transition-colors">{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="font-bold text-white text-base mb-4 uppercase tracking-wide">Social Links</h3>
          <ul className="space-y-2 text-sm">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline hover:text-white/80 transition-colors">
                  {icon} {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/50 text-sm">
          <h3 className="font-bold text-white text-base mb-2 uppercase tracking-wide">Work With Us</h3>
          <ul className="space-y-2">
            {BUSINESS_LINKS.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="hover:underline hover:text-white/80 transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>

    <div className="text-center mt-8 text-xs border-t border-white/60 pt-4">
  <p className="text-white text-sm">Last updated: March 2026</p>
  <p className="text-white text-sm">© 2026 DevCareers. All rights reserved.</p>
  <p className="text-white font-medium">Built with ❤️ by Meet Soni for students everywhere</p>
</div>
  </footer>
)

export default Footer