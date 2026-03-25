import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ResourcesData from '../../data/resourceData/resourceData'
import ResourcesTopmate from '../../data/resourceData/resourceTopmate'
const CompanyDetailDownbar = () => {

  const shuffledData = useMemo(() => {
    const firstId = 0
    const secondId = 3
    const fourthId = 28

    const firstItem = ResourcesData.find(item => item.id === firstId)
    const secondItem = ResourcesData.find(item => item.id === secondId)
    const fourthItem = ResourcesData.find(item => item.id === fourthId)

    const remainingItems = ResourcesData.filter(
      item => item.id !== firstId && item.id !== secondId && item.id !== fourthId
    )

    const shuffled = [...remainingItems]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    const randomItems = shuffled.slice(0, 6)
    return [firstItem, secondItem, randomItems[0], fourthItem, ...randomItems.slice(1)].filter(Boolean)
  }, [])

  const handleClick = (item) => {
    const isFree = !item.price || item.price === ''
    if (isFree) {
      window.open(item.link, '_blank')
    } else {
      const topmateLink = ResourcesTopmate[item.id]
      if (topmateLink) {
        window.open(topmateLink, '_blank')
      }
      // paid + no topmate = handled by Link below
    }
  }

  const cardClass = "flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors border border-gray-200 hover:border-orange-300"

  return (
    <div className="mt-8">
      <NaukriCareerVerseBanner referralLink="https://www.naukri.com/campus/contests/career-fair-2026?action=enrol&referral=e2000084-rEKBRXA-pses&uapp=801&utm_source=share_desktop&utm_medium=referral" />
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Resources to Crack Interviews
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {shuffledData.map((item) => {
          const isFree = !item.price || item.price === ''
          const topmateLink = ResourcesTopmate[item.id]
          const content = (
            <>
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-md flex-shrink-0"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-800 flex-1">{item.title}</span>
              <span className="text-orange-500 font-bold text-lg">→</span>
            </>
          )

          if (isFree) {
            return (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={cardClass}>
                {content}
              </a>
            )
          }

          if (topmateLink) {
            return (
              <a key={item.id} href={topmateLink} target="_blank" rel="noopener noreferrer" className={cardClass}>
                {content}
              </a>
            )
          }

          return (
            <Link key={item.id} to={`/resource/${item.id}`} className={cardClass}>
              {content}
            </Link>
          )
        })}

        <Link
          to="/resources"
          className="flex items-center justify-center p-4 bg-orange-50 rounded-lg
                     border border-orange-300 hover:bg-orange-100
                     transition-all font-semibold text-orange-600"
        >
          View More Resources →
        </Link>
      </div>
    </div>
  )
}

export default CompanyDetailDownbar