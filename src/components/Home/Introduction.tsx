import React from 'react'
import { Typography, } from 'antd'

import { Props, } from '../../types'
import logoImg from '../../images/logo512.png'

const { Title } = Typography

export default function Hero(props: Props): JSX.Element {
	const { mobile, } = props

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
			<img src={logoImg} alt="Almega Digital logo" style={{ width: 100, height: 100, }} />
			<Title>Almega Digital</Title>
			<Title level={3} style={{ paddingLeft: mobile ? 10 : 0, paddingRight: mobile ? 10 : 0, }}>Web and Software Development & Design Agency</Title>
		</div>
	)
}
