import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBLayFZV5d5IIUxahtSe3pq8clPXbaGP14",
  authDomain: "mario-be968.firebaseapp.com",
  projectId: "mario-be968",
  storageBucket: "mario-be968.appspot.com",
  messagingSenderId: "832658702917",
  appId: "1:832658702917:web:84947819a41f82da39192c",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebaseConfig;
