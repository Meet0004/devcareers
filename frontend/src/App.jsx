import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Eager — on every page
import Header      from './components/common/Header'
import Header1     from './components/common/Header1'
import ScrollToTop from './components/common/ScrollToTop'
import Footer      from './components/common/Footer'
import PageLoader  from './pages/PageLoader'
import { Analytics } from "@vercel/analytics/react"

// Lazy — Quick Links
const Home        = lazy(() => import('./pages/Home'))
const SubscribeUs = lazy(() => import('./pages/Subscribe_us'))
const Resources   = lazy(() => import('./pages/Resources'))

// Lazy — Resource & Company
const ResourceDetailToPurchase = lazy(() => import('./components/resource/ResourceDetailToPurchase'))
const Companies_details        = lazy(() => import('./pages/Companies_details'))

// Lazy — Legal Links
const Contact_us           = lazy(() => import('./pages/Legal_Pages/Contact_us'))
const Disclaimer           = lazy(() => import('./pages/Legal_Pages/Disclaimer'))
const PurchaseQueryPage    = lazy(() => import('./pages/Legal_Pages/Purchase_query'))
const About_us             = lazy(() => import('./pages/Legal_Pages/About_us'))
const Privacy_policy       = lazy(() => import('./pages/Legal_Pages/Privacy_policy'))
const Terms_and_conditions = lazy(() => import('./pages/Legal_Pages/Terms_and_conditions'))

// Lazy — Work with Us
const Advertise_with_us = lazy(() => import('./pages/Work_with_us/Advertise_with_us'))
const Partnership       = lazy(() => import('./pages/Work_with_us/Partnership'))

// Lazy — 404
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <div>
      <Header1 />
      <Header />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                                        element={<Home />}                    />
          <Route path="/company-details"                         element={<Companies_details />}       />
          <Route path="/company-details/:companyName/:role"      element={<Companies_details />}       />
          <Route path="/resource/:id"                            element={<ResourceDetailToPurchase />}/>
          <Route path="/resources"                               element={<Resources />}               />
          <Route path="/contact-us"                             element={<Contact_us />}              />
          <Route path="/subscribe-us"                            element={<SubscribeUs />}             />
          <Route path="/purchase-query"                          element={<PurchaseQueryPage />}       />
          <Route path="/about-us"                                element={<About_us />}                />
          <Route path="/privacy-policy"                          element={<Privacy_policy />}          />
          <Route path="/terms-and-conditions"                    element={<Terms_and_conditions />}    />
          <Route path="/disclaimer"                              element={<Disclaimer />}              />
          <Route path="/advertise-with-us"                       element={<Advertise_with_us />}       />
          <Route path="/partnership"                             element={<Partnership />}             />
          <Route path="*"                                        element={<NotFound />}                />
        </Routes>
        <Footer />
      </Suspense>
      <Analytics />
    </div>
  )
}

export default App