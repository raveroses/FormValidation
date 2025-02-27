import { useEffect } from "react";
import useFetch from "./api/UseFetch";
import { TiStarFullOutline } from "react-icons/ti";
import { MdPlayCircle } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Trending() {
  const { dataSetter, loading, fetchMovie } = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=b23cab54b01ec0634aae0d6fc905411b"
  );

  useEffect(() => {
    fetchMovie();
  }, []);
  const check = dataSetter.flatMap((item) => {
    return item.results.map((items, index) => {
      const dates = new Date(items.release_date);
      const getYear = dates.getFullYear();
      const rate = items.vote_average;
      const shortenRate = rate.toFixed(1);

      return (
        <SwiperSlide key={index} className="group relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${items.poster_path}`}
            alt="card-movie-image"
            loading="lazy"
            className="w-[180px] opacity-[0.5] rounded-xl group-hover:opacity-[0.2] group-hover:w-[170px] group-hover:delay-100 group-hover:duration-500 group-hover:transition-all"
          />
          <MdPlayCircle className="text-blue-500 absolute top-20 left-15 text-[40px] group-hover:block hidden" />
          <div className=" absolute left-0 top-42 md:top-50 px-3">
            <p className="text-white  text-[16px] font-bold-semibold">
              {items?.title}
            </p>
            <div className="flex items-center justify-between text-gray-200">
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
        </SwiperSlide>
      );
    });
  });
  return (
    <div className="bg-red-600">
      <div className="pt-[90px] border-b-1 md:pt-[40px] bg-black px-4 md:px-8">
        <section className="trending">
          <h2 className="text-white text-[25px] border-b-1 border-white  w-[150px] mb-7">
            Top Trending
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              768: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            className="custom-swiper"
          >
            {check}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
