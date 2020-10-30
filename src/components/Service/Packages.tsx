import React from 'react'
import { Tabs, Typography, } from 'antd'
import { FormatPainterOutlined, CodeOutlined, PartitionOutlined, } from '@ant-design/icons'

import Package from './Package'
import DesignImg from '../../images/service-design.jpg'
import DevelopImg from '../../images/service-development.jpg'
import ConsultImg from '../../images/service-consulting.jpg'

const { Title, } = Typography
const { TabPane } = Tabs

export default function Packages(): JSX.Element {
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
			<Tabs defaultActiveKey="2" centered>
				{renderTab('1', 'Web & App Design', <FormatPainterOutlined />, <Package heading={process.env.REACT_APP_PACKAGE_1_HEADING || ''} imgSrc={DesignImg} imgAlt={process.env.REACT_APP_PACKAGE_1_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_1_DESC || ''} />)}
				{renderTab('2', 'Website & App Development', <CodeOutlined />, <Package heading={process.env.REACT_APP_PACKAGE_2_HEADING || ''} imgSrc={DevelopImg} imgAlt={process.env.REACT_APP_PACKAGE_2_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_2_DESC || ''} />)}
				{renderTab('3', 'IT Consulting', <PartitionOutlined />, <Package heading={process.env.REACT_APP_PACKAGE_1_HEADING || ''} imgSrc={ConsultImg} imgAlt={process.env.REACT_APP_PACKAGE_3_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_3_DESC || ''} />)}
			</Tabs>
		</>
	)
}
