import React from 'react'
import moment from 'moment'
import { Card, } from 'antd'

export interface Post {
	author: string
	categories: string[]
	content: string
	description: string
	enclosure: object
	guid: string
	link: string
	pubDate: string
	thumbnail: string
	title: string
}

export interface Profile {
	name: string
	profileUrl: string
	profileImage: string
}

export interface Blog {
	items: Array<any>
	isLoading: boolean
	error?: string | null
}

interface Props {
	blog: Blog
	profile: Profile
	mobile: boolean
}

export default function Blogs(props: Props): JSX.Element {
	const { blog, mobile, } = props

	const toText = (node: string): string => {
		let tag: HTMLDivElement = document.createElement("div")
		tag.innerHTML = node
		node = tag.innerText
		return node
	}

	const haveBlogs = (): JSX.Element => {
		if (blog.items) {
			return blog.items.length ? (
				<>
					{blog.items.map((post: Post, index: number) => {
						return (
							<Card className="grid card ab shadow" key={index} style={index !== 0 ? { marginTop: mobile ? 20 : 40, boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1.5px 5px 0 rgba(0, 0, 0, 0.1)`, } : { boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1.5px 5px 0 rgba(0, 0, 0, 0.1)`, }}>
								<div className="card-body" style={{ height: '100%', }}>
									<h2 className="card-title"><a href={post.link} className="postTitle" rel="noopener noreferrer" target="_blank">{post.title}</a></h2>
									<p>Published On: {moment(post.pubDate).format('MM/DD/YYYY')}</p>
									{post.thumbnail && <img src={post.thumbnail} alt={`${post.title}'s Thumbnail`} style={{ width: 300, height: 'auto', }} />}
									<p className="card-text" style={{ textAlign: 'justify', marginTop: mobile ? 10 : 20, marginLeft: mobile ? 30 : 70, marginRight: mobile ? 30 : 70, }}>{`${toText(post.description.substring(0, mobile ? 500 : 1000))}...`}</p>
									<a href={post.link} className="postTitle" rel="noopener noreferrer" target="_blank" style={{ marginTop: mobile ? 10 : 20, }}>Read more...</a>
								</div>
							</Card>
						)
					})}
				</>
			) : <></>
		}
		return <></>
	}

	return (
		<div>
			{haveBlogs()}
		</div>
	)
}
