import React from 'react'
import { Collapse, } from 'antd'

const { Panel, } = Collapse

interface Props {
	packages: JSX.Element[]
}

export default function MobilePackages(props: Props): JSX.Element {
	const { packages, } = props

	const renderPackage = (packageDiv: JSX.Element, index: number): JSX.Element => {
		return (
			<Panel header={packageDiv.props.metaTitle as string} key={index}>
				{packageDiv}
			</Panel>
		)
	}

	return (
		<Collapse defaultActiveKey={['1']}>
			{packages.map((packageDiv: JSX.Element, index: number) => {
				return renderPackage(packageDiv, index + 1)
			})}
		</Collapse>
	)
}
