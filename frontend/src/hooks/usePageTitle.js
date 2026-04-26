import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = import.meta.env.VITE_SITE_NAME || 'DevCareers'

const TITLES = {
  '/':                          `${SITE} - Internships & Jobs Updates`,
  '/company-details':           `Jobs & Internships - ${SITE}`,
  '/resources':                 `Career Resources - ${SITE}`,
  '/resources/packages':        `Resource Packages - ${SITE}`,
  // 'resources/packages/:id"': `Resource Detail - ${SITE}`,
  '/blogs':                     `Blogs - ${SITE}`,
  '/subscribe-us':              `Subscribe for Job Alerts - ${SITE}`,
  '/about-us':                  `About Us - ${SITE}`,
  '/contact-us':                `Contact Us - ${SITE}`,
  '/disclaimer':                `Disclaimer - ${SITE}`,
  '/privacy-policy':            `Privacy Policy - ${SITE}`,
  '/terms-and-conditions':      `Terms & Conditions - ${SITE}`,
  '/advertise-with-us':         `Advertise with Us - ${SITE}`,
  '*':                          `Page Not Found - ${SITE}`,
}

export default function usePageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const base = '/' + pathname.split('/')[1]
    document.title = TITLES[pathname] ?? TITLES[base] ?? `${SITE} - Internships & Jobs Updates`
  }, [pathname])
}