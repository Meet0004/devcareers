import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import CompanyCard from './CompanyCard'
import CompanyNotFound from './CompanyNotFound'

const CompanyListPage = ({ filteredCompanies, searchTerm, setSearchTerm }) => {
	const [visible, setVisible] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 60)
		const onResize = () => setIsMobile(window.innerWidth <= 640)
		window.addEventListener('resize', onResize)
		return () => { clearTimeout(t); window.removeEventListener('resize', onResize) }
	}, [])

	return (
		<>
			<style>{`
				@keyframes orbFloat {
					0%, 100% { transform: translateY(0px) scale(1); }
					50%       { transform: translateY(-28px) scale(1.06); }
				}
				@keyframes pulseRing {
					0%   { transform: scale(1); opacity: 0.5; }
					100% { transform: scale(2.4); opacity: 0; }
				}
				@keyframes fadeUp {
					from { opacity: 0; transform: translateY(20px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				.cl-card-enter {
					animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
					opacity: 0;
				}
				@media (max-width: 1024px) {
					.cl-grid { grid-template-columns: repeat(2, 1fr) !important; }
				}
				@media (max-width: 640px) {
					.cl-grid { grid-template-columns: 1fr !important; }
					.cl-title { font-size: 36px !important; }
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
				maxWidth: '100vw',
				overflowX: 'hidden',
				fontFamily: 'system-ui, -apple-system, sans-serif',
			}}>
				{/* Ambient orbs */}
				<div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: '#ff6b00', filter: 'blur(90px)', opacity: 0.10, top: -160, right: -100, animation: 'orbFloat 9s ease-in-out infinite', pointerEvents: 'none' }} />
				<div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: '#ff9440', filter: 'blur(80px)', opacity: 0.09, bottom: 80, left: -80, animation: 'orbFloat 12s ease-in-out infinite reverse', pointerEvents: 'none' }} />
				<div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: '#ffb347', filter: 'blur(70px)', opacity: 0.08, top: '40%', left: '45%', animation: 'orbFloat 14s ease-in-out infinite', pointerEvents: 'none' }} />

				<div
					className="cl-section"
					style={{
						width: '100%',
						maxWidth: '100%',
						padding: isMobile ? '36px 16px 60px' : '56px 40px 72px',
						position: 'relative',
						zIndex: 5,
						boxSizing: 'border-box',
					}}
				>
					{/* Header */}
					<div style={{
						textAlign: 'center',
						maxWidth: 640,
						margin: '0 auto 48px',
						opacity: visible ? 1 : 0,
						transform: visible ? 'translateY(0)' : 'translateY(20px)',
						transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s',
					}}>
						<div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316', marginBottom: 18 }}>
							<span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', position: 'relative', display: 'inline-block' }}>
								<span style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: '#22c55e', animation: 'pulseRing 1.8s ease infinite' }} />
							</span>
							Updated Daily
						</div>

						<h1 className="cl-title" style={{ fontSize: isMobile ? 36 : 56, fontWeight: 700, lineHeight: 1.06, letterSpacing: '-0.03em', color: '#0a0a0a', margin: '0 0 12px' }}>
							Company{' '}
							<span style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 45%, #ff8c42 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
								Listings
							</span>
						</h1>

						<p style={{ fontSize: isMobile ? 15 : 17, fontWeight: 400, color: '#6b7280', lineHeight: 1.65, maxWidth: 440, margin: '0 auto' }}>
							Discover amazing opportunities at top companies
						</p>
					</div>

					{/* Search */}
					<div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s' }}>
						<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					</div>

					{/* Results count */}
					{searchTerm && filteredCompanies.length > 0 && (
						<div style={{ marginBottom: 24, fontSize: 13, color: '#9ca3af', fontWeight: 400 }}>
							<span style={{ color: '#f97316', fontWeight: 600 }}>{filteredCompanies.length}</span>{' '}
							{filteredCompanies.length === 1 ? 'result' : 'results'} for{' '}
							<span style={{ color: '#374151', fontWeight: 500 }}>"{searchTerm}"</span>
						</div>
					)}

					{/* Grid */}
					{filteredCompanies.length > 0 ? (
						<div
							className="cl-grid"
							style={{
								display: 'grid',
								gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
								gap: 16,
								width: '100%',
								minWidth: 0,
							}}
						>
							{[...filteredCompanies]
								.sort((a, b) => b.id - a.id)
								.map((item, idx) => (
									<div key={item.id} className="cl-card-enter" style={{ animationDelay: `${idx * 50}ms`, minWidth: 0, width: '100%' }}>
										<CompanyCard company={item} />
									</div>
								))}
						</div>
					) : (
						<CompanyNotFound searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					)}
				</div>
			</div>
		</>
	)
}

export default CompanyListPage