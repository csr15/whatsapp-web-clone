import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXX",
  authDomain: "XXXXXXXXXXX",
  projectId: "XXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "XXXXXXXXXXX",
  measurementId: "XXXXXXXXXXX",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
