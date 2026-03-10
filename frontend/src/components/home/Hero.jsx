import React, { useEffect, useState } from 'react'

const ArrowIcon = () => (
	<svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
	</svg>
)

const CardIcon = ({ d }) => (
	<svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
	</svg>
)

const CARDS = [
	{
		icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
		title: "Latest Job Postings",
		description: "Browse through hundreds of fresh job opportunities posted daily by leading companies across various industries.",
		link: { href: "/company-details", label: "Explore Jobs", type: "text" },
	},
	{
		icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
		title: "Career Resources",
		description: "Access curated cheatsheets, interview guides, and learning roadmaps to accelerate your career growth.",
		link: { href: "/resources", label: "View Resources", type: "text" },
		badge: true,
	},
	{
		icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
		title: "Stay Updated",
		description: "Subscribe to receive the latest job postings, career tips, and updates directly to your inbox.",
		link: { href: "/subscribe-us", label: "Subscribe Now", type: "button" },
	},
]

const VerifiedBadge = () => (
	<a
		href="https://topmate.io"
		target="_blank"
		rel="noopener noreferrer"
		className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full border border-green-200 hover:bg-green-100 hover:border-green-300 transition-colors cursor-pointer mt-2"
	>
		<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
			<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
		</svg>
		Verified by topmate.io
	</a>
)

const Card = ({ icon, title, description, link, badge, index, visible }) => {
	const delay = index * 120

	return (
		<>
			<style>{`
				@keyframes slideUpFade {
					from {
						opacity: 0;
						transform: translateY(32px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes iconPop {
					0%   { transform: scale(1); }
					40%  { transform: scale(1.18); }
					70%  { transform: scale(0.93); }
					100% { transform: scale(1); }
				}

				.hero-card {
					opacity: 0;
					transform: translateY(32px);
					transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
				}

				.hero-card.visible {
					animation: slideUpFade 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
				}

				.hero-card:hover {
					transform: translateY(-7px) !important;
					box-shadow: 0 20px 40px rgba(249, 115, 22, 0.15), 0 4px 12px rgba(0,0,0,0.08) !important;
				}

				.hero-card:hover .icon-circle {
					animation: iconPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
				}

				@media (prefers-reduced-motion: reduce) {
					.hero-card, .hero-card.visible {
						animation: none !important;
						opacity: 1 !important;
						transform: none !important;
					}
				}
			`}</style>
			<div
				className={`hero-card${visible ? ' visible' : ''} bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500`}
				style={{ animationDelay: `${delay}ms` }}
			>
				<div className={`${badge ? 'flex items-start justify-between' : ''} mb-6`}>
					<div className="icon-circle w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
						<CardIcon d={icon} />
					</div>
					{badge && <VerifiedBadge />}
				</div>
				<h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
				<p className="text-gray-600 mb-6">{description}</p>
				{link.type === 'button' ? (
					<a href={link.href} className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center group">
						{link.label} <ArrowIcon />
					</a>
				) : (
					<a href={link.href} className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center group">
						{link.label} <ArrowIcon />
					</a>
				)}
			</div>
		</>
	)
}

const Hero = () => {
	const [cardsVisible, setCardsVisible] = useState(false)

	useEffect(() => {
		// Slight delay so the page has rendered before triggering
		const t = setTimeout(() => setCardsVisible(true), 100)
		return () => clearTimeout(t)
	}, [])

	return (
		<>
			<style>{`
				@keyframes gradientShimmer {
					0%   { background-position: 0% 50%; }
					50%  { background-position: 100% 50%; }
					100% { background-position: 0% 50%; }
				}

				@keyframes headingFadeDown {
					from { opacity: 0; transform: translateY(-18px); }
					to   { opacity: 1; transform: translateY(0); }
				}

				@keyframes subtitleFade {
					from { opacity: 0; }
					to   { opacity: 1; }
				}

				.hero-heading {
					animation: headingFadeDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
				}

				.hero-subtitle {
					animation: subtitleFade 0.7s ease 0.25s both;
				}

				.shimmer-text {
					background: linear-gradient(90deg, #f97316, #ea580c, #fb923c, #f97316);
					background-size: 250% auto;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
					animation: gradientShimmer 3.5s ease infinite;
				}

				@media (prefers-reduced-motion: reduce) {
					.shimmer-text { animation: none; }
					.hero-heading, .hero-subtitle { animation: none; }
				}
			`}</style>

			<div className="max-w-7xl mx-auto px-8 py-20">
				<div className="text-center mb-16">
					<h1 className="hero-heading text-5xl font-bold text-gray-800 mb-4">
						Your Gateway to{' '}
						<span className="shimmer-text">Career Success</span>
					</h1>
					<p className="hero-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
						Discover the latest job opportunities, access valuable career resources, and connect with top employers all in one place.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{CARDS.map((card, i) => (
						<Card key={card.title} {...card} index={i} visible={cardsVisible} />
					))}
				</div>
			</div>
		</>
	)
}

export default Hero