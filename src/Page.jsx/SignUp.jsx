import { FaCaretDown, FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function Login() {
  return (
    <div className="flex flex-col justify-center w-full p-2 md:p-0">
      <div className="text-center ">
        <h3 className="text-[20px] font-semi-bold mb-2">Create an account</h3>
        <p className="text-[14px] text-gray-500 mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          adipisci!
        </p>
      </div>

      <form className="flex flex-col m-auto">
        <label htmlFor="name" className="mb-1 text-semi-bold text-gray-600">
          Profile name
        </label>
        <input
          type="text"
          id="name"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px] "
          placeholder="Enter your profile name"
        />

        <label htmlFor="phone" className="mb-1 text-semi-bold text-gray-600">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px]"
          placeholder="Enter your profile number"
        />
        <label htmlFor="password" className="mb-1 text-semi-bold text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px]"
          placeholder="Enter your profile email"
        />
        <div className="flex justify-between m-w-full md:justify-start md:gap-77">
          <label
            htmlFor="password"
            className="mb-1 text-semi-bold text-gray-600"
          >
            Password
          </label>

          <div className="flex ">
            <IoEyeSharp />
            <FaEyeSlash />
            <div>Hide</div>
          </div>
        </div>
        <input
          type="password"
          id="password"
          className="w-[95%] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold m-w-full md:w-[450px]"
          placeholder="Enter your profile Password"
        />

        <div>
          <h3 className="mb-1 text-semi-bold text-gray-600">
            What's your gender?
          </h3>
          <input type="radio" name="" id="male" className="mr-2" />
          <label
            htmlFor="male"
            className="mb-1 text-semi-bold text-gray-600 mr-10"
          >
            Male
          </label>

          <input type="radio" name="" id="female" className="mr-2" />
          <label
            htmlFor="female"
            className="mb-1 text-semi-bold text-gray-600 mr-10"
          >
            Female
          </label>

          <input type="radio" name="" id="binary" className="mr-2" />
          <label
            htmlFor="binary"
            className="mb-1 text-semi-bold text-gray-600 mr-10"
          >
            Non-binary
          </label>
        </div>

        {/* DATE OF BIRTH */}
        <div className="flex gap-3">
          <div>
            <p className="text-gray-500">Day</p>
            <div className="flex gap-15 items-center border border-gray-400 p-1 roundedtext-gray-500 md:gap-25">
              <p className="text-gray-500">34</p>
              <FaCaretDown className="text-gray-500" />
            </div>
          </div>

          <div>
            <p className="text-gray-500">Month</p>
            <div className="flex gap-15 items-center border border-gray-400 p-1 rounded text-gray-500 md:gap-25">
              <p className="text-gray-500">34</p>
              <FaCaretDown className="text-gray-500" />
            </div>
          </div>
          <div>
            <p className="text-gray-500">Year</p>
            <div className="flex gap-15 items-center border border-gray-500 p-1 rounded text-gray-500 md:gap-25">
              <p className="text-gray-500">34</p>
              <FaCaretDown className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <input type="checkbox" name="" id="" />
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
          <a href="" className="underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
