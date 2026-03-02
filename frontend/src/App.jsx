import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const ResourceDetailToPurchase = lazy(() => import('./components/resource/ResourceDetailToPurchase'))
const Companies_details = lazy(() => import('./pages/Companies_details'))

// import Companies_details from './pages/Companies_details'
// import ResourceDetailToPurchase from './components/resource/ResourceDetailToPurchase'
import Header from './components/common/Header'
import Header1 from './components/common/Header1'
import ScrollToTop from './components/common/ScrollToTop';
// import UnderMaintenance from './components/common/UnderMaintenance'
import Footer from './components/common/Footer'
import { Analytics } from "@vercel/analytics/react"

// Quick Links
import Home from './pages/Home'
import SubscribeUs from './pages/Subscribe_us'
import Resources from './pages/Resources'

// Legal Links
import Contact_us from './pages/Legal_Pages/Contact_us'
import Disclaimer from './pages/Legal_Pages/Disclaimer'
import PurchaseQueryPage from './pages/Legal_Pages/Purchase_query'
import About_us from './pages/Legal_Pages/About_us'
import Privacy_policy from './pages/Legal_Pages/Privacy_policy'
import Terms_and_conditions from './pages/Legal_Pages/Terms_and_conditions'

// Work with Us
import Advertise_with_us from './pages/Work_with_us/Advertise_with_us'
import Partnership from './pages/Work_with_us/Partnership'


const App = () => {
  return (

    <div>
      <Header1 />
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/company-details" element={<Companies_details />} />
          <Route
            path="/company-details/:companyName/:role"
            element={<Companies_details />}
          />

          {/* <Route path="/company-details" element={<UnderMaintenance />} /> */}
          <Route path="/resource/:id" element={<ResourceDetailToPurchase />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/contact-us" element={<Contact_us />} />

          <Route path="/subscribe-us" element={<SubscribeUs />} />
          <Route path='/purchase-query' element={<PurchaseQueryPage />} />

          <Route path='/about-us' element={<About_us/>}/>
          <Route path='/privacy-policy' element={<Privacy_policy/>}/>
          <Route path='/terms-and-conditions' element={<Terms_and_conditions/>}/>
          <Route path="/disclaimer" element={<Disclaimer />} />

          <Route path='/advertise-with-us' element={<Advertise_with_us/>}/>
          <Route path='/partnership' element={<Partnership/>}/>
        </Routes>
      </Suspense>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
