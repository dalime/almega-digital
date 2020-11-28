import React, { CSSProperties, } from 'react'
import { Carousel, Typography, } from 'antd'

import { Props, } from '../../types'

const { Text, } = Typography

export default function Reviews(props: Props): JSX.Element {
	const { mobile, } = props

	const contentStyle: CSSProperties = {
		color: '#000000',
		textAlign: 'center',
		alignItems: 'center',
		background: '#FFFFFF',
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
		paddingLeft: '10%',
		paddingRight: '10%',
		fontStyle: 'italic',
		whiteSpace: 'pre-line',
		fontSize: 20,
	}

	const renderReview = (review: string, logo: string, author: string): JSX.Element => {
		return review.length ? (
			<div style={{ height: mobile ? 700 : 500, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
				<div style={contentStyle}>
					<Text style={contentStyle}>{`
					"${review}"					
				`}</Text>
					<img src={logo} alt={`${author}'s logo`} width={100} style={{ width: 100, height: 'auto', marginTop: 20, marginLeft: mobile ? '50%' : '70%', }} />
				</div>
			</div>
		) : <></>
	}

	return (
		<div style={{ width: '100%', }}>
			<Carousel>
				{renderReview(process.env.REACT_APP_REVIEW_1 || '', process.env.REACT_APP_REVIEW_1_LOGO || '', process.env.REACT_APP_REVIEW_1_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_2 || '', process.env.REACT_APP_REVIEW_2_LOGO || '', process.env.REACT_APP_REVIEW_2_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_3 || '', process.env.REACT_APP_REVIEW_3_LOGO || '', process.env.REACT_APP_REVIEW_3_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_4 || '', process.env.REACT_APP_REVIEW_4_LOGO || '', process.env.REACT_APP_REVIEW_4_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_5 || '', process.env.REACT_APP_REVIEW_5_LOGO || '', process.env.REACT_APP_REVIEW_5_AUTHOR || 'Anonymous')}
			</Carousel>
		</div>
	)
}
