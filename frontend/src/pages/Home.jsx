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

        <div className="px-7 py-4 md:px-12 md:py-10 lg:px-36 lg:py-5">
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