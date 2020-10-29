import React, { useState, } from 'react'
import { useHistory, } from 'react-router-dom'
import { Menu, Input, Spin, message, } from 'antd';

import { sendEmail, } from '../actions'

const { Search } = Input

export default function Navigation(): JSX.Element {
	const [email, setEmail] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const history = useHistory()

	const handleClick = (route: string): void => {
		history.push(route)
	}

	const finishLoading = (): void => {
		setLoading(false)
		setEmail('')
	}

	return (
		<>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" onClick={() => handleClick('')}>Home</Menu.Item>
				<Menu.Item key="2" onClick={() => handleClick('portfolio')}>Portfolio</Menu.Item>
				<Menu.Item key="3" onClick={() => handleClick('service')}>Service</Menu.Item>
				<Menu.Item key="4" onClick={() => handleClick('about')}>About</Menu.Item>
				<Menu.Item key="5" onClick={() => { }} id="menu-email-box">
					<Search
						placeholder="Your email"
						enterButton="Get a quote"
						size="large"
						value={email}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
						onSearch={(value: string) => {
							setLoading(true)
							sendEmail(value).then(() => {
								finishLoading()
								message.success('You will be contacted shortly.')
							}).catch(() => {
								finishLoading()
								message.error('Sorry, your email cannot be shared at this time.')
							})
						}}
						style={{ paddingTop: 10, }}
					/>
					{loading && <Spin />}
				</Menu.Item>
			</Menu>
		</>
	)
}
