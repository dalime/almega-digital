import React from 'react'
import { Form, Input, Button, Typography, } from 'antd'

const { Title, } = Typography

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}

const validateMessages = {
	// eslint-disable-next-line no-template-curly-in-string
	required: '${label} is required!',
	types: {
		// eslint-disable-next-line no-template-curly-in-string
		email: '${label} is not validate email!',
	},
}

export default function Contact(): JSX.Element {
	const onFinish = (values: { user: { email: string, message: string, name: string, website: string, } }) => {
		console.log(values)
	}

	return (
		<div style={{ width: '100%', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
			<Title level={2}>Get a Free Quote</Title>
			<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{ marginTop: 20, }}>
				<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true, }]}>
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email', }]}>
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'website']} label="Website">
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'message']} label="Message" rules={[{ required: true, }]}>
					<Input.TextArea />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
