import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// Eager — on every page
import Header      from './components/common/Header'
import Header1     from './components/common/Header1'
import ScrollToTop from './components/common/ScrollToTop'
import Footer      from './components/common/Footer'
import PageLoader  from './pages/PageLoader'
import PackageDetailPage from './components/resource/PackageDetailPage'

// Lazy — Quick Links
const Home        = lazy(() => import('./pages/Home'))
const SubscribeUs = lazy(() => import('./pages/Subscribe_us'))
const Resources   = lazy(() => import('./pages/Resources'))
const Packages    = lazy(() => import('./pages/PackageResources'))

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

// ─── Error Boundary — shows exact error message in UI during dev ───────────
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('🔴 ErrorBoundary caught:', error, info.componentStack)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 24px', maxWidth: 640, margin: '60px auto',
          fontFamily: 'monospace', background: '#fff1f1',
          border: '1px solid #fca5a5', borderRadius: 12,
        }}>
          <h2 style={{ color: '#dc2626', marginBottom: 12 }}>
            ⚠️ Component Error
          </h2>
          <pre style={{
            fontSize: 13, color: '#7f1d1d', whiteSpace: 'pre-wrap',
            wordBreak: 'break-word', lineHeight: 1.6,
          }}>
            {this.state.error?.message}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: 16, padding: '8px 20px',
              background: '#dc2626', color: '#fff',
              border: 'none', borderRadius: 8, cursor: 'pointer',
              fontWeight: 600, fontSize: 13,
            }}
          >
            Retry
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
// ──────────────────────────────────────────────────────────────────────────

const App = () => {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-WEDNMH34VY', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return (
    <div>
      <Header1 />
      <Header />
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            
            <Route path="/"                                        element={<Home />}                     />
            <Route path="/company-details"                         element={<Companies_details />}        />
            <Route path="/company-details/:companyName/:role"      element={<Companies_details />}        />
            <Route path="/resource/:id"                            element={<ResourceDetailToPurchase />} />
            <Route path="/resources"                               element={<Resources />}                />
            <Route path="/resources/packages"                      element={<Packages />}                 />
            <Route path="/resources/packages/:id"                  element={<PackageDetailPage />} />
            <Route path="/contact-us"                              element={<Contact_us />}               />
            <Route path="/subscribe-us"                            element={<SubscribeUs />}              />
            <Route path="/purchase-query"                          element={<PurchaseQueryPage />}        />
            <Route path="/about-us"                                element={<About_us />}                 />
            <Route path="/privacy-policy"                          element={<Privacy_policy />}           />
            <Route path="/terms-and-conditions"                    element={<Terms_and_conditions />}     />
            <Route path="/disclaimer"                              element={<Disclaimer />}               />
            <Route path="/advertise-with-us"                       element={<Advertise_with_us />}        />
            <Route path="/partnership"                             element={<Partnership />}              />
            <Route path="*"                                        element={<NotFound />}                 />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App