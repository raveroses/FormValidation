// import SwiperPlace from "./SwiperPlace";
import { useEffect } from "react";
import useFetch from "../api/useFetch";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import MoviePageHeader from "./MoviesPageHeader";
import { RiMovie2AiFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
export default function DashboardHeader({ user, nameSignUp }) {
  const { dataSetter, fetchMovie } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b23cab54b01ec0634aae0d6fc905411b"
  );

  useEffect(() => {
    fetchMovie();
  }, []);
  const navigate = useNavigate();
  const handleVideoPlay = (id, title, pic) => {
    navigate("/trailer", {
      state: { videoId: id, videoTitle: title, videobackgroundImage: pic },
    });
  };
  const check = dataSetter.flatMap((item) => {
    return item.results.slice(0, 6).map((items) => {
      const rate = items.vote_average.toFixed(1);

      return (
        <SwiperSlide key={items.id} className="relative ">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              items.backdrop_path || items.poster_path
            }`}
            alt=""
            className="w-full h-[600px] object-center object-cover opacity-50"
          />
          <div className=" absolute top-90 left-2 md:top-70 md:left-10">
            <div className="text-white text-[30px] font-extrabold inline-block cursor-pointer md:text-[40px] hover:text-blue-500">
              {items.title}
            </div>
            <div className="flex items-center gap-2 md:gap-10 ">
              <div className="bg-blue-500 inline-block rounded px-3 py-1 md:px-4 cursor-pointer ">
                <RiMovie2AiFill className="text-white text-[15px] md:text-[20px] " />
              </div>
              <div className="flex items-center">
                <FaStar className="text-white text-[18px]" />
                <p className="text-white">{rate}</p>
              </div>
              <div
                className="text-[#9f9fa0] text-[14px] font-bold hover:text-white cursor-pointer
                 hover:transition hover:delay-150 hover:duration-700 hover:ease-in-out"
              >
                Romance
              </div>
              <div
                className="text-[#9f9fa0] text-[14px] font-bold cursor-pointer 
                hover:text-white hover:transition hover:delay-150 hover:duration-700 hover:ease-in-out"
              >
                Science Fiction
              </div>
              <div
                className="text-[#9f9fa0] text-[14px] font-bold hover:text-white 
                cursor-pointer hover:transition hover:delay-150 hover:duration-700 hover:ease-in-out"
              >
                Thriller
              </div>
            </div>
            <div className="text-[#81776e] pt-4 text-semi-bold hidden md:block w-[70%]">
              {items.overview}
            </div>
            <div className="flex items-center gap-3 mt-6 md:gap-5">
              <div
                className="flex items-center gap-2 border-1 border-blue-600 py-2 rounded-3xl px-4 text-blue-600 cursor-pointer 
                hover:bg-blue-600 hover:border-none hover:text-white hover:transition hover:transition-ease-in-out 
                hover:transition-hover hover:delay-100 hover:duration-400 md:py-2 md:px-8"
                onClick={() =>
                  handleVideoPlay(items.id, items.title, items.backdrop_path)
                }
              >
                <FaPlay />
                <p> Watch Now</p>
              </div>

              <div
                className="flex items-center gap-2 border-1 py-2 rounded-3xl px-10 text-gray-400 border-gray-400 cursor-pointer
                hover:bg-white hover:border-none hover:text-black hover:transition hover:transition-ease-in-out 
                hover:transition-hover hover:delay-100 hover:duration-400 md:px-14"
                onClick={() =>
                  handleVideoPlay(items.id, items.title, items.backdrop_path)
                }
              >
                <GoVideo />
                <p> Trailer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  });

  useEffect(() => {
    check;
  }, []);

  // console.log(search);
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {check}
        <MoviePageHeader user={user} />
        <UserProfile user={user} nameSignUp={nameSignUp} />
      </Swiper>
    </div>
  );
}
