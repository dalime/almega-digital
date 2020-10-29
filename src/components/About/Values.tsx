import React from 'react'
import { Typography, } from 'antd'
import { FieldTimeOutlined, CheckCircleOutlined, PhoneOutlined, } from '@ant-design/icons'

const { Title, Text, } = Typography

export default function Values(): JSX.Element {
	const renderValue = (icon: JSX.Element, title: string, text: string, first?: boolean): JSX.Element => {
		return (
			<div style={{ width: '100%', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: first ? '5vh' : '10vh', }}>
				{icon}
				<div style={{ textAlign: 'left', paddingLeft: 20, }}>
					<Title level={3}>{title}</Title>
					<Text>{text}</Text>
				</div>
			</div>
		)
	}

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
			<Title level={2}>Our Values</Title>
			{renderValue(<FieldTimeOutlined style={{ fontSize: 40, color: '#1158bf', }} />, 'Timeliness', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati itaque quo nostrum repudiandae magnam excepturi ipsum vel at quia veritatis eum corrupti dolorum veniam nihil, assumenda impedit laudantium quaerat.', true)}
			{renderValue(<CheckCircleOutlined style={{ fontSize: 40, color: '#1158bf', }} />, 'Quality', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati itaque quo nostrum repudiandae magnam excepturi ipsum vel at quia veritatis eum corrupti dolorum veniam nihil, assumenda impedit laudantium quaerat.')}
			{renderValue(<PhoneOutlined style={{ fontSize: 40, color: '#1158bf', }} />, 'Communication', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati itaque quo nostrum repudiandae magnam excepturi ipsum vel at quia veritatis eum corrupti dolorum veniam nihil, assumenda impedit laudantium quaerat.')}
		</div>
	)
}
