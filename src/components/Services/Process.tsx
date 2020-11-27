import React, { useState, } from 'react'
import { Typography, Steps, } from 'antd'

const { Title, } = Typography
const { Step, } = Steps

const steps = [
	{
		title: 'Strategy Call',
		content: 'We will have a strategy call to discuss requirements and scope',
	},
	{
		title: 'Delivery',
		content: 'Almega Digital will deliver designs and/or software deliverables as agreed upon in the Strategy Call',
	},
	{
		title: 'Feedback',
		content: 'Any feedback you have for deliverables will be discussed and applied in feedback rounds',
	},
]

function Process(): JSX.Element {
	const [current, setCurrent] = useState<number>(0)

	return (
		<>
			<Title level={2}>Our Process</Title>
			<Steps current={current} onChange={(newCurrent: number) => setCurrent(newCurrent)}>
				{steps.map((step: { title: string, content: string, }, index: number) => {
					return <Step key={index} title={step.title} description={step.content} />
				})}
			</Steps>
		</>
	)
}

export default Process
