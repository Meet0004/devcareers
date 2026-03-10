import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from '../legal/SectionHeading'

const YOUTUBE_REVIEWS = [
	{ text: '"CONGRATS bro. hope you hit 100k and million soon."', author: '@photon7404 • YouTube', stars: 5 },
	{ text: '"Very informative"', author: '@sonalsshet6133 • 1 month ago', stars: 0 },
	{ text: '"Thank you bro. bring more..."', author: '@nilesh__ • 2 weeks ago', stars: 0 },
	{ text: '"keep posting sir"', author: '@himanshudwivedi2235 • 1 month ago', stars: 0 },
]

const TOPMATE_REVIEWS = [
	{ text: '"It is helpful for me.. Thank you so much"', author: 'Jyoti Yadav • 2nd Mar, 2026' },
	{ text: '"good"', author: 'Anonymous • 22nd Feb, 2026' },
	{ text: 'M Durga Prasad', author: '24th Feb, 2026' },
	{ text: 'Meghana N', author: '21st Feb, 2026' },
]

const StarRating = ({ stars, cardVisible, cardDelay = 2 }) =>
	stars > 0 ? (
		<div className="flex gap-1 mb-2">
			{[...Array(stars)].map((_, i) => (
				<span
					key={i}
					className={`star-item${cardVisible ? ' star-animate' : ''}`}
					style={{ animationDelay: `${cardDelay + 120 + i * 90}ms` }}
				>
					<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				</span>
			))}
		</div>
	) : null

// Tilt card with 3D perspective hover
const TiltCard = ({ children, borderColor, delay, visible }) => {
	const cardRef = useRef(null)

	const handleMouseMove = (e) => {
		const card = cardRef.current
		if (!card) return
		const rect = card.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		const centerX = rect.width / 2
		const centerY = rect.height / 2
		const rotateX = ((y - centerY) / centerY) * -5
		const rotateY = ((x - centerX) / centerX) * 5
		card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
	}

	const handleMouseLeave = () => {
		const card = cardRef.current
		if (!card) return
		card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)'
	}

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={`testimonial-card bg-white rounded-xl p-4 shadow-md border-l-4 ${borderColor}`}
			style={{
				transition: 'transform 0.2s ease, box-shadow 0.2s ease',
				animationDelay: visible ? `${delay}ms` : '0ms',
				willChange: 'transform',
			}}
		>
			{children}
		</div>
	)
}

const Testimonials = () => {
	const sectionRef = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = sectionRef.current
		if (!el) return
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting && !visible) setVisible(true) },
			{ threshold: 0.15 }
		)
		observer.observe(el)
		return () => observer.unobserve(el)
	}, [visible])

	return (
		<>
			<style>{`
				@keyframes fadeSlideUp {
					from {
						opacity: 0;
						transform: translateY(24px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.testimonial-card {
					opacity: 0;
				}

				.testimonials-visible .testimonial-card {
					animation: fadeSlideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
				}

				.section-header-anim {
					opacity: 0;
					transform: translateY(16px);
					transition: opacity 0.5s ease, transform 0.5s ease;
				}

				.testimonials-visible .section-header-anim {
					opacity: 1;
					transform: translateY(0);
				}

				.footer-badge-anim {
					opacity: 0;
					transition: opacity 0.5s ease 0.6s;
				}

				.testimonials-visible .footer-badge-anim {
					opacity: 1;
				}

				@keyframes starPop {
					0%   { opacity: 0; transform: scale(0) rotate(-30deg); }
					60%  { opacity: 1; transform: scale(1.4) rotate(8deg); }
					80%  { transform: scale(0.88) rotate(-4deg); }
					100% { opacity: 1; transform: scale(1) rotate(0deg); }
				}

				.star-item {
					opacity: 0;
					display: inline-block;
				}

				.star-item.star-animate {
					animation: starPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
				}

				@media (prefers-reduced-motion: reduce) {
					.star-item, .star-item.star-animate {
						animation: none !important;
						opacity: 1 !important;
						transform: none !important;
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.testimonial-card,
					.testimonials-visible .testimonial-card {
						animation: none !important;
						opacity: 1 !important;
					}
					.section-header-anim,
					.testimonials-visible .section-header-anim,
					.footer-badge-anim,
					.testimonials-visible .footer-badge-anim {
						opacity: 1 !important;
						transform: none !important;
						transition: none !important;
					}
				}
			`}</style>

			<section
				ref={sectionRef}
				className={`bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 md:p-12 ${visible ? 'testimonials-visible' : ''}`}
			>
				<div className="section-header-anim mb-10">
					<SectionHeading
						title="Success Stories"
						subtitle="Here's what students like you have achieved using our platform"
					/>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{/* YouTube Comments */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
							</svg>
							<h3 className="font-bold text-gray-900 text-lg">YouTube Community</h3>
						</div>
						<div className="space-y-3">
							{YOUTUBE_REVIEWS.map((review, idx) => (
								<TiltCard
									key={idx}
									borderColor="border-red-500"
									delay={idx * 80}
									visible={visible}
								>
									<StarRating stars={review.stars} cardVisible={visible} cardDelay={idx * 80} />
									<p className="text-gray-700 text-sm italic">{review.text}</p>
									<p className="text-xs text-gray-500 mt-2">— {review.author}</p>
								</TiltCard>
							))}
						</div>
					</div>

					{/* Topmate Reviews */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
							</svg>
							<h3 className="font-bold text-gray-900 text-lg">Topmate Reviews (4.3/5)</h3>
						</div>
						<div className="space-y-3">
							{TOPMATE_REVIEWS.map((review, idx) => (
								<TiltCard
									key={idx}
									borderColor="border-purple-500"
									delay={200 + idx * 80}
									visible={visible}
								>
									<StarRating stars={5} cardVisible={visible} cardDelay={200 + idx * 80} />
									<p className="text-gray-700 text-sm">{review.text}</p>
									<p className="text-xs text-gray-500 mt-2">— {review.author}</p>
								</TiltCard>
							))}
						</div>
					</div>
				</div>

				<div className="footer-badge-anim mt-8 text-center bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
					<p className="text-gray-700 font-medium text-lg">
						🏆 <strong>Top 0.1%</strong> Creator on Topmate • <strong>{import.meta.env.VITE_TOTAL_SALES} Bookings</strong> • <strong>4.3/5 Rating</strong> from all Reviews
					</p>
					<p className="text-sm text-gray-600 mt-2">
						Badges: Community Care • Curator • People's Choice • Top 1%
					</p>
				</div>
			</section>
		</>
	)
}

export default Testimonials