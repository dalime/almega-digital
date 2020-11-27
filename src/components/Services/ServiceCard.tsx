import React from 'react'
import { Card, } from 'antd'

import { ServicePackage, } from '../../types'

const { Meta, } = Card

interface Props {
	servicePackage: ServicePackage
	setDetailedView(b: boolean): void
	setDetailedService(s: ServicePackage): void
	setDefaultLoad?(): void
}

export default function ServiceCard(props: Props): JSX.Element {
	const { servicePackage, setDetailedView, setDetailedService, setDefaultLoad, } = props
	const { name, thumbnail, thumbnailAlt, startingPrice, } = servicePackage

	return (
		<Card
			hoverable
			style={{ width: 240, marginBottom: 20, }}
			cover={<img alt={thumbnailAlt} src={thumbnail} style={{ height: 180, objectFit: 'cover', }} />}
			onClick={() => {
				setDetailedView(true)
				setDetailedService(servicePackage)
				if (setDefaultLoad) setDefaultLoad()
			}}
		>
			<Meta title={name} description={`from ${startingPrice.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			})}`} />
		</Card>
	)
}
