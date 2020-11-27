import React, { CSSProperties, } from 'react'
import { Image, Typography, } from 'antd'

import { Props, } from '../../types'
import Logo from '../../images/logo512.png'
import BlankImg from '../../images/blank.png'

const { Text, Title, } = Typography

const styles: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
}

export default function Story(props: Props): JSX.Element {
	const { mobile, } = props

	const AlmegaLogo: JSX.Element = <Image width={100} src={Logo} alt={`Almega Digital's logo`} style={{ minWidth: 50, marginBottom: 20, }} fallback={BlankImg} />
	const AlmegaTitle: JSX.Element = <Title level={2}>Our Story</Title>

	return (
		<>
			<div style={styles}>{AlmegaLogo}{AlmegaTitle}</div>
			<div style={{ ...styles, marginTop: mobile ? 20 : 0, }}>
				<div />
				<Text style={{ textAlign: 'left', paddingLeft: 20, }}>{process.env.REACT_APP_STORY || ''}</Text>
			</div>
		</>
	)
}
