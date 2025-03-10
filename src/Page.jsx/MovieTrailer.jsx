import Iframe from "react-iframe";
import { FaPlay } from "react-icons/fa";
import useFetch from "../Components/api/UseFetch";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const MovieTrailer = () => {
  const location = useLocation();
  const id = location?.state?.videoIdd || location?.state?.videoId;
  const poster =
    location?.state?.backgroundImages || location?.state?.videobackgroundImage;
  const title = location?.state?.titles || location?.state?.videoTitle;
  console.log(location?.state);
  const { dataSetter, loading, fetchMovie } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b23cab54b01ec0634aae0d6fc905411b`
  );

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const [key, setKey] = useState("");
  useEffect(() => {
    const filterData = dataSetter.flatMap((data) => {
      return data.results.find((video) => {
        if (video.type === "Trailer" && video.official) {
          setKey(video.key);
        }
      });
    });
  }, [dataSetter]);
  const [showVideo, setShowVideo] = useState(false);
  const handlePlay = () => {
    setShowVideo(true);
  };
  return (
    <div className="relative bg-black h-screen px-4 pt-[90px] md:px-8 md:pt-[40px] ">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt="bacground-image"
        className={`w-full h-[550px] object-cover object-top ${
          showVideo && "hidden"
        }`}
      />
      <div
        className={`absolute top-80 left-[48%] text-white ${
          showVideo && "hidden"
        }`}
      >
        <FaPlay
          className="text-[30px] cursor-pointer ml-5"
          onClick={handlePlay}
        />
        <p className="text-center uppercase">{title}</p>
      </div>

      {showVideo && (
        <Iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${key}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
export default MovieTrailer;
