import React from 'react'

export default function Footer(): JSX.Element {
	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
			Copyright © {new Date().getFullYear()} Almega Digital. All Rights Reserved.
		</div>
	)
}
