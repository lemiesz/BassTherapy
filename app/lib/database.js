import * as firebase from 'firebase';

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

export default firebase.database();
