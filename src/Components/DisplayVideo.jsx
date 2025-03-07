import { useParams } from "react-router-dom";
import useFetch from "./api/UseFetch";
import { useEffect, useContext } from "react";
import UserContext from "../Context.jsx/UserContext";
import { PiClockCountdown } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import { RiPlayFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
export default function DisplayVideo() {
  const { endpointChanger } = useContext(UserContext);
  let param = useParams();
  const convert = Number(param.videoId.replace(":", "").trim());
  const { dataSetter, loading, fetchMovie } = useFetch(
    `https://api.themoviedb.org/3/${
      endpointChanger ? "tv" : "movie"
    }/${convert}?api_key=b23cab54b01ec0634aae0d6fc905411b`
  );

  console.log(
    `Fetching: https://api.themoviedb.org/3/${
      endpointChanger ? "tv" : "movie"
    }/${convert}??api_key=b23cab54b01ec0634aae0d6fc905411b`
  );

  console.log(convert);
  useEffect(() => {
    fetchMovie();
  }, []);
  console.log(endpointChanger);

  // https://api.themoviedb.org/3/movie/1126166?api_key=b23cab54b01ec0634aae0d6fc905411b
  // https://api.themoviedb.org/3/tv/63770?api_key=b23cab54b01ec0634aae0d6fc905411b

  // for (let [key, value] of Object.entries(dataSetter[0])) {
  //   const obj = {};
  //   obj[key] = value;

  // }
  console.log(dataSetter);
  const arr = [dataSetter[0]].map((item) => console.log(item));

  // const dataReturn = [dataSetter[0]].map((item, index) => {
  const dataReturn = dataSetter.map((item, index) => {
    const dates = new Date(item?.first_air_date || item?.release_date);
    const getYear = dates.getFullYear();
    const rate = item.vote_average;
    // const shortenRate = rate.toFixed(1);
    return (
      <div key={item.id}>
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            alt="hero-mage"
            className=" w-full h-[950px] md:h-[500px] object-center object-cover"
          />
        </div>
        <div className="text-white absolute top-30 flex flex-col gap-20 w-full px-4 md:px-8 md:flex-row">
          <div className=" w-full md:w-[20%]">
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt="poster-image"
              className="w-[230px] m-auto rounded-2xl md:w-[240px]"
              loading="lazy"
            />
          </div>
          <div className="movieContent w-full flex flex-col gap-6 md:gap-7 md:w-[60%]">
            <h2 className="font-bold text-[40px] tracking-[2px] md:tracking-[3px]">
              {item.title}
            </h2>
            <div className="smally flex gap-5 text-[16px]">
              <p>{getYear}</p>
              <p className="flex items-center gap-1">
                <span>
                  <PiClockCountdown className="text-[20px]" />
                </span>

                <p>{item.runtime}</p>
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <BsStarFill className="text-[20px]" />
                </span>
                {rate}/<span className="text-[15px] text-gray-300">10</span>
              </p>
              <p> Trailer</p>
            </div>
            <div className="flex gap-10">
              <div className="border-1 border-white rounded-2xl px-2 py-[2px] text-center text-[16px]">
                Horror
              </div>
              <div className="border-1 border-white rounded-2xl px-2 py-[2px] text-center text-[16px]">
                Science Fiction
              </div>
              <div className="border-1 border-white rounded-2xl px-2 py-[2px] text-center text-[16px]">
                Thriller
              </div>
            </div>
            <p className="text-[13px] pr-4">{item.overview}</p>
            <div className="flex gap-1 items-center rounded-3xl bg-gray-600 opacity-[0.7] p-2 w-[130px] md:p-1 md:w-[150px]">
              <p>
                <RiPlayFill className="text-[20px] text-white" />
              </p>
              <p> Watch Now</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="hero ">
      <> {dataReturn}</>
      <div className="cover px-4 py-40 md:px-8 md:py-15">
        <p className="text-gray-400 text-[25px] font-semibold tracking-[3px] ">
          Recommends
        </p>

        <div className="card-flex flex items-center gap-10">
          <div className="py-5">
            <div className="relative">
              <img
                src="https://image.tmdb.org/t/p/original//oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg"
                alt="poster-image"
                className="w-[150px] rounded-2xl"
                loading="lazy"
              />
              <div>
                <div className=" absolute left-0 top-42 px-3 md:top-40">
                  <p className="text-white  text-[16px] font-bold-semibold">
                    guy
                  </p>
                  <div className="flex items-center justify-between gap-3 text-gray-200">
                    <div className="flex items-center gap-2 font-medium">
                      <p className="text-[13px]">2025</p>
                      <span className="flex items-center">
                        <TiStarFullOutline className="text-[13px]" />
                        <p className="text-[12px]">57</p>
                      </span>
                    </div>
                    <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
                      movie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="relative">
              <img
                src="https://image.tmdb.org/t/p/original//oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg"
                alt="poster-image"
                className="w-[150px] rounded-2xl"
                loading="lazy"
              />
              <div>
                <div className=" absolute left-0 top-42 px-3 md:top-40">
                  <p className="text-white  text-[16px] font-bold-semibold">
                    guy
                  </p>
                  <div className="flex items-center justify-between gap-3 text-gray-200">
                    <div className="flex items-center gap-2 font-medium">
                      <p className="text-[13px]">2025</p>
                      <span className="flex items-center">
                        <TiStarFullOutline className="text-[13px]" />
                        <p className="text-[12px]">57</p>
                      </span>
                    </div>
                    <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
                      movie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
