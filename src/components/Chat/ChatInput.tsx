import React from 'react'
import { Input, Button, Typography, } from 'antd'

import InfoButton from './InfoButton'

const { Text, } = Typography
const { TextArea, } = Input

interface Props {
  text: string
  setText(s: string): void
  placeholder: string
  onSubmit(): void
  closeChat(): void
}

export default function ChatInput(props: Props): JSX.Element {
  const { text, setText, placeholder, onSubmit, closeChat, } = props

  return (
    <div>
      <div style={{ marginBottom: 20, paddingBottom: 20, }}>
        <Text>{placeholder === 'Your name' ? 'What is your name?' : placeholder === 'Email address' ? 'Your best email address' : placeholder === 'Your website (optional)' ? 'Do you have a website?' : placeholder}</Text>
      </div>
      <div style={{ width: '50vw', minWidth: 250, display: 'flex', flexDirection: placeholder === 'Please describe your project' ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
        {placeholder === 'Please describe your project' ? (
          <TextArea
            placeholder={placeholder}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
          />
        ) : (
            <Input
              type={placeholder === 'Email address' ? "email" : "text"}
              placeholder={placeholder}
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.keyCode === 13 ? onSubmit() : {}}
            />
          )}
        <Button type="primary" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault()
          onSubmit()
        }}
        >
          Submit
				</Button>
      </div>
      <InfoButton closeChat={closeChat} />
    </div>
  )
}
