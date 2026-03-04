import React from 'react'
import myImage from '../../assets/myImage.avif'

/**
 * MeetSoniCard
 *
 * Profile card for Meet Soni (Founder). Displays avatar image, name,
 * role, and contact details. Used in Privacy Policy, Terms & Conditions,
 * About Us, and Disclaimer.
 *
 * Props:
 *  - primaryEmail   {string}  Optional. Defaults to '{import.meta.env.VITE_RECIPIENT_EMAIL}'.
 *  - altEmail       {string}  Optional. Defaults to '{import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL}'.
 *  - responseTime   {string}  Optional. Defaults to 'Within 6–48 hours'.
 *  - location       {string}  Optional. Defaults to 'Shimoga, Karnataka, India'.
 *  - showRole       {string}  Optional. Role label under the name. Defaults to 'Founder & Solo Operator, DevCareers'.
 *
 * Usage:
 *   <MeetSoniCard />
 *
 *   // Or with overrides:
 *   <MeetSoniCard responseTime="Within 6 hours for payment issues" />
 */
const MeetSoniCard = ({
  primaryEmail  = import.meta.env.VITE_RECIPIENT_EMAIL,
  altEmail      = import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL,
  responseTime  = 'Within 6–48 hours',
  location      = 'Shimoga, Karnataka, India',
  showRole      = 'Founder & Solo Operator, DevCareers',
}) => (
  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
    <div className="flex items-center gap-4 mb-5">
      <div className="w-14 h-14 rounded-full overflow-hidden shadow-md flex-shrink-0 border-2 border-amber-300">
        <img
          src={myImage}
          alt="Meet Soni"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-lg">Meet Soni</h3>
        <p className="text-amber-700 font-medium text-sm">{showRole}</p>
      </div>
    </div>

    <div className="space-y-2 text-sm text-gray-700">
      <p>
        <strong>Primary Email:</strong>{' '}
        <a href={`mailto:${primaryEmail}`} className="text-amber-600 hover:underline">
          {primaryEmail}
        </a>
      </p>
      {altEmail && (
        <p>
          <strong>Alternative Email:</strong>{' '}
          <a href={`mailto:${altEmail}`} className="text-amber-600 hover:underline">
            {altEmail}
          </a>
        </p>
      )}
      <p><strong>Response Time:</strong> {responseTime}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  </div>
)

export default MeetSoniCard