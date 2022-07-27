import React, {useState, useEffect} from 'react'
import {useRoute} from '@react-navigation/native'

import {Container, Paragraph, ListItem} from './styles'

import {useMarkdownRenderer} from '../../hooks/useMarkdownRenderer'

import api from '../../services/api'
import Header from './components/Header'
import BackToHomeButton from './components/BackToHomeButton'

function Post() {
	const [post, setPost] = useState(null)
	const renderMarkdown = useMarkdownRenderer()

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

			{post && renderMarkdown(post?.content)}
			<BackToHomeButton />
		</Container>
	)
}

export default Post
