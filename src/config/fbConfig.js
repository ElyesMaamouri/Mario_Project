import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUu1sPWbA1xJHDPO4sNLVMbuu0aPxp3pg",
  authDomain: "marioproject-99b85.firebaseapp.com",
  projectId: "marioproject-99b85",
  storageBucket: "marioproject-99b85.appspot.com",
  messagingSenderId: "272907060662",
  appId: "1:272907060662:web:c92eeda50159e430496d17",
  measurementId: "G-17E20RV4DR",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
