import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ResourcesData from '../../data/resourceData/resourceData'
import PaymentButton from './PaymentButton'
import { notifyPurchase } from '../../services/notifyService'
import HelpCTA from '../common/HelpCTA'
import Faq from '../common/Faq'
import DriveLinkBanner from './DriveLinkBanner'
import NotFound from '../../pages/NotFound'
// ── Sub-components ────────────────────────────────────────────

const RazorpayBadge = () => (
  <a href="https://razorpay.com/" target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200 hover:bg-green-100 transition-colors"
  >
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    Verified by Razorpay
  </a>
)

const LevelBadges = ({ resource }) => (
  <div className="flex flex-wrap gap-2">
    {resource.isPlacementFocused && (
      <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
        Placement Focused
      </span>
    )}
    {resource.isAdvancedLevel && (
      <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-red-200">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Advanced Level
      </span>
    )}
  </div>
)

const WhatsIncluded = ({ resource }) => {
  const lines = (resource.longDescription ||
    `Complete ${resource.title} guide\nDetailed explanations and examples\nInterview questions and answers\nBest practices and tips\nReady to use templates\nPrintable PDF format`)
    .split('\n').filter(l => l.trim())

  return (
    <div>
      <h2 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2 uppercase tracking-wide">
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', flexShrink: 0 }} />
        What's Included
      </h2>
      <div className="rounded-2xl border border-orange-100 overflow-hidden" style={{ background: 'linear-gradient(135deg,#fffbeb,#fff)' }}>
        {lines.map((line, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-2.5 border-b border-orange-50 last:border-b-0">
            <div className="flex-shrink-0 mt-0.5" style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(249,115,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width={8} height={8} fill="none" stroke="#f97316" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 leading-relaxed">{line.trim()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const PriceCard = ({ resource, numericPrice, onSuccess, onError }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,#fff8f0,#fff)',
        border: '1px solid rgba(249,115,22,0.2)',
        boxShadow: '0 4px 24px rgba(249,115,22,0.08)',
      }}
    >
      <div style={{ height: 3, background: 'linear-gradient(90deg,#f97316,#ea580c,#ff8c42)' }} />
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-medium mb-0.5 uppercase tracking-wide">Price</p>
            <p className="text-4xl font-bold" style={{ color: '#f97316', letterSpacing: '-0.04em' }}>
              {resource.price}
            </p>
          </div>
          <RazorpayBadge />
        </div>
        <PaymentButton
          amount={numericPrice}
          resourceTitle={resource.title}
          resourceId={resource.id}
          driveLink={resource.link}
          onSuccess={onSuccess}
          onError={onError}
        />
        <div className="flex items-start gap-2 bg-green-50 rounded-xl px-3 py-2.5 border border-green-100">
          <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-gray-500 leading-relaxed">
            Secure payment powered by Razorpay. Your information is encrypted and safe.
          </p>
        </div>
      </div>
    </div>
  )
}

const WhyBuyCard = ({ buyReasons }) => {
  if (!buyReasons.length) return null
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#eff6ff,#fff)', border: '1px solid #bfdbfe' }}
    >
      <div className="px-5 py-3 border-b border-blue-100 flex items-center gap-2">
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
        <h3 className="text-xs font-bold text-blue-800 uppercase tracking-wide">Why Should You Buy This?</h3>
      </div>
      <div className="p-4 space-y-2.5">
        {buyReasons.map((reason, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5" style={{ width: 18, height: 18, borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width={9} height={9} fill="none" stroke="#3b82f6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-blue-900 leading-relaxed">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const CopiesSoldCard = ({ resource }) => {
  const show = resource.copiesSold && resource.copiesSold !== '' && resource.copiesSold !== 0
  if (!show) return null
  return (
    <div className="flex items-center gap-4 rounded-2xl p-4 border border-green-200" style={{ background: 'linear-gradient(135deg,#f0fdf4,#fff)' }}>
      <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#dcfce7' }}>
        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400 font-medium">Copies Sold</p>
        <p className="text-2xl font-bold text-green-700" style={{ letterSpacing: '-0.03em' }}>{resource.copiesSold}+</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">Trusted by</p>
        <p className="text-sm font-semibold text-gray-700">Students & Pros</p>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────

function ResourceDetailToPurchase() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [resource, setResource] = useState(null)
  const [loading, setLoading] = useState(true)
  const [purchasedLink, setPurchasedLink] = useState(null)
  const [buyerName, setBuyerName] = useState('')

  useEffect(() => {
    const found = ResourcesData.find(r => r.id === parseInt(id))
    if (found) setResource(found)
    setLoading(false)
    window.scrollTo(0, 0)
  }, [id])

  const handlePaymentSuccess = (result) => {
    const purchases = JSON.parse(localStorage.getItem('purchases') || '[]')
    purchases.push({
      resourceId: resource.id,
      resourceTitle: resource.title,
      amount: parseFloat(resource.price.replace(/[^0-9.]/g, '')),
      purchaseDate: new Date().toISOString(),
      paymentId: result.paymentId,
      orderId: result.orderId,
    })
    localStorage.setItem('purchases', JSON.stringify(purchases))
    notifyPurchase({
      resourceId: resource.id,
      resourceTitle: resource.title,
      buyerName: result.userName || '',
      buyerEmail: result.userEmail || '',
      amount: parseFloat(resource.price.replace(/[^0-9.]/g, '')),
    }).catch(err => console.error('EmailJS notify failed:', err))
    setBuyerName(result.userName || '')
    setPurchasedLink(result.driveLink || resource.link)
    setTimeout(() => {
      document.getElementById('drive-link-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 300)
  }

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error)
    alert(`Payment failed: ${error}. Please try again.`)
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#fafaf9' }}>
      <div className="animate-spin rounded-full h-10 w-10 border-2 border-orange-200" style={{ borderTopColor: '#f97316' }} />
    </div>
  )

  if (!resource) return (
    <NotFound />
  )

  const numericPrice = parseFloat(resource.price.replace(/[^0-9.]/g, ''))
  const buyReasons = Array.isArray(resource.shouldYouBuyFor)
    ? resource.shouldYouBuyFor
    : (resource.shouldYouBuyFor || '').split('\n').map(l => l.trim()).filter(Boolean)
  const paymentProps = { resource, numericPrice, onSuccess: handlePaymentSuccess, onError: handlePaymentError }

  return (
    <>
      <style>{`
        @keyframes rdpOrbFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.04)} }
        @keyframes rdpShimmer { 0%{background-position:0% center} 100%{background-position:200% center} }
      `}</style>

      {/*
        IMPORTANT: overflow must NOT be 'hidden' here — that breaks CSS sticky.
        The orbs are clipped with a wrapping div instead.
      */}
      <div className="min-h-screen" style={{ background: '#fafaf9', fontFamily: 'system-ui,-apple-system,sans-serif', position: 'relative' }}>

        {/* Orb clip wrapper — isolates overflow:hidden away from sticky context */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: '#ff6b00', filter: 'blur(90px)', opacity: 0.07, top: -120, right: -80, animation: 'rdpOrbFloat 9s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: '#ff9440', filter: 'blur(80px)', opacity: 0.06, bottom: 60, left: -60, animation: 'rdpOrbFloat 12s ease-in-out infinite reverse' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ position: 'relative', zIndex: 2 }}>

          {/* Back button */}
          <button
            onClick={() => navigate('/resources')}
            className="inline-flex items-center gap-2 text-sm font-semibold mb-6 transition-all"
            style={{ color: '#f97316' }}
            onMouseEnter={e => e.currentTarget.style.gap = '10px'}
            onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </button>

          {/* Drive Link Banner */}
          {purchasedLink && <DriveLinkBanner purchasedLink={purchasedLink} buyerName={buyerName} />}

          {/*
            Main Card
            — overflow is NOT hidden here (would break sticky)
            — rounded corners preserved via border-radius
            — the shimmer accent line gets its own border-radius to match
          */}
          <div
            className="rounded-3xl"
            style={{
              background: '#fff',
              border: '1px solid rgba(249,115,22,0.1)',
              boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
              
            }}
          > 
           
            {/* Top shimmer accent — manually rounded to match card */}
            {/* <div style={{
              height: 3,
              borderRadius: '24px 40px 0 0',
              background: 'linear-gradient(90deg,#f97316,#ea580c,#ff8c42,#f97316)',
              backgroundSize: '200% auto',
              animation: 'rdpShimmer 3s linear infinite',
            }} /> */}

            {/*
              Two-column layout using flex so each column is independently sized.
              align-items: start on the flex container is what allows sticky to work —
              without it the left col stretches to full height and sticky has nothing to scroll against.
            */}
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>

              {/* LEFT COLUMN — sticky with pure CSS */}
              <div
                style={{
                  width: '50%',
                  flexShrink: 0,
                  borderRight: '1px solid #f3f4f6',
                  position: 'sticky',
                  top: 54,         // adjust to your navbar height if needed
                  alignSelf: 'start',
                }}
                className="p-6 md:p-8 space-y-5"
              >
                {/* Mobile: Title + badges */}
                <div className="md:hidden space-y-2">
                  <h1 className="text-xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>{resource.title}</h1>
                  <LevelBadges resource={resource} />
                </div>

                {/* Image */}
                <div
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg,#fff8f5,#fafaf9)',
                    border: '1px solid rgba(249,115,22,0.1)',
                    height: (!resource.copiesSold || resource.copiesSold === '' || resource.copiesSold === 0) ? 440 : 340,
                  }}
                >
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-contain p-4" />

                  {/* Badges overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {resource.isPopular && (
                      <span className="inline-flex items-center gap-1 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        style={{ background: 'linear-gradient(135deg,#7c3aed,#6d28d9)' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        Popular
                      </span>
                    )}
                    {resource.isBestSeller && (
                      <span className="inline-flex items-center gap-1 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                        Best Seller
                      </span>
                    )}
                  </div>
                </div>

                {/* Copies sold */}
                <CopiesSoldCard resource={resource} />

                {/* Mobile: What's Included */}
                <div className="md:hidden"><WhatsIncluded resource={resource} /></div>

                {/* Why Buy */}
                <WhyBuyCard buyReasons={buyReasons} />

                {/* Mobile: Price */}
                <div className="md:hidden"><PriceCard {...paymentProps} /></div>
              </div>

              {/* RIGHT COLUMN — desktop only, scrolls naturally */}
              <div className="hidden md:flex flex-col p-8 space-y-6" style={{ width: '50%' }}>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-gray-900" style={{ letterSpacing: '-0.025em' }}>{resource.title}</h1>
                  <LevelBadges resource={resource} />
                </div>
                <WhatsIncluded resource={resource} />
                <div className="mt-auto">
                  <PriceCard {...paymentProps} />
                </div>
              </div>

            </div>
          </div>

          {/* FAQ + Help */}
          <div className="mt-6 space-y-4">
            <Faq />
            <HelpCTA />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResourceDetailToPurchase