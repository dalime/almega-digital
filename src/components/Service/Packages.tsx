import React from 'react'
import { Tabs, Typography, } from 'antd'
import { FormatPainterOutlined, CodeOutlined, PartitionOutlined, } from '@ant-design/icons'

import Package from './Package'
import DesignImg from '../../images/service-design.jpg'
import DevelopImg from '../../images/service-development.jpg'
import ConsultImg from '../../images/service-consulting.jpg'

const { Title, } = Typography
const { TabPane } = Tabs

interface Props {
	service: number
	scrollToContact(): void
}

export default function Packages(props: Props): JSX.Element {
	const { service, scrollToContact, } = props

	const renderTab = (key: string, title: string, icon: JSX.Element, content: JSX.Element): JSX.Element => {
		return (
			<TabPane
				tab={
					<span>
						{icon}
						{title}
					</span>
				}
				key={key}
			>
				{content}
			</TabPane>
		)
	}

	return (
		<>
			<Title>Standardized and Proven Packages</Title>
			<Tabs defaultActiveKey={service.toString() || '2'} centered>
				{renderTab('1', 'Web & App Design', <FormatPainterOutlined />, <Package heading={process.env.REACT_APP_PACKAGE_1_HEADING || ''} imgSrc={DesignImg} imgAlt={process.env.REACT_APP_PACKAGE_1_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_1_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_1_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_3 || ''} scrollToContact={scrollToContact} />)}
				{renderTab('2', 'Website & App Development', <CodeOutlined />, <Package heading={process.env.REACT_APP_PACKAGE_2_HEADING || ''} imgSrc={DevelopImg} imgAlt={process.env.REACT_APP_PACKAGE_2_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_2_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_2_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_3 || ''} scrollToContact={scrollToContact} />)}
				{renderTab('3', 'Design & IT Consulting', <PartitionOutlined />, <Package heading={process.env.REACT_APP_PACKAGE_3_HEADING || ''} imgSrc={ConsultImg} imgAlt={process.env.REACT_APP_PACKAGE_3_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_3_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_3_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_3 || ''} scrollToContact={scrollToContact} />)}
			</Tabs>
		</>
	)
}
