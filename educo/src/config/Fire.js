import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0RSTSVeVEoPolE89m972MBDxaEiSdl-U",
  authDomain: "educo-210.firebaseapp.com",
  databaseURL: "https://educo-210.firebaseio.com",
  projectId: "educo-210",
  storageBucket: "educo-210.appspot.com",
  messagingSenderId: "515776010672",
  appId: "1:515776010672:web:e01c5b6d8ef2223b559e75",
  measurementId: "G-K6JV0R0CY7",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
