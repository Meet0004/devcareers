import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import companiesData from '../data/jobData/jobData'
import CompanyDetailPage from '../components/company/CompanyDetailPage'
import CompanyListPage from '../components/company/CompanyListPage'
import NotFound from './NotFound'

const Companies_details = () => {
  const { companyName, role } = useParams()
  const [searchTerm, setSearchTerm] = useState('')

  const selectedCompany = companyName && role
  ? companiesData.find(
      c => c.company === decodeURIComponent(companyName) &&
           c.role    === decodeURIComponent(role)
    )
  : null

const filteredCompanies = companiesData.filter(item =>
  item.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.location?.toLowerCase().includes(searchTerm.toLowerCase())
)
  // Detail page
  if (companyName && role) {
    if (!selectedCompany) {
      return (
        // ❌ Company Not Found UI
        <NotFound/>

      )
    }

    return (
      <CompanyDetailPage
        selectedCompany={selectedCompany}
        allCompanies={companiesData}
      />
    )
  }

  // List page
  return (
    <CompanyListPage
      filteredCompanies={filteredCompanies}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  )
}

export default Companies_details