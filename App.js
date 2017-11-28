/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Dispatches from './components/Dispatches';
import Activities from './components/Activities';
import Config from './components/Config';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Stack = StackNavigator( {
  Home: {
    screen: Home,
    title: 'Home',
    headerStyle: { marginTop: 2},
    headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
  },
  Dispatches: {
    screen: Dispatches,
    title: 'Dispatches',
    headerStyle: { marginTop: 2},
    headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
  },
  Activities: {
    screen: Activities,
    title: 'Activity',
    headerStyle: { marginTop: 2},
    headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
  },
  Config: {
    screen: Config,
    title: 'Config',
    headerStyle: { marginTop: 2},
    headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <Stack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
