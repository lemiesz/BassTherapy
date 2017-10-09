// app/auth.js

import { AsyncStorage } from "react-native";
import * as firebase from 'firebase';

const USER_KEY = "USER_KEY";

// Returns a promise to be handled by consumer
export const onSignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
    // AsyncStorage.setItem(USER_KEY, "true");
  });
}

export const onSignOut = () => {
  if(!firebase.auth().currentUser) {
    return;
  }
  firebase.auth().signOut();
}

export const onSignUp = (userName, password) => firebase.auth().createUserWithEmailAndPassword(userName, password);

export const isSignedIn = () => {
  return firebase.auth().currentUser !== null;
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
}
