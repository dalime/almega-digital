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
		<div style={{ width: mobile ? '100vw' : 'auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', padding: 20, }}>
			<Title level={3} style={{ paddingLeft: 12, marginBottom: mobile ? 20 : 40, }}>Your digital ideas from beginning to end</Title>
			<Checks mobile={mobile} />
		</div>
	)
}
