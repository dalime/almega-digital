import React from 'react'
import { Typography, } from 'antd'

import Item from './Item'

const { Title, } = Typography

export default function Portfolio(): JSX.Element {
	const renderItem = (imgSrc: string, url: string, title: string, summary: string): JSX.Element => {
		return imgSrc.length && url.length && title.length && summary.length ? (
			<div className="section">
				<Item imgSrc={imgSrc} url={url} title={title} summary={summary} />
			</div>
		) : <></>
	}

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-around', }}>
			<Title>Portfolio</Title>
			{renderItem(process.env.REACT_APP_PORTFOLIO_1_IMG || '', process.env.REACT_APP_PORTFOLIO_1_URL || '', process.env.REACT_APP_PORTFOLIO_1_TITLE || '', process.env.REACT_APP_PORTFOLIO_1_SUMMARY || '')}
			{renderItem(process.env.REACT_APP_PORTFOLIO_2_IMG || '', process.env.REACT_APP_PORTFOLIO_2_URL || '', process.env.REACT_APP_PORTFOLIO_2_TITLE || '', process.env.REACT_APP_PORTFOLIO_2_SUMMARY || '')}
		</div>
	)
}
