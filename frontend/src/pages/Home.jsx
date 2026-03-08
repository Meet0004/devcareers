import React from 'react'
import Footer from '../components/common/Footer'
import StatsCounter from '../components/home/StatsCounter'
import Hero from '../components/home/Hero'
import NaukriCareerVerseBanner from '../components/common/NaukriCareerVerseBanner'
import Testimonials from '../components/common/Testimonials'
import Impact from '../components/common/Impact'
import Mission from '../components/common/Mission'
import LiveRolesTicker from '../components/home/LiveRolesTicker'
const Home = () => {
  return (
    <>
      <div className="min-h-screen  bg-gradient-to-b from-white to-orange-50">
        <Hero />

        <div className="sm:px-10 md:px-100 px-10">
          <NaukriCareerVerseBanner
            referralLink="https://www.naukri.com/campus/contests/career-fair-2026?action=enrol&referral=e2000084-rEKBRXA-pses&uapp=801&utm_source=share_desktop&utm_medium=referral"
          />
        </div>

        <div className="px-4 py-4 md:px-10 md:py-10 lg:px-36 lg:py-5">
          <Mission />
        </div>

        <LiveRolesTicker />
        <StatsCounter />


        <div className="px-4 py-4 md:px-10 md:py-10 lg:px-36 lg:py-5">
          <Impact />
        </div>
        <div className="px-4 py-4 md:px-10 md:py-10 lg:px-36 lg:py-5">
          <Testimonials />
        </div>
      </div>
    </>
  )
}

export default Home