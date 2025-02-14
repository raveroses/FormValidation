import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
export default function Login() {
  const [eyeHidden, setEyeHidden] = useState(false);
  const handleEyeHidden = () => {
    setEyeHidden((prev) => !prev);
  };
  return (
    <div className="w-full p-3 h-auto flex flex-col mx-auto mt-[60px] md:w-[500px] ">
      <div className="text-[20px] font-bold text-center">
        Sign in your account
      </div>

      <form className="flex flex-col p-5 border-1 border-gray-400 rounded-xl ">
        <label htmlFor="email" className="text-[15px] text-gray-400 mb-1">
          email address
        </label>
        <input
          type="email"
          className="border-1 border-gray-400 p-2 rounded mb-2"
        />
        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="email" className="text-[15px] text-gray-400 mb-1">
              Password
            </label>
          </div>
          <div onClick={handleEyeHidden}>
            {eyeHidden ? <IoEyeSharp /> : <FaEyeSlash />}
          </div>
        </div>
        <input
          type={eyeHidden ? "text" : "password"}
          id="password"
          className="border-1 border-gray-400 p-2 rounded mb-1"
        />
        <a
          href=""
          className="text-[14px] underline cursor-pointer hover:text-gray-500"
        >
          Forgot Password
        </a>
        <button className="bg-black rounded text-white text-[16px] p-2 text-center cursor-pointer mt-9 ">
          Sign in
        </button>

        <p className="text-center text-[15px] text-gray-600 mt-5 underline">
          Don't have an account? <a href="/signUp">Sign up</a>
        </p>
      </form>
    </div>
  );
}
