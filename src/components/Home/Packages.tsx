import React from 'react'
import { useHistory, } from 'react-router-dom'
import { Card, Col, Row, Button, } from 'antd'
import { FolderOpenFilled, } from '@ant-design/icons'

import Design from '../../images/ui-design.jpg'
import Develop from '../../images/development.jpg'
import Present from '../../images/presentation.jpeg'

const { Meta } = Card

export default function Packages(): JSX.Element {
	const history = useHistory()

	return (
		<>
			<div className="site-card-wrapper">
				<Row gutter={16}>
					<Col span={8}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="UI Design" src={Design} />}
						>
							<Meta title="Website & App Design" description="UI Design" />
						</Card>
					</Col>
					<Col span={8}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="Laptop with code" src={Develop} />}
						>
							<Meta title="Web & App Development" description="Website & App Development" />
						</Card>
					</Col>
					<Col span={8}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="IT Meeting" src={Present} />}
						>
							<Meta title="IT Consulting" description="IT Consulting" />
						</Card>
					</Col>
				</Row>
			</div>
			<div className="section" />
			<Button type="primary" shape="round" icon={<FolderOpenFilled />} size={'large'} onClick={() => history.push('service')}>
				Find Out More
      </Button>
		</>
	)
}
