import React from 'react'
import { Image, } from 'antd'

import Step1 from '../../images/call.jpg'
import Step2 from '../../images/delivery.jpg'
import Step3 from '../../images/feedback.jpg'
import Blank from '../../images/blank.png'

interface Props {
	step: number
}

export default function ServiceImage(props: Props): JSX.Element {
	const { step, } = props

	const renderImage = (src: string, alt: string): JSX.Element => {
		return (
			<Image
				src={src}
				alt={alt}
				placeholder={
					< Image
						src={Blank}
						width={300}
					/>
				}
				width={300}
				className="steps-image"
			/>
		)
	}

	const emptyDiv: JSX.Element = <div style={{ width: 200, }} />

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
			{step === 0 ? renderImage(Step1, 'Strategy Call') : emptyDiv}
			{step === 1 ? renderImage(Step2, 'Product Delivery') : emptyDiv}
			{step === 2 ? renderImage(Step3, 'Feedback Rounds') : emptyDiv}
		</div>
	)
}
