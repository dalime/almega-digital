import React from 'react'
import { Typography, } from 'antd'

import { Props, } from '../../types'
import Checks from '../Common/Checks'

const { Title, } = Typography

export default function Hero(props: Props): JSX.Element {
	const { mobile, } = props

	return (
		<div style={{ width: '100vw', position: 'relative', textAlign: 'center', }} className="hero-parallax">
			<Title style={{ position: 'absolute', top: mobile ? '30%' : '25%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', padding: mobile ? 12 : 0, }}>Your digital ideas from beginning to end</Title>
			<Title level={2} style={{ position: 'absolute', top: mobile ? '50%' : '35%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', padding: mobile ? 12 : 0, }}>A Web Development Agency to fulfill all your ambitions</Title>
			<div style={{ position: 'absolute', top: mobile ? '80%' : '65%', left: '50%', transform: 'translate(-50%, -50%)', width: mobile ? '100%' : 'auto', padding: mobile ? 12 : 0, }}><Checks mobile={mobile} /></div>
		</div>
	)
}
