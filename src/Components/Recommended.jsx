import { TiStarFullOutline } from "react-icons/ti";
import useFetch from "../api/UseFetch";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdPlayCircle } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Recommended = ({ param }) => {
  const { dataSetter, loading, fetchMovie } = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=b23cab54b01ec0634aae0d6fc905411b"
  );
  useEffect(() => {
    fetchMovie();
  }, []);

  const [idDisplay, setIdDisplay] = useState("");
  const navigate = useNavigate();
  const handleDisplay = (id) => {
    const videoId = Number(id);
    setIdDisplay(videoId);
    navigate(`/video/${videoId}`, {
      state: { idDisplay: videoId },
    });
  };

  console.log(idDisplay);
  const dataGetter = dataSetter.flatMap((datas) => {
    return datas.results
      .filter((data) => data.id !== param && data.id !== idDisplay)
      .map((data) => {
        const dates = new Date(data?.first_air_date || data?.release_date);
        const getYear = dates.getFullYear();
        const rate = data.vote_average.toFixed(1);

        return (
          <SwiperSlide className="py-5 " key={data.id}>
            <div className="relative group">
              <img
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt="poster-image"
                className=" rounded-2xl w-[190px]"
                loading="lazy"
              />
              <NavLink to={`/video/:${data.id}`}>
                <MdPlayCircle
                  className="text-blue-500 absolute top-20 left-15 text-[40px] group-hover:block hidden"
                  onClick={() => handleDisplay(data.id)}
                />
              </NavLink>

              <div className=" absolute left-0 top-42 px-3 md:top-40">
                <p className="text-white  text-[16px] font-bold-semibold">
                  {data?.title}
                </p>
                <div className="flex items-center justify-between gap-3 text-gray-200">
                  <div className="flex items-center gap-2 font-medium">
                    <p className="text-[13px]">{getYear}</p>
                    <span className="flex items-center">
                      <TiStarFullOutline className="text-[13px]" />
                      <p className="text-[12px]">{rate}</p>
                    </span>
                  </div>
                  <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
                    movie
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      });
  });

  //   console.log(dataSetter);
  return (
    <>
      <div className="cover px-4 py-40 md:px-8 md:py-15">
        <p className="text-gray-400 text-[25px] font-semibold tracking-[3px] ">
          Recommends
        </p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
          }}
        >
          {dataGetter}
        </Swiper>
        {/* <div className="card-flex items-center gap-10">{dataGetter}</div> */}
      </div>
    </>
  );
};

export default Recommended;
