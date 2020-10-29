import React from 'react'
import { Steps, } from 'antd'

const { Step, } = Steps

function Process(): JSX.Element {
	return (
		<Steps>
			<Step title="Strategy Call" description="We will have a strategy call to discuss requirements and scope." />
			<Step title="UI Mockups" description="Almega Digital will provide you with robust UI mockups so you know exactly what you aregetting." />
			<Step title="Delivery" description="You will receive your requested product fully functional and deployed." />
		</Steps>
	)
}

export default Process
