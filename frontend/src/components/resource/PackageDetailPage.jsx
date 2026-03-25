// src/components/resource/PackageDetailPage.jsx
//
// Route: /resources/packages/:id
// Add to App.jsx:
//   import PackageDetailPage from './components/resource/PackageDetailPage'
//   <Route path="/resources/packages/:id" element={<PackageDetailPage />} />

import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import packagesData from '../../data/resourceData/packagesData'
import ResourcesData from '../../data/resourceData/resourceData'
import PaymentButton from './PaymentButton'
import { notifyPurchase } from '../../services/notifyService'
import HelpCTA from '../common/HelpCTA'
import DriveLinkBanner from './DriveLinkBanner'

// ─── helpers ────────────────────────────────────────────────────────────────

const getResourceById = (id) => ResourcesData.find((r) => r.id === id) ?? null

const parseLines = (str = '') =>
  str.split('\n').map((l) => l.trim()).filter(Boolean)

/** Pick `n` random items from an array without repeats */
const pickRandom = (arr, n) => {
  const copy = [...arr]
  const result = []
  while (result.length < n && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length)
    result.push(copy.splice(idx, 1)[0])
  }
  return result
}

// ─── RazorpayBadge ───────────────────────────────────────────────────────────

const RazorpayBadge = () => (
  <a
    href="https://razorpay.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: '#f0fdf4', color: '#15803d',
      fontSize: 11, fontWeight: 700,
      padding: '5px 12px', borderRadius: 100,
      border: '1px solid #bbf7d0',
      textDecoration: 'none',
      letterSpacing: '0.02em',
    }}
  >
    <svg width={11} height={11} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    Verified by Razorpay
  </a>
)

// ─── Image Carousel ──────────────────────────────────────────────────────────

