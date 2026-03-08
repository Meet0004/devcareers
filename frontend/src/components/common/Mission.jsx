import React from 'react'

const Mission = () => {
  return (
	<section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-blue-800 text-lg leading-relaxed">
              To <strong>empower students and early-career professionals</strong> by providing timely access to curated
              job opportunities tailored to their preferences, high-quality educational resources, and actionable career
              guidance — enabling them to <strong>secure their dream roles</strong> and build successful careers in
              technology and beyond.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900">Our Vision</h3>
            </div>
            <p className="text-purple-800 text-lg leading-relaxed">
              To become <strong>India's most trusted career platform</strong> for students and early professionals,
              where <strong>every aspiring professional</strong> — regardless of background, college, or connections —
              has <strong>equal access</strong> to opportunities, resources, and guidance needed to thrive in their careers.
            </p>
          </div>
        </section>
  )
}

export default Mission
