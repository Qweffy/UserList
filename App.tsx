import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from 'services/navigator/AppNavigator'
import store, { persistor } from 'app/stores'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
)

export default App
