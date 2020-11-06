import React from 'react'
import { Typography, } from 'antd'

import Checks from '../Common/Checks'

const { Title, } = Typography

interface Props {
	mobile?: boolean
}

export default function CallToAction(props: Props): JSX.Element {
	const { mobile, } = props

	return (
		<div style={{ width: mobile ? '100vw' : 'auto', display: 'flex', flex: 1, flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', background: '#d8e5f8', padding: 20, borderRadius: mobile ? 0 : 50, }}>
			<Title level={3} style={{ paddingLeft: 12, }}>Your digital ideas from beginning to end</Title>
			<Checks mobile={mobile} />
		</div>
	)
}
