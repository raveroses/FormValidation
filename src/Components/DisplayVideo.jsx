import { useParams } from "react-router-dom";
import useFetch from "./api/UseFetch";
import { useEffect, useContext } from "react";
import UserContext from "../Context.jsx/UserContext";
import { PiClockCountdown } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import { RiPlayFill } from "react-icons/ri";
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
  console.log(dataSetter[0]);
  useEffect(() => {
    fetchMovie();
  }, []);
  console.log(endpointChanger);

  // https://api.themoviedb.org/3/movie/1126166?api_key=b23cab54b01ec0634aae0d6fc905411b
  // https://api.themoviedb.org/3/tv/63770?api_key=b23cab54b01ec0634aae0d6fc905411b

  return (
    <div className="hero ">
      <div className="relative">
        <img
          src="https://image.tmdb.org/t/p/original/rDYSuBYKR4US3A0XfuCiFzVq5CJ.jpg"
          alt="hero-mage"
        />
      </div>
      <div className="text-white absolute top-30 flex gap-20 w-full px-4 md:px-8">
        <div className="w-[20%]">
          <img
            src="https://image.tmdb.org/t/p/original//oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg"
            alt="poster-image"
            className="w-[240px] rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="movieContent w-[60%]">
          <h2 className="font-bold text-[40px] tracking-[3px]"> Companion</h2>
          <div className="smally flex gap-5 text-[16px]">
            <p>2025</p>
            <p className="flex items-center gap-1">
              <span>
                <PiClockCountdown className="text-[20px]" />
              </span>

              <p>97</p>
            </p>
            <p className="flex items-center gap-1">
              <span>
                <BsStarFill className="text-[20px]" />
              </span>
              7.10 /<span className="text-[15px] text-gray-600">10</span>
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
          <p className="text-[13px] pr-4">
            During a weekend getaway at a secluded lakeside estate, a group of
            friends finds themselves entangled in a web of secrets, deception,
            and advanced technology. As tensions rise and loyalties are tested,
            they uncover unsettling truths about themselves and the world around
            them.
          </p>
          <div className="flex gap-3 ">
            <p>
              <RiPlayFill />
            </p>
            <span> Watch Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
