import React from 'react'
import { Typography, } from 'antd'

import Checks from '../Common/Checks'

const { Title, } = Typography

export default function CallToAction(): JSX.Element {
	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', background: '#d8e5f8', padding: 20, borderRadius: 50, }}>
			<Title level={3}>Your digital ideas from beginning to end</Title>
			<Checks />
		</div>
	)
}
