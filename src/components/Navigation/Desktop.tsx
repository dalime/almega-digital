import React from 'react'
import { Layout, } from 'antd'

import Menu from './Menu'

const { Header, } = Layout

export default function Desktop(): JSX.Element {
	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%', minHeight: '10vh', }}>
			<Menu />
		</Header>
	)
}
