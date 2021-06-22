import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYmdjuQxmX1VqGES3_vrfG_Ie60zeqJNU",
  authDomain: "fir-demo-istanbul.firebaseapp.com",
  projectId: "fir-demo-istanbul",
  storageBucket: "fir-demo-istanbul.appspot.com",
  messagingSenderId: "417315551058",
  appId: "1:417315551058:web:f468d51dfd82347476ec8b",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
