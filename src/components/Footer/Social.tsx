import React from 'react'
import { InstagramOutlined, TwitterOutlined, LinkedinOutlined, BehanceOutlined, MediumOutlined, } from '@ant-design/icons'

interface Props {
	mobile?: boolean
}

export default function Social(props: Props): JSX.Element {
	const { mobile, } = props

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 40, marginBottom: 40, }}>
			<InstagramOutlined style={{ fontSize: mobile ? 25 : 35, color: '#001529', marginLeft: mobile ? 5 : 10, marginRight: mobile ? 5 : 10, }} onClick={() => window.open(process.env.REACT_APP_SOCIAL_INSTAGRAM || 'https://www.instagram.com', '_blank')} />
			<TwitterOutlined style={{ fontSize: mobile ? 25 : 35, color: '#001529', marginLeft: mobile ? 5 : 10, marginRight: mobile ? 5 : 10, }} onClick={() => window.open(process.env.REACT_APP_SOCIAL_TWITTER || 'https://www.twitter.com', '_blank')} />
			<LinkedinOutlined style={{ fontSize: mobile ? 25 : 35, color: '#001529', marginLeft: mobile ? 5 : 10, marginRight: mobile ? 5 : 10, }} onClick={() => window.open(process.env.REACT_APP_SOCIAL_LINKEDIN || 'https://www.linkedin.com', '_blank')} />
			<BehanceOutlined style={{ fontSize: mobile ? 25 : 35, color: '#001529', marginLeft: mobile ? 5 : 10, marginRight: mobile ? 5 : 10, }} onClick={() => window.open(process.env.REACT_APP_SOCIAL_BEHANCE || 'https://www.behance.net', '_blank')} />
			<MediumOutlined style={{ fontSize: mobile ? 25 : 35, color: '#001529', marginLeft: mobile ? 5 : 10, marginRight: mobile ? 5 : 10, }} onClick={() => window.open(process.env.REACT_APP_SOCIAL_MEDIUM || 'https://wwww.medium.com', '_blank')} />
		</div>
	)
}
