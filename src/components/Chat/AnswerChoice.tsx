import React, { CSSProperties } from 'react'
import { Typography, Tooltip } from 'antd'

const { Title, } = Typography

interface Props {
  clickAction(): void
  name: string
  image: string
  tooltip: string
  mobile: boolean
}

export default function AnswerChoice(props: Props): JSX.Element {
  const { clickAction, name, image, tooltip, mobile, } = props

  const imgStyle: CSSProperties = {
    width: mobile ? 60 : 75,
    height: mobile ? 60 : 75,
    objectFit: 'cover',
    marginBottom: 10,
    marginRight: mobile ? 20 : 'auto',
  }

  return (
    <Tooltip placement="top" title={tooltip} arrowPointAtCenter>
      <button
        type="button"
        style={mobile ?
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: '25%',
            backgroundColor: 'transparent',
          } :
          { backgroundColor: 'transparent', }
        }
        className="chat-answer-choice"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault()
          clickAction()
        }}
      >
        <img
          src={image}
          alt={name}
          style={imgStyle}
        />
        <Title level={3} style={mobile ? { color: '#005fcc' } : {}}>{name}</Title>
      </button>
    </Tooltip>
  )
}
