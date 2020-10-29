import React from 'react'
import { Image, Typography, } from 'antd'

import Splash from '../../images/hero.jpg'

const { Title, } = Typography

export default function Problem(): JSX.Element {
	return (
		<div style={{ width: '100vw', position: 'relative', textAlign: 'center', }}>
			<Title style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>Your Digital Ambitions Start Here</Title>
			<Image src={Splash} alt="Phone" style={{ width: '100%', height: 'auto', }} />
		</div>
	)
}
