// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYoe8B7nqcW5hwbuOUueZ4gPC4cGoo700",
  authDomain: "ai-travel-planner-4f38e.firebaseapp.com",
  projectId: "ai-travel-planner-4f38e",
  storageBucket: "ai-travel-planner-4f38e.firebasestorage.app",
  messagingSenderId: "233521851582",
  appId: "1:233521851582:web:5f585cea37740d65c182ef",
  measurementId: "G-4MSRD8DZ6B"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);




