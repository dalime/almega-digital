import React from 'react'
import { Typography, } from 'antd'
import { CheckSquareOutlined, } from '@ant-design/icons'

import Email from './Email'

const { Text, } = Typography

export default function Checks(): JSX.Element {
	const renderCheckPoint = (text: string): JSX.Element => {
		return (
			<>
				<CheckSquareOutlined /><Text>{text}</Text>
			</>
		)
	}

	return (
		<div>
			<Email />
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10, }}>
				{renderCheckPoint('Quality')}
				{renderCheckPoint('Timeliness')}
				{renderCheckPoint('Communication')}
			</div>
		</div>
	)
}
