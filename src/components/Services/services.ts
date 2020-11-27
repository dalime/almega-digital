import { ServicePackage, } from '../../types'
// import StrategyCallImg from '../../images/call.jpg'
import UIDesignImg from '../../images/ui-design-complete.jpg'
import UXAuditImg from '../../images/ux-research.jpg'
import InteractivePrototypeImg from '../../images/interactive-prototype.jpg'
import WebsiteBuilderImg from '../../images/website-builder.jpg'
import ECommerceImg from '../../images/e-commerce.jpg'
import CustomWebsiteImg from '../../images/custom-website.jpg'
import WebAppImg from '../../images/web-app.jpg'
import MobileAppImg from '../../images/mobile-app.jpg'

// Strategy Call
// const strategyCall: ServicePackage = {
// 	name: 'Strategy Call',
// 	thumbnail: StrategyCallImg,
// 	thumbnailAlt: 'A laptop open with Zoom and multiple members',
// 	shortDesc: 'A one hour phone or video call to discuss your project in detail.',
// 	description: {
// 		text: 'Before taking on any prospective client, we prefer to discuss in detail the nature of each project. This Strategy Call is for a mutual introduction and understanding one another better. It\'s completely free of charge for you and your team.',
// 		pointOne: 'Discuss the specifics of your project',
// 		pointTwo: 'We\'ll explore timelines and expectations',
// 		pointThree: 'Followed up by detailed estimations',
// 	},
// 	startingPrice: 0,
// }

// Website & App Design
const uiDesign: ServicePackage = {
	name: 'UI Design',
	thumbnail: UIDesignImg,
	thumbnailAlt: 'A tablet with UI Designs open next to a laptop',
	shortDesc: 'Designs for your website or app\'s user interface.',
	description: {
		text: 'Having designed mock-ups of websites or apps will save you countless hours and money spent on Development work. Almega Digital\'s experienced Design team will mock up designs for your product based on your unique needs and project features.',
		pointOne: 'Low resolution or high resolution options',
		pointTwo: 'User Experience (UX) best practices',
		pointThree: 'Feedback rounds included',
	},
	startingPrice: 1000,
}

const uxResearch: ServicePackage = {
	name: 'UX Audit',
	thumbnail: UXAuditImg,
	thumbnailAlt: 'Person holding pink sticky note in front of UX Audit board',
	shortDesc: 'A User Experience (UX) audit of your website or app.',
	description: {
		text: 'Are you looking to improve the usability of your website or app? User Experience (UX) Research, based on market data and real customers, is invaluable to any serious business in 2020. Almega Digital offers experienced UX professionals who can take a look at your app or website and give honest UX feedback.',
		pointOne: 'User Experience (UX) best practices',
		pointTwo: 'Market / Competitor analysis',
		pointThree: 'Backed by Quantitative data',
	},
	startingPrice: 1000,
}

const interactivePrototype: ServicePackage = {
	name: 'Interactive Prototype',
	thumbnail: InteractivePrototypeImg,
	thumbnailAlt: 'A hand holding a phone with an interactive prototype also open on computer screen',
	shortDesc: 'An interactive prototype of your website or app.',
	description: {
		text: 'An interactive prototype can be used to test your app or business idea without having to actually develop it. Whether you are in the start-up phase of your business or adding a new feature to your existing app / website, Almega Digital\'s interactive prototypes will help you understand how your product will do with real users.',
		pointOne: 'Clickable app / website prototypes',
		pointTwo: 'Multiple user flows available',
		pointThree: 'User testing best practices available',
	},
	startingPrice: 2500,
}

// Website Development
const websiteBuilder: ServicePackage = {
	name: 'Website Builder Website',
	thumbnail: WebsiteBuilderImg,
	thumbnailAlt: 'WordPress homepage open',
	shortDesc: 'A website built with a website builder like WordPress, Squarespace, or Wix.',
	description: {
		text: 'The quickest way to get a website up and running is to use a pre-existing tool like WordPress or Squarespace. If you need a website up and running, Almega Digital can deliver it for you.',
		pointOne: 'WordPress, Squarespace, and Wix available',
		pointTwo: 'We build from scratch or improve existing sites',
		pointThree: 'Hosting options available',
	},
	startingPrice: 3000,
}

const eCommerce: ServicePackage = {
	name: 'e-Commerce Website',
	thumbnail: ECommerceImg,
	thumbnailAlt: 'Add to Cart screen on a clothing e-commerce webstore',
	shortDesc: 'An e-commerce website for your online storefront.',
	description: {
		text: 'Are you in the e-commerce space? Almega Digital\'s team of e-commerce Web Developers can add extra functionality, clean up your design, or improve your site\'s performance. Let\'s work together to make sure your customers continue to come back to your storefront.',
		pointOne: 'Shopify, Woocommerce, and Magento available',
		pointTwo: 'Migration projects between platforms',
		pointThree: 'Site performance optimization',
	},
	startingPrice: 5000,
}

const customWebsite: ServicePackage = {
	name: 'Custom Website',
	thumbnail: CustomWebsiteImg,
	thumbnailAlt: 'Laptop open with coffee, notepad, 2 pencils, and 3 scrunched up papers next to it with a wooden desk background',
	shortDesc: 'A custom website built with custom code.',
	description: {
		text: 'Sometimes building a website takes more customization than the given website builder options. The best way to go about this is to write the website (like this one) with custom code. Almega Digital\'s team of Web Developers can build a beautiful custom website for you.',
		pointOne: 'HTML, CSS, Javascript, and other frontend Frameworks',
		pointTwo: 'Hosting packages available',
		pointThree: 'Fully responsive designs',
	},
	startingPrice: 4000,
}

// App Development
const webApp: ServicePackage = {
	name: 'Web App',
	thumbnail: WebAppImg,
	thumbnailAlt: 'Laptop with code editor shown',
	shortDesc: 'A web app implemented with your specified custom functionality.',
	description: {
		text: 'Does your business / project require custom functionality beyond a regular website? Do you need a desktop version of your mobile app? Almega Digital\'s experienced App Development Team will work with you to develop a cross-browser-friendly, responsive web app.',
		pointOne: 'Internet browser agnostic',
		pointTwo: 'Modern frameworks and libraries',
		pointThree: 'Cloud Deployment options available',
	},
	startingPrice: 7000,
}

const mobileApp: ServicePackage = {
	name: 'Mobile App',
	thumbnail: MobileAppImg,
	thumbnailAlt: 'A smartphone homescreen with apps showing',
	shortDesc: 'A mobile app with your required features deployed on the App store.',
	description: {
		text: `In 2020, it's imperative that your business has a mobile app. More and more, customers expect native functionality on their devices that work without a browser or internet. Whatever industry you operate in, Almega Digital can develop a modern, user-friendly mobile app for your customers.`,
		pointOne: 'iOS and Android compatible',
		pointTwo: 'Published on Apple App Store and Google Play Store',
		pointThree: 'Ongoing support available',
	},
	startingPrice: 8000,
}

export const servicePackages: { design: ServicePackage[], web: ServicePackage[], app: ServicePackage[] } = {
	design: [
		// strategyCall,
		uiDesign,
		uxResearch,
		interactivePrototype,
	],
	web: [
		// strategyCall,
		websiteBuilder,
		eCommerce,
		customWebsite,
	],
	app: [
		// strategyCall,
		webApp,
		mobileApp,
	],
}