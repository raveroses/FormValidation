import { NavLink } from "react-router-dom";
export default function Body({ GoogleSignUp, FacebookSign }) {
  return (
    <div className="w-full gap-20 p-10 md:m-auto md:mt-[10px] md:flex">
      <div className="md:w-[45%] md:p-25 ">
        <h2 className="font-bold text-[34px] text-left md:tracking-widest">
          Explore the world to experience the beauty of nature
        </h2>
        <p className="text-left text-[14px] text-gray-400">
          Lorem ipsum dolor, sit amet .consectetur ipsum dolor
        </p>
        <p className="text-center text-[13px] text-gray-400">
          {" "}
          adipisicing elit Blanditiis, error!
        </p>

        <div
          className="flex gap-10 justify-center border-1 rounded-2xl p-1 mt-8"
          onClick={GoogleSignUp}
        >
          <img src="/images/google.png" alt="" className="w-[25px] " />{" "}
          <p className="text-semi-bold">Continue with Google</p>
        </div>
        <div
          className="flex gap-4 justify-center border-1 rounded-2xl p-1 mt-3"
          onClick={FacebookSign}
        >
          <img src="/images/FACEBOOK.png" alt="" className="w-[25px] " />{" "}
          <p className="text-semi-bold pl-4">Continue with Facebook</p>
        </div>
        <div className="flex gap-12 justify-center border-1 rounded-2xl p-1 mt-3">
          <img src="/images/apple.png" alt="" className="w-[25px] " />
          <p className="text-semi-bold">Continue with Apple</p>
        </div>
        <div className="flex items-center gap-3 justify-center mt-5">
          <div className="w-[150px] bg-gray-300 h-[2px]"></div>
          <div className="text-[14px] text-gray-500">OR</div>
          <div className="w-[150px] bg-gray-300 h-[2px]"></div>
        </div>
        <div className="flex justify-center mt-[30px] ">
          {" "}
          <button
            type="submit"
            className="bg-black text-white text-center w-full p-[6px] rounded-2xl text-[13px] "
          >
            <NavLink to="/signUp"> Sign up with email</NavLink>
          </button>
        </div>
        <p className="text-[12px] text-center mt-[10px]">
          By creating an account, you agree to the Terms of use and Privacy
          Policy.
        </p>
      </div>

      <div className="second-content w-[50%] hidden md:block ">
        <img
          src="/images/Historic.jpg"
          alt="bus-image"
          className="w-[600px] h-[650px] "
        />
      </div>
    </div>
  );
}
