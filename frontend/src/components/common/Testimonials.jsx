import React, { useEffect, useRef, useState } from 'react'
import topmateLogo from '../../assets/topmateLogo.avif'
const ANIM = {
  revealDuration: 0.55,
  revealSlide: 18,
  staggerStep: 5,
  countTickMs: 20,
  countStartMs: 400,
}

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

const BADGES = ["Community Care", "Curator", "People's Choice"]

/* ─── Keyframes only — cannot be expressed in Tailwind utility classes ─── */
const KEYFRAME_STYLES = `
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

	@keyframes starPop {
		0%   { opacity: 0; transform: scale(0) rotate(-30deg); }
		60%  { opacity: 1; transform: scale(1.4) rotate(8deg); }
		80%  { transform: scale(0.88) rotate(-4deg); }
		100% { opacity: 1; transform: scale(1) rotate(0deg); }
	}

	.star-animate {
		animation: starPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}

	@media (prefers-reduced-motion: reduce) {
		.star-animate {
			animation: none !important;
			opacity: 1 !important;
			transform: none !important;
		}
	}
`

/* ─── StarRating ─── */
const StarRating = ({ stars, cardVisible, cardDelay = 0 }) => {
	if (!stars) return null
	return (
		<div className="flex gap-[3px] mb-[9px]">
			{[...Array(stars)].map((_, i) => (
				<span
					key={i}
					className={`inline-block opacity-0${cardVisible ? ' star-animate' : ''}`}
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

/* ─── TiltCard ─── */
const TiltCard = ({ children, cardType, delay, visible }) => {
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

	/* card-type-specific Tailwind classes */
	const typeClasses = cardType === 'yt'
		? 'bg-gradient-to-br from-[#FFF6F5] to-[#FFF0EE] border border-[#FFE4E0]'
		: 'bg-gradient-to-br from-[#F5F4FF] to-[#EEF0FF] border border-[#DDE0FF]'

	/* entry animation via inline style (opacity/translateY driven by `visible`) */
	const baseStyle = {
		transitionDelay: `${delay}ms`,
		willChange: 'transform',
	}

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={baseStyle}
			className={[
				'p-[18px_20px] rounded-2xl cursor-default max-w-[600px]',
				'transition-[opacity,transform,box-shadow]',
				'duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
				'hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)]',
				typeClasses,
				visible
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-[18px]',
			].join(' ')}
		>
			{children}
		</div>
	)
}

/* ─── Icons ─── */
const YouTubeIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="#EF4444">
		<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
	</svg>
)
// ── Scroll-reveal hook ───────────────────────────────────────
const useReveal = (delay = 0) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
	const el = ref.current
	if (!el) return
	const obs = new IntersectionObserver(([entry]) => {
	  if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect() }
	}, { threshold: 0.12 })
	obs.observe(el)
	return () => obs.disconnect()
  }, [delay])
  return [ref, visible]
}

