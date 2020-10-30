import React, { useState, } from 'react'
import { Steps, } from 'antd'

import ServiceImage from './ServiceImage'

const { Step, } = Steps

const steps = [
	{
		title: 'Strategy Call',
		content: 'We will have a strategy call to discuss requirements and scope.',
	},
	{
		title: 'Delivery',
		content: 'Almega Digital will deliver designs and/or software deliverables as agreed upon in the Strategy Call.',
	},
	{
		title: 'Feedback',
		content: 'Any feedback you have for deliverables will be discussed and applied in feedback rounds.',
	},
]

function Process(): JSX.Element {
	const [current, setCurrent] = useState<number>(0)

	return (
		<>
			<Steps current={current} onChange={(newCurrent: number) => setCurrent(newCurrent)}>
				{steps.map((step: { title: string, content: string, }, index: number) => {
					return <Step key={index} title={step.title} description={step.content} />
				})}
			</Steps>
			<ServiceImage step={current} />
		</>
	)
}

export default Process
