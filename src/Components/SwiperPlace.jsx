import { RiMovie2AiFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
export default function SwiperPlace(title, rate, overview) {
  return (
    <div className="pt-55">
      <div className="text-white text-[30px] font-extrabold inline-block cursor-pointer md:text-[40px] hover:text-blue-500">
        {title}
      </div>
      <div className="flex items-center gap-2 md:gap-10 ">
        <div className="bg-blue-500 inline-block rounded px-3 py-1 md:px-4 cursor-pointer ">
          <RiMovie2AiFill className="text-white text-[15px] md:text-[20px] " />
        </div>
        <div className="flex items-center">
          <FaStar className="text-white text-[18px]" />
          <p className="text-white">{rate}</p>
        </div>
        <div className="text-gray-400 text-[13px] hover:text-white cursor-pointer hover:transition hover:delay-150 hover:duration-700 hover:ease-in-out">
          Romance
        </div>
        <div className="text-gray-400 text-[13px] cursor-pointer hover:text-white hover:transition hover:delay-150 hover:duration-700 hover:ease-in-out">
          Science Fiction
        </div>
        <div className="text-gray-400 text-[13px] hover:text-white cursor-pointer hover:transition hover:delay-150 hover:duration-700 hover:ease-in-out">
          Thriller
        </div>
      </div>
      <div className="text-gray-400 pt-4 text-semi-bold hidden md:block">
        {overview}
      </div>
      <div className="flex items-center gap-3 mt-6 md:gap-5">
        <div
          className="flex items-center gap-2 border-1 border-blue-600 py-2 rounded-3xl px-4 text-blue-600 cursor-pointer 
        hover:bg-blue-600 hover:border-none hover:text-white hover:transition hover:transition-ease-in-out 
        hover:transition-hover hover:delay-100 hover:duration-400 md:py-2 md:px-8"
        >
          <FaPlay />
          <p> Watch Now</p>
        </div>

        <div
          className="flex items-center gap-2 border-1 py-2 rounded-3xl px-10 text-gray-400 border-gray-400 cursor-pointer
        hover:bg-white hover:border-none hover:text-black hover:transition hover:transition-ease-in-out 
        hover:transition-hover hover:delay-100 hover:duration-400 md:px-14"
        >
          <GoVideo />
          <p> Trailer</p>
        </div>
      </div>
    </div>
  );
}
