// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8NN0xZc9TG8FCDe_P5dUDrJLxQVwhzgM",
  authDomain: "netflixgpt-e4dae.firebaseapp.com",
  projectId: "netflixgpt-e4dae",
  storageBucket: "netflixgpt-e4dae.appspot.com",
  messagingSenderId: "536325699714",
  appId: "1:536325699714:web:1955d5eb1c8c68a5cb9c9b",
  measurementId: "G-0Y0QXXGKLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();