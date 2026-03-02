import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ResourcesData from '../../data/resourceData/resourceData'
import ResourcesTopmate from '../../data/resourceData/resourceTopmate'
import NaukriSidebarBanner from '../common/NaukriSidebarBanner'

const CompanyDetailSidebar = () => {
  const shuffledData = useMemo(() => {
    const firstItem = ResourcesData.find(item => item.id === 34)
    const otherItems = ResourcesData.filter(item => item.id !== 34)

    const shuffled = [...otherItems]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    const limitedShuffled = shuffled.slice(0, 13)
    return firstItem ? [firstItem, ...limitedShuffled] : limitedShuffled
  }, [])

  const cardClass = "flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors border border-gray-200 hover:border-orange-300"

  return (
    <div className="w-full lg:w-80 flex-shrink-0">
      <NaukriSidebarBanner referralLink="https://www.naukri.com/campus/contests/career-fair-2026?action=enrol&referral=e2000084-rEKBRXA-pses&uapp=801&utm_source=share_desktop&utm_medium=referral" />

      <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Resources to Crack Interviews
        </h3>

        <div className="space-y-3">
          {shuffledData.map((item) => {
            const isFree = !item.price || item.price === ''
            const topmateLink = ResourcesTopmate[item.id]

            const content = (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded-md flex-shrink-0"
                />
                <span className="text-sm font-medium text-gray-800 flex-1">{item.title}</span>
                <span className="text-orange-500 font-bold text-lg">→</span>
              </>
            )

            // Free → direct link
            if (isFree) {
              return (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {content}
                </a>
              )
            }

            // Paid + topmate exists → topmate
            if (topmateLink) {
              return (
                <a key={item.id} href={topmateLink} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {content}
                </a>
              )
            }

            // Paid + no topmate → internal resource page
            return (
              <Link key={item.id} to={`/resource/${item.id}`} className={cardClass}>
                {content}
              </Link>
            )
          })}

          {/* More Resources */}
          <Link
            to="/resources"
            className="flex items-center justify-center p-3 bg-orange-50 rounded-lg border border-orange-300 hover:bg-orange-100 transition-all font-semibold text-orange-600 text-sm"
          >
            View More Resources →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetailSidebar