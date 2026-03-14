import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
	<svg width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24"
		style={{ transition: 'transform 0.2s', flexShrink: 0 }}>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
	</svg>
)

const LocationIcon = () => (
	<svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
			d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
	</svg>
)

const CompanyCard = ({ company }) => {
	const [hovered, setHovered] = useState(false)

	const initials = company.company
		? company.company.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
		: '??'

	return (
		<Link
			to={`/company-details/${encodeURIComponent(company.company)}/${encodeURIComponent(company.role)}`}
			style={{ textDecoration: 'none' }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div style={{
				background: 'rgba(255,255,255,0.72)',
				backdropFilter: 'blur(20px)',
				WebkitBackdropFilter: 'blur(20px)',
				border: hovered
					? '1px solid rgba(249,115,22,0.32)'
					: '1px solid rgba(249,115,22,0.12)',
				borderRadius: 20,
				padding: '22px 24px',
				height: '100%',
				boxSizing: 'border-box',
				cursor: 'pointer',
				transition: 'all 0.35s cubic-bezier(0.34,1.2,0.64,1)',
				transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
				boxShadow: hovered
					? '0 20px 40px rgba(249,115,22,0.13), 0 4px 12px rgba(0,0,0,0.05)'
					: '0 2px 8px rgba(0,0,0,0.04)',
				position: 'relative',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				gap: 14,
			}}>
				{/* Top shimmer on hover */}
				<div style={{
					position: 'absolute', top: 0, left: 0, right: 0, height: 1,
					background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)',
					opacity: hovered ? 1 : 0,
					transition: 'opacity 0.3s',
				}} />

				{/* Header row */}
				<div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
					{/* Company avatar */}
					<div style={{
						width: 44, height: 44, flexShrink: 0,
						background: hovered
							? 'rgba(249,115,22,0.18)'
							: 'rgba(249,115,22,0.10)',
						borderRadius: 12,
						display: 'flex', alignItems: 'center', justifyContent: 'center',
						fontSize: 14, fontWeight: 700,
						color: '#f97316',
						transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
						transform: hovered ? 'scale(1.1) rotate(-4deg)' : 'scale(1) rotate(0)',
						letterSpacing: '-0.02em',
						fontFamily: 'system-ui, -apple-system, sans-serif',
					}}>
						{initials}
					</div>

					<div style={{ flex: 1, minWidth: 0 }}>
						<h3 style={{
							fontSize: 15, fontWeight: 700,
							color: '#111',
							margin: '0 0 3px',
							letterSpacing: '-0.02em',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}>
							{company.company}
						</h3>
						<p style={{
							fontSize: 13, fontWeight: 500,
							color: '#f97316',
							margin: 0,
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}>
							{company.role}
						</p>
					</div>
				</div>

				{/* Location + meta */}
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
					{company.location && (
						<span style={{
							display: 'inline-flex', alignItems: 'center', gap: 4,
							fontSize: 12, color: '#9ca3af', fontWeight: 400,
						}}>
							<LocationIcon />
							{company.location}
						</span>
					)}
					{company.type && (
						<span style={{
							fontSize: 11, fontWeight: 600,
							color: '#f97316',
							background: 'rgba(249,115,22,0.08)',
							border: '1px solid rgba(249,115,22,0.18)',
							padding: '2px 9px',
							borderRadius: 100,
							letterSpacing: '0.03em',
						}}>
							{company.type}
						</span>
					)}
					{company.experience && (
						<span style={{
							fontSize: 11, fontWeight: 500,
							color: '#6b7280',
							background: 'rgba(107,114,128,0.08)',
							border: '1px solid rgba(107,114,128,0.15)',
							padding: '2px 9px',
							borderRadius: 100,
						}}>
							{company.experience}
						</span>
					)}
				</div>

				{/* Description snippet */}
				{company.description && (
					<p style={{
						fontSize: 13, color: '#9ca3af',
						lineHeight: 1.6, margin: 0,
						display: '-webkit-box',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
					}}>
						{company.description}
					</p>
				)}

				{/* Footer CTA */}
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginTop: 'auto',
					paddingTop: 4,
				}}>
					{company.deadline && (
						<span style={{ fontSize: 11, color: '#d1d5db', fontWeight: 400 }}>
							Due {company.deadline}
						</span>
					)}
					<span style={{
						display: 'inline-flex', alignItems: 'center', gap: hovered ? 8 : 4,
						color: '#f97316', fontSize: 13, fontWeight: 600,
						marginLeft: 'auto',
						transition: 'gap 0.2s',
					}}>
						View Details <ArrowIcon />
					</span>
				</div>
			</div>
		</Link>
	)
}

export default CompanyCard