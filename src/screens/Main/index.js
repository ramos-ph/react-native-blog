import React from 'react'
import {Container, Title} from './styles'

import PostCard from './components/PostCard'

// this screen will contain the list of all blog posts
function Main() {
	return (
		<Container>
			<Title>Recent Posts</Title>

			<PostCard
				title="Something about tests"
				date="Feruary 13, 2022"
				postId="tests"
			/>
		</Container>
	)
}

export default Main
