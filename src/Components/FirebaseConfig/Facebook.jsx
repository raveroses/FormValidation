// import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// import auth from "./FirebaseConfig";
// const provider = new FacebookAuthProvider();
// const FacebookSign = async () => {
//   try {
//     const check = await signInWithPopup(auth, provider);
//     const user = check.user;
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(check);
//     const accessToken = credential.accessToken;
//     console.log(user);
//     console.log(accessToken);
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   } catch (error) {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   }
// };
import { signInWithRedirect } from "firebase/auth";
import auth from "./FirebaseConfig";
import {
  getAuth,
  getRedirectResult,
  FacebookAuthProvider,
} from "firebase/auth";

const provider = new FacebookAuthProvider();
const FacebookSign = (e) => {
  e.preventDefault();
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
    });
};

export default FacebookSign;
