import React from 'react'
import { Card, } from 'antd'

const { Meta, } = Card

interface ItemProps {
	imgSrc: string
	url: string
	title: string
	summary: string
}

export default function Item(props: ItemProps): JSX.Element {
	const { imgSrc, url, title, summary, } = props

	return (
		<Card
			hoverable
			style={{ width: '100%', }}
			cover={<img alt={title} src={imgSrc} onClick={() => window.open(url, '_blank')} style={{ height: 100, width: 'auto', }} />}
		>
			<Meta title={title} description={summary} />
		</Card>
	)
}
