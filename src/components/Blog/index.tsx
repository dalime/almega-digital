import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Typography, } from 'antd'

import Blogs, { Profile, Blog as BlogInterface, } from './Blogs'

const { Title, } = Typography

interface Props {
	mobile: boolean
}

export default function Blog(props: Props): JSX.Element {
	const { mobile, } = props

	const mediumURL = `${process.env.REACT_APP_BLOG_CORS_URL}${process.env.REACT_APP_BLOG_MEDIUM_URL}`;
	const [profile, setProfile] = useState<Profile>({
		name: 'Almega Digital',
		profileUrl: '',
		profileImage: '',
	})
	const [blog, setBlog] = useState<BlogInterface>({
		items: [],
		isLoading: true,
		error: null,
	})

	useEffect(() => {
		window.scrollTo(0, 0)

		axios.get(mediumURL).then((info) => {
			const image = info.data.feed.image
			const link = info.data.feed.link
			const blogs = info.data.items
			const posts = blogs.filter((post: any) => post.categories.length > 0)

			setProfile(p => ({ ...p, profileUrl: link, profileImage: image, }))
			setBlog({ items: posts, isLoading: false, error: null, })
		}).catch((error) => {
			setBlog({ ...blog, error: error.message, })
		})
	}, [])

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: mobile ? 20 : 50, }}>
			<Title level={1}>Blog</Title>
			<div />
			<Title level={3}>Helpful tips and stories for your business</Title>
			<div style={{ height: 20, }} />
			<Blogs profile={profile} blog={blog} mobile={mobile} />
			<div style={{ height: mobile ? 20 : 40, }} />
			<Title level={5}><a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">More articles coming soon...</a></Title>
		</div>
	)
}
