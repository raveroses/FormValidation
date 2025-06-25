import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);
export default auth;
