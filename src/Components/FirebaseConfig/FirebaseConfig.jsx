import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1TMmLHGJSQkyO9nht5oG-9kKBg0LcHXY",
  authDomain: "facebookclone-16efc.firebaseapp.com",
  projectId: "facebookclone-16efc",
  storageBucket: "facebookclone-16efc.firebasestorage.app",
  messagingSenderId: "1077064481627",
  appId: "1:1077064481627:web:e8b7448e762220f3cc787e",
  measurementId: "G-R2427KW7MM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
