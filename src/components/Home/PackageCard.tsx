import React from 'react'
import { useHistory, } from 'react-router-dom'
import { Card, Col, Typography, } from 'antd'

const { Title, Text, } = Typography
const { Meta, } = Card

interface Props {
	imgSrc: string
	imgAlt: string
	metaTitle: string
	metaDesc: string
	metaOne: string
	metaTwo: string
	metaThree: string
	startingPrice: string
	service: number
}

export default function PackageCard(props: Props): JSX.Element {
	const { imgSrc, imgAlt, metaTitle, metaDesc, metaOne, metaTwo, metaThree, startingPrice, service, } = props

	const history = useHistory()

	return (
		<Col span={8}>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt={imgAlt} src={imgSrc} />}
				onClick={() => history.push({ pathname: 'service', state: { service, } })}
			>
				<Meta title={metaTitle} description={(
					<div>
						<Text>{metaDesc}</Text>
						<ul style={{ textAlign: 'left', }}>
							<li>{metaOne}</li>
							<li>{metaTwo}</li>
							<li>{metaThree}</li>
						</ul>
						<Title level={5}>Starting at ${startingPrice}</Title>
					</div>
				)} />
			</Card>
		</Col>
	)
}
