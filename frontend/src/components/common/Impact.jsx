import React from 'react'
import SectionHeading from '../legal/SectionHeading'
import StatGrid from '../legal/StatGrid'
const Impact = () => {
	return (
		<section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-2xl p-8 md:p-12">
			<SectionHeading
				title="Our Impact in Numbers"
				subtitle="Here's what we've achieved together as a community since our launch in 2023"
				className="mb-10"
			/>

			<StatGrid
				variant="card"
				stats={[
					{ icon: '', number: '10K+', label: 'Active Users' },
					{ icon: '', number: '300+', label: 'Companies Tracked' },
					{ icon: '', number: '100+', label: 'Monthly Opportunities' },
					{ icon: '', number: '35+', label: 'Resources' },
					{ icon: '', number: '399', label: 'Topmate Bookings' },
					{ icon: '', number: 'Top 0.1%', label: 'Topmate Creator' },
					{ icon: '', number: '100%', label: 'Verified Listings' },
					{ icon: '', number: '0₹', label: 'To Browse Jobs' },
				]}
			/>

			<div className="mt-10 pt-8 border-t border-green-400 grid md:grid-cols-2 gap-6 text-center md:text-left">
				<div>
					<p className="text-lg font-medium mb-2">🏆 <strong>Topmate Achievements:</strong></p>
					<div className="flex flex-wrap gap-2 justify-center md:justify-start">
						<span className="bg-white/20 px-3 py-1 rounded-full text-sm">Community Care</span>
						<span className="bg-white/20 px-3 py-1 rounded-full text-sm">Curator</span>
						<span className="bg-white/20 px-3 py-1 rounded-full text-sm">People's Choice</span>
						<span className="bg-white/20 px-3 py-1 rounded-full text-sm">Top 1%</span>
					</div>
				</div>
				<div>
					<p className="text-lg font-medium mb-2">⏰ <strong>8+ Hours Daily</strong></p>
					<p className="text-green-100">Dedicated to finding opportunities, creating content, and supporting users</p>
				</div>
			</div>
		</section>

	)
}

export default Impact
