import React from 'react'
import PageHero        from '../../components/legal/PageHero'
import SectionHeading  from '../../components/legal/SectionHeading'
import IconFeatureCard from '../../components/legal/IconFeatureCard'
import MeetSoniCard    from '../../components/legal/MeetSoniCard'
import StatGrid        from '../../components/legal/StatGrid'
import ContactInfoBox  from '../../components/legal/ContactInfoBox'

const About_us = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">

      {/* Hero Section */}
      <PageHero
        title="About DevCareers"
        subtitle="Empowering Students & Early-Career Professionals to Land Their Dream Jobs"
      >
        <StatGrid
          variant="pill"
          stats={[
            { label: '🎯 10,000+ Active Users' },
            { label: '💼 300+ Companies Tracked' },
            { label: '📚 35+ Curated Resources' },
            { label: '⭐ Top 0.1% on Topmate' },
          ]}
        />
      </PageHero>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* Our Story */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              DevCareers (formerly Tech Job Alert) started with a simple observation: <strong className="text-gray-900">talented students were
              missing out on amazing opportunities</strong> simply because they didn't know where to look or didn't have
              access to timely information.
            </p>
            <p>
              In late 2025, Meet Soni — a fresh BCA graduate and aspiring software developer — launched a YouTube channel
              to help students discover job opportunities. After seeing the overwhelming response and realizing how much
              students needed a <strong className="text-gray-900">centralized platform</strong> for job listings and resources,
              he built his first website in December 2025.
            </p>
            <p>
              But Meet didn't stop there. In early 2026, he launched <strong className="text-gray-900">DevCareers</strong> —
              a completely redesigned platform that aggregates opportunities from 300+ companies, provides curated educational
              resources, and delivers daily updates across YouTube, WhatsApp, and LinkedIn.
            </p>
            <p>
              Today, DevCareers serves <strong className="text-gray-900">10,000+ students and early-career professionals</strong> across
              India. What makes this platform unique? <strong className="text-gray-900">It's a one-person operation.</strong> Meet handles
              everything — from finding and verifying job postings, to creating educational content, managing social channels,
              building the platform, and providing support.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>80-120 job opportunities</strong> curated and posted monthly</li>
              <li><strong>35+ educational resources</strong> — interview guides, resume templates, coding cheat sheets</li>
              <li><strong>Multi-channel presence</strong> — YouTube videos, WhatsApp updates, LinkedIn posts</li>
              <li><strong>Personal touch</strong> — every email answered, every issue resolved by Meet himself</li>
            </ul>
            <p>
              DevCareers is built on one core belief: <strong className="text-gray-900">Every student deserves equal
              access to opportunities</strong>, regardless of their college tier, location, or network. This is a platform
              built by a student, for students — with zero corporate backing and 100% passion.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
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
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
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

        {/* What We Do */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <SectionHeading title="What We Do" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IconFeatureCard
              icon="💼"
              title="Job Aggregation"
              desc="We scan 500+ companies daily across their career pages, LinkedIn, and job boards to bring you the latest internships and entry-level roles in tech, product, design, marketing, and business — all in one centralized platform. No more endless searching!"
              color="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200"
              headColor="text-blue-900"
            />
            <IconFeatureCard
              icon="📚"
              title="Educational Resources"
              desc="Access 50+ curated resources including SQL guides, DSA cheat sheets, system design primers, resume templates, and interview prep materials. Over 50% are completely free, and premium resources are priced affordably (₹1-₹99) to ensure accessibility."
              color="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200"
              headColor="text-green-900"
            />
            <IconFeatureCard
              icon="❓"
              title="Career Guidance"
              desc="Get practical, actionable advice on resume building, LinkedIn optimization, interview strategies, and career planning. Our content is written by experienced professionals who've navigated the same journey you're on now."
              color="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200"
              headColor="text-purple-900"
            />
            <IconFeatureCard
              icon="📧"
              title="Job Alerts & Newsletters"
              desc="Subscribe to receive weekly job updates directly in your inbox, curated based on your preferences. Never miss an opportunity again — we do the searching, you do the applying!"
              color="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200"
              headColor="text-orange-900"
            />
            <IconFeatureCard
              icon="👥"
              title="Community Support"
              desc="Join a community of 10,000+ ambitious students and early professionals. Share experiences, ask questions, and support each other through the job hunt. We're in this together!"
              color="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200"
              headColor="text-pink-900"
            />
            <IconFeatureCard
              icon="✅"
              title="Verified Opportunities"
              desc="Every job posting is verified for legitimacy before being listed. We filter out scams, unpaid 'internships' disguised as free labor, and MLM schemes. Your time is valuable — we ensure you only see genuine opportunities."
              color="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200"
              headColor="text-teal-900"
            />
          </div>
        </section>

        {/* Our Core Values */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 md:p-12 shadow-lg">
          <SectionHeading title="Our Core Values" />

          <div className="space-y-6">
            {[
              { number: '01', title: 'Accessibility for All', description: "We believe opportunities should be accessible to everyone, regardless of college ranking, location, or socioeconomic background. That's why we offer over 50% of our resources completely free and keep premium resources affordable (₹1-₹99). No paywalls, no gatekeeping.", color: 'bg-blue-500' },
              { number: '02', title: 'Quality Over Quantity', description: "We don't just aggregate every job posting we find. We curate listings to ensure they're relevant, legitimate, and suitable for early-career professionals. We'd rather show you 10 great opportunities than 100 mediocre ones.", color: 'bg-green-500' },
              { number: '03', title: 'Transparency & Trust', description: "We're upfront about what we offer and how we operate. No hidden fees, no misleading claims, no spam. We treat your personal information with respect, never sell your data, and are transparent about our privacy practices.", color: 'bg-purple-500' },
              { number: '04', title: 'Continuous Improvement', description: 'We actively listen to user feedback and constantly evolve. Every feature on our platform exists because users asked for it. Your suggestions shape our roadmap — we\'re building this platform for you, with you.', color: 'bg-orange-500' },
              { number: '05', title: 'Student-First Mindset', description: "Every decision we make is guided by one question: 'Does this help students and early-career professionals succeed?' If the answer is no, we don't do it. Your success is our success, and we measure our impact by the jobs you land.", color: 'bg-pink-500' },
              { number: '06', title: 'Empathy & Support', description: "We know how stressful job hunting can be. We've been there. That's why we respond to every email, resolve issues promptly, and treat every user with kindness and respect. You're not just a number — you're part of our community.", color: 'bg-teal-500' },
            ].map((value, idx) => (
              <div key={idx} className="flex gap-6 items-start group hover:bg-white hover:shadow-md p-4 rounded-xl transition-all duration-300">
                <div className={`${value.color} text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {value.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <SectionHeading title="Why Students Trust Tech Job Alert" />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '✅', title: 'Verified Opportunities Only', desc: 'Every job posting is manually verified for legitimacy before being listed' },
              { icon: '🔄', title: 'Daily Updates', desc: 'Fresh opportunities added every single day from 500+ companies' },
              { icon: '🎁', title: '50% Free Resources', desc: 'Over half our educational materials are completely free to access' },
              { icon: '🚀', title: 'No Registration Required', desc: 'Browse jobs without creating an account (optional for email alerts)' },
              { icon: '📱', title: 'Mobile-Friendly', desc: 'Access jobs and resources seamlessly from any device, anywhere' },
              { icon: '⚡', title: 'Fast & Simple', desc: 'Clean interface, no clutter, no ads — just opportunities and resources' },
              { icon: '💰', title: 'Affordable Premium Content', desc: 'Premium resources priced at ₹1-₹99 to ensure accessibility for all' },
              { icon: '🛡️', title: 'Privacy Respected', desc: 'Your data is never sold or shared with third parties' },
              { icon: '💬', title: 'Responsive Support', desc: 'Get help within 6-48 hours via email or contact form' },
              { icon: '🎯', title: 'Curated, Not Cluttered', desc: 'Quality over quantity — only relevant opportunities for early careers' },
              { icon: '📊', title: 'Transparent Practices', desc: 'Clear about how we operate, what we collect, and how we use data' },
              { icon: '🤝', title: 'Community-Driven', desc: 'Built by students, for students, with constant user feedback' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 hover:bg-amber-50 rounded-xl transition-colors border border-gray-200 hover:border-amber-300">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Impact - Statistics */}
        <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-2xl p-8 md:p-12">
          <SectionHeading
            title="Our Impact in Numbers"
            subtitle="Here's what we've achieved together as a community since our launch in 2023"
            className="mb-10"
          />

          <StatGrid
            variant="card"
            stats={[
              { icon: '', number: '10K+',    label: 'Active Users' },
              { icon: '', number: '300+',    label: 'Companies Tracked' },
              { icon: '', number: '100+',    label: 'Monthly Opportunities' },
              { icon: '', number: '35+',     label: 'Resources' },
              { icon: '', number: '399',     label: 'Topmate Bookings' },
              { icon: '', number: 'Top 0.1%',label: 'Topmate Creator' },
              { icon: '', number: '100%',    label: 'Verified Listings' },
              { icon: '', number: '0₹',      label: 'To Browse Jobs' },
            ]}
          />

          <div className="mt-10 pt-8 border-t border-green-400 grid md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <p className="text-lg font-medium mb-2">🏆 <strong>Topmate Achievements:</strong></p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Community Care</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Curator</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">People's Choice</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Top 1%</span>
              </div>
            </div>
            <div>
              <p className="text-lg font-medium mb-2">⏰ <strong>8+ Hours Daily</strong></p>
              <p className="text-green-100">Dedicated to finding opportunities, creating content, and supporting users</p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <SectionHeading title="Meet the Team" className="mb-6" />

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700 leading-relaxed text-center">
              Unlike most platforms, DevCareers is <strong className="text-gray-900">a one-person operation</strong> built
              and maintained entirely by Meet Soni — a 21-year-old software developer and BCA graduate from Shimoga, Karnataka.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
              <div className="flex items-center gap-6 mb-6 flex-col md:flex-row">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  MS
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">Meet Soni</h3>
                  <p className="text-amber-700 font-semibold">Founder & Solo Developer</p>
                  <p className="text-sm text-gray-600">Software Developer • BCA Graduate • 21 Years Old</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-gray-900">What Meet Does:</strong> Everything. Literally everything.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { emoji: '🔍', label: 'Job Curation',           desc: 'Scans 300+ companies daily, verifies every posting, and updates listings manually' },
                    { emoji: '💻', label: 'Platform Development',   desc: 'Codes, designs, and maintains the entire DevCareers platform from scratch' },
                    { emoji: '📹', label: 'Content Creation',       desc: 'Creates YouTube videos, writes newsletters, posts on LinkedIn and WhatsApp' },
                    { emoji: '💬', label: 'User Support',           desc: 'Responds to every email, resolves issues, and provides personalized guidance' },
                    { emoji: '📚', label: 'Resource Creation',      desc: 'Curates and creates 35+ educational resources for students' },
                    { emoji: '📊', label: 'Everything Else',        desc: 'Accounting, planning, marketing, analytics — all handled solo' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-amber-700 mb-2">{item.emoji} {item.label}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-4 mt-4">
                  <p className="text-center font-semibold text-amber-900">
                    ⏰ Spends <strong>8+ hours daily</strong> maintaining and growing DevCareers while building solutions
                    that genuinely help students succeed.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-center">
              This is a <strong className="text-gray-900">passion project</strong> built by someone who believes in the
              power of accessible information. Meet is currently operating as a solo developer, but as DevCareers grows
              and reaches sustainability, the plan is to acquire a proper domain and potentially expand the team.
            </p>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12">
          <SectionHeading title="Our Commitment to You" />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '✅', title: 'Accurate Information',  description: 'We verify every job posting and update listings regularly. If a role is filled or expired, we remove it promptly.' },
              { icon: '🔒', title: 'Data Privacy',          description: 'Your personal information is sacred. We never sell your data to third parties and use industry-standard encryption to protect it.' },
              { icon: '📧', title: 'Responsive Support',    description: 'We respond to every email and resolve issues within 6-48 hours. Real humans, real responses — no bots, no auto-replies.' },
              { icon: '📋', title: 'Quality Resources',     description: "Every resource we publish is reviewed for accuracy, clarity, and usefulness. We don't publish filler content just to increase numbers." },
              { icon: '✔️', title: 'Transparency',          description: "We're open about how we operate, what data we collect, and how we make money. No hidden agendas, no fine print tricks." },
              { icon: '👥', title: 'Community First',       description: "We actively listen to feedback and implement suggestions. You shape our roadmap — we're building this for you, with you." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Make Money */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <SectionHeading title="How We Sustain Our Platform" className="mb-6" />

          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>
              We believe in <strong className="text-gray-900">transparency</strong>, so here's exactly how we keep the lights on:
            </p>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
                Premium Educational Resources
              </h3>
              <p className="text-gray-700">
                We offer <strong>35+ resources</strong> (50% free, 50% premium) priced affordably from
                <strong> Free to ₹49</strong>. Premium resources help cover server costs, content creation, and
                platform maintenance while keeping everything accessible for students.
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                What's Coming Next
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Razorpay Integration:</strong> Currently implementing direct payment processing through Razorpay
                for a seamless checkout experience. This will replace the current Topmate links.
              </p>
              <p className="text-gray-700">
                <strong>Future Plans:</strong> Once we reach sustainability, we'll introduce non-intrusive ads to cover
                server costs and enable better scalability. We'll also acquire a proper <strong>devcareers.com</strong> domain
                to establish our permanent home.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">What We Don't Do:</h3>
              <ul className="space-y-2">
                {[
                  { icon: '✗', text: "We don't sell your data to recruiters or third parties" },
                  { icon: '✗', text: "We don't charge companies to post jobs (listings remain unbiased)" },
                  { icon: '✗', text: "We don't run intrusive ads or slow down the platform with trackers (for now)" },
                  { icon: '✗', text: "We don't require paid subscriptions to browse job listings" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-center italic text-gray-600">
              <strong>50% of resources are completely free</strong> to ensure accessibility. DevCareers is built
              to help you succeed, not to profit off your struggles. This is a passion project funded by affordable
              premium resources, with plans to add ethical monetization as we grow.
            </p>
          </div>
        </section>

        {/* Testimonials/Success Stories */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 md:p-12">
          <SectionHeading
            title="Success Stories"
            subtitle="Here's what students like you have achieved using our platform"
            className="mb-10"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* YouTube Comments */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">YouTube Community</h3>
              </div>

              <div className="space-y-3">
                {[
                  { text: '"CONGRATS bro. hope you hit 100k and million soon."', author: '@photon7404 • YouTube', stars: 5 },
                  { text: '"Very informative"', author: '@sonalsshet6133 • 1 month ago', stars: 0 },
                  { text: '"Thank you bro. bring more..."', author: '@nilesh__ • 2 weeks ago', stars: 0 },
                  { text: '"keep posting sir"', author: '@himanshudwivedi2235 • 1 month ago', stars: 0 },
                ].map((review, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-500">
                    {review.stars > 0 && (
                      <div className="flex gap-1 mb-2">
                        {[...Array(review.stars)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    )}
                    <p className="text-gray-700 text-sm italic">{review.text}</p>
                    <p className="text-xs text-gray-500 mt-2">— {review.author}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Topmate Testimonials */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">Topmate Reviews (4.3/5)</h3>
              </div>

              <div className="space-y-3">
                {[
                  { text: '"It is helpful for me.. Thank you so much"', author: 'Jyoti Yadav • 2nd Mar, 2026' },
                  { text: '"good"', author: 'Anonymous • 22nd Feb, 2026' },
                  { text: 'M Durga Prasad', author: '24th Feb, 2026' },
                  { text: 'Meghana N', author: '21st Feb, 2026' },
                ].map((review, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm">{review.text}</p>
                    <p className="text-xs text-gray-500 mt-2">— {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
            <p className="text-gray-700 font-medium text-lg">
              🏆 <strong>Top 0.1%</strong> Creator on Topmate • <strong>{import.meta.env.VITE_TOTAL_SALES} Bookings</strong> • <strong>4.3/5 Rating</strong> from all Reviews
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Badges: Community Care • Curator • People's Choice • Top 1%
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, feedback, or partnership opportunities? We'd genuinely love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Send Us a Message
            </a>
            <a
              href="/subscribe-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors border-2 border-white shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Subscribe for Weekly Updates
            </a>
          </div>

          <ContactInfoBox
            variant="dark"
            altEmail="info.techjobalert@gmail.com"
            responseTime="6-48 hours"
            note="Solo-operated by Meet Soni • 8+ hours daily dedication"
          />
        </section>

      </div>
    </div>
  )
}

export default About_us