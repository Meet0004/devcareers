import React, { useState } from 'react'

const ApplySection = ({ selectedCompany }) => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    if (!selectedCompany.email) return
    navigator.clipboard.writeText(selectedCompany.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 300)
  }

  return (
    <div>
      <div className="pt-6">
        {selectedCompany.hiringLink && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            gap: 16,
          }}>
            <span style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#374151',
            }}>
              Apply Link:
            </span>
            <a
              href={selectedCompany.hiringLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Visit Career Page →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplySection