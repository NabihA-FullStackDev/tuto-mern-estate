// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b4082.firebaseapp.com",
  projectId: "mern-estate-b4082",
  storageBucket: "mern-estate-b4082.appspot.com",
  messagingSenderId: "840257089732",
  appId: "1:840257089732:web:02846a76dd52b9b778d991",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
