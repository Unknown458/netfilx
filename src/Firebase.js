// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL4u1w4Jyf44Q1gr-wsyOOiRjVOfpL73w",
  authDomain: "netflix-8f187.firebaseapp.com",
  projectId: "netflix-8f187",
  storageBucket: "netflix-8f187.appspot.com",
  messagingSenderId: "782849217127",
  appId: "1:782849217127:web:ea82951deac4ee38cb7ac2",
  measurementId: "G-M6GFHRKEJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);