import React from 'react'
import moment from 'moment'

interface Props {
  text: string
  desc?: string
}

export default function ChatFromAlmega(props: Props): JSX.Element {
  const { text, } = props

  return (
    <div className="chat-message-container">
      <div className="chat-container">
        <p>{text}</p>
        <span className="chat-time-left">{moment().format('h:mm A')}</span>
      </div>
    </div>
  )
}
