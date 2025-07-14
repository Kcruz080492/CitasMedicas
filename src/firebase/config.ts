// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQba82tPznpZcqUZC9vtnkV7Jtp1hESYE",
  authDomain: "miniappreact.firebaseapp.com",
  projectId: "miniappreact",
  storageBucket: "miniappreact.firebasestorage.app",
  messagingSenderId: "210782744217",
  appId: "1:210782744217:web:b22bc43c3921b2f64bd208",
  measurementId: "G-W3530E9NK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);