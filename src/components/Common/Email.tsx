import React, { useState, } from 'react'
import { Input, Spin, message, } from 'antd'

import { sendEmail, } from '../../actions'

const { Search } = Input

export default function Email(): JSX.Element {
	const [loading, setLoading] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')

	const finishLoading = (): void => {
		setLoading(false)
		setEmail('')
	}

	return (
		<>
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
		</>
	)
}
