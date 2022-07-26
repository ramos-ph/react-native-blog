import React, {useState, useEffect} from 'react'
import {useRoute} from '@react-navigation/native'

import {Container, PostTitle, PostDate, Paragraph, ListItem} from './styles'
import BackToHomeButton from './components/BackToHomeButton'
import AuthorBrief from './components/AuthorBrief'

import api from '../../services/api'
import {format, parseISO} from 'date-fns'

function renderPostContent(markdown) {
	if (!markdown) return

	return markdown
		.split('\n')
		.filter(line => line)
		.map((line, index) => {
			if (line.startsWith('-')) {
				return <ListItem key={index}>{line}</ListItem>
			} else {
				return <Paragraph key={index}>{line}</Paragraph>
			}
		})
}

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
			<AuthorBrief name={post?.author} />
			<PostTitle>{post?.title?.replace('#', '').trim()}</PostTitle>
			<PostDate>
				{post && format(parseISO(post.created_at), 'LLLL d, yyyy')}
			</PostDate>

			{renderPostContent(post?.content)}
			<BackToHomeButton />
		</Container>
	)
}

export default Post
