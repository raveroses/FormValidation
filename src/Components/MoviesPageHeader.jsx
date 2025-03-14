import { BiCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function MoviePageHeader() {
  return (
    <header className="w-full flex justify-between items-center absolute top-4 py-0 px-4 md:px-8 md:py-0 z-[6] md:py-3">
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

      <div className=" flex text-white items-center gap-3 md:w-[10%]">
        <NavLink to="/search">
          <div className="text-white bg-[#0A1F44] rounded-full px-2 py-2 ">
            <FaSearch className="text-[15px]" />
          </div>
        </NavLink>
        <img
          src="images/user-image.jpeg"
          alt="user-image"
          className="w-[45px] rounded-full ml-0 md:ml-7 md:w-[50px]"
        />
      </div>
    </header>
  );
}
