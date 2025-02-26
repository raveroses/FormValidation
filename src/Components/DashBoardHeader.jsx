import SwiperPlace from "./SwiperPlace";
import { useEffect, useState } from "react";
import useFetch from "./api/UseFetch";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MoviePageHeader from "./MoviesPageHeader";
export default function DashboardHeader() {
  // const [bgImage, setBgImage] = useState("");
  // const images = new Image();
  // images.src = `https://image.tmdb.org/t/p/original/${items.backdrop_path}`;
  // images.onload = () => setBgImage(images.src);
  const { dataSetter, loading, fetchMovie } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b23cab54b01ec0634aae0d6fc905411b"
  );

  useEffect(() => {
    fetchMovie();
  }, []);
  console.log(dataSetter);
  const check = dataSetter.flatMap((item) => {
    return item.results.map((items, index) => {
      const rate = items.vote_average.toFixed(1);
      return (
        <SwiperSlide key={index}>
          <div
            className={`bg-[url(https://image.tmdb.org/t/p/original/${items.backdrop_path})] bg-center
     bg-no-repeat bg-cover h-[500px] md:w-full  md:h-[550px] py-3 px-4 md:px-8 md:py-5  `}
          >
            {/* <SwiperPlace
              title={items.title}
              rate={rate}
              overview={items.overview}
            /> */}
          </div>
        </SwiperSlide>
      );
    });
  });

  useEffect(() => {
    check;
  }, []);
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {check}
        <MoviePageHeader />
      </Swiper>
    </div>
  );
}
