import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjMtX2hUPrUV92ICZnlZButo_G_iIgZNQ",
  authDomain: "tinder-firebase-v1.firebaseapp.com",
  projectId: "tinder-firebase-v1",
  storageBucket: "tinder-firebase-v1.appspot.com",
  messagingSenderId: "351266995838",
  appId: "1:351266995838:web:92a410b9afe3183dd6622f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
