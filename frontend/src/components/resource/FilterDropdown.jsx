import { useEffect, useRef } from 'react'

export const filterOptions = [
	{
		id: 'isBestSeller',
		label: 'Best Seller',
		icon: (
			<svg width={13} height={13} fill="currentColor" viewBox="0 0 20 20">
				<path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
			</svg>
		),
		color: '#f97316',
		bg: 'rgba(249,115,22,0.08)',
		border: 'rgba(249,115,22,0.22)',
	},
	{
		id: 'isPlacementFocused',
		label: 'Placement Focused',
		icon: (
			<svg width={13} height={13} fill="currentColor" viewBox="0 0 20 20">
				<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
			</svg>
		),
		color: '#3b82f6',
		bg: 'rgba(59,130,246,0.08)',
		border: 'rgba(59,130,246,0.22)',
	},
	{
		id: 'isAdvancedLevel',
		label: 'Advanced',
		icon: (
			<svg width={13} height={13} fill="currentColor" viewBox="0 0 20 20">
				<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
			</svg>
		),
		color: '#ef4444',
		bg: 'rgba(239,68,68,0.08)',
		border: 'rgba(239,68,68,0.22)',
	},
]

function FilterDropdown({ selectedFilters, onToggle, onClear, isOpen, onOpenChange }) {
	const containerRef = useRef(null)
	const hasFilters = selectedFilters.length > 0

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (isOpen && containerRef.current && !containerRef.current.contains(e.target))
				onOpenChange(false)
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isOpen, onOpenChange])

	return (
		<div style={{ position: 'relative', flexShrink: 0 }} ref={containerRef}>
			{/* Trigger button */}
			<button
				onClick={() => onOpenChange(!isOpen)}
				style={{
					display: 'flex', alignItems: 'center', gap: 8,
					padding: '13px 18px',
					background: hasFilters ? '#f97316' : 'rgba(255,255,255,0.85)',
					backdropFilter: 'blur(16px)',
					WebkitBackdropFilter: 'blur(16px)',
					border: hasFilters
						? '1.5px solid #f97316'
						: '1.5px solid rgba(249,115,22,0.2)',
					borderRadius: 100,
					color: hasFilters ? '#fff' : '#f97316',
					fontSize: 14, fontWeight: 600,
					cursor: 'pointer',
					fontFamily: 'system-ui, -apple-system, sans-serif',
					boxShadow: hasFilters
						? '0 6px 18px rgba(249,115,22,0.32)'
						: '0 2px 6px rgba(0,0,0,0.04)',
					transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
				}}
				onMouseEnter={e => {
					if (!hasFilters) e.currentTarget.style.background = 'rgba(249,115,22,0.08)'
				}}
				onMouseLeave={e => {
					if (!hasFilters) e.currentTarget.style.background = 'rgba(255,255,255,0.85)'
				}}
			>
				<svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
						d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
				</svg>
				Filter
				{hasFilters && (
					<span style={{
						display: 'flex', alignItems: 'center', justifyContent: 'center',
						width: 20, height: 20,
						background: 'rgba(255,255,255,0.25)',
						borderRadius: '50%',
						fontSize: 11, fontWeight: 700, color: '#fff',
					}}>
						{selectedFilters.length}
					</span>
				)}
			</button>

			{/* Dropdown */}
			{isOpen && (
				<div style={{
					position: 'absolute', right: 0, top: 'calc(100% + 10px)',
					width: 240,
					background: 'rgba(255,255,255,0.92)',
					backdropFilter: 'blur(20px)',
					WebkitBackdropFilter: 'blur(20px)',
					border: '1px solid rgba(249,115,22,0.15)',
					borderRadius: 16,
					boxShadow: '0 20px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(249,115,22,0.08)',
					zIndex: 50,
					overflow: 'hidden',
					animation: 'fadeUp 0.2s cubic-bezier(0.22,1,0.36,1)',
				}}>
					{/* Header */}
					<div style={{
						display: 'flex', alignItems: 'center', justifyContent: 'space-between',
						padding: '12px 16px',
						borderBottom: '1px solid rgba(249,115,22,0.1)',
					}}>
						<span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>
							Filter Resources
						</span>
						{hasFilters && (
							<button
								onClick={onClear}
								style={{
									fontSize: 12, color: '#f97316', fontWeight: 600,
									background: 'none', border: 'none', cursor: 'pointer',
									padding: 0, fontFamily: 'inherit',
								}}
							>
								Clear all
							</button>
						)}
					</div>

					{/* Options */}
					<div style={{ padding: 8 }}>
						{filterOptions.map(filter => {
							const isSelected = selectedFilters.includes(filter.id)
							return (
								<button
									key={filter.id}
									onClick={() => onToggle(filter.id)}
									style={{
										width: '100%', display: 'flex', alignItems: 'center', gap: 10,
										padding: '10px 12px', borderRadius: 10,
										background: isSelected ? filter.bg : 'transparent',
										border: isSelected
											? `1px solid ${filter.border}`
											: '1px solid transparent',
										cursor: 'pointer',
										fontFamily: 'system-ui, -apple-system, sans-serif',
										transition: 'all 0.18s ease',
										textAlign: 'left',
									}}
									onMouseEnter={e => {
										if (!isSelected) e.currentTarget.style.background = 'rgba(249,115,22,0.05)'
									}}
									onMouseLeave={e => {
										if (!isSelected) e.currentTarget.style.background = 'transparent'
									}}
								>
									{/* Checkbox */}
									<div style={{
										width: 18, height: 18, borderRadius: 5, flexShrink: 0,
										display: 'flex', alignItems: 'center', justifyContent: 'center',
										background: isSelected ? filter.color : 'transparent',
										border: isSelected ? `2px solid ${filter.color}` : '2px solid #d1d5db',
										transition: 'all 0.18s ease',
									}}>
										{isSelected && (
											<svg width={10} height={10} fill="none" stroke="#fff" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
											</svg>
										)}
									</div>

									{/* Icon + label */}
									<span style={{ color: isSelected ? filter.color : '#6b7280' }}>
										{filter.icon}
									</span>
									<span style={{
										fontSize: 13, fontWeight: 500,
										color: isSelected ? filter.color : '#374151',
									}}>
										{filter.label}
									</span>
								</button>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}

export default FilterDropdown