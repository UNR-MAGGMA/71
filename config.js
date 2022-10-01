import firebase from "firebase";

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCiyijZE9CGjqpcKTa9aOrCG1Ky_JWqH1E",
  authDomain: "project-71-50b43.firebaseapp.com",
  projectId: "project-71-50b43",
  storageBucket: "project-71-50b43.appspot.com",
  messagingSenderId: "543361118697",
  appId: "1:543361118697:web:91dcd84bc30def82c91b78",
  measurementId: "G-RH4Q78YZP7"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
