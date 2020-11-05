import React from 'react'
import { Layout, } from 'antd'

import Menu from './Menu'

const { Sider, } = Layout

export default function Mobile(): JSX.Element {
	return (
		<Sider
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={broken => {
				console.log(broken);
			}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}}
		>
			<Menu />
		</Sider>
	)
}
