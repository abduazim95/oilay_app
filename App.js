/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Store from '@/store';


import AppNavigator from '@/navigation';
import NavigationService from '@/navigation/NavigationService';


const App = () => (
  <Provider store={Store}>
    <AppNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
