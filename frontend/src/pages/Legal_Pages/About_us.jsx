import React from 'react'
import PageHero from '../../components/legal/PageHero'
import Impact from '../../components/common/Impact'
import myImage from '../../assets/myImage.avif'
import ContactBlock from '../../components/common/ContactBlock'
import { siteData } from '../../config/siteData'
import { metrics } from '../../config/metrics'

const About_us = () => {
  
  return (
    <div className="min-h-screen" style={ {'margin':'15px 0px'}}>

      {/* Hero Section */}
      <PageHero
        title="About DevCareers"
        subtitle="Empowering Students & Early-Career Professionals to Land Their Dream Jobs"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 pb-10">

        {/* Profile Card */}
        <section className="mt-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl overflow-hidden shadow-md">

              {/* Top: Photo + Name */}
              <div className="flex flex-col md:flex-row items-center md:items-stretch">

                {/* Image block */}
                <div className="w-full md:w-64 flex-shrink-0 flex md:block justify-center pt-6 px-6 md:p-0">
                  <div className="w-64 h-64 sm:w-32 sm:h-32 md:w-full md:h-full rounded-full md:rounded-none overflow-hidden ring-4 ring-orange-200 md:ring-0 flex-shrink-0">
                    <img
                      src={myImage}
                      alt={siteData.founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Name + bio */}
                <div className="flex-1 px-5 py-5 md:px-6 md:pt-6 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
                    Founder & the only person here
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {siteData.founder.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {siteData.founder.degree} Graduate · {siteData.founder.age} yrs · {siteData.founder.location}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    I was fresh out of college, applying everywhere and spending more time searching for openings than actually preparing for them. A lot of listings were already expired, and the rest were scattered across different sites. So I started keeping a simple list for myself and later shared it on YouTube. Over time, it slowly turned into what it is today.
                  </p>
                </div>
              </div>

              {/* Bottom: What he does grid */}
              <div className="border-t-2 border-amber-200 px-4 py-5 sm:px-6 sm:py-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  What I actually do here
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                        </svg>
                      ),
                      label: 'Job Curation',
                      desc: `Every month I go through ${metrics.totalCompaniesTracked}+ career pages myself. No scraper, no shortcuts. If I can't verify it, it doesn't go up`,
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                        </svg>
                      ),
                      label: 'Platform Dev',
                      desc: "I designed and coded this whole site myself. When something breaks at midnight, I'm the one fixing it",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      ),
                      label: 'Content Creation',
                      desc: 'YouTube, LinkedIn, WhatsApp, newsletters. I write and record everything you see',
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      ),
                      label: 'User Support',
                      desc: 'Every message that comes in, I read and reply to personally. No templates, no bots',
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      ),
                      label: 'Resource Creation',
                      desc: `${import.meta.env.VITE_TOTAL_RESOURCES}+ handpicked guides, templates, and cheat sheets to level up`,
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                      ),
                      label: 'Everything Else',
                      desc: 'Analytics, planning and execution',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/70 rounded-xl p-3 sm:p-4 flex gap-3 items-start hover:bg-white transition-colors">
                      <div className="text-amber-600 mt-0.5 flex-shrink-0">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.label}</p>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-transparent rounded-2xl shadow-lg p-5 sm:p-8 md:p-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Story</h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg">
              DevCareers started as a simple effort to track genuine job opportunities in one place. Many listings online remain outdated or unclear, making it difficult for students to identify roles that are actually open and relevant.
            </p>
            <p>
              To address this, a system was created to collect active job openings, verify links, and organize them in a way that is easy to access and understand. What began as a small, personal tracking process gradually evolved into something more structured and publicly shared.
            </p>
            <p>
              In beginning {siteData.founder.year}, this information started being shared through YouTube, focusing only on real and currently active opportunities. As more students began following these updates, it became clear that there was a wider need for a reliable and consistent source of job information.
            </p>
            <p>
              Shortly after, a basic website was developed to make access even simpler. The focus remained on clarity, usability, and accuracy rather than design complexity. Over time, improvements were made based on feedback including better organization, more companies, and additional resources.
            </p>
            <p>
              The goal is straightforward to make job discovery more transparent and accessible, regardless of background, location, or college.
            </p>
          </div>
        </section>

        {/* Impact */}
        <Impact />

        {/* Contact CTA */}
        <section className="bg-amber-50 border-2 border-amber-200 rounded-2xl sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-1">Got something to say?</h2>
              <p className="text-gray-500 text-sm">Questions, feedback, suggestions, I read every message myself.</p>
            </div>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors text-sm flex-shrink-0 w-full sm:w-auto justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send a Message
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About_us