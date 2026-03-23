import { useState, useRef, useEffect } from 'react';
import ResourcesData from '../../data/resourceData/resourceData';
import packagesData from '../../data/resourceData/packagesData';

const getResourceById = (id) => ResourcesData.find((r) => r.id === id) ?? null;

const CheckIcon = () => (
  <svg width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

const ArrowIcon = () => (
  <svg width={15} height={15} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const ChevronIcon = ({ open }) => (
  <svg
    width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24"
    style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
)

const accents = [
  {
    from: '#f97316', to: '#ea580c',
    glow: 'rgba(249,115,22,0.18)',
    badge: 'rgba(249,115,22,0.08)',
    badgeBorder: 'rgba(249,115,22,0.22)',
    badgeText: '#c2410c',
  },
  {
    from: '#10b981', to: '#059669',
    glow: 'rgba(16,185,129,0.18)',
    badge: 'rgba(16,185,129,0.08)',
    badgeBorder: 'rgba(16,185,129,0.22)',
    badgeText: '#047857',
  },
]

const PackageCard = ({ pkg, index }) => {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const includedResources = (pkg.includedResourceIds ?? [])
    .map(getResourceById)
    .filter(Boolean)

  const discountPct = pkg.originalPrice
    ? Math.round((pkg.savings / pkg.originalPrice) * 100)
    : 0

  const accent = accents[index % accents.length]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      style={{
        borderRadius: 20,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'start',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
        flexShrink: 0,
      }} />

      <div style={{ padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Badge + expiry row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: accent.badge,
            border: `1px solid ${accent.badgeBorder}`,
            color: accent.badgeText,
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: 100,
          }}>
            <svg width={8} height={8} viewBox="0 0 10 10" fill={accent.from}>
              <polygon points="5,0 6.2,3.8 10,3.8 7,6.1 8.1,10 5,7.6 1.9,10 3,6.1 0,3.8 3.8,3.8" />
            </svg>
            {discountPct}% OFF
          </span>

          {pkg.expDate && (
            <span style={{ fontSize: 11, fontWeight: 400, color: '#9ca3af' }}>
              Valid till{' '}
              <span style={{ color: '#ef4444', fontWeight: 600 }}>{pkg.expDate}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 17, fontWeight: 800,
          color: '#0a0a0a', margin: '0 0 7px',
          letterSpacing: '-0.02em', lineHeight: 1.25,
        }}>
          {pkg.title ?? 'Package'}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 13, color: '#6b7280', lineHeight: 1.6,
          margin: '0 0 20px', fontWeight: 400,
          minHeight: 60,
        }}>
          {pkg.description ?? ''}
        </p>

        {/* Resource preview thumbnails */}
        {includedResources.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 20 }}>
            {includedResources.slice(0, 4).map((resource, idx) => (
              <div key={resource.id ?? idx} style={{
                width: 88, height: 88,
                borderRadius: 12,
                border: '1px solid #fff',
                overflow: 'hidden',
                marginLeft: idx === 0 ? 0 : -12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                zIndex: idx,
                position: 'relative',
                flexShrink: 0,
              }}>
                {resource.image ? (
                  <img
                    src={resource.image}
                    alt={resource.title ?? ''}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: accent.badge,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: accent.badgeText,
                  }}>
                    {(resource.title ?? '?')[0]}
                  </div>
                )}
              </div>
            ))}

            +{includedResources.length - 5}
          </div>
        )}{includedResources.length > 5 && (
          <div style={{
            width: 64, height: 64, borderRadius: 12,
            border: '2.5px solid #fff',
            background: accent.badge,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginLeft: -12, zIndex: 5, position: 'relative',
            fontSize: 11, fontWeight: 700, color: accent.badgeText, flexShrink: 0,
          }}>
            <span style={{ marginLeft: 14, fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>
              {includedResources.length} resource{includedResources.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(0,0,0,0.06)', margin: '0 0 18px' }} />

        {/* Pricing */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <span style={{
            fontSize: 30, fontWeight: 900,
            background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', letterSpacing: '-0.04em', lineHeight: 1,
          }}>
            ₹{pkg.discountedPrice ?? '—'}
          </span>
          {pkg.originalPrice && (
            <span style={{ fontSize: 15, fontWeight: 500, color: '#d1d5db', textDecoration: 'line-through' }}>
              ₹{pkg.originalPrice}
            </span>
          )}
          {pkg.originalPrice && pkg.discountedPrice && (
            <span style={{
              fontSize: 11, fontWeight: 700, color: '#16a34a',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.18)',
              padding: '3px 8px', borderRadius: 100,
            }}>
              Save ₹{pkg.originalPrice - pkg.discountedPrice}
            </span>
          )}
        </div>

        {/* CTA */}
        {pkg.link && (
          <a
            href={pkg.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, width: '100%', padding: '13px 0',
              background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
              color: '#fff', fontWeight: 700, fontSize: 14,
              borderRadius: 12, textDecoration: 'none',
              letterSpacing: '0.01em',
              boxShadow: `0 4px 16px ${accent.glow}`,
              transition: 'filter 0.2s ease, transform 0.15s ease',
              boxSizing: 'border-box',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.filter = 'brightness(1.07)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.filter = 'brightness(1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get Package Now
            <ArrowIcon />
          </a>
        )}

        {/* Expandable included list */}
        {includedResources.length > 0 && (
          <div style={{ marginTop: 14 }}>
            <button
              onClick={() => setExpanded(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 12, fontWeight: 600, color: '#9ca3af',
                padding: 0, transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = accent.from}
              onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
            >
              <ChevronIcon open={expanded} />
              What's included?
            </button>

            <div style={{
              display: 'grid',
              gridTemplateRows: expanded ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.35s cubic-bezier(0.22,1,0.36,1)',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <ul style={{
                  margin: '10px 0 4px', padding: 0,
                  listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6,
                }}>
                  {includedResources.map((resource, idx) => (
                    <li key={resource.id ?? idx} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      fontSize: 12, color: '#374151', fontWeight: 500,
                    }}>
                      <span style={{ color: accent.from, flexShrink: 0 }}>
                        <CheckIcon />
                      </span>
                      {resource.title ?? 'Resource'}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

function PackagesGrid() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 0 40px', gap: '2'}}>

      <div style={{ marginBottom: 32 }}>
        <h2 style={{
          fontSize: 30, fontWeight: 800,
          color: '#0a0a0a', margin: '20px 0px',
          letterSpacing: '-0.03em', lineHeight: 1.15, textAlign: 'center' 
        }}>
          Bundle &{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Save Big
          </span>
        </h2>
        <p style={{ fontSize: 14, color: '#9ca3af', margin: 0, fontWeight: 400, textAlign: 'center'  }}>
          Get multiple resources at a discounted price
        </p>
      </div>

      {packagesData && packagesData.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 20,
          alignItems: 'start',
        }}>
          {packagesData.map((pkg, index) => (
            pkg ? <PackageCard key={pkg.id ?? index} pkg={pkg} index={index} /> : null
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 14 }}>
          No packages available right now.
        </p>
      )}
    </div>
  )
}

export default PackagesGrid;