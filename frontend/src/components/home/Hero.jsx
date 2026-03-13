import React, { useEffect, useState } from 'react'

const ArrowIcon = ({ size = 16 }) => (
	<svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24"
		style={{ transition: 'transform 0.2s' }}>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
	</svg>
)

const VerifiedBadge = () => (
	<a
		href="https://topmate.io"
		target="_blank"
		rel="noopener noreferrer"
		style={{
			display: 'inline-flex',
			alignItems: 'center',
			gap: 5,
			background: 'rgba(34,197,94,0.08)',
			border: '1px solid rgba(34,197,94,0.22)',
			color: '#16a34a',
			fontSize: 11,
			fontWeight: 600,
			padding: '3px 10px',
			borderRadius: 100,
			textDecoration: 'none',
			transition: 'background 0.2s',
		}}
	>
		<svg width={10} height={10} fill="currentColor" viewBox="0 0 20 20">
			<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
		</svg>
		Verified by topmate.io
	</a>
)

const CARDS = [
	{
		icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
		title: "Latest Job Postings",
		description: "Fresh opportunities from top companies, updated every single day.",
		link: { href: "/company-details", label: "Explore Jobs", type: "text" },
		badge: false,
	},
	{
		icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
		title: "Career Resources",
		description: "Cheatsheets, interview guides, and roadmaps for every role.",
		link: { href: "/resources", label: "View Resources", type: "text" },
		badge: true,
	},
	{
		icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
		title: "Stay Updated",
		description: "Get the latest jobs and career tips delivered to your inbox.",
		link: { href: "/subscribe-us", label: "Subscribe Now", type: "button" },
		badge: false,
	},
]

const TRUST_ITEMS = [
	{ icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "#22c55e", label: "100% Free to Browse" },
	{ icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "#f97316", label: "Verified Listings" },
	{ icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", color: "#6b7280", label: "10,000+ Active Users" },
	{ icon: null, label: "Top 0.1% Topmate Creator" },
]

const GlassCard = ({ icon, title, description, link, badge, index, visible }) => {
	const [hovered, setHovered] = useState(false)
	const delay = index * 100

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				background: 'rgba(255,255,255,0.72)',
				backdropFilter: 'blur(20px)',
				WebkitBackdropFilter: 'blur(20px)',
				border: hovered ? '1px solid rgba(249,115,22,0.32)' : '1px solid rgba(249,115,22,0.12)',
				borderRadius: 20,
				padding: 24,
				cursor: 'pointer',
				transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)',
				transform: hovered ? 'translateY(-8px) scale(1.01)' : visible ? 'translateY(0)' : 'translateY(28px)',
				boxShadow: hovered
					? '0 24px 48px rgba(249,115,22,0.14), 0 4px 12px rgba(0,0,0,0.05)'
					: '0 2px 8px rgba(0,0,0,0.04)',
				opacity: visible ? 1 : 0,
				transitionDelay: visible ? `${delay}ms` : '0ms',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Top shimmer line on hover */}
			<div style={{
				position: 'absolute', top: 0, left: 0, right: 0, height: 1,
				background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)',
				opacity: hovered ? 1 : 0,
				transition: 'opacity 0.3s',
			}} />

			<div style={{
				display: 'flex',
				alignItems: badge ? 'flex-start' : 'flex-start',
				justifyContent: badge ? 'space-between' : 'flex-start',
				marginBottom: 16,
			}}>
				<div style={{
					width: 44, height: 44,
					background: hovered ? 'rgba(249,115,22,0.18)' : 'rgba(249,115,22,0.10)',
					borderRadius: 12,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
					transform: hovered ? 'scale(1.14) rotate(-5deg)' : 'scale(1) rotate(0deg)',
				}}>
					<svg width={22} height={22} fill="none" stroke="#f97316" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
					</svg>
				</div>
				{badge && <VerifiedBadge />}
			</div>

			<h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
				{title}
			</h3>
			<p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.6, margin: '0 0 18px' }}>
				{description}
			</p>

			{link.type === 'button' ? (
				<a
					href={link.href}
					style={{
						display: 'inline-flex', alignItems: 'center', gap: 7,
						background: '#f97316', color: '#fff',
						fontSize: 13, fontWeight: 600,
						padding: '10px 20px', borderRadius: 100,
						textDecoration: 'none',
						transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
						boxShadow: '0 6px 18px rgba(249,115,22,0.35)',
					}}
					onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(249,115,22,0.45)' }}
					onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 18px rgba(249,115,22,0.35)' }}
				>
					{link.label} <ArrowIcon size={13} />
				</a>
			) : (
				<a
					href={link.href}
					style={{
						display: 'inline-flex', alignItems: 'center', gap: hovered ? 8 : 4,
						color: '#f97316', fontSize: 13, fontWeight: 600,
						textDecoration: 'none',
						transition: 'gap 0.2s',
					}}
				>
					{link.label} <ArrowIcon size={13} />
				</a>
			)}
		</div>
	)
}

