import React, { CSSProperties, } from 'react'
import { Carousel, Typography, } from 'antd'

const { Text, } = Typography

const contentStyle: CSSProperties = {
	height: 200,
	color: '#fff',
	textAlign: 'center',
	alignItems: 'center',
	background: '#364d79',
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
	paddingLeft: '10%',
	paddingRight: '10%',
}

export default function Reviews(): JSX.Element {
	const renderReview = (review: string): JSX.Element => {
		return review.length ? (
			<div style={{ display: 'flex', }}>
				{/* <Title style={contentStyle}>{review}</Title> */}
				<Text style={contentStyle}>{`"${review}"`}</Text>
			</div>
		) : <></>
	}

	return (
		<div style={{ width: '100%', }}>
			{/* <Carousel autoplay autoplaySpeed={3000}> */}
			<Carousel>
				{renderReview(process.env.REACT_APP_REVIEW_1 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_2 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_3 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_4 || '')}
				{renderReview(process.env.REACT_APP_REVIEW_5 || '')}
			</Carousel>
		</div>
	)
}
