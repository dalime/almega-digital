import React from 'react'
import { Typography, Image, Button, } from 'antd'
import { InfoCircleOutlined, } from '@ant-design/icons'

import Blank from '../../images/blank.png'

const { Title, Paragraph, } = Typography

interface Props {
	heading: string
	imgSrc: string
	imgAlt: string
	description: string
	startingPrice: string
	pointOne: string
	pointTwo: string
	pointThree: string
	scrollToContact(): void
}

export default function Package(props: Props): JSX.Element {
	const { heading, imgSrc, imgAlt, description, startingPrice, pointOne, pointTwo, pointThree, scrollToContact, } = props

	return (
		<div>
			<Title level={2}>{heading}</Title>
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
				<Image
					src={imgSrc}
					alt={imgAlt}
					width={400}
					placeholder={
						<Image
							src={Blank}
							width={150}
						/>
					}
					style={{ minWidth: 200, }}
				/>
				<div>
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
