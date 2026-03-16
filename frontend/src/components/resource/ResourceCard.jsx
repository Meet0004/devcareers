import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResourcesTopmate from '../../data/resourceData/resourceTopmate';

const BADGE_CONFIG = [
  {
    key: 'isPopular',
    label: 'Popular',
    color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)',
    d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
  },
  {
    key: 'isBestSeller',
    label: 'Best Seller',
    color: '#ea580c', bg: 'rgba(234,88,12,0.08)', border: 'rgba(234,88,12,0.2)',
    fillRule: true,
    d: 'M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z',
  },
  {
    key: 'isPlacementFocused',
    label: 'Placement',
    color: '#2563eb', bg: 'rgba(37,99,235,0.08)', border: 'rgba(37,99,235,0.2)',
    d: 'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z',
  },
  {
    key: 'isAdvancedLevel',
    label: 'Advanced',
    color: '#dc2626', bg: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.2)',
    fillRule: true,
    d: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z',
  },
]

const BadgeIcon = ({ d, fillRule }) => (
  <svg width={10} height={10} fill="currentColor" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
    {fillRule ? <path fillRule="evenodd" d={d} clipRule="evenodd" /> : <path d={d} />}
  </svg>
)

const Badges = ({ badges }) =>
  badges.length > 0 ? (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
      {badges.map(({ label, color, bg, border, d, fillRule }) => (
        <span key={label} style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          background: bg, border: `1px solid ${border}`, color,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.04em',
          padding: '3px 8px', borderRadius: 100,
        }}>
          <BadgeIcon d={d} fillRule={fillRule} />
          {label}
        </span>
      ))}
    </div>
  ) : null

function ResourceCard({ resource, isMobile = false }) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const isFree = !resource.price || resource.price === ''

  const handleCardClick = () => {
    if (isFree) {
      window.open(resource.link, '_blank')
    } else {
      const topmateLink = ResourcesTopmate[resource.id]
      if (topmateLink) {
        window.open(topmateLink, '_blank')
      } else {
        navigate(`/resource/${resource.id}`)
      }
    }
  }

  const badges = BADGE_CONFIG.filter(({ key }) => resource?.[key])

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    return (
      <div
        onClick={handleCardClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '14px 16px',
          borderRadius: 16,
          background: hovered ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.88)',
          border: hovered ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(249,115,22,0.12)',
          boxShadow: hovered
            ? '0 12px 32px rgba(249,115,22,0.12), 0 2px 8px rgba(0,0,0,0.04)'
            : '0 1px 4px rgba(0,0,0,0.04)',
          transform: hovered ? 'translateY(-3px)' : 'none',
          cursor: 'pointer',
          transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
          position: 'relative', overflow: 'hidden',
          minWidth: 0,
        }}
      >
        {/* Shimmer top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.25s',
        }} />

        {/* Image */}
        <div style={{
          width: 80, height: 80, borderRadius: 12, overflow: 'hidden',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}>
          <img src={resource.image} alt={resource.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{
            fontSize: 14, fontWeight: 700, color: '#0a0a0a',
            margin: '0 0 4px', letterSpacing: '-0.02em',
            overflow: 'hidden', textOverflow: 'ellipsis',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          }}>
            {resource.title}
          </h4>
          <p style={{
            fontSize: 12, color: '#6b7280', margin: '0 0 8px', lineHeight: 1.5,
            overflow: 'hidden', textOverflow: 'ellipsis',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          }}>
            {resource.description}
          </p>
          <Badges badges={badges} />
        </div>

        {/* Price + Arrow */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
          <span style={{
            fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em',
            background: isFree
              ? 'linear-gradient(135deg, #22c55e, #16a34a)'
              : 'linear-gradient(135deg, #f97316, #ea580c)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            {isFree ? 'Free' : resource.price}
          </span>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: hovered ? '0 4px 12px rgba(249,115,22,0.4)' : '0 2px 6px rgba(249,115,22,0.2)',
            transition: 'box-shadow 0.25s, transform 0.25s',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}>
            <svg width={14} height={14} fill="none" stroke="#fff" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  /* ── DESKTOP LAYOUT ── */
  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        borderRadius: 20,
        background: hovered ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.88)',
        border: hovered ? '1px solid rgba(249,115,22,0.28)' : '1px solid rgba(249,115,22,0.1)',
        boxShadow: hovered
          ? '0 20px 48px rgba(249,115,22,0.13), 0 4px 12px rgba(0,0,0,0.05)'
          : '0 1px 6px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Shimmer top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 2,
        background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      {/* Free badge overlay */}
      {isFree && (
        <div style={{
          position: 'absolute', top: 12, right: 12, zIndex: 3,
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          color: '#fff', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '4px 10px', borderRadius: 100,
          boxShadow: '0 2px 8px rgba(34,197,94,0.35)',
        }}>
          Free
        </div>
      )}

      {/* Image */}
      <div style={{
        width: '100%', aspectRatio: '1 / 1', overflow: 'hidden',
        background: '#f3f4f6',
      }}>
        <img src={resource.image} alt={resource.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{
        padding: '16px 16px 14px',
        display: 'flex', flexDirection: 'column', flex: 1,
      }}>
        <h4 style={{
          fontSize: 14, fontWeight: 700, color: '#0a0a0a',
          margin: '0 0 6px', letterSpacing: '-0.02em', lineHeight: 1.35,
          overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          minHeight: '2.7em',
        }}>
          {resource.title}
        </h4>

        <p style={{
          fontSize: 12, color: '#6b7280', margin: '0 0 10px', lineHeight: 1.55,
          overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
          flex: 1,
        }}>
          {resource.description}
        </p>

        {badges.length > 0 && (
          <div style={{ marginBottom: 12 }}>
            <Badges badges={badges} />
          </div>
        )}

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 12,
          borderTop: '1px solid rgba(249,115,22,0.1)',
          marginTop: 'auto',
        }}>
          <span style={{
            fontSize: 17, fontWeight: 900, letterSpacing: '-0.03em',
            background: isFree
              ? 'linear-gradient(135deg, #22c55e, #16a34a)'
              : 'linear-gradient(135deg, #f97316, #ea580c)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            {isFree ? 'Free' : resource.price}
          </span>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 12, fontWeight: 600, color: '#f97316',
            transition: 'gap 0.2s',
          }}>
            View
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: hovered
                ? 'linear-gradient(135deg, #f97316, #ea580c)'
                : 'rgba(249,115,22,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.25s ease',
              boxShadow: hovered ? '0 4px 12px rgba(249,115,22,0.3)' : 'none',
            }}>
              <svg width={12} height={12} fill="none" stroke={hovered ? '#fff' : '#f97316'} viewBox="0 0 24 24"
                style={{ transition: 'stroke 0.25s, transform 0.25s', transform: hovered ? 'translateX(1px)' : 'none' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard;