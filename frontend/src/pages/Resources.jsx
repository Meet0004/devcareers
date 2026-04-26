import { useState, useEffect } from 'react'
import { useNavigate, useMatch } from 'react-router-dom'

import ResourcesHeader from '../components/resource/ResourcesHeader'
import TabSwitcher from '../components/resource/TabSwitcher'
import IndividualResources from '../components/resource/IndividualResources'
import PackageResources from '../components/resource/PackageResources'
import HelpCTA from '../components/common/HelpCTA'
import BundleNudgeToast from '../components/resource/BundleToast'

function Resources() {
  const navigate = useNavigate()
  const isPackagesRoute = useMatch('/resources/packages')
  const activeTab = isPackagesRoute ? 'packages' : 'resources'

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const handleTabChange = (tab) => {
    if (tab === 'packages') {
      navigate('/resources/packages')
    } else {
      navigate('/resources')
    }
  }

  return (
    <>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-28px) scale(1.06); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        {/* Ambient orbs */}
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: '#ff6b00', filter: 'blur(90px)', opacity: 0.10,
          top: -160, right: -100,
          animation: 'orbFloat 9s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 320, height: 320, borderRadius: '50%',
          background: '#ff9440', filter: 'blur(80px)', opacity: 0.09,
          bottom: 80, left: -80,
          animation: 'orbFloat 12s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 200, height: 200, borderRadius: '50%',
          background: '#ffb347', filter: 'blur(70px)', opacity: 0.08,
          top: '35%', left: '42%',
          animation: 'orbFloat 14s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 5,
          width: '100%', padding: '56px 12px 20px',
          boxSizing: 'border-box',
        }}>

          {/* ── Hero: Header + Tabs (shared, renders once) ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s',
          }}>
            <ResourcesHeader />
          </div>

          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s',
            display: 'flex', justifyContent: 'center', marginBottom: 32,
          }}>
            <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />
          </div>

          {/* ── Tab content ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.2s',
          }}>
            {activeTab === 'resources' ? (
              <IndividualResources />
            ) : (
              <PackageResources />
            )}
          </div>

          {/* ── Help CTA ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.65s ease 0.45s',
          }}>
            <HelpCTA />
          </div>

        </div>
      </div>

      <BundleNudgeToast />
    </>
  )
}

export default Resources