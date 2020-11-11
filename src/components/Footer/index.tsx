import React from 'react'

import { Props, } from '../../types'
import CallToAction from './CallToAction'
import Social from './Social'

export default function Footer(props: Props): JSX.Element {
	const { mobile, } = props

	return (
		<div>
			<CallToAction mobile={mobile} />
			<Social mobile={mobile} />
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
				{process.env.REACT_APP_SSL_CERTIFICATE_SRC && <span id="siteseal"><script async type="text/javascript" src={process.env.REACT_APP_SSL_CERTIFICATE_SRC || ''}></script></span>}
				Copyright © {new Date().getFullYear()} Almega Digital. All Rights Reserved.
			</div>
		</div>
	)
}
