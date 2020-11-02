import React from 'react'
import { useHistory, } from 'react-router-dom'
import { Card, Col, Row, Button, Typography, } from 'antd'
import { FolderOpenFilled, } from '@ant-design/icons'

import Design from '../../images/ui-design.jpg'
import Develop from '../../images/development.jpg'
import Present from '../../images/presentation.jpeg'

const { Text, Title, } = Typography
const { Meta } = Card

export default function Packages(): JSX.Element {
	const history = useHistory()

	const renderPackageCard = (imgSrc: string, imgAlt: string, metaTitle: string, metaDesc: string, metaOne: string, metaTwo: string, metaThree: string, startingPrice: string, service: number): JSX.Element => {
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

	return (
		<>
			<div className="site-card-wrapper">
				<Row gutter={16}>
					{renderPackageCard(Design, 'UI Designer working with wireframes', process.env.REACT_APP_SERVICE_PACKAGE_1_TITLE || '', process.env.REACT_APP_SERVICE_PACKAGE_1_DESC || '', process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_1 || '', process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_2 || '', process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_3 || '', process.env.REACT_APP_SERVICE_PACKAGE_1_PRICE || '', 1)}
					{renderPackageCard(Develop, 'Laptop with code editor open', process.env.REACT_APP_SERVICE_PACKAGE_2_TITLE || '', process.env.REACT_APP_SERVICE_PACKAGE_2_DESC || '', process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_1 || '', process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_2 || '', process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_3 || '', process.env.REACT_APP_SERVICE_PACKAGE_2_PRICE || '', 2)}
					{renderPackageCard(Present, 'Meeting between two individuals next to two laptops', process.env.REACT_APP_SERVICE_PACKAGE_3_TITLE || '', process.env.REACT_APP_SERVICE_PACKAGE_3_DESC || '', process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_1 || '', process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_2 || '', process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_3 || '', process.env.REACT_APP_SERVICE_PACKAGE_3_PRICE || '', 3)}
				</Row>
			</div>
			<div className="section" />
			<Button type="primary" shape="round" icon={<FolderOpenFilled />} size={'large'} onClick={() => history.push('service')}>
				Find Out More
      </Button>
		</>
	)
}
