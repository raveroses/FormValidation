import { useContext, useEffect, useState } from "react";
import useFetch from "./api/UseFetch";
import { TiStarFullOutline } from "react-icons/ti";
import { MdPlayCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import UserContext from "../Context.jsx/UserContext";

export default function TV() {
  const { handleEndPointChanger } = useContext(UserContext);
  const { dataSetter, loading, fetchMovie, search } = useFetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=b23cab54b01ec0634aae0d6fc905411b"
  );

  useEffect(() => {
    fetchMovie();
  }, []);

  const check = dataSetter.flatMap((item) => {
    return item.results.map((items, index) => {
      const dates = new Date(items.first_air_date);
      const getYear = dates.getFullYear();
      const rate = items.vote_average;
      const shortenRate = rate.toFixed(1);

      return (
        <div key={index} className="group relative ">
          <img
            src={`https://image.tmdb.org/t/p/original/${items.poster_path}`}
            alt="card-movie-image"
            loading="lazy"
            className="w-[190px] opacity-[0.5] rounded-xl group-hover:opacity-[0.2] group-hover:w-[170px] group-hover:delay-100 group-hover:duration-500 group-hover:transition-all"
          />
          <NavLink to={`/video/:${items.id}`}>
            <MdPlayCircle
              className="text-blue-500 absolute top-20 left-15 text-[40px] group-hover:block hidden"
              onClick={handleEndPointChanger}
            />
          </NavLink>
          <div className="tvs absolute left-0 px-3 top-42 md:top-45">
            <p className="tvss text-white text-[13px] font-bold-semibold w-full">
              {items?.name}
            </p>
            <div className="flex items-center gap-9 text-gray-200">
              <div className="flex items-center md:gap-2 font-medium">
                <p className="text-[13px]">{getYear}</p>
                <span className="flex items-center">
                  <TiStarFullOutline className="text-[13px]" />
                  <p className="text-[12px]"> {shortenRate}</p>
                </span>
              </div>
              <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
                tv
              </p>
            </div>
          </div>
        </div>
      );
    });
  });

  const movieSearch = search.flatMap((data) => {
    return data.results.find((dataSearch, index) => {
      if (dataSearch.title === "TMZ") {
        console.log(dataSearch);
      }
    });
  });

  console.log(search);
  return (
    <div className="pt-[90px] border-b-1 md:pt-[40px] bg-black px-4 md:px-8">
      <section className="trending">
        <h2 className="text-white text-[25px] border-b-1 border-white  w-[150px] mb-7">
          TV-Series
        </h2>

        <div className="tv grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-6 ">
          {check}
        </div>
      </section>
    </div>
  );
}
