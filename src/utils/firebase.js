// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8JRvw-I85G3lTMqxmeWt5lBcjTRbyc4g",
  authDomain: "netflix-gpt-53bb2.firebaseapp.com",
  projectId: "netflix-gpt-53bb2",
  storageBucket: "netflix-gpt-53bb2.firebasestorage.app",
  messagingSenderId: "478693044101",
  appId: "1:478693044101:web:08cfc03c39980b35501eec",
  measurementId: "G-YDBW3STX92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
