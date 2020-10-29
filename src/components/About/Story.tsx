import React from 'react'
import { Image, Typography, } from 'antd'

import Logo from '../../images/logo512.png'

const { Text, Title, } = Typography

export default function Story(): JSX.Element {
	return (
		<>
			<Title level={2}>Our Story</Title>
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
				<Image
					width={200}
					src={Logo}
				/>
				<div />
				<Text style={{ textAlign: 'left', paddingLeft: 20, }}>{process.env.REACT_APP_STORY || ''}</Text>
			</div>
		</>
	)
}