const revealStyle = (visible) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : `translateY(${ANIM.revealSlide}px)`,
  transition: `opacity ${ANIM.revealDuration}s cubic-bezier(0.22,1,0.36,1), transform ${ANIM.revealDuration}s cubic-bezier(0.22,1,0.36,1)`,
})
/* ─── Main Component ─── */
const Testimonials = () => {
	const sectionRef = useRef(null)
	const [visible, setVisible] = useState(false)
const [count, setCount] = useState(0)
  const [headerRef, headerVisible] = useReveal(0)
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
			<style>{KEYFRAME_STYLES}</style>

			<section
				ref={sectionRef}
				className="bg-transparent px-12 pt-16 pb-2 rounded-3xl max-sm:px-5 max-sm:py-12"
			>
				{/* ── Header ── */}
				<div ref={headerRef} style={{ ...revealStyle(headerVisible), textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 2 }}>

          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.035em', lineHeight: 1.1, margin: '0 0 12px' }}>
            What{' '}
            <em style={{ fontStyle: 'normal', background: 'linear-gradient(135deg,#f97316,#ea580c,#ff8c42)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% auto', animation: 'lrShimmer 3s linear infinite' }}>Students</em> are saying
          </h2>
        </div>

				{/* ── Two-column grid ── */}
				<div className="grid grid-cols-2 gap-6 max-w-[1100px] mx-auto max-sm:grid-cols-1">

					{/* YouTube column */}
					<div>
						<div className="flex items-center gap-[9px] mb-4 pb-[14px] border-b border-[#f0ede8]">
							<div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center flex-shrink-0 bg-[#FFF0EE]">
								<YouTubeIcon />
							</div>
							<span className="text-[12px] font-semibold tracking-[0.07em] uppercase text-[#aaa]">
								YouTube Community
							</span>
						</div>
						<div className="flex flex-col gap-3 justify-center">
							{YOUTUBE_REVIEWS.map((review, idx) => (
								<TiltCard key={idx} cardType="yt" delay={idx * 75} visible={visible}>
									<StarRating stars={review.stars} cardVisible={visible} cardDelay={idx * 75} />
									<p className="text-[14px] font-normal text-[#333] leading-[1.6] mb-[10px]">
										{review.text}
									</p>
									<p className="text-[11px] font-medium text-[#bbb] tracking-[0.05em] uppercase">
										<strong className="text-[#999] font-semibold">{review.author}</strong>
										{' · '}{review.sub}
									</p>
								</TiltCard>
							))}
						</div>
					</div>

					{/* Topmate column */}
					<div>
						<div className="flex items-center gap-[9px] mb-4 pb-[14px] border-b border-[#f0ede8]">
							<div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EEF0FF]">
								<img
									src={topmateLogo}
									alt="Topmate"
									className="w-5 h-5 rounded-full object-cover"
								/>
							</div>
							<span className="text-[12px] font-semibold tracking-[0.07em] uppercase text-[#aaa]">
								Topmate Reviews
							</span>
						</div>
						<div className="flex flex-col gap-3 justify-center">
							{TOPMATE_REVIEWS.map((review, idx) => (
								<TiltCard key={idx} cardType="tm" delay={180 + idx * 75} visible={visible}>
									<StarRating stars={review.stars} cardVisible={visible} cardDelay={180 + idx * 75} />
									<p className="text-[14px] font-normal text-[#333] leading-[1.6] mb-[10px]">
										{review.text}
									</p>
									<p className="text-[11px] font-medium text-[#bbb] tracking-[0.05em] uppercase">
										<strong className="text-[#999] font-semibold">{review.author}</strong>
										{' · '}{review.sub}
									</p>
								</TiltCard>
							))}
						</div>
					</div>
				</div>

				{/* ── Footer ── */}
				<div
					className={[
						'mt-12 mb-2 flex justify-center',
						'transition-[opacity,transform] duration-[0.6s] ease-in-out delay-[0.65s]',
						visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[14px]',
					].join(' ')}
				>
					<div className="bg-gradient-to-br from-[#F8F6FF] to-[#FFF5F3] border border-[#EDE8FF] rounded-[20px] px-8 py-5 flex items-center gap-6 max-w-[640px] w-full max-sm:flex-col max-sm:px-5">

						{/* Left — logo + verified text + badges */}
						<div className="flex flex-col gap-3 flex-1">
							{/* Logo + verified text */}
							<a
								href="https://topmate.io"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 no-underline group"
							>
								<img
									src={topmateLogo}
									alt="Topmate"
									className="w-9 h-9 rounded-full object-cover border border-[#e0d6ff] flex-shrink-0"
								/>
								<span className="text-[15px] text-[#333] font-normal group-hover:text-[#5b3fc8] transition-colors duration-150">
									verified on <strong className="font-semibold text-[#5b3fc8]">topmate.io</strong>
								</span>
							</a>

							{/* Badges */}
							<div className="flex gap-2 flex-nowrap">
								{BADGES.map(b => (
									<span
										key={b}
										className="text-[10px] whitespace-nowrap font-semibold tracking-[0.07em] uppercase text-[#7C6FF7] bg-[#F0EFFE] border border-[#DDD8FF] px-[10px] py-[5px] rounded-full"
									>
										{b}
									</span>
								))}
							</div>
						</div>

						{/* Divider */}
						<div className="w-px self-stretch bg-[#e8e4f0] flex-shrink-0 max-sm:hidden" />

						{/* Right — stats */}
						<div className="flex items-center gap-5 flex-shrink-0">
							<div className="flex flex-col items-center gap-[2px]">
								<div className="text-[26px] font-semibold text-[#111] leading-none">
									{import.meta.env.VITE_TOPMATE_RANK}%
								</div>
								<div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#bbb]">
									Top Creator
								</div>
							</div>
							<div className="w-px h-7 bg-[#e8e4f0] flex-shrink-0" />
							<div className="flex flex-col items-center gap-[2px]">
								<div className="text-[26px] font-semibold text-[#111] leading-none">
									{import.meta.env.VITE_TOPMATE_RATING}
								</div>
								<div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#bbb]">
									Rating
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}

export default Testimonials