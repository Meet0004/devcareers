import React from 'react'
import PageHero from '../../components/legal/PageHero'
import SectionHeading from '../../components/legal/SectionHeading'
import IconFeatureCard from '../../components/legal/IconFeatureCard'
import MeetSoniCard from '../../components/legal/MeetSoniCard'
import StatGrid from '../../components/legal/StatGrid'
import ContactInfoBox from '../../components/legal/ContactInfoBox'
import myImage from '../../assets/myImage.avif'
import Testimonials from '../../components/common/Testimonials'
import Impact from '../../components/common/Impact'
import Mission from '../../components/common/Mission'

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
            { label: `🎯 ${import.meta.env.VITE_MONTHLY_USERS}+ Active Users` },
            { label: `💼 ${import.meta.env.VITE_TOTAL_COMPANIES_TRACKED}+ Companies Tracked` },
            { label: `📚 ${import.meta.env.VITE_TOTAL_RESOURCES}+ Curated Resources` },
            { label: `⭐ Top ${import.meta.env.VITE_TOPMATE_RANK}% on Topmate` },
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
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              DevCareers started with a simple observation: <strong className="text-gray-900">talented students were
                missing out on amazing opportunities</strong> simply because they didn't know where to look or didn't have
              access to timely information.
            </p>
            <p>
              In late {import.meta.env.VITE_LAUNCH_YEAR - 1}, {import.meta.env.VITE_FOUNDER_NAME} — a fresh {import.meta.env.VITE_FOUNDER_DEGREE} graduate and aspiring software developer — launched a YouTube channel
              to help students discover job opportunities. After seeing the overwhelming response and realizing how much
              students needed a <strong className="text-gray-900">centralized platform</strong> for job listings and resources,
              he built his first website in December {import.meta.env.VITE_LAUNCH_YEAR - 1}.
            </p>
            <p>
              But {import.meta.env.VITE_FOUNDER_NAME.split(' ')[0]} didn't stop there. In early {import.meta.env.VITE_LAUNCH_YEAR}, he launched <strong className="text-gray-900">DevCareers</strong> —
              a completely redesigned platform that aggregates opportunities from {import.meta.env.VITE_TOTAL_COMPANIES_TRACKED}+ companies, provides curated educational
              resources, and delivers daily updates across YouTube, WhatsApp, and LinkedIn.
            </p>
            <p>
              Today, DevCareers serves <strong className="text-gray-900">{import.meta.env.VITE_MONTHLY_USERS}+ students and early-career professionals</strong> across
              India. What makes this platform unique? <strong className="text-gray-900">It's a one-person operation.</strong> {import.meta.env.VITE_FOUNDER_NAME} handles
              everything — from finding and verifying job postings, to creating educational content, managing social channels,
              building the platform, and providing support.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>{import.meta.env.VITE_JOBS_PER_MONTH_MIN}-{import.meta.env.VITE_JOBS_PER_MONTH_MAX} job opportunities</strong> curated and posted monthly</li>
              <li><strong>{import.meta.env.VITE_TOTAL_RESOURCES}+ educational resources</strong> — interview guides, resume templates, coding cheat sheets</li>
              <li><strong>Multi-channel presence</strong> — YouTube videos, WhatsApp updates, LinkedIn posts</li>
              <li><strong>Personal touch</strong> — every email answered, every issue resolved by {import.meta.env.VITE_FOUNDER_NAME} himself</li>
            </ul>
            <p>
              DevCareers is built on one core belief: <strong className="text-gray-900">Every student deserves equal
                access to opportunities</strong>, regardless of their college tier, location, or network. This is a platform
              built by a student, for students — with zero corporate backing and 100% passion.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <Mission/>

        {/* Meet the Team */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <SectionHeading title="Meet the Team" className="mb-6" />

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700 leading-relaxed text-center">
              Unlike most platforms, DevCareers is <strong className="text-gray-900">a one-person operation</strong> built
              and maintained entirely by {import.meta.env.VITE_FOUNDER_NAME} — a {import.meta.env.VITE_FOUNDER_AGE}-year-old software developer and {import.meta.env.VITE_FOUNDER_DEGREE} graduate from {import.meta.env.VITE_FOUNDER_LOCATION}.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
              <div className="flex items-center gap-6 mb-6 flex-col md:flex-row">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-300 shadow-md">
                  <img
                    src={myImage}
                    alt={import.meta.env.VITE_FOUNDER_NAME}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">{import.meta.env.VITE_FOUNDER_NAME}</h3>
                  <p className="text-amber-700 font-semibold">Founder & Solo Developer</p>
                  <p className="text-sm text-gray-600">Software Developer • {import.meta.env.VITE_FOUNDER_DEGREE} Graduate • {import.meta.env.VITE_FOUNDER_AGE} Years Old</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-gray-900">What {import.meta.env.VITE_FOUNDER_NAME.split(' ')[0]} Does:</strong> Everything. Literally everything.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { emoji: '🔍', label: 'Job Curation', desc: `Scans ${import.meta.env.VITE_TOTAL_COMPANIES_TRACKED}+ companies daily, verifies every posting, and updates listings manually` },
                    { emoji: '💻', label: 'Platform Development', desc: 'Codes, designs, and maintains the entire DevCareers platform from scratch' },
                    { emoji: '📹', label: 'Content Creation', desc: 'Creates YouTube videos, writes newsletters, posts on LinkedIn and WhatsApp' },
                    { emoji: '💬', label: 'User Support', desc: 'Responds to every email, resolves issues, and provides personalized guidance' },
                    { emoji: '📚', label: 'Resource Creation', desc: `Curates and creates ${import.meta.env.VITE_TOTAL_RESOURCES}+ educational resources for students` },
                    { emoji: '📊', label: 'Everything Else', desc: 'Accounting, planning, marketing, analytics — all handled solo' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-amber-700 mb-2">{item.emoji} {item.label}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-4 mt-4">
                  <p className="text-center font-semibold text-amber-900">
                    ⏰ Spends <strong>{import.meta.env.VITE_FOUNDER_DAILY_HOURS}+ hours daily</strong> maintaining and growing DevCareers while building solutions
                    that genuinely help students succeed.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-center">
              This is a <strong className="text-gray-900">passion project</strong> built by someone who believes in the
              power of accessible information. {import.meta.env.VITE_FOUNDER_NAME} is currently operating as a solo developer, but as DevCareers grows
              and reaches sustainability, the plan is to acquire a proper domain and potentially expand the team.
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
              desc={`We scan ${import.meta.env.VITE_TOTAL_COMPANIES_TRACKED}+ companies daily across their career pages, LinkedIn, and job boards to bring you the latest internships and entry-level roles in tech, product, design, marketing, and business — all in one centralized platform. No more endless searching!`}
              color="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200"
              headColor="text-blue-900"
            />
            <IconFeatureCard
              icon="📚"
              title="Educational Resources"
              desc={`Access ${import.meta.env.VITE_TOTAL_RESOURCES}+ curated resources including SQL guides, DSA cheat sheets, system design primers, resume templates, and interview prep materials. Over ${import.meta.env.VITE_FREE_RESOURCES_PERCENT}% are completely free, and premium resources are priced affordably (₹${import.meta.env.VITE_PREMIUM_PRICE_MIN}-₹${import.meta.env.VITE_PREMIUM_PRICE_MAX}) to ensure accessibility.`}
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
              desc={`Join a community of ${import.meta.env.VITE_MONTHLY_USERS}+ ambitious students and early professionals. Share experiences, ask questions, and support each other through the job hunt. We're in this together!`}
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
              { number: '01', title: 'Accessibility for All', description: `We believe opportunities should be accessible to everyone, regardless of college ranking, location, or socioeconomic background. That's why we offer over ${import.meta.env.VITE_FREE_RESOURCES_PERCENT}% of our resources completely free and keep premium resources affordable (₹${import.meta.env.VITE_PREMIUM_PRICE_MIN}-₹${import.meta.env.VITE_PREMIUM_PRICE_MAX}). No paywalls, no gatekeeping.`, color: 'bg-blue-500' },
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
          <SectionHeading title="Why Students Trust Dev Careers" />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '✅', title: 'Verified Opportunities Only', desc: 'Every job posting is manually verified for legitimacy before being listed' },
              { icon: '🔄', title: 'Daily Updates', desc: `Fresh opportunities added every single day from ${import.meta.env.VITE_TOTAL_COMPANIES_TRACKED}+ companies` },
              { icon: '🎁', title: `${import.meta.env.VITE_FREE_RESOURCES_PERCENT}% Free Resources`, desc: `Over half our educational materials are completely free to access` },
              { icon: '🚀', title: 'No Registration Required', desc: 'Browse jobs without creating an account (optional for email alerts)' },
              { icon: '📱', title: 'Mobile-Friendly', desc: 'Access jobs and resources seamlessly from any device, anywhere' },
              { icon: '⚡', title: 'Fast & Simple', desc: 'Clean interface, no clutter, no ads — just opportunities and resources' },
              { icon: '💰', title: 'Affordable Premium Content', desc: `Premium resources priced at ₹${import.meta.env.VITE_PREMIUM_PRICE_MIN}-₹${import.meta.env.VITE_PREMIUM_PRICE_MAX} to ensure accessibility for all` },
              { icon: '🛡️', title: 'Privacy Respected', desc: 'Your data is never sold or shared with third parties' },
              { icon: '💬', title: 'Responsive Support', desc: `Get help within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN}-${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MAX} hours via email or contact form` },
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
        <Impact/>


        {/* Our Commitment */}
        <section className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12">
          <SectionHeading title="Our Commitment to You" />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '✅', title: 'Accurate Information', description: 'We verify every job posting and update listings regularly. If a role is filled or expired, we remove it promptly.' },
              { icon: '🔒', title: 'Data Privacy', description: 'Your personal information is sacred. We never sell your data to third parties and use industry-standard encryption to protect it.' },
              { icon: '📧', title: 'Responsive Support', description: `We respond to every email and resolve issues within ${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN}-${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MAX} hours. Real humans, real responses — no bots, no auto-replies.` },
              { icon: '📋', title: 'Quality Resources', description: "Every resource we publish is reviewed for accuracy, clarity, and usefulness. We don't publish filler content just to increase numbers." },
              { icon: '✔️', title: 'Transparency', description: "We're open about how we operate, what data we collect, and how we make money. No hidden agendas, no fine print tricks." },
              { icon: '👥', title: 'Community First', description: "We actively listen to feedback and implement suggestions. You shape our roadmap — we're building this for you, with you." },
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
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Premium Educational Resources
              </h3>
              <p className="text-gray-700">
                We offer <strong>{import.meta.env.VITE_TOTAL_RESOURCES}+ resources</strong> ({import.meta.env.VITE_FREE_RESOURCES_PERCENT}% free, {100 - import.meta.env.VITE_FREE_RESOURCES_PERCENT}% premium) priced affordably from
                <strong> Free to ₹{import.meta.env.VITE_PREMIUM_PRICE_MAX}</strong>. Premium resources help cover server costs, content creation, and
                platform maintenance while keeping everything accessible for students.
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                What's Coming Next
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Razorpay Integration:</strong> Currently implementing direct payment processing through Razorpay
                for a seamless checkout experience. This will replace the current Topmate links.
              </p>
              <p className="text-gray-700">
                <strong>Future Plans:</strong> Once we reach sustainability, we'll introduce non-intrusive ads to cover
                server costs and enable better scalability. We'll also acquire a proper <strong>{import.meta.env.VITE_FUTURE_DOMAIN}</strong> domain
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
              <strong>{import.meta.env.VITE_FREE_RESOURCES_PERCENT}% of resources are completely free</strong> to ensure accessibility. DevCareers is built
              to help you succeed, not to profit off your struggles. This is a passion project funded by affordable
              premium resources, with plans to add ethical monetization as we grow.
            </p>
          </div>
        </section>

        {/* Testimonials/Success Stories */}
        <Testimonials/>

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
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Us a Message
            </a>
            <a
              href="/subscribe-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors border-2 border-white shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Subscribe for Weekly Updates
            </a>
          </div>

          <ContactInfoBox
            variant="dark"
            altEmail={import.meta.env.VITE_RECIPIENT_ALTERNATE_EMAIL}
            responseTime={`${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MIN}-${import.meta.env.VITE_SUPPORT_RESPONSE_TIME_MAX} hours`}
            note={`Solo-operated by ${import.meta.env.VITE_FOUNDER_NAME} • ${import.meta.env.VITE_FOUNDER_DAILY_HOURS}+ hours daily dedication`}
          />
        </section>

      </div>
    </div>
  )
}

export default About_us