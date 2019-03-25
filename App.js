/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Loading from './assets/Authentication/Loading';
import SignUp from './assets/Authentication/SignUp';
import Login from './assets/Authentication/Login';
import Main from './assets/Authentication/Main';
import Student from './profile/Student';
import Tutor from './profile/Tutor';

const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Main: Main,
    Student: Student, 
    Tutor: Tutor, 
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(RootStack);

export default App;

