import React from 'react'
import { Typography, } from 'antd'
import { FieldTimeOutlined, CheckCircleOutlined, PhoneOutlined, } from '@ant-design/icons'

const { Title, Text, } = Typography

interface Props {
	mobile?: boolean
}

export default function Values(props: Props): JSX.Element {
	const { mobile, } = props

	const spacer: JSX.Element = <div style={{ width: 20, }} />

	const renderValue = (icon: JSX.Element, title: string, text: string, first?: boolean): JSX.Element => {
		const titleElement: JSX.Element = <Title level={3} style={{ textAlign: 'left', }}>{title}</Title>

		return title.length && text.length ? (
			<div style={{ width: '100%', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: first ? '5vh' : '10vh', }}>
				{mobile ? <></> : icon}
				<div style={{ textAlign: 'left', paddingLeft: 20, }}>
					{mobile ? <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20, }}>{icon}{spacer}{titleElement}</div> : titleElement}
					<Text>{text}</Text>
				</div>
			</div>
		) : <></>
	}

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
			<Title level={2}>Our Values</Title>
			{renderValue(<CheckCircleOutlined style={{ fontSize: 60, color: '#1158bf', }} />, process.env.REACT_APP_VALUE_1 || '', process.env.REACT_APP_VALUE_1_TEXT || '', true)}
			{renderValue(<FieldTimeOutlined style={{ fontSize: 60, color: '#1158bf', }} />, process.env.REACT_APP_VALUE_2 || '', process.env.REACT_APP_VALUE_2_TEXT || '')}
			{renderValue(<PhoneOutlined style={{ fontSize: 60, color: '#1158bf', }} />, process.env.REACT_APP_VALUE_3 || '', process.env.REACT_APP_VALUE_3_TEXT || '')}
		</div>
	)
}
