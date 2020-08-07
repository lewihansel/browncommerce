// import firebase from "firebase";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW-I5HFAggk0iYwMhSahKxIg2gJU4ZmF4",
  authDomain: "brown-sandbox.firebaseapp.com",
  databaseURL: "https://brown-sandbox.firebaseio.com",
  projectId: "brown-sandbox",
  storageBucket: "brown-sandbox.appspot.com",
  messagingSenderId: "804911460550",
  appId: "1:804911460550:web:4bf663e81a27a62713a7c7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectAuth = firebase.auth();
export const projectDB = firebase.firestore();
// export const projectStorage = firebase.
