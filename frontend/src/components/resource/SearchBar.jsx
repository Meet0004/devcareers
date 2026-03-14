import { useState } from 'react'

function SearchBar({ value, onChange, placeholder }) {
	const [focused, setFocused] = useState(false)

	return (
		<div style={{
			position: 'relative',
			flex: 1,
			transition: 'transform 0.2s ease',
			transform: focused ? 'scale(1.012)' : 'scale(1)',
		}}>
			{/* Search icon */}
			<div style={{
				position: 'absolute', left: 16, top: '50%',
				transform: 'translateY(-50%)',
				pointerEvents: 'none',
				color: focused ? '#f97316' : '#9ca3af',
				transition: 'color 0.2s',
				display: 'flex', alignItems: 'center',
			}}>
				<svg width={17} height={17} fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
						d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
				</svg>
			</div>

			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				style={{
					width: '100%',
					padding: '13px 44px 13px 46px',
					fontSize: 15,
					fontFamily: 'system-ui, -apple-system, sans-serif',
					color: '#111',
					background: 'rgba(255,255,255,0.85)',
					backdropFilter: 'blur(16px)',
					WebkitBackdropFilter: 'blur(16px)',
					border: focused
						? '1.5px solid rgba(249,115,22,0.55)'
						: '1.5px solid rgba(249,115,22,0.2)',
					borderRadius: 100,
					outline: 'none',
					boxSizing: 'border-box',
					boxShadow: focused
						? '0 8px 28px rgba(249,115,22,0.13), 0 2px 6px rgba(0,0,0,0.04)'
						: '0 2px 6px rgba(0,0,0,0.04)',
					transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
				}}
			/>

			{value && (
				<button
					onClick={() => onChange('')}
					style={{
						position: 'absolute', right: 12, top: '50%',
						transform: 'translateY(-50%)',
						background: 'rgba(249,115,22,0.1)',
						border: 'none', borderRadius: '50%',
						width: 26, height: 26,
						display: 'flex', alignItems: 'center', justifyContent: 'center',
						cursor: 'pointer', color: '#f97316', padding: 0,
						transition: 'background 0.2s',
					}}
					onMouseEnter={e => e.currentTarget.style.background = 'rgba(249,115,22,0.2)'}
					onMouseLeave={e => e.currentTarget.style.background = 'rgba(249,115,22,0.1)'}
				>
					<svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			)}
		</div>
	)
}

export default SearchBar