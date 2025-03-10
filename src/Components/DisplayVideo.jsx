import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFetch from "./api/UseFetch";
import { useEffect, useContext, useState } from "react";
import UserContext from "../Context.jsx/UserContext";
import { PiClockCountdown } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import { RiPlayFill } from "react-icons/ri";
import MoviePageHeader from "./MoviesPageHeader";
import Recommended from "./Recommended";
export default function DisplayVideo() {
  const { endpointChanger } = useContext(UserContext);

  let param = useParams();
  const location = useLocation();
  const idgetter = location?.state?.idDisplay || "No message received";
  console.log(idgetter);
  const convert = Number(param.videoId.replace(":", "").trim());
  const { dataSetter, loading, fetchMovie } = useFetch(
    `https://api.themoviedb.org/3/${endpointChanger ? "tv" : "movie"}/${
      convert || idgetter
    }?api_key=b23cab54b01ec0634aae0d6fc905411b`
  );

  useEffect(() => {
    fetchMovie();
  }, [param.videoId, location.state]);
  console.log(dataSetter);

  const navigate = useNavigate();
  const handleVideoPlayId = (id, backgroundImage, title) => {
    const videoId = id;
    navigate("/trailer", {
      state: {
        videoIdd: videoId,
        backgroundImages: backgroundImage,
        titles: title,
      },
    });
  };

  // https://api.themoviedb.org/3/movie/1126166?api_key=b23cab54b01ec0634aae0d6fc905411b
  // https://api.themoviedb.org/3/tv/63770?api_key=b23cab54b01ec0634aae0d6fc905411b

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
              <div className="flex items-center gap-1">
                <span>
                  <PiClockCountdown className="text-[20px]" />
                </span>

                <p>{item.runtime}</p>
              </div>
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
            <div
              className="flex gap-1 items-center rounded-3xl bg-gray-600 opacity-[0.7] p-2 w-[130px] md:p-1 md:w-[150px] cursor-pointer"
              onClick={() =>
                handleVideoPlayId(
                  item.imdb_id,
                  item.poster_path,
                  item.original_title
                )
              }
            >
              <p>
                <RiPlayFill className="text-[20px] text-white " />
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
      <MoviePageHeader />
      <Recommended params={param} />
    </div>
  );
}
