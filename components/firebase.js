import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage"; // <----
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJd6thdBJsrCbr7AVY-EBJtnzqLgCjKvQ",
  authDomain: "citasbanco-a8c9d.firebaseapp.com",
  projectId: "citasbanco-a8c9d",
  storageBucket: "citasbanco-a8c9d.appspot.com",
  messagingSenderId: "438050096177",
  appId: "1:438050096177:web:b9a9ffee712ff200a1c110"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.

export default firebase;
