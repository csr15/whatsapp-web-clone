import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA098cZGQl9wLhoGxEGle1RIwTHibm-VD8",
  authDomain: "whatsa-a8607.firebaseapp.com",
  projectId: "whatsa-a8607",
  storageBucket: "whatsa-a8607.appspot.com",
  messagingSenderId: "99483823712",
  appId: "1:99483823712:web:015ef49a34df76343c5d05",
  measurementId: "G-05MPKJ8G3R",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
