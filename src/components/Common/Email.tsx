import React, { useState, } from 'react'
import { Input, Spin, message, } from 'antd'

import { joinMailList, } from '../../actions'

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
				enterButton="Join our mailing list"
				size="large"
				value={email}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
				onSearch={(emailAddress: string) => {
					setLoading(true)
					joinMailList(emailAddress).then(() => {
						finishLoading()
						message.success('You have been added to our mailing list.')
					}).catch(() => {
						finishLoading()
						message.error('Sorry, we cannot add you to our mailing list at this time.')
					})
				}}
				style={{ paddingTop: 10, }}
			/>
			{loading && <Spin />}
		</>
	)
}
