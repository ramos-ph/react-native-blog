import React from 'react'

import avatar from '../../../../assets/img/profile.jpg'
import {Container, Avatar, AuthorName} from './styles'

function AuthorBrief() {
	return (
		<Container>
			<Avatar source={avatar} />
			<AuthorName>Pedro Ramos</AuthorName>
		</Container>
	)
}

export default AuthorBrief
