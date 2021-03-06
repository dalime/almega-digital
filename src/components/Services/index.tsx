import React, { useEffect, useRef, useState, } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory, withRouter, RouteComponentProps, } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { TeamOutlined, } from '@ant-design/icons'

import { Props } from '../../types'
import Package from './Package'
import Packages from './Packages'
import MobilePackages from './MobilePackages'
import Process from './Process'
import Contact from '../Common/Contact'
import DesignImg from '../../images/service-design.jpg'
import WebsiteImg from '../../images/service-development.jpg'
import DevelopImg from '../../images/app-development.jpg'

const { Title, } = Typography

interface ServiceProps extends RouteComponentProps, Props { }

interface StateObject {
	service: number
}

function Service(props: ServiceProps): JSX.Element {
	const { location, mobile, } = props
	const { state, } = location

	const history = useHistory()

	const contactRef = useRef<HTMLDivElement | null>(null)

	const stateObj: StateObject = state as StateObject
	const [defaultLoad, setDefaultLoad] = useState<boolean>(true)

	const packageMobile = useMediaQuery({ query: '(max-width: 1160px)', })
	const mobilePackageLimit = useMediaQuery({ query: '(max-width: 600px)', })

	useEffect(() => {
		window.scrollTo(0, 0)
	})

	const scrollToContact = (): void => {
		if (contactRef.current) window.scrollTo(0, contactRef.current.offsetTop)
	}

	const PackageElements: JSX.Element[] = [
		<Package packageNumber={1} heading={process.env.REACT_APP_PACKAGE_1_HEADING || ''} metaTitle={'Website & App Design'} imgSrc={DesignImg} imgAlt={process.env.REACT_APP_PACKAGE_1_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_1_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_1_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_3 || ''} scrollToContact={scrollToContact} mobile={mobile} defaultLoad={defaultLoad} setDefaultLoad={() => setDefaultLoad(false)} packageMobile={packageMobile} />,
		<Package packageNumber={2} heading={process.env.REACT_APP_PACKAGE_2_HEADING || ''} metaTitle={'Website Development'} imgSrc={WebsiteImg} imgAlt={process.env.REACT_APP_PACKAGE_2_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_2_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_2_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_3 || ''} scrollToContact={scrollToContact} mobile={mobile} defaultLoad={defaultLoad} setDefaultLoad={() => setDefaultLoad(false)} packageMobile={packageMobile} />,
		<Package packageNumber={3} heading={process.env.REACT_APP_PACKAGE_3_HEADING || ''} metaTitle={'App Development'} imgSrc={DevelopImg} imgAlt={process.env.REACT_APP_PACKAGE_3_IMG_ALT || ''} description={process.env.REACT_APP_PACKAGE_3_DESC || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_3_PRICE || ''} pointOne={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_1 || ''} pointTwo={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_2 || ''} pointThree={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_3 || ''} scrollToContact={scrollToContact} mobile={mobile} defaultLoad={defaultLoad} setDefaultLoad={() => setDefaultLoad(false)} packageMobile={packageMobile} />,
	]

	return (
		<div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%', marginTop: mobile ? 50 : '10vh', }}>
			<Title>Our Service Packages</Title>
			{mobilePackageLimit ? (
				<MobilePackages service={stateObj ? stateObj.service : 1} packages={PackageElements} />
			) : (
					<Packages service={stateObj ? stateObj.service : 1} packages={PackageElements} setDefaultLoad={() => setDefaultLoad(true)} mobile={mobile} />
				)}
			<div className="section" />
			<Process mobile={mobile} />
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