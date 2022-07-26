import styled from 'styled-components/native'

export const Paragraph = styled.Text`
	font-size: 18px;
	color: #333;
	margin: 12px 0;
`

export const Bold = styled(Paragraph)`
	font-weight: bold;
`

export const Italic = styled(Paragraph)`
	font-style: italic;
`

export const ListItem = styled(Paragraph)`
	margin: 0;
`
