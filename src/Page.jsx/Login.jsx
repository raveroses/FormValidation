import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import auth from "../Components/FirebaseConfig/FirebaseConfig";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
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
  console.log(attempt);
  const handleValidation = () => {
    if (!loginDeet?.password.trim() || !loginDeet?.email.trim()) {
      toast.error("Please fill all required field");
      return false;
    }

    return true;
  };

  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();

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
      toast.success("Account Login succcessfully");
      navigate("/dashboard");
    } catch (error) {
      const errorCode = error.code;
      //   const errorMessage = error.message;
      if (errorCode === "auth/invalid-credential") {
        toast.error("Incorrect Password");
        setAttempt((prev) => prev - 1);
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
      toast.error("Too many failed attempts. Try again later.");
    }
  }, [attempt]);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log("clicked");
    if (attempt === 0) {
      try {
        await sendPasswordResetEmail(auth, loginDeet?.email.trim());

        toast.success("Link sent to your E-mail");
        // ..
      } catch (error) {
        const errorMessage = error.message;
        // ..
        toast.error(errorMessage);
      }
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
        <button
          className="text-[14px] underline cursor-pointer flex justify-left hover:text-gray-500"
          onClick={handleResetPassword}
        >
          Forgot Password
        </button>
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
      <ToastContainer transition={Bounce} />
    </div>
  );
}
