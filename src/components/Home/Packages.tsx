import React from 'react'
import { Card, Col, Row } from 'antd'

import Design from '../../images/ui-design.jpg'
import Develop from '../../images/development.jpg'
import Present from '../../images/presentation.jpeg'

const { Meta } = Card

export default function Packages(): JSX.Element {
	return (
		<div className="site-card-wrapper">
			<Row gutter={16}>
				<Col span={8}>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={<img alt="Design package" src={Design} />}
					>
						<Meta title="Design package" description="UI Design process" />
					</Card>
				</Col>
				<Col span={8}>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={<img alt="Develop package" src={Develop} />}
					>
						<Meta title="Develop package" description="Web / Software Development process" />
					</Card>
				</Col>
				<Col span={8}>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={<img alt="Combined package" src={Present} />}
					>
						<Meta title="Combined package" description="Full Digital Product process" />
					</Card>
				</Col>
			</Row>
		</div>
	)
}
