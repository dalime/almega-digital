import React from 'react'
import { Typography, } from 'antd'

const { Title, } = Typography

export default function Hero(): JSX.Element {
	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
			<Title level={1}>{process.env.REACT_APP_ABOUT_TITLE || ''}</Title>
			<div />
			<Title level={3}>{process.env.REACT_APP_ABOUT_SUMMARY || ''}</Title>
		</div>
	)
}
