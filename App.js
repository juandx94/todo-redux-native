/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';

import store from './src/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <HomeScreen />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
