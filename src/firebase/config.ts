
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
