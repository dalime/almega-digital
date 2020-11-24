import React from 'react'
import { Typography, Image, Button, } from 'antd'
import { InfoCircleOutlined, } from '@ant-design/icons'

const { Title, Paragraph, } = Typography

interface Props {
	heading: string
	metaTitle: string
	imgSrc: string
	imgAlt: string
	description: string
	startingPrice: string
	pointOne: string
	pointTwo: string
	pointThree: string
	scrollToContact(): void
	mobile?: boolean
}

export default function Package(props: Props): JSX.Element {
	const { heading, imgSrc, imgAlt, description, startingPrice, pointOne, pointTwo, pointThree, scrollToContact, mobile, } = props

	return (
		<div>
			<Title level={mobile ? 3 : 2}>{heading}</Title>
			<div style={{ display: 'flex', flex: 1, flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: mobile ? 'center' : 'flex-start', }}>
				<Image
					src={imgSrc}
					alt={imgAlt}
					width={mobile ? 200 : 400}
					style={{ minWidth: 200, height: mobile ? 200 : 'auto', }}
				/>
				<div style={mobile ? { marginTop: 20, } : {}}>
					<Paragraph style={{ marginLeft: 20, textAlign: 'left', }} >{description}</Paragraph>
					<ul style={{ textAlign: 'left', marginTop: 20, }}>
						<li>{pointOne}</li>
						<li>{pointTwo}</li>
						<li>{pointThree}</li>
					</ul>
				</div>
			</div>
			<Title level={4}>Starting at ${startingPrice}</Title>
			<Button type="primary" shape="round" icon={<InfoCircleOutlined />} size={'large'} onClick={() => scrollToContact()}>
				Get a Quote
      </Button>
		</div>
	)
}
