import React from 'react'
import {format, parseISO} from 'date-fns'

import {PostTitle, PostDate} from './styles'

import AuthorBrief from '../AuthorBrief'

function Header({post}) {
	return (
		<>
			<AuthorBrief name={post.author} />
			<PostTitle>{post.title.replace('#', '').trim()}</PostTitle>
			<PostDate>
				{post && format(parseISO(post.created_at), 'LLLL d, yyyy')}
			</PostDate>
		</>
	)
}

export default Header
