import React, { useEffect, } from 'react'

import Hero from './Hero'
import Introduction from './Introduction'
import Packages from './Packages'
import Reviews from './Reviews'
import Clients from './Clients'
import Contact from '../Common/Contact'

export default function Home(): JSX.Element {
	useEffect(() => {
		window.scrollTo(0, 0)
	})

	const renderSection = (section: JSX.Element, first?: boolean): JSX.Element => {
		return (
			<>
				{!first && <div className="section" />}
				{section}
			</>
		)
	}

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
			{renderSection(<Hero />, true)}
			{renderSection(<Introduction />)}
			{renderSection(<Packages />)}
			{renderSection(<Reviews />)}
			{renderSection(<Clients />)}
			{renderSection(<Contact />)}
		</div>
	)
}
