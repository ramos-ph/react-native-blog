import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import MainScreen from './screens/Main'
import PostScreen from './screens/Post'

const Stack = createNativeStackNavigator()

function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="Main" component={MainScreen} />
				<Stack.Screen name="Post" component={PostScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator
