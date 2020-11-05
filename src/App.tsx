import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { Layout, Affix, } from 'antd'
import Desktop from './components/Navigation/Desktop'
import Mobile from './components/Navigation/Mobile'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import PageFooter from './components/Footer'
import './App.less'

const { Content, Footer, } = Layout

function App(): JSX.Element {
	const mobile = window.innerWidth <= 760

	return (
		<Router>
			<Layout>
				{mobile && <Affix offsetTop={0}><Mobile /></Affix>}
				<Layout className="layout">
					{!mobile && <Desktop />}
					<Content style={{ minHeight: '90vh', width: '100vw', textAlign: 'center', marginTop: mobile ? 0 : '10vh', }}>
						<Switch>
							<Route path='/about'>
								<About mobile={mobile} />
							</Route>
							<Route path='/service'>
								<Service mobile={mobile} />
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
			</Layout>
		</Router>
	)
}

export default App
