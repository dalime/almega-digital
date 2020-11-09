import React, { CSSProperties, } from 'react'
import { Carousel, Typography, } from 'antd'

import { Props, } from '../../types'

const { Text, } = Typography

export default function Reviews(props: Props): JSX.Element {
	const { mobile, } = props

	const contentStyle: CSSProperties = {
		height: mobile ? 400 : 300,
		color: '#fff',
		textAlign: 'center',
		alignItems: 'center',
		background: '#364d79',
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
		paddingLeft: '10%',
		paddingRight: '10%',
		fontStyle: 'italic',
		whiteSpace: 'pre-line',
	}

	const renderReview = (review: string, author: string): JSX.Element => {
		return review.length ? (
			<div style={{ display: 'flex', }}>
				{/* <Title style={contentStyle}>{review}</Title> */}
				<Text style={contentStyle}>{`
					"${review}"
					
					- ${author}
				`}</Text>
			</div>
		) : <></>
	}

	return (
		<div style={{ width: '100%', }}>
			<Carousel>
				{renderReview(process.env.REACT_APP_REVIEW_1 || '', process.env.REACT_APP_REVIEW_1_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_2 || '', process.env.REACT_APP_REVIEW_2_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_3 || '', process.env.REACT_APP_REVIEW_3_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_4 || '', process.env.REACT_APP_REVIEW_4_AUTHOR || 'Anonymous')}
				{renderReview(process.env.REACT_APP_REVIEW_5 || '', process.env.REACT_APP_REVIEW_5_AUTHOR || 'Anonymous')}
			</Carousel>
		</div>
	)
}
