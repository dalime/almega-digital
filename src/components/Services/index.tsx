import React, { useEffect, useRef, } from 'react'
import { useHistory, withRouter, RouteComponentProps, } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { TeamOutlined, FormatPainterOutlined, CodeOutlined, PartitionOutlined, } from '@ant-design/icons'

import { Props } from '../../types'
import Package from './Package'
import Packages from './Packages'
import MobilePackages from '../Home/MobilePackages'
import Process from './Process'
import Contact from '../Common/Contact'
import DesignImg from '../../images/service-design.jpg'
import DevelopImg from '../../images/service-development.jpg'
import ConsultImg from '../../images/service-consulting.jpg'

const { Title, } = Typography

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

	const PackageElements: JSX.Element[] = [
		<Package heading={process.env.REACT_APP_PACKAGE_1_HEADING || ''} metaTitle={'Website & App Design'} imgSrc={DesignImg} imgAlt={process.env.REACT_APP_PACKAGE_1_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_1_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_1_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_3 || ''} scrollToContact={scrollToContact} mobile={mobile} />,
		<Package heading={process.env.REACT_APP_PACKAGE_2_HEADING || ''} metaTitle={'Web & App Development'} imgSrc={DevelopImg} imgAlt={process.env.REACT_APP_PACKAGE_2_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_2_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_2_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_3 || ''} scrollToContact={scrollToContact} mobile={mobile} />,
		<Package heading={process.env.REACT_APP_PACKAGE_3_HEADING || ''} metaTitle={'Design & IT Consulting'} imgSrc={ConsultImg} imgAlt={process.env.REACT_APP_PACKAGE_3_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_3_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_3_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_3 || ''} scrollToContact={scrollToContact} mobile={mobile} />,
	]

	return (
		<div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%', marginTop: mobile ? 50 : '10vh', }}>
			<Title>Our Service Packages</Title>
			{mobile ? <MobilePackages packages={PackageElements} icons={[<FormatPainterOutlined />, <CodeOutlined />, <PartitionOutlined />]} service={stateObj ? stateObj.service : 1} /> : <Packages service={stateObj ? stateObj.service : 1} packages={PackageElements} />}
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