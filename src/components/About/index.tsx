import React from 'react'

import Story from './Story'
import Hero from './Hero'
import Values from './Values'
import Team from './Team'
import Contact from '../Home/Contact'

export default function About(): JSX.Element {
	const renderSection = (section: JSX.Element): JSX.Element => {
		return (
			<>
				<div className="section" />
				{section}
			</>
		)
	}

	return (
		<div style={{ paddingLeft: '10vw', paddingRight: '10vw', }}>
			{renderSection(<Hero />)}
			{renderSection(<Story />)}
			{renderSection(<Values />)}
			{renderSection(<Team />)}
			{renderSection(<Contact />)}
		</div>
	)
}
