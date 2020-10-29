import React from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Image, Button, } from 'antd'
import { FolderOpenFilled, } from '@ant-design/icons'

import Blank from '../../images/blank.png'

const { Title } = Typography

export default function Clients(): JSX.Element {
	const history = useHistory()

	const renderClient = (imgSrc: string | undefined, url: string | undefined): JSX.Element => {
		return imgSrc && imgSrc.length && url && url.length ? (
			<Image
				width={150}
				src={imgSrc}
				placeholder={
					<Image
						src={Blank}
						width={150}
					/>
				}
				onClick={() => window.open(url, '_blank')}
				style={{ cursor: 'pointer', }}
			/>
		) : <></>
	}

	return (
		<div style={{ width: '100%', }}>
			<Title level={2}>Notable Cients</Title>
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
				{renderClient(process.env.REACT_APP_CLIENT_1_IMG, process.env.REACT_APP_CLIENT_1_URL)}
				{renderClient(process.env.REACT_APP_CLIENT_2_IMG, process.env.REACT_APP_CLIENT_2_URL)}
				{renderClient(process.env.REACT_APP_CLIENT_3_IMG, process.env.REACT_APP_CLIENT_3_URL)}
				{renderClient(process.env.REACT_APP_CLIENT_4_IMG, process.env.REACT_APP_CLIENT_4_URL)}
			</div>
			<div className="section" />
			<Button type="primary" shape="round" icon={<FolderOpenFilled />} size={'large'} onClick={() => history.push('portfolio')}>
				See Portfolio
      </Button>
		</div>
	)
}
