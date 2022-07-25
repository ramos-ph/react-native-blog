import React from 'react'
import {StatusBar} from 'react-native'

import Navigator from './navigator'

function App() {
	return (
		<>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />

			<Navigator />
		</>
	)
}

export default App
