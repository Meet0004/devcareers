import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ResourcesTopmate from '../../data/resourceData/resourceTopmate'

const BADGE_CONFIG = [
	{
		key: 'isPopular',
		label: 'Popular',
		bgColor: 'bg-purple-50', textColor: 'text-purple-700', borderColor: 'border-purple-200',
		d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
	},
	{
		key: 'isBestSeller',
		label: 'Best Seller',
		bgColor: 'bg-orange-50', textColor: 'text-orange-700', borderColor: 'border-orange-200',
		fillRule: true,
		d: 'M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z',
	},
	{
		key: 'isPlacementFocused',
		label: 'Placement Focused',
		bgColor: 'bg-blue-50', textColor: 'text-blue-700', borderColor: 'border-blue-200',
		d: 'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z',
	},
	{
		key: 'isAdvancedLevel',
		label: 'Advanced',
		bgColor: 'bg-red-50', textColor: 'text-red-700', borderColor: 'border-red-200',
		fillRule: true,
		d: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z',
	},
]

const ARROW_PATH = 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'

const ArrowBtn = () => (
	<div className="p-2 bg-amber-500 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
			<path fillRule="evenodd" d={ARROW_PATH} clipRule="evenodd" />
		</svg>
	</div>
)

const BadgeIcon = ({ d, fillRule }) => (
	<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
		{fillRule ? <path fillRule="evenodd" d={d} clipRule="evenodd" /> : <path d={d} />}
	</svg>
)

const Badges = ({ badges }) =>
	badges.length > 0 ? (
		<div className="flex flex-wrap gap-1">
			{badges.map(({ label, bgColor, textColor, borderColor, d, fillRule }) => (
				<span key={label} className={`flex items-center gap-1 ${bgColor} ${textColor} text-xs font-semibold px-2 py-1 rounded-full border ${borderColor} shadow-sm`}>
					<BadgeIcon d={d} fillRule={fillRule} />
					{label}
				</span>
			))}
		</div>
	) : null

const PriceLabel = ({ price }) => (
	<span className="text-lg font-bold text-amber-600">
		{price && price !== '' ? price : 'Free'}
	</span>
)

function ResourceCard({ resource, isMobile = false }) {
	const navigate = useNavigate()
	const [hovered, setHovered] = useState(false)
	const cardRef = useRef(null)

	const isFree = !resource.price || resource.price === ''

	const handleCardClick = () => {
		if (isFree) {
			window.open(resource.link, '_blank')
		} else {
			const topmateLink = ResourcesTopmate[resource.id]
			if (topmateLink) {
				window.open(topmateLink, '_blank')
			} else {
				navigate(`/resource/${resource.id}`)
			}
		}
	}

	const handleMouseMove = (e) => {
		const card = cardRef.current
		if (!card) return
		const rect = card.getBoundingClientRect()
		const rx = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -6
		const ry = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 6
		card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.02)`
		card.style.transitionDelay = '0ms'
	}

	const handleMouseLeave = () => {
		const card = cardRef.current
		if (!card) return
		card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
		setHovered(false)
	}

	const badges = BADGE_CONFIG.filter(({ key }) => resource?.[key])

	if (isMobile) {
		return (
			<div
				onClick={handleCardClick}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				style={{
					display: 'flex', alignItems: 'center', gap: 16,
					padding: '14px 16px',
					background: 'rgba(255,255,255,0.75)',
					backdropFilter: 'blur(16px)',
					WebkitBackdropFilter: 'blur(16px)',
					border: hovered ? '1px solid rgba(249,115,22,0.35)' : '1px solid rgba(249,115,22,0.13)',
					borderRadius: 16,
					cursor: 'pointer',
					position: 'relative', overflow: 'hidden',
					boxShadow: hovered
						? '0 12px 32px rgba(249,115,22,0.14), 0 2px 8px rgba(0,0,0,0.05)'
						: '0 2px 8px rgba(0,0,0,0.04)',
					transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
					transition: 'all 0.3s cubic-bezier(0.34,1.2,0.64,1)',
				}}
			>
				<div style={{
					position: 'absolute', top: 0, left: 0, right: 0, height: 1,
					background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.45), transparent)',
					opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
				}} />
				<img
					src={resource.image}
					alt={resource.title}
					style={{
						width: 88, height: 88, objectFit: 'cover', borderRadius: 12, flexShrink: 0,
						transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
						transform: hovered ? 'scale(1.06) rotate(-2deg)' : 'scale(1) rotate(0deg)',
					}}
				/>
				<div style={{ flexGrow: 1, minWidth: 0 }}>
					<h4 className="font-semibold text-lg text-gray-800 mb-1">{resource.title}</h4>
					<p className="text-sm text-gray-600 line-clamp-2 mb-2">{resource.description}</p>
					<Badges badges={badges} />
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
					<PriceLabel price={resource.price} />
					<ArrowBtn />
				</div>
			</div>
		)
	}

	return (
		<div
			ref={cardRef}
			onClick={handleCardClick}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={handleMouseLeave}
			style={{
				display: 'flex', flexDirection: 'column',
				background: 'rgba(255,255,255,0.78)',
				backdropFilter: 'blur(20px)',
				WebkitBackdropFilter: 'blur(20px)',
				border: hovered ? '1px solid rgba(249,115,22,0.38)' : '1px solid rgba(249,115,22,0.13)',
				borderRadius: 18,
				overflow: 'hidden',
				cursor: 'pointer',
				position: 'relative',
				willChange: 'transform',
				boxShadow: hovered
					? '0 24px 48px rgba(249,115,22,0.14), 0 4px 12px rgba(0,0,0,0.06)'
					: '0 2px 10px rgba(0,0,0,0.05)',
				transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease',
			}}
		>
			{/* Shimmer top line */}
			<div style={{
				position: 'absolute', top: 0, left: 0, right: 0, height: 1, zIndex: 2,
				background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.55), transparent)',
				opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
			}} />

			{/* Image with zoom on hover */}
			<div className="w-full aspect-square bg-gray-100" style={{ overflow: 'hidden' }}>
				<img
					src={resource.image}
					alt={resource.title}
					className="w-full h-full object-cover"
					style={{
						transition: 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1)',
						transform: hovered ? 'scale(1.07)' : 'scale(1)',
					}}
				/>
			</div>

			{/* Body — internals untouched */}
			<div className="p-4 flex flex-col flex-grow">
				<h4 className="font-semibold text-base text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">{resource.title}</h4>
				<p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">{resource.description}</p>
				<div className="mb-3"><Badges badges={badges} /></div>
				<div className="flex items-center justify-between mt-auto pt-3 border-t border-amber-200">
					<PriceLabel price={resource.price} />
					<ArrowBtn />
				</div>
			</div>
		</div>
	)
}

export default ResourceCard