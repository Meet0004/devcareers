import React from 'react'
import SearchBar from './SearchBar'
import CompanyCard from './CompanyCard'
import CompanyNotFound from './CompanyNotFound'

const CompanyListPage = ({ filteredCompanies, searchTerm, setSearchTerm }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Company Listings
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Discover amazing opportunities at top companies
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...filteredCompanies]
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <CompanyCard key={item.id} company={item} />
            ))}
        </div>

        {filteredCompanies.length === 0 && (
          <CompanyNotFound
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
      </div>
    </div>
  )
}

export default CompanyListPage