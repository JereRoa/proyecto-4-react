// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5zCoIR6Q28uAQldrkpt1MkATn1iv6ZQg",
  authDomain: "react-restaurant-app-6de96.firebaseapp.com",
  projectId: "react-restaurant-app-6de96",
  storageBucket: "react-restaurant-app-6de96.appspot.com",
  messagingSenderId: "1097014813820",
  appId: "1:1097014813820:web:f4932a61cec3152f5095f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);