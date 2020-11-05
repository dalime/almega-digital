import React, { useEffect, } from 'react'

import { Props, } from '../../types'
import Hero from './Hero'
import Introduction from './Introduction'
import Packages from './Packages'
import Reviews from './Reviews'
import Clients from './Clients'
import Contact from '../Common/Contact'

export default function Home(props: Props): JSX.Element {
	const { mobile, } = props

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
			{renderSection(<Hero mobile={mobile} />, true)}
			{renderSection(<Introduction mobile={mobile} />)}
			{renderSection(<Packages mobile={mobile} />)}
			{renderSection(<Reviews mobile={mobile} />)}
			{renderSection(<Clients mobile={mobile} />)}
			{renderSection(<Contact mobile={mobile} />)}
		</div>
	)
}
