import React, { useEffect, } from 'react'
import { useHistory, } from 'react-router-dom'
import { Button, } from 'antd'
import { InboxOutlined, } from '@ant-design/icons'

import { Props, } from '../../types'
import Story from './Story'
import Hero from './Hero'
import Values from './Values'
// import Team from './Team'
import Contact from '../Common/Contact'

export default function About(props: Props): JSX.Element {
	const history = useHistory()

	useEffect(() => {
		window.scrollTo(0, 0)
	})

	const renderSection = (section: JSX.Element): JSX.Element => {
		return (
			<>
				<div className="section" />
				{section}
			</>
		)
	}

	return (
		<div style={{ paddingLeft: '10vw', paddingRight: '10vw', }}>
			{renderSection(<Hero />)}
			{renderSection(<Story />)}
			{renderSection(<Values />)}
			{/* {renderSection(<Team />)} */}
			{renderSection(<Button type="primary" shape="round" icon={<InboxOutlined />} size={'large'} onClick={() => history.push('service')}>
				Our Service
      </Button>)}
			{renderSection(<Contact />)}
		</div>
	)
}
