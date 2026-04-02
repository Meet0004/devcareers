import React, { useEffect, useRef, useState } from 'react'

const YOUTUBE_REVIEWS = [
	{ text: '"❤Thank you for posting such amazing opportunity Keep growing, you deserve more subscribers."', author: '@Batman-6909', sub: '24th Mar 2026', stars: 0 },
	{ text: '"CONGRATS bro. hope you hit 100k and million soon."', author: '@photon7404', sub: '27 Feb 2026', stars: 0 },
	{ text: '"Thank you bro. bring more..."', author: '@nilesh__', sub: '11th Feb 2026', stars: 0 },
	{ text: '"keep posting sir"', author: '@himanshudwivedi2235', sub: '31 Jan 2026', stars: 0 },
	{ text: '"Very informative"', author: '@sonalsshet6133', sub: '26 Jan 2026', stars: 0 },
]

const TOPMATE_REVIEWS = [
	{ text: '"The complete question answer especially if you are targeting the specific role in top MNCs is very helpful resource to find And in a well formatted way, with even visual looks calming while preparing"', author: 'Kunal Khadgi', sub: '15th Mar, 2026', stars: 5 },
	{ text: '"It is helpful for me.. Thank you so much"', author: 'Jyoti Yadav', sub: '2nd Mar, 2026', stars: 5 },
	{ text: '"good"', author: 'Anonymous', sub: '22nd Feb, 2026', stars: 5 },
	{ text: '"Very helpful"', author: 'Meghana N', sub: '21st Feb, 2026', stars: 5 },
]

const StarRating = ({ stars, cardVisible, cardDelay = 0 }) => {
	if (!stars) return null
	return (
		<div className="ts-stars">
			{[...Array(stars)].map((_, i) => (
				<span
					key={i}
					className={`star-item${cardVisible ? ' star-animate' : ''}`}
					style={{ animationDelay: `${cardDelay + 120 + i * 90}ms` }}
				>
					<svg width="13" height="13" viewBox="0 0 20 20" fill="#FBBF24">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				</span>
			))}
		</div>
	)
}

