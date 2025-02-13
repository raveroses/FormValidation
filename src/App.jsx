import "./index.css";
import First from "./Page.jsx/First";
import { Routes, Route, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "./Components/FirebaseConfig/FirebaseConfig";
import SignUp from "./Page.jsx/SignUp";
import Dashboard from "./Page.jsx/Dashboard";
import FacebookSign from "./Components/FirebaseConfig/Facebook";
function App() {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const navigate = useNavigate();
  const GoogleSignUp = async () => {
    console.log("clicked");
    try {
      const signn = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(signn);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = signn.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      navigate("/dashboard");
      console.log(user);
      console.log(token);
    } catch (error) {
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      console.log(error.message);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <First GoogleSignUp={GoogleSignUp} FacebookSign={FacebookSign} />
        }
      />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
