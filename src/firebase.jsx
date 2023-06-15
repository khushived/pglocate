// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATcO7njXBAqpcgjWI2Ro03dnn86gmk6Y0",
  authDomain: "pgfind-c98a9.firebaseapp.com",
  projectId: "pgfind-c98a9",
  storageBucket: "pgfind-c98a9.appspot.com",
  messagingSenderId: "890904908193",
  appId: "1:890904908193:web:13e910ebbed8c03fe73be0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
