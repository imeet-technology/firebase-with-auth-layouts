// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDCSzyusJXBIqb7_AhIMb-0uD22G7u0XY",
  authDomain: "react-auth-46a67.firebaseapp.com",
  projectId: "react-auth-46a67",
  storageBucket: "react-auth-46a67.appspot.com",
  messagingSenderId: "680611161908",
  appId: "1:680611161908:web:3776c7a93214f4913c6761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
