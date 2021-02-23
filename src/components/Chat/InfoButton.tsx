import React from 'react'
import { Button } from 'antd'

interface Props {
  closeChat(): void
}

export default function InfoButton(props: Props): JSX.Element {
  const { closeChat, } = props

  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        closeChat()
      }}
      style={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      I just want some information
    </Button>
  )
}
