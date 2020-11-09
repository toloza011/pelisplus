import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyAzBrD8-9_40MhK7Jp36OuaiQyyrdWQ6IE",
  authDomain: "pelisplus-e5ed4.firebaseapp.com",
  databaseURL: "https://pelisplus-e5ed4.firebaseio.com",
  projectId: "pelisplus-e5ed4",
  storageBucket: "pelisplus-e5ed4.appspot.com",
  messagingSenderId: "1097526833721",
  appId: "1:1097526833721:web:8c626375b0ab1194f493e8",
  measurementId: "G-8MCJ19HMDF"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };



