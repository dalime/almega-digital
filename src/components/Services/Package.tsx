import React, { useState, } from 'react'
import { Typography, } from 'antd'
import { LeftOutlined, } from '@ant-design/icons'

import { ServicePackage, } from '../../types'
import ServiceCard from './ServiceCard'
import ServiceDetail from './ServiceDetail'

import { servicePackages, } from './services'

const { Link, } = Typography

interface Props {
	packageNumber: number
	heading: string
	metaTitle: string
	imgSrc: string
	imgAlt: string
	description: string
	startingPrice: string
	pointOne: string
	pointTwo: string
	pointThree: string
	scrollToContact(): void
	mobile?: boolean
	defaultLoad?: boolean
	setDefaultLoad?(): void
	packageMobile?: boolean
}

export default function Package(props: Props): JSX.Element {
	const { heading, scrollToContact, mobile, defaultLoad, setDefaultLoad, packageMobile, } = props

	const [detailedView, setDetailedView] = useState<boolean>(false)
	const [detailedService, setDetailedService] = useState<ServicePackage | null>(null)

	return (
		<div>
			{detailedView && !defaultLoad ? (
				<>
					<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: mobile ? 20 : 40, cursor: 'pointer', }} onClick={() => {
						setDetailedView(false)
						setDetailedService(null)
					}}><LeftOutlined style={{ marginRight: 5, color: '#1158bf', }} /><Link color="#1158bf">Back to services</Link></div>
					<ServiceDetail servicePackage={detailedService} mobile={mobile} scrollToContact={scrollToContact} packageMobile={packageMobile} />
				</>
			) : (
					<div style={{ display: 'flex', flex: 1, flexDirection: mobile || packageMobile ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: mobile ? 20 : 40, }} >
						{servicePackages[heading === 'Website & App Design' ? 'design' : heading === 'Website Development' ? 'web' : 'app'].map((servicePackage: ServicePackage, index: number) => {
							return (
								<ServiceCard key={index} servicePackage={servicePackage} setDetailedView={setDetailedView} setDetailedService={setDetailedService} setDefaultLoad={setDefaultLoad} />
							)
						})}
					</div>
				)}
		</div>
	)
}