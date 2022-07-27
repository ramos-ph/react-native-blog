import React, {useState, useEffect} from 'react'
import {useRoute} from '@react-navigation/native'

import {Container} from './styles'

import api from '../../services/api'
import Header from './components/Header'
import BackToHomeButton from './components/BackToHomeButton'
import Markdown from '../../components/Markdown'

function Post() {
	const [post, setPost] = useState(null)

	const route = useRoute()
	const postId = route.params.postId

	useEffect(() => {
		async function fetchPostContent() {
			const response = await api.get(`/posts/${postId}`)
			setPost(response.data)
		}

		fetchPostContent()
	}, [postId])

	return (
		<Container>
			{post && <Header post={post} />}

			<Markdown>{post?.content}</Markdown>

			<BackToHomeButton />
		</Container>
	)
}

export default Post
