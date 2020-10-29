import React from 'react'
import { Image, Typography, } from 'antd'

import Logo from '../../images/logo512.png'

const { Text, } = Typography

export default function Story(): JSX.Element {
	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
			<Image
				width={100}
				src={Logo}
			/>
			<div />
			<Text style={{ textAlign: 'left', }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eum cupiditate omnis dicta vero laudantium autem magni explicabo mollitia iure, deserunt dolorem enim eaque itaque? Perspiciatis hic sapiente repellat sequi!</Text>
		</div>
	)
}
