import React from 'react'
import { Typography, } from 'antd'
import { CheckOutlined, } from '@ant-design/icons'

import Email from '../Common/Email'

const { Title, Text, } = Typography

export default function CallToAction(): JSX.Element {
	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', background: '#d8e5f8', padding: 20, borderRadius: 50, }}>
			<Title level={3}>Your digital ideas from beginning to end</Title>
			<div>
				<Email />
				<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, }}><CheckOutlined /><Text>Quality</Text><CheckOutlined /><Text>Timeliness</Text><CheckOutlined /><Text>Communication</Text></div>
			</div>
		</div>
	)
}