const ImageCarousel = ({ images = [], title = '' }) => {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragDelta, setDragDelta] = useState(0)
  const trackRef = useRef(null)
  const total = images.length

  const go = useCallback((idx) => {
    setCurrent(((idx % total) + total) % total)
  }, [total])

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowLeft') go(current - 1)
      if (e.key === 'ArrowRight') go(current + 1)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [current, go])

  const onPointerDown = (e) => {
    setDragging(true)
    setStartX(e.clientX ?? e.touches?.[0]?.clientX ?? 0)
    setDragDelta(0)
    trackRef.current?.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!dragging) return
    setDragDelta((e.clientX ?? e.touches?.[0]?.clientX ?? 0) - startX)
  }
  const onPointerUp = () => {
    if (dragging) {
      if (dragDelta < -50) go(current + 1)
      else if (dragDelta > 50) go(current - 1)
    }
    setDragging(false)
    setDragDelta(0)
  }

  if (!total) return null

  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      {/* Main image */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{
          position: 'relative',
          borderRadius: 20,
          overflow: 'hidden',
          background: 'linear-gradient(135deg,#fff8f5,#fafaf9)',
          border: '1px solid rgba(249,115,22,0.12)',
          aspectRatio: '4/3',
          cursor: dragging ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: idx === current ? 1 : 0,
              transform: `translateX(${idx === current ? dragDelta * 0.4 : 0}px)`,
              transition: dragging ? 'none' : 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)',
              pointerEvents: idx === current ? 'auto' : 'none',
            }}
          >
            <img
              src={src}
              alt={`${title} preview ${idx + 1}`}
              style={{
                width: '100%', height: '100%',
                objectFit: 'contain', padding: 16,
                pointerEvents: 'none',
              }}
              draggable={false}
            />
          </div>
        ))}

        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); go(current - 1) }}
              style={{
                position: 'absolute', left: 10, top: '50%',
                transform: 'translateY(-50%)',
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 2, transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#fff'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.92)'}
            >
              <svg width={14} height={14} fill="none" stroke="#374151" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(current + 1) }}
              style={{
                position: 'absolute', right: 10, top: '50%',
                transform: 'translateY(-50%)',
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 2, transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#fff'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.92)'}
            >
              <svg width={14} height={14} fill="none" stroke="#374151" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {total > 1 && (
          <div style={{
            position: 'absolute', bottom: 12, right: 12,
            background: 'rgba(0,0,0,0.5)',
            color: '#fff', fontSize: 11, fontWeight: 600,
            padding: '3px 9px', borderRadius: 100,
            backdropFilter: 'blur(4px)',
          }}>
            {current + 1} / {total}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div style={{
          display: 'flex', gap: 8, marginTop: 10,
          overflowX: 'auto', paddingBottom: 4,
          scrollbarWidth: 'none',
        }}>
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              style={{
                flexShrink: 0, width: 56, height: 56,
                borderRadius: 10, overflow: 'hidden',
                border: idx === current ? '2px solid #f97316' : '2px solid transparent',
                background: '#f5f5f5', cursor: 'pointer', padding: 0,
                transition: 'border-color 0.2s, transform 0.2s',
                transform: idx === current ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Why You Should Buy This ─────────────────────────────────────────────────

// const WhyShouldBuy = ({ resources }) => {
//   // For each resource, parse shouldYouBuyFor lines and pick 2 random ones
//   const points = resources.flatMap((resource) => {
//     const lines = parseLines(resource.shouldYouBuyFor ?? '')
//     const picked = pickRandom(lines, Math.min(4))
//     return picked.map((point) => ({
//       point,
//       resourceTitle: resource.title,
//       resourceImage: resource.image ?? null,
//     }))
//   })

//   if (points.length === 0) return null

//   return (
//     <div>
//       <h2 style={{
//         fontSize: 12, fontWeight: 700, color: '#6b7280',
//         letterSpacing: '0.08em', textTransform: 'uppercase',
//         marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8,
//       }}>
//         <span style={{
//           width: 7, height: 7, borderRadius: '50%',
//           background: '#f97316', flexShrink: 0, display: 'inline-block',
//         }} />
//         Why You Should Buy This
//       </h2>

//       <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//         {points.map(({ point, resourceTitle, resourceImage }, idx) => (
//           <div
//             key={idx}
//             style={{
//               display: 'flex', alignItems: 'flex-start', gap: 12,
//               background: idx % 2 === 0 ? 'linear-gradient(135deg,#fff8f5,#fff)' : '#fafaf9',
//               border: '1px solid rgba(249,115,22,0.1)',
//               borderRadius: 14,
//               padding: '12px 14px',
//             }}
//           >
//             {/* Orange check circle */}
//             <div style={{
//               width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
//               background: 'rgba(249,115,22,0.1)',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               marginTop: 1,
//             }}>
//               <svg width={10} height={10} fill="none" stroke="#f97316" strokeWidth={3} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//               </svg>
//             </div>

//             <div style={{ flex: 1, minWidth: 0 }}>
//               {/* The benefit point */}
//               <p style={{
//                 fontSize: 13, color: '#1f2937', lineHeight: 1.55,
//                 margin: '0 0 6px', fontWeight: 500,
//               }}>
//                 {point}
//               </p>

//               {/* Source tag: tiny thumbnail + resource name */}
//               {/* <div style={{
//                 display: 'inline-flex', alignItems: 'center', gap: 5,
//                 background: '#f3f4f6', borderRadius: 100,
//                 padding: '2px 8px 2px 4px',
//               }}>
//                 {resourceImage && (
//                   <div style={{
//                     width: 16, height: 16, borderRadius: '50%',
//                     overflow: 'hidden', flexShrink: 0,
//                     border: '1px solid #e5e7eb', background: '#fff',
//                   }}>
//                     <img
//                       src={resourceImage}
//                       alt=""
//                       style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//                     />
//                   </div>
//                 )}
//                 <span style={{
//                   fontSize: 10, fontWeight: 600, color: '#9ca3af',
//                   whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 180,
//                 }}>
//                   {resourceTitle}
//                 </span>
//               </div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
const WhyShouldBuy = ({ resources, minPoints = 4, maxPoints = 7 }) => {
  // Step 1: collect ALL points
  const allPoints = resources.flatMap((resource) => {
    const lines = parseLines(resource.shouldYouBuyFor ?? '')

    return lines.map((point) => ({
      point,
      resourceTitle: resource.title,
      resourceImage: resource.image ?? null,
    }))
  })

  if (allPoints.length === 0) return null

  // Step 2: shuffle all points
  const shuffled = [...allPoints].sort(() => Math.random() - 0.5)

  // Step 3: pick random count between min & max
  const randomCount =
    Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints

  const totalToShow = Math.min(randomCount, allPoints.length)

  const points = shuffled.slice(0, totalToShow)

  return (
    <div>
      <h2
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: '#6b7280',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#f97316',
            flexShrink: 0,
            display: 'inline-block',
          }}
        />
        Why You Should Buy This
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {points.map(({ point, resourceTitle, resourceImage }, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              background:
                idx % 2 === 0
                  ? 'linear-gradient(135deg,#fff8f5,#fff)'
                  : '#fafaf9',
              border: '1px solid rgba(249,115,22,0.1)',
              borderRadius: 14,
              padding: '12px 14px',
            }}
          >
            {/* Orange check circle */}
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                flexShrink: 0,
                background: 'rgba(249,115,22,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 1,
              }}
            >
              <svg
                width={10}
                height={10}
                fill="none"
                stroke="#f97316"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Benefit point */}
              <p
                style={{
                  fontSize: 13,
                  color: '#1f2937',
                  lineHeight: 1.55,
                  margin: '0 0 6px',
                  fontWeight: 500,
                }}
              >
                {point}
              </p>

              {/* Optional source tag (kept commented like yours) */}
              {/*
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: '#f3f4f6', borderRadius: 100,
                padding: '2px 8px 2px 4px',
              }}>
                {resourceImage && (
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%',
                    overflow: 'hidden', flexShrink: 0,
                    border: '1px solid #e5e7eb', background: '#fff',
                  }}>
                    <img
                      src={resourceImage}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                )}
                <span style={{
                  fontSize: 10, fontWeight: 600, color: '#9ca3af',
                  whiteSpace: 'nowrap', overflow: 'hidden',
                  textOverflow: 'ellipsis', maxWidth: 180,
                }}>
                  {resourceTitle}
                </span>
              </div>
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
// ─── Included Resources accordion ────────────────────────────────────────────

const ResourceAccordionItem = ({ resource, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  const bodyRef = useRef(null)
  const [height, setHeight] = useState(defaultOpen ? 'auto' : 0)

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0)
    }
  }, [open])

  const bullets = parseLines(resource.longDescription)

  return (
    <div style={{
      borderRadius: 14,
      border: open ? '1px solid rgba(249,115,22,0.25)' : '1px solid #f3f4f6',
      overflow: 'hidden',
      transition: 'border-color 0.25s',
      background: '#fff',
    }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          gap: 12, padding: '14px 16px', border: 'none',
          cursor: 'pointer', textAlign: 'left',
          background: open ? 'linear-gradient(135deg,#fff8f5,#fff)' : '#fafaf9',
          transition: 'background 0.2s',
        }}
      >
        {resource.image && (
          <div style={{
            width: 44, height: 44, borderRadius: 10, overflow: 'hidden',
            flexShrink: 0, border: '1px solid #f3f4f6', background: '#fff',
          }}>
            <img
              src={resource.image}
              alt={resource.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }}
            />
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13, fontWeight: 700,
            color: open ? '#ea580c' : '#1f2937',
            lineHeight: 1.3, transition: 'color 0.2s',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {resource.title}
          </div>
          {resource.price && (
            <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2, fontWeight: 500 }}>
              Individual price: <span style={{ color: '#f97316' }}>{resource.price}</span>
            </div>
          )}
        </div>

        <div style={{
          width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
          background: open ? '#f97316' : '#f3f4f6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, transform 0.3s',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          <svg width={11} height={11} fill="none" stroke={open ? '#fff' : '#6b7280'} strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div style={{
        height: typeof height === 'number' ? `${height}px` : height,
        transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1)',
        overflow: 'hidden',
      }}>
        <div ref={bodyRef}>
          {bullets.length > 0 ? (
            <ul style={{
              margin: 0, padding: '4px 16px 14px 16px',
              listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              {bullets.map((line, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                    background: 'rgba(249,115,22,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width={8} height={8} fill="none" stroke="#f97316" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{line}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ padding: '4px 16px 14px', fontSize: 13, color: '#9ca3af' }}>
              {resource.description || 'No details available.'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const WhatsIncluded = ({ resources }) => (
  <div>
    <h2 style={{
      fontSize: 12, fontWeight: 700, color: '#6b7280',
      letterSpacing: '0.08em', textTransform: 'uppercase',
      marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f59e0b', flexShrink: 0, display: 'inline-block' }} />
      What's Included ({resources.length} resources)
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {resources.map((r, idx) => (
        <ResourceAccordionItem key={r.id} resource={r} defaultOpen={idx === 0} />
      ))}
    </div>
  </div>
)

// ─── Price Card ──────────────────────────────────────────────────────────────

const PriceCard = ({ pkg, onSuccess, onError }) => {
  const numericPrice = pkg.discountedPrice ?? 0
  const savings = pkg.savings ? pkg.originalPrice - pkg.discountedPrice : 0

  return (
    <div style={{
      borderRadius: 20, overflow: 'hidden',
      background: 'linear-gradient(135deg,#fff8f0,#fff)',
      border: '1px solid rgba(249,115,22,0.2)',
      boxShadow: '0 4px 24px rgba(249,115,22,0.08)',
    }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg,#f97316,#ea580c,#ff8c42)' }} />

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Price row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <p style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>
              Package Price
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 38, fontWeight: 900, color: '#f97316', letterSpacing: '-0.04em', lineHeight: 1 }}>
                ₹{numericPrice}
              </span>
              {pkg.originalPrice && (
                <span style={{ fontSize: 16, color: '#d1d5db', textDecoration: 'line-through', fontWeight: 500 }}>
                  ₹{pkg.originalPrice}
                </span>
              )}
            </div>
            {savings > 0 && (
              <span style={{
                display: 'inline-block', marginTop: 4,
                fontSize: 11, fontWeight: 700, color: '#16a34a',
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.2)',
                padding: '2px 8px', borderRadius: 100,
              }}>
                You save ₹{savings}
              </span>
            )}
          </div>
          <RazorpayBadge />
        </div>

        {/* Validity */}
        {pkg.expDate && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#fef3c7', border: '1px solid #fde68a',
            borderRadius: 10, padding: '8px 12px',
          }}>
            <svg width={14} height={14} fill="none" stroke="#d97706" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#92400e' }}>
              Offer valid till <span style={{ color: '#dc2626' }}>{pkg.expDate}</span>
            </span>
          </div>
        )}

        {/* Payment button */}
        <PaymentButton
          amount={numericPrice}
          resourceTitle={pkg.title}
          resourceId={pkg.id}
          driveLink={pkg.driveLink}
          onSuccess={onSuccess}
          onError={onError}
        />

        {/* Security note */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: 8,
          background: '#f0fdf4', borderRadius: 12,
          padding: '10px 12px', border: '1px solid #bbf7d0',
        }}>
          <svg width={15} height={15} fill="currentColor" style={{ color: '#16a34a', flexShrink: 0, marginTop: 1 }} viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <p style={{ fontSize: 11, color: '#374151', lineHeight: 1.5, margin: 0 }}>
            Secure payment powered by Razorpay. Your information is encrypted and safe.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

function PackageDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [pkg, setPkg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [purchasedLink, setPurchasedLink] = useState(null)
  const [buyerName, setBuyerName] = useState('')

  useEffect(() => {
    const found = packagesData.find((p) => p.id === id)
    if (found) setPkg(found)
    setLoading(false)
    window.scrollTo(0, 0)
  }, [id])

  const handlePaymentSuccess = (result) => {
    const purchases = JSON.parse(localStorage.getItem('purchases') || '[]')
    purchases.push({
      resourceId: pkg.id,
      resourceTitle: pkg.title,
      amount: pkg.discountedPrice,
      purchaseDate: new Date().toISOString(),
      paymentId: result.paymentId,
      orderId: result.orderId,
    })
    localStorage.setItem('purchases', JSON.stringify(purchases))

    notifyPurchase({
      resourceId: pkg.id,
      resourceTitle: pkg.title,
      buyerName: result.userName || '',
      buyerEmail: result.userEmail || '',
      amount: pkg.discountedPrice,
    }).catch((err) => console.error('EmailJS notify failed:', err))

    setBuyerName(result.userName || '')
    setPurchasedLink(result.driveLink || pkg.driveLink)
    setTimeout(() => {
      document.getElementById('drive-link-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 300)
  }

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error)
    alert(`Payment failed: ${error}. Please try again.`)
  }

  // ── loading ────────────────────────────────────────────────────────────────
  if (loading) return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#fafaf9',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        border: '2px solid #fed7aa', borderTopColor: '#f97316',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )

  // ── not found ──────────────────────────────────────────────────────────────
  if (!pkg) return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#fafaf9', padding: 24,
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: '#fff7ed', border: '1px solid #fed7aa',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          <svg width={36} height={36} fill="none" stroke="#fb923c" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111', marginBottom: 8 }}>Package Not Found</h2>
        <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 24 }}>
          The package you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/resources/packages')}
          style={{
            padding: '10px 24px', color: '#fff', fontSize: 14, fontWeight: 700,
            borderRadius: 100, border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg,#f97316,#ea580c)',
            boxShadow: '0 4px 14px rgba(249,115,22,0.3)',
          }}
        >
          Back to Packages
        </button>
      </div>
    </div>
  )

  // ── resolve included resources ─────────────────────────────────────────────
  const includedResources = (pkg.includedResourceIds ?? [])
    .map(getResourceById)
    .filter(Boolean)

  const galleryImages = pkg.images?.length
    ? pkg.images
    : includedResources.map((r) => r.image).filter(Boolean)

  const discountPct = pkg.originalPrice && pkg.discountedPrice
    ? Math.round(((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100)
    : 0

  return (
    <>
      <style>{`
        @keyframes pkgOrbFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-18px) scale(1.03)} }
        @keyframes pkgShimmer { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes spin { to { transform: rotate(360deg) } }
        @media (max-width: 640px) {
          .pkg-mobile-title { display: block !important; }
          .pkg-desktop-right { display: none !important; }
          .pkg-mobile-price { display: block !important; }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#fafaf9',
        fontFamily: 'system-ui,-apple-system,sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ambient orbs */}
        <div style={{
          position: 'absolute', width: 420, height: 420, borderRadius: '50%',
          background: '#f97316', filter: 'blur(100px)', opacity: 0.06,
          top: -130, right: -100, animation: 'pkgOrbFloat 10s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: '#10b981', filter: 'blur(90px)', opacity: 0.05,
          bottom: 80, left: -80, animation: 'pkgOrbFloat 13s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: 1080, margin: '0 auto',
          padding: '32px 16px 60px',
          position: 'relative', zIndex: 2,
        }}>

          {/* Back button */}
          <button
            onClick={() => navigate('/resources/packages')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontWeight: 700, color: '#f97316',
              background: 'none', border: 'none', cursor: 'pointer',
              marginBottom: 24, padding: 0, transition: 'gap 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.gap = '12px'}
            onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            <svg width={15} height={15} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Packages
          </button>

          {/* Drive Link Banner — shown after successful payment */}
          {purchasedLink && <DriveLinkBanner purchasedLink={purchasedLink} buyerName={buyerName} />}

          {/* Main card */}
          <div style={{
            borderRadius: 28, overflow: 'hidden',
            background: '#fff',
            border: '1px solid rgba(249,115,22,0.1)',
            boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          }}>
            {/* Shimmer top bar */}
            <div style={{
              height: 3,
              background: 'linear-gradient(90deg,#f97316,#ea580c,#ff8c42,#f97316)',
              backgroundSize: '200% auto',
              animation: 'pkgShimmer 3s linear infinite',
            }} />

            {/* Two-column grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            }}>

              {/* ── LEFT: carousel + why buy ── */}
              <div style={{
                padding: '28px 24px',
                borderRight: '1px solid #f3f4f6',
                display: 'flex', flexDirection: 'column', gap: 24,
              }}>

                {/* Mobile-only title */}
                <div style={{ display: 'none' }} className="pkg-mobile-title">
                  <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.02em', margin: 0 }}>
                    {pkg.title}
                  </h1>
                  {pkg.description && (
                    <p style={{ fontSize: 13, color: '#6b7280', marginTop: 6, lineHeight: 1.6 }}>
                      {pkg.description}
                    </p>
                  )}
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  {discountPct > 0 && (
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      background: 'rgba(249,115,22,0.08)',
                      border: '1px solid rgba(249,115,22,0.22)',
                      color: '#c2410c',
                      fontSize: 10, fontWeight: 800,
                      letterSpacing: '0.07em', textTransform: 'uppercase',
                      padding: '4px 10px', borderRadius: 100,
                    }}>
                      <svg width={8} height={8} viewBox="0 0 10 10" fill="#f97316">
                        <polygon points="5,0 6.2,3.8 10,3.8 7,6.1 8.1,10 5,7.6 1.9,10 3,6.1 0,3.8 3.8,3.8" />
                      </svg>
                      {discountPct}% OFF
                    </span>
                  )}
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    background: '#eff6ff', border: '1px solid #bfdbfe',
                    color: '#1d4ed8', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '4px 10px', borderRadius: 100,
                  }}>
                    <svg width={9} height={9} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    {includedResources.length} Resources
                  </span>
                </div>

                {/* Image carousel */}
                <ImageCarousel images={galleryImages} title={pkg.title} />

                {/* ── Why You Should Buy This ── */}
                <WhyShouldBuy resources={includedResources} />

                {/* Mobile: price card */}
                <div style={{ display: 'none' }} className="pkg-mobile-price">
                  <PriceCard
                    pkg={pkg}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
              </div>

              {/* ── RIGHT: title + what's included + price ── */}
              <div className="pkg-desktop-right" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>

                <div>
                  <h1 style={{
                    fontSize: 24, fontWeight: 800,
                    color: '#0a0a0a', letterSpacing: '-0.025em',
                    lineHeight: 1.2, margin: '0 0 8px',
                  }}>
                    {pkg.title}
                  </h1>
                  {pkg.description && (
                    <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65, margin: 0 }}>
                      {pkg.description}
                    </p>
                  )}
                </div>

                {/* What's included accordion */}
                <WhatsIncluded resources={includedResources} />

                {/* Price card pinned to bottom */}
                <div style={{ marginTop: 'auto' }}>
                  <PriceCard
                    pkg={pkg}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Help CTA */}
          <div style={{ marginTop: 24 }}>
            <HelpCTA />
          </div>

        </div>
      </div>
    </>
  )
}

export default PackageDetailPage