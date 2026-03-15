import React from 'react'
import ApplySection from './ApplySection'
import CompanyDetailSidebar from './CompanyDetailSidebar'
import { Link } from 'react-router-dom'
import JobDescription from './JobDescription'
import BelowDescriptionPanels from './BelowDescriptionPanels'

const CompanyDetailMain = ({ selectedCompany }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto px-4">

      {/* LEFT - Main Content */}
      <div className="w-full lg:flex-[65] min-w-0 bg-white rounded-lg shadow-md p-3 lg:p-8">
        <Link
          to="/company-details"
          className="text-[#FA5500] hover:underline mb-4 inline-flex items-center"
        >
          ← Back Job listings
        </Link>

        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">{selectedCompany.role}</h2>
        <h2 className="mt-2 text-xl lg:text-2xl font-bold text-gray-800">
          Company: {selectedCompany.company}
        </h2>

        <ApplySection selectedCompany={selectedCompany} />

        {/* Pass the whole object — JobDescription reads .quickInfo and .sections */}
        <JobDescription selectedCompany={selectedCompany} />

        <BelowDescriptionPanels />
      </div>

      {/* RIGHT - Sidebar */}
      <div className="w-full lg:flex-[25] min-w-0">
        <div className="lg:sticky lg:top-4">
          <CompanyDetailSidebar />
        </div>
      </div>

    </div>
  )
}

export default CompanyDetailMain