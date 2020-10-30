import React, { useEffect, } from 'react'
import { useHistory, } from 'react-router-dom'
import { Button, } from 'antd'
import { TeamOutlined, } from '@ant-design/icons'

import Packages from './Packages'
import Process from './Process'
import Contact from '../Common/Contact'

export default function Service(): JSX.Element {
	const history = useHistory()

	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%', marginTop: '10vh', }}>
			<Packages />
			<div className="section" />
			<Process />
			<div className="section" />
			<Button type="primary" shape="round" icon={<TeamOutlined />} size={'large'} onClick={() => history.push('about')}>
				Who We Are
      </Button>
			<div className="section" />
			<Contact />
		</div>
	)
}
