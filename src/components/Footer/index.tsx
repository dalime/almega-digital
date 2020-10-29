import React from 'react'

import CallToAction from './CallToAction'

export default function Footer(): JSX.Element {
	return (
		<div>
			<CallToAction />
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
				Copyright © {new Date().getFullYear()} Almega Digital. All Rights Reserved.
			</div>
		</div>
	)
}
