import React from 'react'

/**
 * ContactInfoBox
 *
 * Compact contact details block that appears in Disclaimer, T&C, About Us,
 * and Advertise pages. Lighter than MeetSoniCard — no avatar, just the facts.
 *
 * Props:
 *  - primaryEmail   {string}  Optional. Defaults to 'meethcodes@gmail.com'.
 *  - altEmail       {string}  Optional. Defaults to 'info.techjobalert@gmail.com'.
 *  - responseTime   {string}  Optional. Defaults to '6–48 hours'.
 *  - location       {string}  Optional. Defaults to 'Shimoga, Karnataka, India'.
 *  - note           {string}  Optional. Small italic note at the bottom (e.g. purchase query instructions).
 *  - variant        {'light'|'dark'}  Optional. 'light' = white bg, 'dark' = white/10 bg (for use on colored sections). Defaults to 'light'.
 *
 * Usage:
 *   // On a white or light background:
 *   <ContactInfoBox />
 *
 *   // On the amber hero (Advertise CTA):
 *   <ContactInfoBox variant="dark" />
 *
 *   // With a custom note:
 *   <ContactInfoBox
 *     note="When contacting about payments please include your transaction ID."
 *   />
 */
const ContactInfoBox = ({
  primaryEmail = import.meta.env.VITE_RECIPIENT_EMAIL,
  altEmail     = import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL,
  responseTime = '6–48 hours',
  location     = 'Shimoga, Karnataka, India',
  note,
  variant      = 'light',
}) => {
  const isLight = variant === 'light'

  return (
    <div className={`rounded-xl px-5 py-4 text-sm space-y-1 ${
      isLight
        ? 'bg-orange-50 border border-orange-200 text-gray-700'
        : 'bg-white/15 text-white'
    }`}>
      <p>
        <strong>Primary Email:</strong>{' '}
        <a
          href={`mailto:${primaryEmail}`}
          className={`hover:underline ${isLight ? 'text-amber-600' : 'text-white font-semibold'}`}
        >
          {primaryEmail}
        </a>
      </p>
      {altEmail && (
        <p>
          <strong>Alternative Email:</strong>{' '}
          <a
            href={`mailto:${altEmail}`}
            className={`hover:underline ${isLight ? 'text-amber-600' : 'text-white font-semibold'}`}
          >
            {altEmail}
          </a>
        </p>
      )}
      <p><strong>Response Time:</strong> {responseTime}</p>
      <p><strong>Location:</strong> {location}</p>
      {note && (
        <p className={`text-xs italic mt-2 ${isLight ? 'text-black/50' : 'text-white/70'}`}>
          {note}
        </p>
      )}
    </div>
  )
}

export default ContactInfoBox
