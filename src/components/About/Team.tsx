import React from 'react'
import { Typography, Image, Avatar, } from 'antd'

const { Title, Text, } = Typography

interface Experience {
	imgUrl: string
	company: string
	position: string
	dates: string
	summary: string
}

export default function Team(): JSX.Element {
	const renderExperience = (experience: Experience, index: number): JSX.Element => {
		const { imgUrl, company, position, dates, summary, } = experience

		return (
			<div key={index} style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
				<Image src={imgUrl} width={100} />
				<div>
					<Title level={4}>{company}</Title>
					<Title level={5}>{position}</Title>
					<Title level={5}>{dates}</Title>
					<Text>{summary}</Text>
				</div>
			</div>
		)
	}

	const renderTeamMember = (imgSrc: string, name: string, summary: string, experiences: string, first?: boolean): JSX.Element => {
		let exp: Array<Experience> = JSON.parse(experiences)

		return imgSrc.length && name.length && summary.length && experiences.length ? (
			<>
				<div style={{ width: '100%', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: first ? '5vh' : '10vh', }}>
					<Avatar src={imgSrc} size={100} />
					<div style={{ textAlign: 'left', paddingLeft: 20, }}>
						<Title level={3}>{name}</Title>
						<Text>{summary}</Text>
					</div>
				</div>
				{exp.length && <Title level={3}>Experience</Title>}
				{exp.map((experience: Experience, index: number) => renderExperience(experience, index))}
			</>
		) : <></>
	}

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
			<Title level={2}>Our Team</Title>
			{renderTeamMember(process.env.REACT_APP_TEAM_MEMBER_1_IMG || '', process.env.REACT_APP_TEAM_MEMBER_1_NAME || '', process.env.REACT_APP_TEAM_MEMBER_1_SUMMARY || '', process.env.REACT_APP_TEAM_MEMBER_1_EXPERIENCES || '', true)}
			{renderTeamMember(process.env.REACT_APP_TEAM_MEMBER_2_IMG || '', process.env.REACT_APP_TEAM_MEMBER_2_NAME || '', process.env.REACT_APP_TEAM_MEMBER_2_SUMMARY || '', process.env.REACT_APP_TEAM_MEMBER_2_EXPERIENCES || '', true)}
		</div>
	)
}
