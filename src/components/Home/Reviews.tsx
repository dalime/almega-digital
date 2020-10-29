import React, { CSSProperties, } from 'react'
import { Carousel, } from 'antd'

const contentStyle: CSSProperties = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word',
	flexWrap: 'wrap',
}

export default function Reviews(): JSX.Element {
	const renderReview = (review: string): JSX.Element => {
		return review.length ? (
			<div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', }}>
				<h3 style={contentStyle}>{review}</h3>
			</div>
		) : <></>
	}

	return (
		<div style={{ width: '100%', }}>
			<Carousel autoplay autoplaySpeed={3000}>
				{renderReview(process.env.REACT_APP_REVIEW_1 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_2 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_3 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_4 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_5 || '')}
			</Carousel>
		</div>
	)
}
