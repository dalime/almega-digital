import React from 'react'
import { Typography, } from 'antd'

import InfoButton from './InfoButton'

const { Text } = Typography

interface Props {
  answerChoices: JSX.Element[]
  closeChat(): void
  mobile: boolean
}

export default function PackageChoices(props: Props): JSX.Element {
  const { answerChoices, closeChat, mobile, } = props

  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: mobile ? '50%' : 'auto', }}>
      <Text style={{ marginBottom: 10, }}>Please click one of the following</Text>
      <div style={{ width: '100%', display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
        {answerChoices}
      </div>
      <InfoButton closeChat={closeChat} />
    </div>
  )
}
