import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ResourcesData from '../data/resourceData/resourceData'
import { placeholderWords } from '../data/resourceData/searchBarData'

import ResourcesHeader from '../components/resource/ResourcesHeader'
import TabSwitcher from '../components/resource/TabSwitcher'
import SearchBar from '../components/resource/SearchBar'
import FilterDropdown, { filterOptions } from '../components/resource/FilterDropdown'
import ResourcesGrid from '../components/resource/ResourcesGrid'
import HelpCTA from '../components/common/HelpCTA'
import BundleNudgeToast from '../components/resource/BundleToast'

const priorityIds = [1, 3, 28]

const shuffleArray = (array) => {
	const shuffled = [...array]
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
	}
	return shuffled
}

function Resources() {
	const navigate = useNavigate()

	const [searchQuery, setSearchQuery] = useState('')
	const [placeholder, setPlaceholder] = useState('')
	const [wordIndex, setWordIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [selectedFilters, setSelectedFilters] = useState([])
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [visible, setVisible] = useState(false)
	const [navigating, setNavigating] = useState(false)

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 60)
		return () => clearTimeout(t)
	}, [])

	const organizedResources = useMemo(() => {
		const priority = []
		const free = []
		const others = []

		ResourcesData.forEach((resource) => {
			if (priorityIds.includes(resource.id)) {
				priority.push(resource)
			} else if (resource.price === '') {
				free.push(resource)
			} else {
				others.push(resource)
			}
		})

		priority.sort((a, b) => priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id))

		const shuffledFree = shuffleArray(free)
		const shuffledOthers = shuffleArray(others)
		const randomPool = shuffleArray([...shuffledFree.slice(2), ...shuffledOthers])

		return [
			priority[0], priority[1],
			shuffledFree[0], shuffledFree[1],
			priority[2],
			...randomPool,
		].filter(Boolean)
	}, [])

	// Typewriter effect
	useEffect(() => {
		const currentWord = placeholderWords[wordIndex]
		const typingSpeed = isDeleting ? 10 : 100
		const pauseTime = 300

		const timer = setTimeout(() => {
			if (!isDeleting) {
				if (placeholder.length < currentWord.length) {
					setPlaceholder(currentWord.slice(0, placeholder.length + 1))
				} else {
					setTimeout(() => setIsDeleting(true), pauseTime)
				}
			} else {
				if (placeholder.length > 0) {
					setPlaceholder(placeholder.slice(0, -1))
				} else {
					setIsDeleting(false)
					setWordIndex((prev) => (prev + 1) % placeholderWords.length)
				}
			}
		}, typingSpeed)

		return () => clearTimeout(timer)
	}, [placeholder, isDeleting, wordIndex])

	const toggleFilter = (filterId) => {
		setSelectedFilters((prev) =>
			prev.includes(filterId) ? prev.filter(f => f !== filterId) : [...prev, filterId]
		)
	}

	const clearFilters = () => setSelectedFilters([])

	const handleTabChange = (tab) => {
		if (tab === 'packages') {
			setNavigating(true)
			setTimeout(() => navigate('/resources/packages'), 50)
		}
	}

	const filteredResources = organizedResources.filter((resource) => {
		const query = searchQuery.toLowerCase()
		const matchesSearch =
			resource.title.toLowerCase().includes(query) ||
			resource.description.toLowerCase().includes(query)
		if (selectedFilters.length === 0) return matchesSearch
		return matchesSearch && selectedFilters.some(filterId => resource[filterId] === true)
	})

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
				@keyframes shimmerText {
					0%   { background-position: 0% center; }
					100% { background-position: 200% center; }
				}
				@keyframes fadeUp {
					from { opacity: 0; transform: translateY(18px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				@keyframes fadeIn {
					from { opacity: 0; }
					to   { opacity: 1; }
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
					width: '100%', padding: '56px 40px 72px',
					boxSizing: 'border-box',
				}}>
					{/* Header */}
					<div style={{
						opacity: visible ? 1 : 0,
						transform: visible ? 'translateY(0)' : 'translateY(20px)',
						transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s',
					}}>
						<ResourcesHeader />
					</div>

					{/* Tab switcher */}
					<div style={{
						opacity: visible ? 1 : 0,
						transform: visible ? 'translateY(0)' : 'translateY(16px)',
						transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s',
						display: 'flex', justifyContent: 'center', marginBottom: 32,
					}}>
						<TabSwitcher activeTab="resources" onTabChange={handleTabChange} />
					</div>

					{/* Search + Filter row */}
					<div style={{
						opacity: visible ? 1 : 0,
						transform: visible ? 'translateY(0)' : 'translateY(16px)',
						transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1) 0.2s',
						display: 'flex', flexDirection: 'column', alignItems: 'center',
						marginBottom: 32,
						position: 'relative', zIndex: 100,
					}}>
						<div style={{
							display: 'flex', alignItems: 'center', gap: 12,
							width: '100%', maxWidth: 640,
						}}>
							<SearchBar
								value={searchQuery}
								onChange={setSearchQuery}
								placeholder={placeholder}
							/>
							<FilterDropdown
								selectedFilters={selectedFilters}
								onToggle={toggleFilter}
								onClear={clearFilters}
								isOpen={isFilterOpen}
								onOpenChange={setIsFilterOpen}
							/>
						</div>

						{/* Active filter chips */}
						{selectedFilters.length > 0 && (
							<div style={{
								display: 'flex', alignItems: 'center', gap: 8,
								flexWrap: 'wrap', justifyContent: 'center',
								marginTop: 14,
							}}>
								{selectedFilters.map(filterId => {
									const filter = filterOptions.find(f => f.id === filterId)
									return (
										<span key={filterId} style={{
											display: 'inline-flex', alignItems: 'center', gap: 6,
											background: filter.bg,
											border: `1px solid ${filter.border}`,
											color: filter.color,
											fontSize: 12, fontWeight: 600,
											padding: '4px 10px 4px 10px',
											borderRadius: 100,
										}}>
											{filter.icon}
											{filter.label}
											<button
												onClick={() => toggleFilter(filterId)}
												style={{
													background: 'none', border: 'none',
													color: 'inherit', cursor: 'pointer',
													padding: 0, display: 'flex',
													alignItems: 'center', marginLeft: 2,
												}}
											>
												<svg width={10} height={10} fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
												</svg>
											</button>
										</span>
									)
								})}
							</div>
						)}

						{/* Results count */}
						{(searchQuery || selectedFilters.length > 0) && (
							<p style={{
								marginTop: 12, fontSize: 13, color: '#9ca3af', fontWeight: 400,
							}}>
								<span style={{ color: '#f97316', fontWeight: 600 }}>
									{filteredResources.length}
								</span>{' '}
								resource{filteredResources.length !== 1 ? 's' : ''} found
							</p>
						)}
					</div>

					{/* Grid — unmounts before navigation to prevent ResourceCard crash */}
					{!navigating && (
						<div style={{ position: 'relative', zIndex: 1 }}>
							<ResourcesGrid
								resources={filteredResources}
								searchQuery={searchQuery}
								selectedFilters={selectedFilters}
								onClearSearch={(val) => {
									setSearchQuery(val ?? '')
									window.scrollTo({ top: 0, behavior: 'smooth' })
								}}
								onClearFilters={clearFilters}
							/>
						</div>
					)}

					{/* Help CTA */}
					<div style={{
						opacity: visible ? 1 : 0,
						transition: 'opacity 0.65s ease 0.45s',
					}}>
						<HelpCTA />
					</div>
				</div>
			</div>

			{/* Custom bundle nudge toast — no react-toastify needed */}
			<BundleNudgeToast />
		</>
	)
}

export default Resources