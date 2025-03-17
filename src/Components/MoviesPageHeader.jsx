import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import useLocalStorage from "../api/useLocalStorage";
import { useEffect } from "react";

export default function MoviePageHeader({ user }) {
  const navigate = useNavigate();
  const [storeValue, setLocalStorages] = useLocalStorage("save", user);

  useEffect(() => {
    setLocalStorages(user);
  }, [user]);

  console.log(storeValue);
  const handleNavigate = () => {
    navigate("/dashboard");
  };
  return (
    <header
      className="w-full flex justify-between items-center absolute top-2 py-0 px-0 
    md:px-8 md:py-0 z-[6]"
    >
      <div
        className="flex gap-1 items-center flex-col w-[30%] md:w-[20%] cursor-pointer md:flex-row md:gap-3"
        onClick={handleNavigate}
      >
        <img
          src="images/axionis.jpg"
          alt="logo"
          className="w-[40px] rounded-full"
        />
        <div className="text-white text-[20px] font-bold">Axionis</div>
      </div>

      <div className=" flex text-white items-center gap-3 md:w-[10%]">
        <NavLink to="/search">
          <div className="text-white bg-[#0A1F44] rounded-full px-2 py-2 ">
            <FaSearch className="text-[15px]" />
          </div>
        </NavLink>
        <div className="relative">
          <img
            src={`${storeValue?.user?.photoURL}`}
            alt="user-image"
            className="w-[45px] rounded-full ml-0 md:ml-7 md:w-[50px]"
          />
          <div className="text-lg absolute bottom-0 right-0 bg-gray-300 rounded-full text-center">
            <RxCaretDown className="font-bold text-red-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
