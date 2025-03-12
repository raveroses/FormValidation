import DashboardHeader from "../Components/DashBoardHeader";
import CardSection from "../Components/CardSection";
import { useState, useContext, useEffect } from "react";
import UserContext from "../Context.jsx/UserContext";
import { TiStarFullOutline } from "react-icons/ti";
import { MdPlayCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Dashboard({ handleEndPointChanger }) {
  const { searchInput } = useContext(UserContext);
  const [save, setSave] = useState([]);

  function handleSave(arr) {
    setSave((prev) => [prev, arr]);
  }
  // [...save].flatMap((item) => {
  //   [...item].map((item) => {
  //     // item.map((item) => {
  //     return item.results.map((data) => {
  //       console.log(data.name || data.original_title);
  //       const checkInput = searchInput.split(" ")[0];
  //       console.log(checkInput);
  //       if (
  //         data.original_name.toLowerCase() === searchInput ||
  //         data.original_name.toLowerCase().split(" ")[0] === checkInput
  //       ) {
  //         console.log(data || "no data");
  //       }
  //     });
  //     // if (!Array.from(item)) return [];

  //     return console.log(item);
  //   });
  // });

  const flatten = save.flat(Infinity);
  // console.log(flatten);
  const ch = flatten.map((item) => {
    return item.results.find((data, index) => {
      const checkInput = searchInput.split(" ")[0];

      if (
        data.original_name?.toLowerCase() === searchInput ||
        data.original_name?.toLowerCase().split(" ")[0] === checkInput ||
        data.title?.toLowerCase() === searchInput ||
        data.title?.toLowerCase().split(" ")[0] === checkInput
      )
        return data;
    });
  });

  // const [set, SetSet] = useState();
  // useEffect(() => {
  //   const checker = [...ch].filter((data) => {
  //     // const dater =
  //     //   data?.release_date?.split("-")[0] || data?.first_air_date?.split("-")[0];

  //     // const rate = data?.vote_average;
  //     // const shortenRate = rate?.toFixed(1);
  //     const realCheck = data ? SetSet(data) : "";
  //     return realCheck;
  //   });
  // }, []);
  // console.log(set);
  const [set, SetSet] = useState([]);

  useEffect(() => {
    if (!ch) return;

    const filteredData = ch.filter((data) => data);
    SetSet(filteredData);
  }, [searchInput]);

  console.log(set);

  return (
    <div className="bg-black pb-30">
      <DashboardHeader />
      <CardSection
        handleEndPointChanger={handleEndPointChanger}
        handleSave={handleSave}
        save={save}
      />
      <div className=" tv grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-6  ">
        {set ? (
          set.map((data, index) => {
            const dates = new Date(data.release_date);
            const getYear = dates.getFullYear();
            const rate = data.vote_average;
            const shortenRate = rate.toFixed(1);

            return (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  alt="card-movie-image"
                  loading="lazy"
                  className="w-[180px] opacity-[0.5] rounded-xl group-hover:opacity-[0.2] group-hover:w-[170px] group-hover:delay-100 group-hover:duration-500 group-hover:transition-all"
                />
                <NavLink to={`/video/:${data.id}`}>
                  <MdPlayCircle className="text-blue-500 absolute top-20 left-15 text-[40px] group-hover:block hidden" />
                </NavLink>
                <div className=" absolute left-0 top-47 md:top-47 px-3">
                  <p className="text-white  text-[13px] font-bold-semibold">
                    {data?.title}
                  </p>
                  <div className="flex items-center gap-8 md:justify-between text-gray-200">
                    <div className="flex items-center gap-2 font-medium">
                      <p className="text-[13px]">{getYear}</p>
                      <span className="flex items-center">
                        <TiStarFullOutline className="text-[13px]" />
                        <p className="text-[12px]"> {shortenRate}</p>
                      </span>
                    </div>
                    <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
                      {" "}
                      movie
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white">No Data Available</p>
        )}
      </div>
    </div>
  );
}
