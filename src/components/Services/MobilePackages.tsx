import React, { ReactText, useState, CSSProperties, } from 'react'
import { Menu, Dropdown, Typography, } from 'antd'
import { FormatPainterOutlined, LaptopOutlined, CodeOutlined, DownOutlined, } from '@ant-design/icons'

interface MenuClickEvent {
	domEvent: any
	item: any
	key: ReactText
	keyPath: ReactText[]
}

interface Props {
	service: number
	packages: JSX.Element[]
}

const { Text, } = Typography

const styles: CSSProperties = {
	fontSize: 20, color: '#1158bf',
}

export default function MobilePackages(props: Props): JSX.Element {
	const { service, packages, } = props

	const [packageChoice, setPackageChoice] = useState<"Web & App Design" | "Website Development" | "App Development">(service === 1 ? "Web & App Design" : service === 3 ? "App Development" : "Website Development")
	const [packageChoiceIcon, setPackageChoiceIcon] = useState<JSX.Element>(service === 1 ? <FormatPainterOutlined style={styles} /> : service === 3 ? <CodeOutlined style={styles} /> : <LaptopOutlined style={styles} />)

	const handlePackagePick = (info: MenuClickEvent): void => {
		const _info = info.key.toString() as "Web & App Design" | "Website Development" | "App Development"

		setPackageChoice(_info)
		setPackageChoiceIcon(_info === "Web & App Design" ? <FormatPainterOutlined style={styles} /> : _info === "App Development" ? <CodeOutlined style={styles} /> : <LaptopOutlined style={styles} />)
	}

	const renderContent = (): JSX.Element => {
		let contentDiv: JSX.Element

		switch (packageChoice) {
			case "Web & App Design":
				contentDiv = packages[0]
				break
			case "Website Development":
				contentDiv = packages[1]
				break
			case "App Development":
				contentDiv = packages[2]
				break
			default:
				contentDiv = packages[1]
				break
		}

		return (
			<div style={{ marginTop: 20, marginBottom: 20, }}>
				{contentDiv}
			</div>
		)
	}

	const renderMenuTab = (key: string, text: string, icon: JSX.Element): JSX.Element => {
		return (
			<Menu.Item key={key} style={{ ...styles, color: '#000000', }}>{icon} {text}</Menu.Item>
		)
	}

	const MenuElement: JSX.Element = (
		<Menu onClick={handlePackagePick}>
			{renderMenuTab("Web & App Design", "Web & App Design", <FormatPainterOutlined style={styles} />)}
			{renderMenuTab("Website Development", "Website Development", <LaptopOutlined style={styles} />)}
			{renderMenuTab("App Development", "App Development", <CodeOutlined style={styles} />)}
		</Menu>
	)

	const renderDropdown = (): JSX.Element => {
		return (
			<Dropdown overlay={MenuElement}>
				<button className="ant-dropdown-link" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.preventDefault()} style={{ border: 'none', background: 'transparent', }}>
					<>{packageChoiceIcon} <Text style={{ ...styles, marginLeft: 5, marginRight: 5, }}>{packageChoice}</Text> <DownOutlined style={styles} /></>
				</button>
			</Dropdown>
		)
	}

	return (
		<>
			<div>
				{renderDropdown()}
				{packages.length === 3 && renderContent()}
				{renderDropdown()}
			</div>
		</>
	)
}
