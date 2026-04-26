import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SHOW_AFTER_MS = 6000   // appears after 6s
const VISIBLE_FOR_MS = 6000  // stays for 6s then auto-dismisses

function BundleNudgeToast() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)
  const fired = useRef(false)

  const dismiss = () => {
    setExiting(true)
    setTimeout(() => setVisible(false), 400)
  }

  const handleNavigate = () => {
    dismiss()
    setTimeout(() => navigate('/resources/packages'), 420)
  }

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    const showTimer = setTimeout(() => {
      setVisible(true)

      // Auto-dismiss after 6s
      const hideTimer = setTimeout(() => dismiss(), VISIBLE_FOR_MS)
      return () => clearTimeout(hideTimer)
    }, SHOW_AFTER_MS)

    return () => clearTimeout(showTimer)
  }, [])

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-110%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-110%); }
        }
        .bundle-popup {
          animation: slideInLeft 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .bundle-popup.exiting {
          animation: slideOutLeft 0.4s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }
      `}</style>

      <div
        className={`bundle-popup${exiting ? ' exiting' : ''}`}
        style={{
          position: 'fixed',
          bottom: 28,
          left: 28,
          zIndex: 9999,
          width: 320,
          background: '#0f172a',
          border: '1px solid rgba(16,185,129,0.25)',
          borderRadius: 16,
          padding: '14px 16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          overflow: 'hidden',
        }}
      >
        {/* Subtle glow blob */}
        <div style={{
          position: 'absolute', top: -24, right: -24,
          width: 100, height: 100, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.18), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Icon */}
          <div style={{
            width: 40, height: 40, borderRadius: 12, flexShrink: 0,
            background: 'rgba(16,185,129,0.12)',
            border: '1px solid rgba(16,185,129,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width={18} height={18} fill="none" stroke="#10b981" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              margin: 0, fontSize: 13, fontWeight: 700,
              color: '#f1f5f9', letterSpacing: '-0.01em', lineHeight: 1.3,
            }}>
              Save more with bundles 🎁
            </p>
            <p style={{
              margin: '3px 0 0', fontSize: 11,
              color: '#94a3b8', lineHeight: 1.4,
            }}>
              Get multiple resources at a big discount
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleNavigate}
            style={{
              flexShrink: 0,
              background: 'linear-gradient(135deg, #10b981, #059669)',
              border: 'none', borderRadius: 10,
              color: '#fff', fontSize: 11, fontWeight: 700,
              padding: '7px 12px', cursor: 'pointer',
              letterSpacing: '0.02em', whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(16,185,129,0.3)',
            }}
          >
            View bundles →
          </button>
        </div>

        {/* Close */}
        <button
          onClick={dismiss}
          style={{
            position: 'absolute', top: 8, right: 8,
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#475569', padding: 4,
            display: 'flex', borderRadius: 4,
          }}
        >
          <svg width={12} height={12} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default BundleNudgeToast