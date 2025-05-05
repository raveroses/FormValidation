import { IoMdContact } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "firebase/auth";
import auth from "./FirebaseConfig/FirebaseConfig";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
export default function UserProfile({ user, nameSignUp }) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        if (!auth.currentUser) {
          navigate("/");
          localStorage.removeItem("userDETAILS");
          localStorage.removeItem("details");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [eyeBoo, setEyeBoo] = useState({
    eyeBooOne: false,
    eyeBooTwo: false,
  });
  const eyeTogglingOne = () => {
    setEyeBoo((prev) => ({ ...prev, eyeBooOne: !prev.eyeBooOne }));
  };
  const eyeTogglingTwo = () => {
    setEyeBoo((prev) => ({ ...prev, eyeBooTwo: !prev.eyeBooTwo }));
  };
  console.log(eyeBoo.eyeBooOne);
  return (
    <div
      className="bg-white w-[370px] h-[310px] mx-auto absolute top-25 right-0 z-30 px-3 py-3 max-w-full
     rounded md:w-[350px] md:h-[320px] md:right-8 md:mx-0 md:top-20"
    >
      <div className="first hidden">
        {" "}
        <div
          className="text-white w-[330px] h-[125px] bg-white rounded max-w-full shadow-[2px_2px_2px_2px]
       shadow-gray-300 m-2 py-2 px-2 md:w-[300px] md:h-[125px]"
        >
          <div className="flex items-center gap-3 border-b-1 border-black pb-1">
            <div className="image">
              <img
                src={`${user?.user?.photoURL || "images/cartoon.jpeg"}`}
                alt="profile-image"
                className="rounded-full w-[50px]"
              />
            </div>
            <div className="name text-black font-semibold text-[16px]">
              {user?.user?.displayName || nameSignUp?.name}
            </div>
          </div>
          <div className="profile text-black flex items-center gap-1 justify-center bg-gray-300 w-[90%] mt-3 mx-4 py-1 rounded cursor-pointer">
            <IoMdContact className="text-[20px]" />
            <h4 className="font-semibold text-[15px]">View Profile</h4>
          </div>
        </div>
        <div>
          <div className="setting flex items-center gap-3 mt-8 py-1 px-1 rounded hover:bg-gray-200 transition delay-100 transition-all cursor-pointer">
            <div className="bg-gray-300 rounded-full p-3">
              <IoSettings className="text-[20px]" />
            </div>
            <h4 className="font-semibold text-[16px]">Change Password</h4>
          </div>
          <div className="setting flex items-center gap-3 mt-3 py-1 px-1 rounded hover:bg-gray-200 transition delay-100 transition-all cursor-pointer">
            <div className="bg-gray-300 rounded-full p-3">
              <LuLogOut className="text-[20px]" />
            </div>
            <h4 className="font-semibold text-[16px]" onClick={handleSignOut}>
              Log Out
            </h4>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="head flex items-center gap-5">
          <FaArrowLeftLong className="text-[18px]" />
          <h3 className="font-bold text-[25px]">Change Password</h3>
        </div>
        <form className="flex flex-col mt-10 gap-[10px]">
          <div className="flex flex-col">
            <div className="labelflex flex justify-between">
              <label htmlFor="old" className="pb-[5px] font-semibold">
                Old password
              </label>
              {eyeBoo.eyeBooOne ? (
                <FaEye onClick={eyeTogglingOne} />
              ) : (
                <FaEyeSlash onClick={eyeTogglingOne} />
              )}
            </div>
            <input
              type={`${eyeBoo.eyeBooOne ? "text" : "password"}`}
              id="old"
              className="outline-none border-1 border-gray-500 px-[5px] py-[4px] rounded"
            />
          </div>
          <div className="flex flex-col">
            <div className="labelflex flex justify-between">
              <label htmlFor="new" className="pb-[5px] font-semibold">
                New password
              </label>
              {eyeBoo.eyeBooTwo ? (
                <FaEye onClick={eyeTogglingTwo} />
              ) : (
                <FaEyeSlash onClick={eyeTogglingTwo} />
              )}
            </div>
            <input
              type={`${eyeBoo.eyeBooTwo ? "text" : "password"}`}
              id="new"
              className="outline-none border-1 border-gray-500 px-[5px] py-[4px] rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
