import React from 'react'
import {useNavigation} from '@react-navigation/native'

import {Container, ButtonText} from './styles'

function BackToHomeButton() {
	const navigation = useNavigation()
	return (
		<Container onPress={() => navigation.goBack()}>
			<ButtonText>{'<-'} Back to Home</ButtonText>
		</Container>
	)
}

export default BackToHomeButton
