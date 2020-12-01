import React from 'react'
import { Tabs, } from 'antd'
import { FormatPainterOutlined, LaptopOutlined, CodeOutlined, } from '@ant-design/icons'

const { TabPane } = Tabs

interface Props {
	service: number
	packages: JSX.Element[]
	setDefaultLoad?(): void
	mobile?: boolean
}

export default function Packages(props: Props): JSX.Element {
	const { service, packages, setDefaultLoad, mobile, } = props

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
		<Tabs defaultActiveKey={service.toString() || '2'} centered onTabClick={() => setDefaultLoad ? setDefaultLoad() : {}} tabPosition={mobile ? 'left' : 'top'}>
			{packages.length === 3 &&
				<>
					{renderTab('1', 'Web & App Design', < FormatPainterOutlined />, packages[0])}
					{renderTab('2', 'Website Development', <LaptopOutlined />, packages[1])}
					{renderTab('3', 'App Development', <CodeOutlined />, packages[2])}
				</>
			}
		</Tabs>
	)
}
