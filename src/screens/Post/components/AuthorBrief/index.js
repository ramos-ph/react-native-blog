import React from 'react'

import avatar from '../../../../assets/img/profile.jpg'
import {Container, Avatar, AuthorName} from './styles'

function AuthorBrief({name}) {
	return (
		<Container>
			<Avatar source={avatar} />
			<AuthorName>{name}</AuthorName>
		</Container>
	)
}

export default AuthorBrief
