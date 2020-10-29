import React from 'react'

import Hero from './Hero'
// import Problem from './Problem'
import Packages from './Packages'
import Reviews from './Reviews'
import Clients from './Clients'
import Contact from './Contact'

export default function Home(): JSX.Element {
	const renderSection = (section: JSX.Element): JSX.Element => {
		return (
			<>
				<div className="section" />
				{section}
			</>
		)
	}

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
			{renderSection(<Hero />)}
			{/* {renderSection(<Problem />)} */}
			{renderSection(<Packages />)}
			{renderSection(<Reviews />)}
			{renderSection(<Clients />)}
			{renderSection(<Contact />)}
		</div>
	)
}
