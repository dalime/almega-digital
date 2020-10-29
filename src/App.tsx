import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { Layout, } from 'antd'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Service from './components/Service'
import About from './components/About'
import PageFooter from './components/Footer'
import './App.less'

const { Header, Content, Footer } = Layout

function App(): JSX.Element {
	return (
		<Router>
			<Layout className="layout">
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%', minHeight: '10vh', }}>
					<Navigation />
				</Header>
				<Content style={{ minHeight: '90vh', width: '100vw', textAlign: 'center', marginTop: '10vh', }}>
					<Switch>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/service'>
							<Service />
						</Route>
						<Route path='/portfolio'>
							<Portfolio />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Content>
				<Footer style={{ marginTop: '10vh', }}>
					<PageFooter />
				</Footer>
			</Layout>
		</Router>
	)
}

export default App
