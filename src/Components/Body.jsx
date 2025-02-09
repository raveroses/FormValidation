export default function Body() {
  return (
    <div className="w-full flex gap-20 mt-[10px]">
      <div className="w-[45%] p-25 ">
        <h2 className="font-bold text-[34px] tracking-widest text-left">
          Explore the world to experience the beauty of nature
        </h2>
        <p className="text-left text-[14px] text-gray-400">
          Lorem ipsum dolor, sit amet .consectetur ipsum dolor
        </p>
        <p className="text-center text-[13px] text-gray-400">
          {" "}
          adipisicing elit Blanditiis, error!
        </p>

        <div className="flex gap-10 justify-center border-1 rounded-2xl p-1 mt-8">
          <img src="/images/google.png" alt="" className="w-[25px] " />{" "}
          <p className="text-semi-bold">Continue with Google</p>
        </div>
        <div className="flex gap-4 justify-center border-1 rounded-2xl p-1 mt-3">
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
      </div>

      <div className="second-content w-[50%]">
        <img
          src="/images/Historic.jpg"
          alt="bus-image"
          className="w-[600px] h-[550px]"
        />
      </div>
    </div>
  );
}
