/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './src/application/redux'
import SplashScreen from './src/presentation/screens/Splash/Splash'

const App = () => {
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>
  );
};

export default App;
