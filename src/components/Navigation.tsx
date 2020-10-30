import React from 'react'
import { useHistory, } from 'react-router-dom'
import { Menu, } from 'antd';

import Email from './Common/Email'

export default function Navigation(): JSX.Element {
	const history = useHistory()

	const handleClick = (route: string): void => {
		history.push(route)
	}

	return (
		<>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" onClick={() => handleClick('')}>Home</Menu.Item>
				<Menu.Item key="3" onClick={() => handleClick('service')}>Service</Menu.Item>
				<Menu.Item key="4" onClick={() => handleClick('about')}>About</Menu.Item>
				<Menu.Item key="5" onClick={() => { }} id="menu-email-box">
					<Email />
				</Menu.Item>
			</Menu>
		</>
	)
}
