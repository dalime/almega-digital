import React, { CSSProperties, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { Layout, Affix, } from 'antd'
import { useMediaQuery } from 'react-responsive'

import Chat from './components/Chat'
import Desktop from './components/Navigation/Desktop'
import Mobile from './components/Navigation/Mobile'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Blog from './components/Blog'
import PageFooter from './components/Footer'
import './App.less'

const { Content, Footer, } = Layout

const contentStyle: CSSProperties = { minHeight: '90vh', width: '100vw', textAlign: 'center', }

function App(): JSX.Element {
	const [chat, setChat] = useState<boolean>(true)

	const mobile = useMediaQuery({ query: '(max-width: 760px)', })

	return (
		<Router>
			<Layout style={chat ? { background: '#ecedf9', } : {}}>
				{chat ? (
					<>
						<Layout className="layout">
							<Content style={{ ...contentStyle, height: '100vh', }}>
								<Chat mobile={mobile} closeChat={() => setChat(false)} />
							</Content>
						</Layout>
					</>
				) : (
						<>
							<Layout className="layout">
								{!mobile && <Desktop />}
								<Content style={{ ...contentStyle, marginTop: mobile ? 0 : '10vh', }}>
									<Switch>
										<Route path='/about'>
											<About mobile={mobile} />
										</Route>
										<Route path='/services'>
											<Services mobile={mobile} />
										</Route>
										<Route path='/blog'>
											<Blog mobile={mobile} />
										</Route>
										<Route path='/'>
											<Home mobile={mobile} />
										</Route>
									</Switch>
								</Content>
								<Footer style={{ marginTop: '10vh', }}>
									<PageFooter mobile={mobile} />
								</Footer>
							</Layout>
							{mobile && <Affix offsetTop={0}><Mobile /></Affix>}
						</>
					)}
			</Layout>
		</Router>
	)
}

export default App
