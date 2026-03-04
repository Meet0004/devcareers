import React, { useState } from 'react'
import { Building2, MapPin, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'

const CompanyCard = ({ company }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Link
      to={`/company-details/${encodeURIComponent(company.company)}/${encodeURIComponent(company.role)}`}
      className="group bg-[#FFFDFB] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-black/10 hover:border-[#FA5500]"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 bg-[#FA5500] rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div
              className="w-full h-full relative transition-transform duration-700"
              style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {[
                { content: <Briefcase className="w-6 h-6 text-white" />, flip: false },
                { content: <span className="text-white font-bold text-xs">{company.id || 'ID'}</span>, flip: true },
              ].map(({ content, flip }) => (
                <div
                  key={String(flip)}
                  className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#FA5500]"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    ...(flip && { transform: 'rotateY(180deg)' }),
                  }}
                >
                  {content}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-black group-hover:text-[#FA5500] transition-colors leading-tight">
            {company.role}
          </h3>
        </div>

        <div className="space-y-3">
          {[
            { Icon: Building2, value: company.company },
          ].map(({ Icon, value }) => (
            <div key={value} className="flex items-center gap-2 text-sm text-black/60">
              <Icon className="w-4 h-4 flex-shrink-0 text-black/40" />
              <span className="truncate">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-black/10">
          <span className="inline-flex items-center gap-1 text-[#FA5500] font-medium text-sm group-hover:gap-2 transition-all">
            View Details
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CompanyCard