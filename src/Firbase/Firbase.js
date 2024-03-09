// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyvtR9lHsEYDU9zgsA8uqX0oD0EsTgoPU",
  authDomain: "firbase-react-auth-1515e.firebaseapp.com",
  projectId: "firbase-react-auth-1515e",
  storageBucket: "firbase-react-auth-1515e.appspot.com",
  messagingSenderId: "554940850215",
  appId: "1:554940850215:web:fd3b183e8d8506ecc9ee02",
  measurementId: "G-MH507B9ENE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;