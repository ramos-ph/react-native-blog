import React from 'react'
import {useNavigation} from '@react-navigation/native'

import {Container, Title, PostDate} from './styles'

const TITLE_LENGTH_LIMIT = 40

function abbreviateTitle(title) {
	if (title.length > TITLE_LENGTH_LIMIT) {
		return title.substring(0, TITLE_LENGTH_LIMIT).concat('...')
	}
	return title
}

function PostCard({title, date, postId}) {
	const navigation = useNavigation()

	return (
		<Container onPress={() => navigation.navigate('Post', {postId})}>
			<Title>{abbreviateTitle(title)}</Title>
			<PostDate>{date}</PostDate>
		</Container>
	)
}

export default PostCard
