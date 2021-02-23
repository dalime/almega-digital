import React, { useState, useRef, } from 'react'
import { Spin, Typography, Button, } from 'antd'
import { toast } from 'react-toastify'

import { contactAlmega, } from '../../actions'
import { getServicePackages, } from '../Services/services'
import { ServicePackage } from '../../types'
import ChatFromAlmega from './ChatFromAlmega'
import ChatFromProspect from './ChatFromProspect'
import PackageChoices from './PackageChoices'
import ChatInput from './ChatInput'
import AnswerChoice from './AnswerChoice'

import Design from '../../images/ui-design.jpg'
import Website from '../../images/service-website.jpg'
import Develop from '../../images/development.jpg'

const { Text, } = Typography

enum GeneralPackage {
  design = 'design',
  web = 'web',
  app = 'app',
}

interface Props {
  mobile: boolean
  closeChat(): void
}

export default function Chat(props: Props): JSX.Element {
  const { mobile, closeChat, } = props

  const chatBottomRef = useRef<HTMLDivElement | null>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [step, setStep] = useState<number>(1)
  const [chats, setChats] = useState<JSX.Element[]>([<ChatFromAlmega text={`Welcome to Almega Digital! \nClick on a service below`} />])
  const [generalPackage, setGeneralPackage] = useState<GeneralPackage | null>(null)
  const [specificPackage, setSpecificPackage] = useState<string | null>(null)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [website, setWebsite] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const scrollToBottom = (ref: HTMLDivElement): void => {
    ref.scrollIntoView({ behavior: 'smooth' });
  }

  const toNextStep = (_chats: JSX.Element[]): void => {
    setChats(_chats)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (chatBottomRef && chatBottomRef.current) scrollToBottom(chatBottomRef.current)
    }, 1500)
  }

  const toStep2 = (pkg: GeneralPackage): void => {
    setStep(2)
    setGeneralPackage(pkg)

    let desc: string = ''

    switch (pkg) {
      case GeneralPackage.design:
        desc = 'Website / App Design'
        break
      case GeneralPackage.web:
        desc = 'Website Development'
        break
      case GeneralPackage.app:
        desc = 'App Development'
        break
      default:
        desc = 'App Development'
        break
    }

    let _chats: JSX.Element[] = [...chats]
    _chats.push(
      <ChatFromProspect text={desc} />,
      <ChatFromAlmega text={'Click on a specific service below'} />
    )
    toNextStep(_chats)
  }

  const toStep3 = (pkg: ServicePackage): void => {
    setStep(3)
    setSpecificPackage(pkg.name)
    let _chats: JSX.Element[] = [...chats]
    _chats.push(
      <ChatFromProspect text={pkg.name} />,
      <ChatFromAlmega text={'What is your name?'} />
    )
    toNextStep(_chats)
  }

  const toStep4 = (): void => {
    setStep(4)
    let _chats: JSX.Element[] = [...chats]
    _chats.push(
      <ChatFromProspect text={name} />,
      <ChatFromAlmega text={'What is your best email address?'} />
    )
    toNextStep(_chats)
  }

  const toStep5 = (): void => {
    setStep(5)
    let _chats: JSX.Element[] = [...chats]
    _chats.push(
      <ChatFromProspect text={email} />,
      <ChatFromAlmega text={'What is your website if you have one?'} />
    )
    toNextStep(_chats)
  }

  const toStep6 = (): void => {
    setStep(6)
    let _chats: JSX.Element[] = [...chats]
    _chats.push(
      <ChatFromProspect text={website.length ? website : 'I have no website'} />,
      <ChatFromAlmega text={'Please summarize the nature of your project.'} />
    )
    toNextStep(_chats)
  }

  const toStep7 = (): void => {
    setLoading(true)
    contactAlmega(name, email, message, specificPackage || generalPackage || 'Package error', website.length ? website : 'No website').then(() => {
      setLoading(false)
      toast.success('Your inquiry was received', { autoClose: 3000, })
      setSubmitted(true)
    }).catch((error) => {
      setLoading(false)
      toast.error(error, { autoClose: 3000, })
      setSubmitted(true)
    })
  }

  const submitForm = (): void => {
    closeChat()
  }

  const renderChatbox = (): JSX.Element => {
    let element: JSX.Element = <></>

    switch (step) {
      case 1:
        element = (
          <PackageChoices
            answerChoices={[
              <AnswerChoice clickAction={() => toStep2(GeneralPackage.design)} name="Website / App Design" image={Design} tooltip={'UI / UX Designs for your web or app'} mobile={mobile} />,
              <AnswerChoice clickAction={() => toStep2(GeneralPackage.web)} name="Website Development" image={Website} tooltip={'We can deliver your website'} mobile={mobile} />,
              <AnswerChoice clickAction={() => toStep2(GeneralPackage.app)} name="App Development" image={Develop} tooltip={'We can make custom mobile or web apps'} mobile={mobile} />,
            ]}
            closeChat={closeChat}
            mobile={mobile}
          />
        )
        break
      case 2:
        element = (
          <PackageChoices
            answerChoices={generalPackage ? (
              getServicePackages(generalPackage.toString()).map((pkg: ServicePackage, index: number) => {
                return <AnswerChoice key={index} clickAction={() => toStep3(pkg)} name={pkg.name} image={pkg.thumbnail} tooltip={pkg.shortDesc} mobile={mobile} />
              })
            ) : []}
            closeChat={closeChat}
            mobile={mobile}
          />
        )
        break
      case 3:
        element = <ChatInput text={name} setText={setName} placeholder="Your name" onSubmit={() => toStep4()} closeChat={() => closeChat()} />
        break
      case 4:
        element = <ChatInput text={email} setText={setEmail} placeholder="Email address" onSubmit={() => toStep5()} closeChat={() => closeChat()} />
        break
      case 5:
        element = <ChatInput text={website} setText={setWebsite} placeholder="Your website (optional)" onSubmit={() => toStep6()} closeChat={() => closeChat()} />
        break
      case 6:
        element = <ChatInput text={message} setText={setMessage} placeholder="Please describe your project" onSubmit={() => toStep7()} closeChat={() => closeChat()} />
        break
      default:
        element = <></>
        break
    }

    return element
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#f1f1f1',
      overflowX: 'hidden',
    }}>
      <div
        id="chat-messages-container"
        style={{
          padding: mobile ? 20 : 40,
          height: mobile && step < 3 && !loading ? '50%' : '80%',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {chats}
        <div ref={chatBottomRef} style={{ height: 20, }} />
      </div>
      <div id="chat-inputbox">
        {submitted ? (
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 20, }}>We will contact you shortly!</Text>
            <Button
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                e.preventDefault()
                submitForm()
              }}
              type="primary"
            >
              Go to Website
            </Button>
          </div>
        ) : loading ? <Spin size={'large'} /> : renderChatbox()}
      </div>
    </div>
  )
}
