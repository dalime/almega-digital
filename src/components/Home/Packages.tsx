import React from 'react'
import { useHistory, } from 'react-router-dom'
import { Row, Button, } from 'antd'
import { FolderOpenFilled, FormatPainterOutlined, CodeOutlined, PartitionOutlined, } from '@ant-design/icons'

import { Props, } from '../../types'
import PackageCard from './PackageCard'
import MobilePackages from './MobilePackages'
import Design from '../../images/ui-design.jpg'
import Develop from '../../images/development.jpg'
import Present from '../../images/presentation.jpeg'

export default function Packages(props: Props): JSX.Element {
	const { mobile, } = props

	const history = useHistory()

	const PackagesElements: JSX.Element[] = [
		<PackageCard key={1} imgSrc={Design} imgAlt={'UI Designer working with wireframes'} metaTitle={process.env.REACT_APP_SERVICE_PACKAGE_1_TITLE || ''} metaDesc={process.env.REACT_APP_SERVICE_PACKAGE_1_DESC || ''} metaOne={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_1 || ''} metaTwo={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_2 || ''} metaThree={process.env.REACT_APP_SERVICE_PACKAGE_1_POINT_3 || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_1_PRICE || ''} service={1} />,
		<PackageCard key={2} imgSrc={Develop} imgAlt={'Laptop with code editor open'} metaTitle={process.env.REACT_APP_SERVICE_PACKAGE_2_TITLE || ''} metaDesc={process.env.REACT_APP_SERVICE_PACKAGE_2_DESC || ''} metaOne={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_1 || ''} metaTwo={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_2 || ''} metaThree={process.env.REACT_APP_SERVICE_PACKAGE_2_POINT_3 || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_2_PRICE || ''} service={2} />,
		<PackageCard key={3} imgSrc={Present} imgAlt={'Meeting between two individuals next to two laptops'} metaTitle={process.env.REACT_APP_SERVICE_PACKAGE_3_TITLE || ''} metaDesc={process.env.REACT_APP_SERVICE_PACKAGE_3_DESC || ''} metaOne={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_1 || ''} metaTwo={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_2 || ''} metaThree={process.env.REACT_APP_SERVICE_PACKAGE_3_POINT_3 || ''} startingPrice={process.env.REACT_APP_SERVICE_PACKAGE_3_PRICE || ''} service={3} />,
	]

	const PackageIcons: JSX.Element[] = [<FormatPainterOutlined />, <CodeOutlined />, <PartitionOutlined />]

	return (
		<>
			{mobile ? <MobilePackages packages={PackagesElements} icons={PackageIcons} /> : (
				<div className="site-card-wrapper">
					<Row gutter={16}>
						{PackagesElements}
					</Row>
				</div>
			)}
			<div className="section" />
			<Button type="primary" shape="round" icon={<FolderOpenFilled />} size={'large'} onClick={() => history.push('service')}>
				Find Out More
      </Button>
		</>
	)
}
