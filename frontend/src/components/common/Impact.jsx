import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from '../legal/SectionHeading'

const STATS = [
	{ number: `${import.meta.env.VITE_MONTHLY_USERS}`, label: 'Monthly Active Users' },
	{ number: '100+', label: 'Monthly Opportunities' },
	{ number: `Top ${import.meta.env.VITE_TOPMATE_RANK}%`, label: 'Topmate Creator' },
	{ number: '100%', label: 'Verified Listings' },]

function parse(raw) {
	if (raw.startsWith('Top ')) {
		const n = parseFloat(raw.replace('Top ', ''))
		return { prefix: 'Top ', value: n, suffix: '%', decimals: 1 }
	}
	const m = raw.match(/^(\d+\.?\d*)(.*)$/)
	if (m) return { prefix: '', value: parseFloat(m[1]), suffix: m[2], decimals: 0 }
	return { prefix: '', value: 0, suffix: raw, decimals: 0 }
}

const PARSED = STATS.map(s => ({ ...s, parsed: parse(s.number) }))

function easeOutCubic(t) {
	return 1 - Math.pow(1 - t, 3)
}

const BADGES = ['Community Care', 'Curator', "People's Choice"]

const Impact = () => {
	const sectionRef = useRef(null)
	const [visible, setVisible] = useState(false)
	const [counts, setCounts] = useState(PARSED.map(() => 0))

	useEffect(() => {
		const el = sectionRef.current
		if (!el) return
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting && !visible) setVisible(true) },
			{ threshold: 0.2 }
		)
		observer.observe(el)
		return () => observer.unobserve(el)
	}, [visible])

	useEffect(() => {
		if (!visible) return
		const duration = 2000
		const fps = 1000 / 60
		const totalFrames = Math.round(duration / fps)
		let frame = 0
		const timer = setInterval(() => {
			frame++
			const p = easeOutCubic(Math.min(frame / totalFrames, 1))
			setCounts(PARSED.map(s => {
				const v = s.parsed.value * p
				return s.parsed.decimals ? Math.round(v * 10) / 10 : Math.floor(v)
			}))
			if (frame >= totalFrames) {
				setCounts(PARSED.map(s => s.parsed.value))
				clearInterval(timer)
			}
		}, fps)
		return () => clearInterval(timer)
	}, [visible])

	return (
		<>
			<style>{`
				@keyframes fadeUp {
					from { opacity: 0; transform: translateY(28px); }
					to   { opacity: 1; transform: translateY(0); }
				}

				@keyframes dividerGrow {
					from { transform: scaleX(0); }
					to   { transform: scaleX(1); }
				}

				.impact-section {
					opacity: 0;
					transform: translateY(28px);
				}

				.impact-section.visible {
					animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
				}

				.stat-item {
					opacity: 0;
				}

				.impact-section.visible .stat-item {
					animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
				}

				.footer-row {
					opacity: 0;
				}

				.impact-section.visible .footer-row {
					animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
				}

				.divider-line {
					transform-origin: left;
					transform: scaleX(0);
				}

				.impact-section.visible .divider-line {
					animation: dividerGrow 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
				}
				.stat-item:hover .stat-number-val {
					color: white;
					opacity: 0.95;
				}
				@media (prefers-reduced-motion: reduce) {
					.impact-section,
					.impact-section.visible,
					.stat-item,
					.footer-row {
						animation: none !important;
						opacity: 1 !important;
						transform: none !important;
					}
					.divider-line {
						animation: none !important;
						transform: scaleX(1) !important;
					}
				}
				`}</style>

			<section
				ref={sectionRef}
				className={`impact-section bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-2xl p-8 md:p-12${visible ? ' visible' : ''}`}
			>
				<SectionHeading
					title="Our Impact in Numbers"
					subtitle="Here's what we've achieved together as a community since our launch in 2023"
					className="mb-4"
				/>

				{/* Stat grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
					{PARSED.map((stat, i) => {
						const current = counts[i]
						const display = `${stat.parsed.prefix}${stat.parsed.decimals
							? Number(current).toFixed(1)
							: Math.floor(current)
							}${stat.parsed.suffix}`
						return (
							<div
								key={stat.label}
								className="stat-item bg-white/10 hover:bg-white/20 transition-colors duration-300 p-6 flex flex-col items-center text-center cursor-default"
								style={{ animationDelay: `${i * 50}ms` }}
							>
								<span className="stat-number-val text-3xl md:text-4xl font-bold tracking-tight mb-1 tabular-nums transition-opacity duration-200">
									{display}
								</span>
								<span className="text-green-50 text-sm font-normal mt-1 leading-snug">
									{stat.label}
								</span>
							</div>
						)
					})}
				</div>

				{/* Footer */}
				<div className="footer-row mt-4 pt-4 relative font-sans">
					<div className="divider-line absolute top-0 left-0 right-0 h-px bg-green-300/50" />
					<div>
						<p className="text-xl font-semi-bold tracking-tight">
							Daily Commitment: {import.meta.env.VITE_FOUNDER_DAILY_HOURS}+ Hours Daily Dedicated to finding opportunities, creating content, and supporting users
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default Impact