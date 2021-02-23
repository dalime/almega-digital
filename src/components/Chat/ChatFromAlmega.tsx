import React, { useEffect, useState } from 'react'
import moment from 'moment'

import Logo from '../../images/logo.png'

interface Props {
  text: string
  ref?: React.MutableRefObject<HTMLDivElement | null>
}

export default function ChatFromAlmega(props: Props): JSX.Element {
  const { text, ref, } = props

  const [initial, setInitial] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setInitial(false)
    }, 500)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  return (
    initial ? <></> : (
      <div className="chat-message-container" ref={ref}>
        <div className="chat-container darker">
          {loading ? <p>...</p> : (
            <>
              <div>
                <img src={Logo} alt="Almega's logo" className="chat-right" />
                <p>{text}</p>
              </div>
              <span className="chat-time-right">{moment().format('h:mm A')}</span>
            </>
          )}
        </div>
      </div>
    )
  )
}
