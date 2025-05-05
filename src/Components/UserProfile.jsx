import { IoMdContact } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
export default function UserProfile({ user, userDetail }) {
  return (
    <div
      className="bg-white w-[370px] h-[310px] mx-auto absolute top-25 right-0 z-30 px-3 py-3 max-w-full
     rounded md:w-[350px] md:h-[320px] md:right-8 md:mx-0 md:top-20"
    >
      <div className="first">
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
              {user?.user?.displayName || userDetail?.profileName}
            </div>
          </div>
          <div className="profile text-black flex items-center gap-1 justify-center bg-gray-300 w-[90%] mt-3 mx-4 py-1 rounded">
            <IoMdContact className="text-[20px]" />
            <h4 className="font-semibold text-[15px]">View Profile</h4>
          </div>
        </div>
        <div>
          <div className="setting flex items-center gap-3 mt-8 py-1 px-1 rounded hover:bg-gray-200 transition delay-100 transition-all">
            <div className="bg-gray-300 rounded-full p-3">
              <IoSettings className="text-[20px]" />
            </div>
            <h4 className="font-semibold text-[16px]">Setting & Privacy</h4>
          </div>
          <div className="setting flex items-center gap-3 mt-3 py-1 px-1 rounded hover:bg-gray-200 transition delay-100 transition-all">
            <div className="bg-gray-300 rounded-full p-3">
              <LuLogOut className="text-[20px]" />
            </div>
            <h4 className="font-semibold text-[16px]">Log Out</h4>
          </div>
        </div>
      </div>
      <div className="second"></div>
    </div>
  );
}
