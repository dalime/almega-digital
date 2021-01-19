import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { Layout, Affix, } from 'antd'
import { useMediaQuery } from 'react-responsive'

import Desktop from './components/Navigation/Desktop'
import Mobile from './components/Navigation/Mobile'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Blog from './components/Blog'
import PageFooter from './components/Footer'
import './App.less'

const { Content, Footer, } = Layout

function App(): JSX.Element {
	const mobile = useMediaQuery({ query: '(max-width: 760px)', })

	return (
		<Router>
			<Layout>
				<Layout className="layout">
					{!mobile && <Desktop />}
					<Content style={{ minHeight: '90vh', width: '100vw', textAlign: 'center', marginTop: mobile ? 0 : '10vh', }}>
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
			</Layout>
		</Router>
	)
}

export default App
