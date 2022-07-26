/*
	Must be a simple markdown renderer. Just need to analyze each
	line of the markdown file, and overwrite the style when needed.

	Return an array of JSX to be rendered in a flat-list

	E.g:

	Paragraph with **bold** text
	Paragraph with *italic* text
	-->
	<Paragraph>Paragraph with <Bold>bold</Bold> text</Paragraph>
	<Paragraph>Paragraph with <Italic>italic</Italic> text</Paragraph>
*/
import React from 'react'

import * as styled from '../styles/PostContent'

function useMarkdownRenderer() {
	// starting with only bold
	function isAnnotated(word) {
		return word.startsWith('**')
	}

	function removeAnnotation(word) {
		return word.replace(/\*\*/g, '')
	}

	function isList(line) {
		return line.startsWith('-') // or if starts with a number and a point. use regex
	}

	function renderLine(line) {
		return line.split(/\s/).map(word => {
			if (isAnnotated(word)) {
				return <styled.Bold>{removeAnnotation(word.concat(' '))}</styled.Bold>
			}
			return word.concat(' ')
		})
	}

	function render(markdown) {
		return markdown.split(/\n/).map(line => {
			if (isList(line)) {
				return <styled.ListItem>{renderLine(line)}</styled.ListItem>
			}
			return <styled.Paragraph>{renderLine(line)}</styled.Paragraph>
		})
	}

	return render
}

export {useMarkdownRenderer}
