import React, { useState, ReactText, CSSProperties, } from 'react'
import { Form, Input, Button, Typography, Dropdown, Menu, message as AntMessage, } from 'antd'
import { DownOutlined, FormatPainterOutlined, LaptopOutlined, CodeOutlined, } from '@ant-design/icons'

import { contactAlmega, } from '../../actions'

const { Title, Text, } = Typography

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}

const contentStyle: CSSProperties = {
	color: '#000000',
	textAlign: 'center',
	alignItems: 'center',
	background: '#FFFFFF',
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '10%',
	paddingRight: '10%',
	fontStyle: 'italic',
	whiteSpace: 'pre-line',
	fontSize: 20,
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
	paddingLeft?: boolean
	paddingRight?: boolean
}

export default function Contact(props: Props): JSX.Element {
	const { mobile, paddingLeft, paddingRight, } = props

	const [packageChoice, setPackageChoice] = useState<"Web & App Design" | "Website Development" | "App Development" | "Packages">("Packages")

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
		setPackageChoice(info.key.toString() as "Web & App Design" | "Website Development" | "App Development" | "Packages")
	}

	const menu = (
		<Menu onClick={handlePackagePick}>
			<Menu.Item key="Web & App Design" icon={<FormatPainterOutlined />}>
				Web & App Design
    	</Menu.Item>
			<Menu.Item key="Website Development" icon={<LaptopOutlined />}>
				Website Development
    	</Menu.Item>
			<Menu.Item key="App Development" icon={<CodeOutlined />}>
				App Development
    	</Menu.Item>
		</Menu>
	)

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: mobile ? 'column-reverse' : 'row', justifyContent: 'space-evenly', paddingLeft: paddingLeft ? '10vw' : 'auto', paddingRight: paddingRight ? '10vw' : 'auto', }}>
			<div style={{ width: mobile ? '100%' : '40%', marginTop: '10%', }}>
				<Text style={contentStyle}>{`
					"${process.env.REACT_APP_REVIEW_5 || ''}"					
				`}</Text>
				<img src={process.env.REACT_APP_REVIEW_5_LOGO || ''} alt={`${process.env.REACT_APP_REVIEW_5_AUTHOR || ''}'s logo`} width={100} style={{ width: 100, height: 'auto', }} />
			</div>
			<div style={{ width: mobile ? '100%' : '60%', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
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
								{packageChoice === "Web & App Design" ? <FormatPainterOutlined /> : packageChoice === "Website Development" ? <LaptopOutlined /> : packageChoice === "App Development" ? <CodeOutlined /> : <></>} {packageChoice} {packageChoice === "Packages" && <DownOutlined />}
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
		</div>
	)
}
