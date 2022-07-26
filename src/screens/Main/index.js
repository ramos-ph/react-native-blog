import React, {useState, useEffect} from 'react'
import {Container, Title, PostsList} from './styles'

import PostCard from './components/PostCard'
import api from '../../services/api'

function Main() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		async function fetchPosts() {
			const response = await api.get('/posts')
			setPosts(response.data)
		}

		fetchPosts()
	}, [])

	function renderPostCard({item}) {
		return (
			<PostCard title={item.title} date={item.created_at} postId={item.slug} />
		)
	}

	return (
		<Container>
			<Title>Recent Posts</Title>

			<PostsList
				data={posts}
				renderItem={renderPostCard}
				keyExtractor={item => item.slug}
			/>
		</Container>
	)
}

export default Main
