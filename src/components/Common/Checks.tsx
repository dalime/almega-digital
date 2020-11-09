import React from 'react'
import { Typography, } from 'antd'
import { CheckSquareOutlined, } from '@ant-design/icons'

import Email from './Email'

const { Text, } = Typography

interface Props {
	mobile?: boolean
	hero?: boolean
}

export default function Checks(props: Props): JSX.Element {
	const { mobile, hero, } = props

	const renderCheckPoint = (text: string): JSX.Element => {
		const Set: JSX.Element = <><CheckSquareOutlined /><Text style={{ marginLeft: 5, }}>{text}</Text></>
		return mobile ? <div>{Set}</div> : Set
	}

	const renderChecks = (): JSX.Element => {
		return (
			<>
				{ renderCheckPoint('Quality')}
				{ renderCheckPoint('Timeliness')}
				{ renderCheckPoint('Communication')}
			</>
		)
	}

	return (
		<div>
			<Email />
			<div style={{ display: 'flex', flex: 1, flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: mobile ? 'flex-start' : 'center', marginTop: 10, marginLeft: mobile ? '30%' : 0, }}>
				{!hero && renderChecks()}
			</div>
		</div>
	)
}
