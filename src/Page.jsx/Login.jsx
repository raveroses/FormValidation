import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
export default function Login() {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="text-center ">
        <h3 className="text-[20px] font-semi-bold mb-2">Create an account</h3>
        <p className="text-[14px] text-gray-500 mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          adipisci!
        </p>
      </div>

      <form className="flex flex-col ml-[410px]">
        <label htmlFor="name" className="mb-1 text-semi-bold text-gray-600">
          Profile name
        </label>
        <input
          type="text"
          id="name"
          className="w-[450px] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold "
          placeholder="Enter your profile name"
        />

        <label htmlFor="phone" className="mb-1 text-semi-bold text-gray-600">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="w-[450px] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold "
          placeholder="Enter your profile number"
        />
        <label htmlFor="password" className="mb-1 text-semi-bold text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-[450px] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold "
          placeholder="Enter your profile email"
        />
        <div>
          {" "}
          <label
            htmlFor="password"
            className="mb-1 text-semi-bold text-gray-600"
          >
            Password
          </label>
          <IoEyeSharp />
          <FaEyeSlash />
        </div>
        <input
          type="password"
          id="password"
          className="w-[450px] p-2 mb-3 border border-gray-500 rounded placeholder:font-semi-bold "
          placeholder="Enter your profile Password"
        />

        <button>Sign in</button>
      </form>
    </div>
  );
}
