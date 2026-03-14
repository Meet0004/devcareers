import booksIcon from '../../assets/svg/books.svg'

function ResourcesHeader() {
	return (
		<div style={{
			textAlign: 'center',
			marginBottom: 40,
		}}>
			{/* Live dot eyebrow */}
			<div style={{
				display: 'inline-flex', alignItems: 'center', gap: 8,
				fontSize: 12, fontWeight: 600, letterSpacing: '0.1em',
				textTransform: 'uppercase', color: '#f97316',
				marginBottom: 18,
			}}>
				<span style={{
					width: 7, height: 7, background: '#22c55e',
					borderRadius: '50%', position: 'relative', display: 'inline-block',
				}}>
					<span style={{
						position: 'absolute', inset: -3, borderRadius: '50%',
						background: '#22c55e',
						animation: 'pulseRing 1.8s ease infinite',
					}} />
				</span>
				Interview Tips & Complete Guide
			</div>

			{/* Title */}
			<h1 style={{
				fontSize: 'clamp(32px, 5vw, 56px)',
				fontWeight: 700,
				lineHeight: 1.06,
				letterSpacing: '-0.03em',
				color: '#0a0a0a',
				margin: '0 0 16px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 14,
				flexWrap: 'wrap',
			}}>
				<img src={booksIcon} style={{ width: 44, height: 44 }} alt="" />
				Career{' '}
				<span style={{
					background: 'linear-gradient(135deg, #f97316 0%, #ea580c 45%, #ff8c42 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
					animation: 'shimmerText 3s linear infinite',
					backgroundSize: '200% auto',
				}}>
					Resources
				</span>
			</h1>

			<p style={{
				fontSize: 17, fontWeight: 400, color: '#6b7280',
				lineHeight: 1.65, maxWidth: 640, margin: '0 auto 20px',
			}}>
				Cheatsheets, interview guides, and roadmaps - everything you need to land the job.
			</p>

			{/* Verified badge */}
			<a
				href="https://topmate.io"
				target="_blank"
				rel="noopener noreferrer"
				style={{
					display: 'inline-flex', alignItems: 'center', gap: 6,
					background: 'rgba(34,197,94,0.08)',
					border: '1px solid rgba(34,197,94,0.22)',
					color: '#16a34a',
					fontSize: 12, fontWeight: 600,
					padding: '5px 14px', borderRadius: 100,
					textDecoration: 'none',
					transition: 'background 0.2s',
				}}
				onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.14)'}
				onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,197,94,0.08)'}
			>
				<svg width={12} height={12} fill="currentColor" viewBox="0 0 20 20">
					<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				Verified by Topmate.io
			</a>
		</div>
	)
}

export default ResourcesHeader