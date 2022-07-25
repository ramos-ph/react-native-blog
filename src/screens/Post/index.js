import React from 'react'

import {Container, PostTitle, PostDate, Paragraph, ListItem} from './styles'
import BackToHomeButton from './components/BackToHomeButton'
import AuthorBrief from './components/AuthorBrief'

const postContent = `# Something about tests

This is a blog post that mentions something about tests.

- Tests must be clean
- Tests must run fast
- Tests must be isolated

Please drop a like`

function renderPostContent(markdown) {
	return markdown
		.split('\n')
		.filter(line => line)
		.map(line => {
			if (line.startsWith('#')) {
				return (
					<>
						<PostTitle>{line.replace('#', '').trim()}</PostTitle>
						<PostDate>February 13, 2022</PostDate>
					</>
				)
			} else if (line.startsWith('-')) {
				return <ListItem>{line}</ListItem>
			} else {
				return <Paragraph>{line}</Paragraph>
			}
		})
}

function Post({postId}) {
	return (
		<Container>
			<AuthorBrief />
			{renderPostContent(postContent)}
			<BackToHomeButton />
		</Container>
	)
}

export default Post
