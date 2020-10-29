import React from 'react'
import { Image, Typography, } from 'antd'

import Logo from '../../images/logo512.png'

const { Title, } = Typography

export default function Hero(): JSX.Element {
	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
			<Image
				width={200}
				src={Logo}
			/>
			<div />
			<Title level={1}>Almega Digital</Title>
		</div>
	)
}
