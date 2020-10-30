import React from 'react'
import { Typography, Image, } from 'antd'

import Blank from '../../images/blank.png'

const { Title, Text, } = Typography

export default function Team(): JSX.Element {
	const renderTeamMember = (imgSrc: string, name: string, position: string, summary: string, first?: boolean): JSX.Element => {
		return imgSrc.length && name.length && position.length && summary.length ? (
			<>
				<div style={{ width: '100%', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: first ? '5vh' : '10vh', }}>
					<Image
						src={imgSrc}
						width={150}
						className="team-member-image"
						placeholder={
							<Image
								src={Blank}
								width={150}
							/>
						}
					/>
					<div style={{ textAlign: 'left', paddingLeft: 20, }}>
						<Title level={3}>{name}</Title>
						<Title level={5}>{position}</Title>
						<Text>{summary}</Text>
					</div>
				</div>
			</>
		) : <></>
	}

	return (
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', }}>
			<Title level={2}>Our Team</Title>
			{renderTeamMember(process.env.REACT_APP_TEAM_MEMBER_1_IMG || '', process.env.REACT_APP_TEAM_MEMBER_1_NAME || '', process.env.REACT_APP_TEAM_MEMBER_1_POSITION || '', process.env.REACT_APP_TEAM_MEMBER_1_SUMMARY || '', true)}
			{renderTeamMember(process.env.REACT_APP_TEAM_MEMBER_2_IMG || '', process.env.REACT_APP_TEAM_MEMBER_2_NAME || '', process.env.REACT_APP_TEAM_MEMBER_2_POSITION || '', process.env.REACT_APP_TEAM_MEMBER_2_SUMMARY || '', true)}
		</div>
	)
}
