// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM61ZAgz2xQn6sv6g7mi01INGk2jv9KIQ",
  authDomain: "scheduler-e9326.firebaseapp.com",
  projectId: "scheduler-e9326",
  storageBucket: "scheduler-e9326.appspot.com",
  messagingSenderId: "596432139170",
  appId: "1:596432139170:web:14d9e962c60b6907ef78fb",
  measurementId: "G-JYLGSKR068",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
