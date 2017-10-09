import React, {Component} from "react";
import {Text, View} from "react-native";
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import CheckInScreen from "./components/CheckInScreen";
import RewardScreen from "./components/RewardScreen";
import TabContainer from "./components/TabContainer";
import SignUp from "./components/SignUp";
import {isSignedIn} from "./lib/auth";
import * as firebase from "firebase";
import {createRootNavigator} from "./Layout";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0Q5T80MOTX1-06m7giB9FBlc3qkroGkk",
  authDomain: "basstherapy-e6b88.firebaseapp.com",
  databaseURL: "https://basstherapy-e6b88.firebaseio.com",
  projectId: "basstherapy-e6b88",
  storageBucket: "basstherapy-e6b88.appspot.com",
  messagingSenderId: "85731092758"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    }
  }

  componentWillMount() {
      this.setState({signedIn: isSignedIn()});
  }

  render() {
    const Layout = createRootNavigator(this.state.signedIn);
    return <Layout />
  }

}

export default App;
