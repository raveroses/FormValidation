import Iframe from "react-iframe";
import { FaPlay } from "react-icons/fa";
import useFetch from "../Components/api/UseFetch";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const MovieTrailer = () => {
  const location = useLocation();
  const id = location?.state?.videoIdd;
  const { dataSetter, loading, fetchMovie } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b23cab54b01ec0634aae0d6fc905411b`
  );
  console.log(id);

  useEffect(() => {
    fetchMovie();
  }, [id]);
  console.log(dataSetter);
  const filterData = dataSetter.flatMap((data) => {
    return data.results.filter((video) => {
      const check =
        video.type === "Trailer" && video.official ? (
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          false
        );
      return check;
    });
  });
  return (
    <div className="relative bg-black h-screen px-4 pt-[90px] md:px-8 md:pt-[40px] ">
      <img
        src="https://image.tmdb.org/t/p/original//qV2REPQ7pPlmQT7Mljkca0wi4Bx.jpg"
        alt="bacground-image"
        className="w-full h-[500px]"
      />
      <div className="absolute top-80 left-[48%] text-white">
        <FaPlay className="text-[30px] cursor-pointer ml-5" />
        <p className="text-center uppercase">Old Guyy</p>
      </div>

      {/* {showVideo && (
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/YwoA7NvaacI"
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )} */}
      <> {filterData}</>
    </div>
  );
};
export default MovieTrailer;
