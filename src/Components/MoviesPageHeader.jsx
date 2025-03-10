import UserContext from "../Context.jsx/UserContext";
import { BiCameraMovie } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
export default function MoviePageHeader() {
  return (
    <header className="w-full flex justify-between items-center absolute top-0 py-3 px-4 md:px-8 md:py-0 z-[6]">
      <div className="flex justify-start flex-col w-[30%] md:w-[20%]">
        <BiCameraMovie className="text-[45px] text-white ml-[20px] md:text-[40px]" />
        <div className="text-white text-[25px] font-bold hidden md:block">
          Axionis{" "}
        </div>
      </div>
      <div className="text-white  gap-3 text-[14px] md:gap-6 md:text-[18px] hidden md:flex cursor-pointer ">
        <div className="hover:text-purple-600">Home</div>
        <div className="hover:text-purple-600">Movies</div>
        <div className="hover:text-purple-600">Tv-Series</div>
      </div>
      <form className="text-white flex bg-[#0A1F44] items-center rounded-3xl px-2 gap-3 md:w-[30%] md:gap-3 h-[35px] md:h-[40px]">
        <FaSearch className="text-[20px]" />
        <input
          type="text"
          placeholder="Search "
          className=" w-[100px] outline-none md:w-[300px]"
          onChange={handleInput}
        />
        <FaMicrophone className="text-[20px]" />
      </form>
      <div className=" flex text-white items-center md:w-[10%]">
        <IoIosNotificationsOutline className="text-[30px] hidden md:ml-3 md:block " />
        <img
          src="images/user-image.jpeg"
          alt="user-image"
          className="w-[45px] rounded-full ml-0 md:ml-7 md:w-[50px]"
        />
      </div>
    </header>
  );
}
