import React, { useState, } from 'react'
import { Layout, } from 'antd'

import Menu from './Menu'

const { Sider, } = Layout

export default function Mobile(): JSX.Element {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

	const toggleCollapsed = (): void => {
		setIsCollapsed(!isCollapsed)
	}

	return (
		<Sider
			breakpoint="md"
			collapsedWidth="0"
			collapsed={isCollapsed}
			onClick={() => toggleCollapsed()}
			theme="dark"
			reverseArrow
		>
			<Menu mobile={true} closeMobileMenu={toggleCollapsed} />
		</Sider>
	)
}
