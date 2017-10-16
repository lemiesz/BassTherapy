// app/auth.js

import { AsyncStorage } from "react-native";
import * as firebase from 'firebase';

const USER_KEY = "USER_KEY";

// Returns a promise to be handled by consumer
export const onSignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
    // AsyncStorage.setItem(USER_KEY, "true");
    // var uid = data.val();
    // firebase.ref("users")
    var uid = getCurrentUser().uid;
    var userRef = firebase.database().ref("test/");
    return firebase.database().ref("users/").child(uid).transaction((currentUserData) => {
      if(!currentUserData) {
        return {
          tokens: "null",
          settings: "null"
        }
      }
    }).then(() => {
      return Promise.resolve(data);
    });
  });
}

export const onSignOut = () => {
  if(!firebase.auth().currentUser) {
    return Promise.resolve();
  }
  return firebase.auth().signOut();
}

export const onSignUp = (userName, password) => {
  return firebase.auth().createUserWithEmailAndPassword(userName, password)};

export const isSignedIn = () => {
  return firebase.auth().currentUser !== null;
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
}
