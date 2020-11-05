import React from 'react'
import { Collapse, } from 'antd'

const { Panel, } = Collapse

interface Props {
	packages: JSX.Element[]
	icons?: JSX.Element[]
	service?: number
}

export default function MobilePackages(props: Props): JSX.Element {
	const { packages, icons, service } = props

	const renderPackage = (packageDiv: JSX.Element, index: number): JSX.Element => {
		return (
			<Panel header={icons && icons.length === 3 ? <span>{icons[index]} {packageDiv.props.metaTitle as string}</span> : packageDiv.props.metaTitle as string} key={index + 1}>
				{packageDiv}
			</Panel>
		)
	}

	return (
		<Collapse defaultActiveKey={service ? service.toString() : ['1']}>
			{packages.map((packageDiv: JSX.Element, index: number) => {
				return renderPackage(packageDiv, index)
			})}
		</Collapse>
	)
}
