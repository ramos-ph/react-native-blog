import React from 'react'

import {Container, Paragraph} from './styles'

function Markdown({children}) {
	return (
		<Container>
			<Paragraph>{children}</Paragraph>
		</Container>
	)
}

export default Markdown