const Hero = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 80)
		return () => clearTimeout(t)
	}, [])

	return (
		<>
			<style>{`
				@keyframes orbFloat {
					0%, 100% { transform: translateY(0px) scale(1); }
					50% { transform: translateY(-28px) scale(1.06); }
				}
				@keyframes heroFadeUp {
					from { opacity: 0; transform: translateY(22px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				@keyframes shimmerText {
					0%   { background-position: 0% center; }
					100% { background-position: 200% center; }
				}
				@keyframes pulseRing {
					0%   { transform: scale(1); opacity: 0.5; }
					100% { transform: scale(2.4); opacity: 0; }
				}
				@keyframes scrollLine {
					0%, 100% { opacity: 0.35; transform: scaleY(1); }
					50%      { opacity: 1;    transform: scaleY(1.25); }
				}

				.hero-btn-primary {
					display: inline-flex;
					align-items: center;
					gap: 8px;
					background: #f97316;
					color: #fff;
					font-size: 15px;
					font-weight: 600;
					padding: 14px 28px;
					border-radius: 100px;
					border: none;
					cursor: pointer;
					text-decoration: none;
					transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
					box-shadow: 0 8px 24px rgba(249,115,22,0.35);
					font-family: inherit;
				}
				.hero-btn-primary:hover {
					transform: translateY(-3px) scale(1.03);
					box-shadow: 0 14px 32px rgba(249,115,22,0.48);
				}
				.hero-btn-primary:active { transform: scale(0.97); }
				.hero-btn-primary:hover svg { transform: translateX(4px); }

				.hero-btn-secondary {
					display: inline-flex;
					align-items: center;
					gap: 8px;
					background: transparent;
					color: #374151;
					font-size: 15px;
					font-weight: 500;
					padding: 14px 24px;
					border-radius: 100px;
					border: 1.5px solid #e5e7eb;
					cursor: pointer;
					text-decoration: none;
					transition: all 0.2s ease;
					font-family: inherit;
				}
				.hero-btn-secondary:hover {
					border-color: #f97316;
					color: #f97316;
					transform: translateY(-2px);
				}

				.hero-nav-pill {
					background: rgba(249,115,22,0.08);
					border: 1px solid rgba(249,115,22,0.22);
					color: #f97316;
					font-size: 12px;
					font-weight: 600;
					padding: 7px 16px;
					border-radius: 100px;
					letter-spacing: 0.03em;
					cursor: pointer;
					transition: all 0.2s;
					font-family: inherit;
					text-decoration: none;
				}
				.hero-nav-pill:hover {
					background: rgba(249,115,22,0.15);
					transform: scale(1.04);
				}

				@media (prefers-reduced-motion: reduce) {
					* { animation: none !important; transition: none !important; }
				}

				@media (max-width: 768px) {
					.hero-h1 { font-size: 40px !important; }
					.hero-cards-grid { grid-template-columns: 1fr !important; }
					.hero-trust-row { flex-wrap: wrap !important; gap: 12px !important; }
				}
			`}</style>

			<div style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

				{/* Ambient orbs */}
				<div style={{ position: 'absolute', width: 540, height: 540, borderRadius: '50%', background: '#ff6b00', filter: 'blur(90px)', opacity: 0.13, top: -180, right: -120, animation: 'orbFloat 8s ease-in-out infinite', pointerEvents: 'none' }} />
				<div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', background: '#ff9440', filter: 'blur(80px)', opacity: 0.12, bottom: 60, left: -100, animation: 'orbFloat 11s ease-in-out infinite reverse', pointerEvents: 'none' }} />
				<div style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', background: '#ffb347', filter: 'blur(70px)', opacity: 0.10, top: '45%', left: '42%', animation: 'orbFloat 13s ease-in-out infinite', pointerEvents: 'none' }} />

				{/* Main content */}
				<div style={{ padding: '56px 48px 72px', position: 'relative', zIndex: 5, maxWidth: 1100, margin: '0 auto' }}>

					{/* Eyebrow row */}
					<div style={{
						display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
						opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)',
						transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s',
					}}>
						{/* Live dot + label */}
						<div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316' }}>
							<span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', position: 'relative', display: 'inline-block' }}>
								<span style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: '#22c55e', animation: 'pulseRing 1.8s ease infinite' }} />
							</span>
							Live Opportunities — Updated Daily
						</div>
						{/* Verified + Browse Jobs pushed to the right */}
						<div style={{ display: 'flex', gap: 8, alignItems: 'center', marginLeft: 'auto' }}>
							<VerifiedBadge />
							<a href="/company-details" className="hero-nav-pill">Browse Jobs →</a>
						</div>
					</div>

					{/* Headline */}
					<h1
						className="hero-h1"
						style={{
							fontSize: 78,
							fontWeight: 700,
							lineHeight: 1.04,
							letterSpacing: '-0.035em',
							color: '#0a0a0a',
							margin: '0 0 26px',
							opacity: visible ? 1 : 0,
							transform: visible ? 'translateY(0)' : 'translateY(22px)',
							transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s',
						}}
					>
						Your Gateway to{' '}
						<span style={{
							background: 'linear-gradient(135deg, #f97316 0%, #ea580c 45%, #ff8c42 100%)',
							backgroundSize: '200% auto',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							animation: 'shimmerText 3s linear infinite',
						}}>
							Career Success.
						</span>
					</h1>

					{/* Subtitle */}
					<p style={{
						fontSize: 18, fontWeight: 400, color: '#6b7280',
						lineHeight: 1.65, maxWidth: 520, marginBottom: 44,
						opacity: visible ? 1 : 0,
						transform: visible ? 'translateY(0)' : 'translateY(22px)',
						transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s',
					}}>
						Curated job opportunities, expert resources, and guidance — everything you need to land your dream role, in one place.
					</p>

					{/* CTAs */}
					<div style={{
						display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 64,
						opacity: visible ? 1 : 0,
						transform: visible ? 'translateY(0)' : 'translateY(22px)',
						transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 0.33s',
					}}>
						<a href="/company-details" className="hero-btn-primary">
							Explore Jobs
							<svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transition: 'transform 0.2s' }}>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
						<a href="/resources" className="hero-btn-secondary">
							Career Resources
							<svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13" />
							</svg>
						</a>
					</div>

					{/* Glass Cards */}
					<div
						className="hero-cards-grid"
						style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
					>
						{CARDS.map((card, i) => (
							<GlassCard key={card.title} {...card} index={i} visible={visible} />
						))}
					</div>
				</div>

				{/* Trust bar */}
				<div
					className="hero-trust-row"
					style={{
						display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
						padding: '0 48px 48px', maxWidth: 1100, margin: '0 auto',
						position: 'relative', zIndex: 5,
						opacity: visible ? 1 : 0,
						transition: 'opacity 0.7s ease 0.65s',
					}}
				>
					{TRUST_ITEMS.map((item, i) => (
						<React.Fragment key={item.label}>
							{i > 0 && <div style={{ width: 4, height: 4, background: '#d1d5db', borderRadius: '50%' }} />}
							<div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#9ca3af', fontWeight: 400 }}>
								{item.icon && (
									<svg width={14} height={14} fill={item.color} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
									</svg>
								)}
								{item.label}
							</div>
						</React.Fragment>
					))}
				</div>

				{/* Scroll hint */}
				<div style={{
					display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
					paddingBottom: 24, position: 'relative', zIndex: 5,
					opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.9s',
				}}>
					<div style={{ fontSize: 11, color: '#d1d5db', letterSpacing: '0.1em', fontWeight: 500, textTransform: 'uppercase' }}>
						Scroll
					</div>
					<div style={{
						width: 1, height: 36,
						background: 'linear-gradient(to bottom, #f97316, transparent)',
						animation: 'scrollLine 2s ease infinite',
					}} />
				</div>
			</div>
		</>
	)
}

export default Hero