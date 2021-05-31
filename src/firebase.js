import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCCY1qB7alL1CaQxWOY5EfPsXqnCXMCIb0",
    authDomain: "diplomski-rad-68b67.firebaseapp.com",
    projectId: "diplomski-rad-68b67",
    storageBucket: "diplomski-rad-68b67.appspot.com",
    messagingSenderId: "46675951952",
    appId: "1:46675951952:web:86a74ae2298baf938a2c55",
    measurementId: "G-GVD5ZTKCVG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let db = firebase.firestore();
  let storage = firebase.storage();

  export {
      firebase, 
      db,
      storage
  }