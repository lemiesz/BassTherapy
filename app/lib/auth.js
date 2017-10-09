// app/auth.js

import { AsyncStorage } from "react-native";
import * as firebase from 'firebase';

// Returns a promise to be handled by consumer
export const onSignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
    console.log(data.email);
    AsyncStorage.setItem(data.email, "true");
  });
}

export const onSignOut = () => {
  if(!firebase.auth().currentUser) {
    return;
  }
  firebase.auth().signOut();
  AsyncStorage.removeItem(firebase.auth().currentUser.email);
}

export const onSignUp = (userName, password) => firebase.auth().createUserWithEmailAndPassword(userName, password);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
}
