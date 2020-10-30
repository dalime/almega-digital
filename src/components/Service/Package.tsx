import React from 'react'
import { Typography, Image, } from 'antd'

import Blank from '../../images/blank.png'

const { Title, Text, } = Typography

interface Props {
	heading: string
	imgSrc: string
	imgAlt: string
	description: string
}

export default function Package(props: Props): JSX.Element {
	const { heading, imgSrc, imgAlt, description, } = props

	return (
		<div>
			<Title level={2}>{heading}</Title>
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
				<Image
					src={imgSrc}
					alt={imgAlt}
					width={400}
					placeholder={
						<Image
							src={Blank}
							width={150}
						/>
					}
				/>
				<Text style={{ marginLeft: 20, }}>{description}</Text>
			</div>
		</div>
	)
}