const TiltCard = ({ children, className, delay, visible }) => {
	const ref = useRef(null)

	const handleMouseMove = (e) => {
		const card = ref.current
		if (!card) return
		const rect = card.getBoundingClientRect()
		const rx = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -4
		const ry = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 4
		card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
		card.style.transitionDelay = '0ms'
	}

	const handleMouseLeave = () => {
		const card = ref.current
		if (!card) return
		card.style.transform = ''
		card.style.transitionDelay = ''
	}

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={`ts-card ${className}${visible ? ' ts-card-show' : ''}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	)
}

const YouTubeIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="#EF4444">
		<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
	</svg>
)

const TopmateIcon = () => (
	<svg width="14" height="14" viewBox="0 0 20 20" fill="#7C6FF7">
		<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
	</svg>
)

const BADGES = ["Community Care", "Curator", "People's Choice"]

const Testimonials = () => {
	const sectionRef = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = sectionRef.current
		if (!el) return
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting && !visible) setVisible(true) },
			{ threshold: 0.1 }
		)
		observer.observe(el)
		return () => observer.unobserve(el)
	}, [visible])

	return (
		<>
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

				.ts-section {
					font-family: 'Plus Jakarta Sans', sans-serif;
					background: #transparent;
					padding: 72px 48px;
					border-radius: 24px;
				}

				@media (max-width: 680px) {
					.ts-section { padding: 48px 20px; }
					.ts-cols { grid-template-columns: 1fr !important; }
					.ts-footer-inner { padding: 24px 20px !important; }
				}

				.ts-head {
					text-align: center;
					margin-bottom: 52px;
					opacity: 0;
					transform: translateY(12px);
					transition: opacity 0.55s ease, transform 0.55s ease;
				}

				.ts-section.ts-visible .ts-head {
					opacity: 1;
					transform: none;
				}

				.ts-pill {
					display: inline-block;
					font-size: 11px;
					font-weight: 600;
					letter-spacing: 0.12em;
					text-transform: uppercase;
					color: #7C6FF7;
					background: #F0EFFE;
					padding: 5px 14px;
					border-radius: 20px;
					margin-bottom: 16px;
				}

				.ts-title {
					font-size: clamp(26px, 4vw, 40px);
					font-weight: 600;
					color: #111;
					line-height: 1.15;
					margin-bottom: 10px;
				}

				.ts-subtitle {
					font-size: 15px;
					font-weight: 300;
					color: #999;
					max-width: 440px;
					margin: 0 auto;
				}

				.ts-cols {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 24px;
					max-width: 1100px;   /* 👈 limit full section width */
	margin: 0 auto; 
				}

				.ts-col-head {
					display: flex;
					align-items: center;
					gap: 9px;
					margin-bottom: 16px;
					padding-bottom: 14px;
					border-bottom: 1px solid #f0ede8;
				}

				.ts-col-icon {
					width: 30px;
					height: 30px;
					border-radius: 8px;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-shrink: 0;
				}

				.ts-col-icon-yt { background: #FFF0EE; }
				.ts-col-icon-tm { background: #EEF0FF; }

				.ts-col-label {
					font-size: 12px;
					font-weight: 600;
					letter-spacing: 0.07em;
					text-transform: uppercase;
					color: #aaa;
				}

				.ts-col-rating {
					margin-left: auto;
					font-size: 12px;
					font-weight: 500;
					color: #7C6FF7;
					background: #F0EFFE;
					padding: 3px 9px;
					border-radius: 12px;
				}

				.ts-cards { display: flex; flex-direction: column; gap: 12px; justify-content: center}

				.ts-card {
					padding: 18px 20px;
					border-radius: 14px;
					opacity: 0;
					transform: translateY(18px);
					transition:
						opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
						transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
						box-shadow 0.2s ease;
					will-change: transform;
					cursor: default;
					max-width: 600px;
					
				}

				.ts-card-yt {
					background: linear-gradient(135deg, #FFF6F5 0%, #FFF0EE 100%);
					border: 1px solid #FFE4E0;
				}

				.ts-card-tm {
					background: linear-gradient(135deg, #F5F4FF 0%, #EEF0FF 100%);
					border: 1px solid #DDE0FF;
				}

				.ts-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.08); }

				.ts-card.ts-card-show {
					opacity: 1;
					transform: translateY(0);
				}

				.ts-stars { display: flex; gap: 3px; margin-bottom: 9px; }

				.star-item {
					opacity: 0;
					display: inline-block;
				}

				.star-item.star-animate {
					animation: starPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
				}

				@keyframes starPop {
					0%   { opacity: 0; transform: scale(0) rotate(-30deg); }
					60%  { opacity: 1; transform: scale(1.4) rotate(8deg); }
					80%  { transform: scale(0.88) rotate(-4deg); }
					100% { opacity: 1; transform: scale(1) rotate(0deg); }
				}

				.ts-text {
					font-size: 14px;
					font-weight: 400;
					color: #333;
					line-height: 1.6;
					margin-bottom: 10px;
				}

				.ts-author {
					font-size: 11px;
					font-weight: 500;
					color: #bbb;
					letter-spacing: 0.05em;
					text-transform: uppercase;
				}

				.ts-author strong { color: #999; font-weight: 600; }

				.ts-footer {
					margin-top: 48px;
					display: flex;
					justify-content: center;
					opacity: 0;
					transform: translateY(14px);
					transition: opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s;
				}

				.ts-section.ts-visible .ts-footer {
					opacity: 1;
					transform: none;
				}

				.ts-footer-inner {
					background: linear-gradient(135deg, #F8F6FF 0%, #FFF5F3 100%);
					border: 1px solid #EDE8FF;
					border-radius: 20px;
					padding: 28px 48px;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 16px;
					max-width: 440px;
					width: 100%;
				}

				.ts-stats {
					display: flex;
					align-items: center;
					gap: 24px;
					flex-wrap: wrap;
					justify-content: center;
				}

				.ts-stat { display: flex; flex-direction: column; align-items: center; gap: 2px; }

				.ts-stat-val {
					font-size: 26px;
					font-weight: 600;
					color: #111;
					line-height: 1;
				}

				.ts-stat-lbl {
					font-size: 10px;
					font-weight: 600;
					letter-spacing: 0.1em;
					text-transform: uppercase;
					color: #bbb;
				}

				.ts-stat-sep {
					width: 1px;
					height: 28px;
					background: #e8e4f0;
					flex-shrink: 0;
				}

				.ts-badges {
					display: flex;
					gap: 8px;
					flex-wrap: wrap;
					justify-content: center;
				}

				.ts-badge {
					font-size: 10px;
					font-weight: 600;
					letter-spacing: 0.07em;
					text-transform: uppercase;
					color: #7C6FF7;
					background: #F0EFFE;
					border: 1px solid #DDD8FF;
					padding: 4px 10px;
					border-radius: 20px;
				}

				@media (prefers-reduced-motion: reduce) {
					.star-item, .star-item.star-animate {
						animation: none !important;
						opacity: 1 !important;
						transform: none !important;
					}
					.ts-head, .ts-card, .ts-card.ts-card-show, .ts-footer {
						opacity: 1 !important;
						transform: none !important;
						transition: none !important;
					}
				}
			`}</style>

			<section
				ref={sectionRef}
				className={`ts-section${visible ? ' ts-visible' : ''}`}
			>
				<div className="ts-head">
					<div className="ts-pill">Success Stories</div>
					<h2 className="ts-title">What students are saying</h2>
					<p className="ts-subtitle">Real feedback from real people who've learned with us</p>
				</div>

				<div className="ts-cols">
					{/* YouTube */}
					<div>
						<div className="ts-col-head">
							<div className="ts-col-icon ts-col-icon-yt"><YouTubeIcon /></div>
							<span className="ts-col-label">YouTube Community</span>
						</div>
						<div className="ts-cards">
							{YOUTUBE_REVIEWS.map((review, idx) => (
								<TiltCard key={idx} className="ts-card-yt" delay={idx * 75} visible={visible}>
									<StarRating stars={review.stars} cardVisible={visible} cardDelay={idx * 75} />
									<p className="ts-text">{review.text}</p>
									<p className="ts-author"><strong>{review.author}</strong> · {review.sub}</p>
								</TiltCard>
							))}
						</div>
					</div>

					{/* Topmate */}
					<div>
						<div className="ts-col-head">
							<div className="ts-col-icon ts-col-icon-tm"><TopmateIcon /></div>
							<span className="ts-col-label">Topmate Reviews</span>
							<span className="ts-col-rating">{import.meta.env.VITE_TOPMATE_RATING}</span>
						</div>
						<div className="ts-cards">
							{TOPMATE_REVIEWS.map((review, idx) => (
								<TiltCard key={idx} className="ts-card-tm" delay={180 + idx * 75} visible={visible}>
									<StarRating stars={review.stars} cardVisible={visible} cardDelay={180 + idx * 75} />
									<p className="ts-text">{review.text}</p>
									<p className="ts-author"><strong>{review.author}</strong> · {review.sub}</p>
								</TiltCard>
							))}
						</div>
					</div>
				</div>

				<div className="ts-footer">
					<div className="ts-footer-inner">
						<div className="ts-stats">
							<div className="ts-stat">
								<div className="ts-stat-val">{import.meta.env.VITE_TOPMATE_RANK}%</div>
								<div className="ts-stat-lbl">Top Creator</div>
							</div>
							<div className="ts-stat-sep" />
							<div className="ts-stat">
								<div className="ts-stat-val">{import.meta.env.VITE_TOPMATE_RATING}</div>
								<div className="ts-stat-lbl">Rating</div>
							</div>
						</div>
						<div className="ts-badges">
							{BADGES.map(b => <span key={b} className="ts-badge">{b}</span>)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Testimonials