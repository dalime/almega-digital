import React, { useState, ReactText, } from 'react'
import { Form, Input, Button, Typography, Dropdown, Menu, message as AntMessage, } from 'antd'
import { DownOutlined, FormatPainterOutlined, CodeOutlined, PartitionOutlined, } from '@ant-design/icons'

import { contactAlmega, } from '../../actions'

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

interface MenuClickEvent {
	domEvent: any
	item: any
	key: ReactText
	keyPath: ReactText[]
}

interface Props {
	mobile?: boolean
}

export default function Contact(props: Props): JSX.Element {
	const { mobile, } = props

	const [packageChoice, setPackageChoice] = useState<"Web & App Design" | "Website & App Development" | "Design & IT Consulting" | "Packages">("Packages")

	const onFinish = (values: { user: { email: string, message: string, name: string, website: string, } }) => {
		const { user, } = values
		const { email, message, name, website, } = user

		contactAlmega(name, email, message || '', packageChoice === "Packages" ? '' : packageChoice.toString(), website || '').then(() => {
			AntMessage.success('You will be contacted shortly.')
		}).catch(() => {
			AntMessage.error('Sorry, we could not send your inquiry at this time.')
		})
	}

	const handlePackagePick = (info: MenuClickEvent): void => {
		setPackageChoice(info.key.toString() as "Web & App Design" | "Website & App Development" | "Design & IT Consulting" | "Packages")
	}

	const menu = (
		<Menu onClick={handlePackagePick}>
			<Menu.Item key="Web & App Design" icon={<FormatPainterOutlined />}>
				Web & App Design
    	</Menu.Item>
			<Menu.Item key="Website & App Development" icon={<CodeOutlined />}>
				Website & App Development
    	</Menu.Item>
			<Menu.Item key="Design & IT Consulting" icon={<PartitionOutlined />}>
				Design & IT Consulting
    	</Menu.Item>
		</Menu>
	)

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
				<Form.Item name={['user', 'package']} label="Package">
					<Dropdown overlay={menu} className="contact-package-button">
						<Button>
							{packageChoice === "Web & App Design" ? <FormatPainterOutlined /> : packageChoice === "Website & App Development" ? <CodeOutlined /> : packageChoice === "Design & IT Consulting" ? <PartitionOutlined /> : <></>} {packageChoice} {packageChoice === "Packages" && <DownOutlined />}
						</Button>
					</Dropdown>
				</Form.Item>
				<Form.Item name={['user', 'message']} label="Message" rules={[{ required: true, }]}>
					<Input.TextArea />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: mobile ? 0 : 8 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
