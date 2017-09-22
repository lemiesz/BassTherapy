/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import * as firebase from 'firebase';

import CheckInPage from "./app/components/CheckInPage";


var config = {
  apiKey: "AIzaSyB0Q5T80MOTX1-06m7giB9FBlc3qkroGkk",
  authDomain: "basstherapy-e6b88.firebaseapp.com",
  databaseURL: "https://basstherapy-e6b88.firebaseio.com",
  projectId: "basstherapy-e6b88",
  storageBucket: "basstherapy-e6b88.appspot.com",
  messagingSenderId: "85731092758"
};
firebase.initializeApp(config);
export default class BassTherapy extends Component {
  render() {
    return <CheckInPage />;
  }
}

AppRegistry.registerComponent('BassTherapy2', () => BassTherapy);
