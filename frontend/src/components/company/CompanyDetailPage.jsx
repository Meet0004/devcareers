import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CompanyDetailMain from './CompanyDetailMain'

const CompanyDetailPage = ({ selectedCompany }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-orange-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        

        <div className="flex flex-col lg:flex-row gap-6 justify-center mb-10">
          
          <CompanyDetailMain selectedCompany={selectedCompany} />

        </div>
      </div>
    </div>
  )
}

export default CompanyDetailPage