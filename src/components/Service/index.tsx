import React, { useEffect, useRef, } from 'react'
import { useHistory, withRouter, RouteComponentProps, } from 'react-router-dom'
import { Button, } from 'antd'
import { TeamOutlined, } from '@ant-design/icons'

import { Props } from '../../types'
import Packages from './Packages'
import Process from './Process'
import Contact from '../Common/Contact'

interface ServiceProps extends RouteComponentProps, Props { }

interface StateObject {
	service: number
}

function Service(props: ServiceProps): JSX.Element {
	const { location, mobile, } = props
	const { state, } = location

	const stateObj: StateObject = state as StateObject

	const history = useHistory()

	const contactRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		window.scrollTo(0, 0)
	})

	const scrollToContact = (): void => {
		if (contactRef.current) window.scrollTo(0, contactRef.current.offsetTop)
	}

	return (
		<div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%', marginTop: mobile ? 30 : '10vh', }}>
			<Packages service={stateObj ? stateObj.service : 1} scrollToContact={scrollToContact} />
			<div className="section" />
			<Process />
			<div className="section" />
			<Button type="primary" shape="round" icon={<TeamOutlined />} size={'large'} onClick={() => history.push('about')}>
				Who We Are
      </Button>
			<div className="section" ref={contactRef} />
			<Contact mobile={mobile} />
		</div>
	)
}

export default withRouter(Service)