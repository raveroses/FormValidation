import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import UserContext from "../Components/UserContext";
import { useNavigate } from "react-router-dom";
import auth from "../Components/FirebaseConfig/FirebaseConfig";
export default function Login() {
  const { userDetail } = useContext(UserContext);
  const [eyeHidden, setEyeHidden] = useState(false);
  const handleEyeHidden = () => {
    setEyeHidden((prev) => !prev);
  };

  const [loginDeet, setLoginDeet] = useState(() => {
    const save = localStorage.getItem("getDetail");
    return save
      ? JSON.parse(save)
      : {
          email: "",
          password: "",
        };
  });

  const [attempt, setAttempt] = useState(5);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);
  console.log(attempt);
  const handleValidation = () => {
    if (!loginDeet?.password.trim() || !loginDeet?.email.trim()) {
      alert("Please fill all required field");
      return false;
    }
    // if (!userDetail?.email.trim() || !userDetail?.password.trim()) {
    //   return false;
    // }
    return true;
  };

  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();
    console.log("clicked");
    if (!handleValidation()) return;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginDeet?.email.trim(),
        loginDeet?.password.trim()
      );
      const user = userCredential.user;
      console.log(user);
      setLoginDeet({ email: "", password: "" });
      localStorage.removeItem("getDetail");
      navigate("/dashboard");
    } catch (error) {
      const errorCode = error.code;
      //   const errorMessage = error.message;
      if (errorCode === "auth/invalid-credential") {
        setAttempt((prev) => prev - 1);
        setErrorMessage("Incorrect Password");
      }
      console.log(errorCode);
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginDeet((prev) => {
      const saver = { ...prev, [name]: value };
      localStorage.setItem("getDetail", JSON.stringify(saver));
      return saver;
    });
  };

  //   import { getAuth, sendPasswordResetEmail } from "firebase/auth";
  const [disables, setDisables] = useState(false);
  useEffect(() => {
    if (attempt === 0) {
      setDisables(true);
      alert("Too many request");
    }
  }, [attempt]);
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, loginDeet?.email);

      // Password reset email sent!
      console.log("checl mail");
      // ..
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }
  };

  console.log(loginDeet);
  return (
    <div className="w-full p-3 h-auto flex flex-col mx-auto mt-[60px] md:w-[500px] ">
      <div className="text-[20px] font-bold text-center">
        Sign in your account
      </div>

      <form
        className="flex flex-col p-5 border-1 border-gray-400 rounded-xl "
        onSubmit={handleSubmission}
      >
        <label htmlFor="email" className="text-[15px] text-gray-400 mb-1">
          email address
        </label>
        <input
          type="email"
          name="email"
          value={loginDeet?.email}
          onChange={handleOnChange}
          className="border-1 border-gray-400 p-2 rounded mb-2"
        />
        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="email" className="text-[15px] text-gray-400 mb-1">
              Password
            </label>
          </div>
          <div onClick={handleEyeHidden} className="cursor-pointer">
            {eyeHidden ? <IoEyeSharp /> : <FaEyeSlash />}
          </div>
        </div>
        <input
          type={eyeHidden ? "text" : "password"}
          id="password"
          name="password"
          value={loginDeet?.password}
          onChange={handleOnChange}
          className="border-1 border-gray-400 p-2 rounded mb-1"
        />
        <a
          href=""
          className="text-[14px] underline cursor-pointer hover:text-gray-500"
          onClick={handleResetPassword}
        >
          Forgot Password
        </a>
        <button
          className="bg-black rounded text-white text-[16px] p-2 text-center cursor-pointer mt-9 "
          disabled={disables && "disables"}
        >
          Sign in
        </button>

        <p className="text-center text-[15px] text-gray-600 mt-5 underline">
          Don't have an account? <a href="/signUp">Sign up</a>
        </p>
      </form>
    </div>
  );
}
