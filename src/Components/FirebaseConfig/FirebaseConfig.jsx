// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpihNcHkNuMDyZ81nw5c43dDyGRRozCKM",
  authDomain: "form-validation-2931e.firebaseapp.com",
  projectId: "form-validation-2931e",
  storageBucket: "form-validation-2931e.firebasestorage.app",
  messagingSenderId: "873866967498",
  appId: "1:873866967498:web:dd87c4a2f8724e9b3eb733",
  measurementId: "G-58PEP74SJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
