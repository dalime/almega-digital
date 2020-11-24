import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

interface Props {
	metaTitle: string
	metaDesc: string
	imgSrc: string
	imgAlt: string
}

export default function ServiceCard(props: Props): JSX.Element {
	const { metaTitle, metaDesc, imgSrc, imgAlt, } = props

	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<img alt={imgAlt} src={imgSrc} />}
		>
			<Meta title={metaTitle} description={metaDesc} />
		</Card>
	)
}
