import React from 'react'
import { useHistory, } from 'react-router-dom'
import { Menu, } from 'antd';

import Email from '../Common/Email'

interface Props {
	mobile?: boolean
	closeMobileMenu?(): void
}

export default function Desktop(props: Props): JSX.Element {
	const { mobile, closeMobileMenu, } = props

	const history = useHistory()

	const handleClick = (route: string): void => {
		history.push(route)
		if (mobile && closeMobileMenu) closeMobileMenu()
	}

	return (
		<>
			<Menu theme="dark" mode={mobile ? 'vertical' : 'horizontal'} defaultSelectedKeys={['1']}>
				<Menu.Item key="1" onClick={() => handleClick('')}>Home</Menu.Item>
				<Menu.Item key="2" onClick={() => handleClick('services')}>Services</Menu.Item>
				<Menu.Item key="3" onClick={() => handleClick('about')}>About</Menu.Item>
				{!mobile && (
					<Menu.Item key="4" onClick={() => { }} id="menu-email-box">
						<Email />
					</Menu.Item>
				)}
			</Menu>
		</>
	)
}
