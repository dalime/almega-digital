import React from 'react'
import { Row, Col, Typography, Image, Button, } from 'antd'
import { InfoCircleOutlined, } from '@ant-design/icons'

import { ServicePackage, } from '../../types'
import BlankImg from '../../images/blank.png'

const { Title, Text, Link, } = Typography

interface Props {
	servicePackage: ServicePackage | null
	mobile?: boolean
	scrollToContact(): void
	packageMobile?: boolean
}

export default function ServiceDetail(props: Props): JSX.Element {
	const { servicePackage, mobile, scrollToContact, packageMobile, } = props

	if (!servicePackage) return <></>

	const { name, description, shortDesc, thumbnail, thumbnailAlt, startingPrice, } = servicePackage
	const { text, pointOne, pointTwo, pointThree, } = description

	return (
		<Row>
			<Col span={mobile || packageMobile ? 24 : 12} style={{ textAlign: 'left', }}>
				<Title level={2}>{name === 'UI Design' ? 'User Interface (UI) Design' : name === 'UX Audit' ? 'User Experience (UX) Audit' : name}</Title>
				<hr />
				<Title level={4}>from {startingPrice.toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}</Title>
				<Text>{shortDesc}</Text>
				<div style={{ height: 20, }} />
				<ul>
					<li>{pointOne}</li>
					<li>{pointTwo}</li>
					<li>{pointThree}</li>
				</ul>
				<Text>
					{text}
				</Text>
				<div style={{ marginTop: mobile || packageMobile ? 20 : 40, width: '100%', textAlign: 'center', }}>
					<Title level={4}>Starting from {startingPrice.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}</Title>
					<Button type="primary" shape="round" icon={<InfoCircleOutlined />} size={'large'} onClick={() => scrollToContact()}>
						Get a Quote
				</Button>
				</div>
			</Col>
			<Col span={mobile || packageMobile ? 24 : 12} style={{ textAlign: 'center', }}>
				<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', }}>
					<Image src={thumbnail} alt={thumbnailAlt} width={mobile ? 200 : 400} style={{ minWidth: 200, width: 200, height: mobile ? 200 : 'auto', maxHeight: 600, marginTop: mobile || packageMobile ? 20 : 'auto', }} fallback={BlankImg} />
					<Link onClick={() => scrollToContact()} style={{ color: 'rgba(0, 0, 0, 0.65)', marginTop: 20, }}>{name !== 'Strategy Call' ? `Hire Almega Digital for your ${name} project` : 'Schedule your Strategy Call today'}</Link>
				</div>
			</Col>
		</Row>
	)
}
