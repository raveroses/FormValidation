import { useState, useContext } from "react";
import { FaCaretDown, FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import UserContext from "../Context.jsx/UserContext";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignUp() {
  const {
    month,
    date,
    years,
    handleToggling,
    gender,
    onChange,
    passwordToggle,
    passwordToggling,
    checko,
    handleCheck,
    handleSubmission,
    userDetail,
  } = useContext(UserContext);
  console.log(userDetail);
  const [arrow, setArrow] = useState({
    dayArrow: false,
    monthArrow: false,
    yearArrow: false,
  });

  const dayArrows = () => {
    setArrow((prev) => ({
      ...prev,
      dayArrow: true,
      monthArrow: false,
      yearArrow: false,
    }));
  };
  const monthArrows = () => {
    setArrow((prev) => ({
      ...prev,
      monthArrow: true,
      dayArrow: false,
      yearArrow: false,
    }));
  };
  const yearArrows = () => {
    setArrow((prev) => ({
      ...prev,
      yearArrow: true,
      monthArrow: false,
      dayArrow: false,
    }));
  };

  return (
    <div className="flex flex-col justify-center w-full p-2 md:p-0">
      <div className="text-center ">
        <h3 className="text-[20px] font-semi-bold mb-2">Create an account</h3>
        <p className="text-[14px] text-gray-500 mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          adipisci!
        </p>
      </div>

      <form className="flex flex-col m-auto" onSubmit={handleSubmission}>
        <label htmlFor="name" className="mb-1 text-semi-bold text-gray-600">
          Profile name
        </label>
        <input
          type="text"
          id="name"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px] "
          placeholder="Enter your profile name"
          name="profileName"
          value={userDetail?.profileName}
          onChange={onChange}
        />

        <label htmlFor="phone" className="mb-1 text-semi-bold text-gray-600">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px]"
          placeholder="Enter your profile number"
          name="phoneNumber"
          value={userDetail?.phoneNumber}
          onChange={onChange}
        />
        <label htmlFor="password" className="mb-1 text-semi-bold text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px]"
          placeholder="Enter your profile email"
          name="email"
          value={userDetail?.email}
          onChange={onChange}
        />
        <div className="w-full flex justify-start gap-[280px] items-center md:justify-start md:gap-[360px] ">
          <label
            htmlFor="password"
            className="mb-1 text-semi-bold text-gray-600"
          >
            Password
          </label>

          <div className="flex ">
            {passwordToggling ? (
              <IoEyeSharp onClick={passwordToggle} />
            ) : (
              <FaEyeSlash onClick={passwordToggle} />
            )}
          </div>
        </div>
        <input
          type={passwordToggling ? "text" : "password"}
          id="password"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px]"
          placeholder="Enter your profile Password"
          name="password"
          value={userDetail?.password}
          onChange={onChange}
        />

        <div>
          <h3 className="mb-1 text-semi-bold text-gray-600">
            What's your gender?
          </h3>
          <input
            type="radio"
            id="male"
            className="mr-2"
            value="Male"
            checked={gender === "Male"}
            onChange={handleToggling}
          />
          <label
            htmlFor="male"
            className="mb-1 text-semi-bold text-gray-600 mr-10"
          >
            Male
          </label>

          <input
            type="radio"
            name=""
            id="female"
            className="mr-2"
            value="Female"
            checked={gender === "Female"}
            onChange={handleToggling}
          />
          <label
            htmlFor="female"
            className="mb-1 text-semi-bold text-gray-600 mr-10"
          >
            Female
          </label>

          <input
            type="radio"
            name=""
            id="binary"
            className="mr-2"
            value="Binary"
            checked={gender === "Binary"}
            onChange={handleToggling}
          />
          <label
            htmlFor="binary"
            className="mb-1 text-semi-bold text-gray-600 mr-10"
          >
            Non-binary
          </label>
        </div>

        {/* DATE OF BIRTH */}
        <div className="flex gap-3">
          <div className="relative">
            <p className="text-gray-500">Day</p>
            <div className="flex gap-15 items-center border border-gray-400 p-1 rounded text-gray-500 md:gap-25">
              <p className="text-gray-500">{userDetail?.day}</p>
              <FaCaretDown className="text-gray-500" onClick={dayArrows} />
            </div>
            <div
              className={`absolute w-[90px]  bg-white shadow-md shadow-gray-300 h-[270px] overflow-x-auto p-4 ${
                arrow?.dayArrow ? "visible" : "hidden"
              } md:w-[135px] `}
            >
              <ul className="list-none">{date}</ul>
            </div>
          </div>

          <div>
            <p className="text-gray-500  ">Month</p>
            <div className="flex gap-15 items-center border border-gray-400 p-1 rounded text-gray-500 md:gap-25">
              <p className="text-gray-500">{userDetail?.month}</p>
              <FaCaretDown className="text-gray-500" onClick={monthArrows} />
            </div>

            <div
              className={`absolute w-[90px] bg-white shadow-md shadow-gray-300 h-[270px] overflow-x-auto p-4 ${
                arrow?.monthArrow ? "visible" : "hidden"
              } md:w-[135px]`}
            >
              <ul className="list-none">{month}</ul>
            </div>
          </div>
          <div>
            <p className="text-gray-500">Year</p>
            <div className="flex gap-15 items-center border border-gray-500 p-1 rounded text-gray-500 md:gap-25">
              <p className="text-gray-500">{userDetail?.year}</p>
              <FaCaretDown className="text-gray-500" onClick={yearArrows} />
            </div>
            <div
              className={`absolute w-[90px] bg-white shadow-md shadow-gray-300 h-[270px] overflow-x-auto p-4 ${
                arrow?.yearArrow ? "visible" : "hidden"
              } md:w-[135px]`}
            >
              <ul className="list-none">{years}</ul>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <input
            type="checkbox"
            name="checkbox"
            value="check"
            onChange={handleCheck}
            checked={checko === "check"}
          />
          <p className="text-gray-500 text-[12px] ml-2">
            By creating an account, you agree to our Terms of use and Privacy
            Policy
          </p>
        </div>
        <div className="flex justify-center mt-4 ">
          <button
            type="submit"
            className=" w-[90%] bg-black p-2 text-white text-[15px] font-semi-bold border-none m-w-full md:w-full"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center">
          Already have an account ?
          <a href="/login" className="underline">
            Login
          </a>
        </p>
      </form>
      <ToastContainer transition={Bounce} />
    </div>
  );
}
