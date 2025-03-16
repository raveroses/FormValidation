import { useEffect, useState } from "react";
import MoviePageHeader from "../Components/MoviesPageHeader";
import useFetch from "../api/useFetch";
import { RxCaretDown } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { MdPlayCircle } from "react-icons/md";
export default function MovieSearchPage() {
  const [extract, setExtract] = useState("Movies");
  // const [endpointChanger,setEndPointChanger]= useState('')
  const categoryChecker = extract === "Movies" ? "movie" : "tv";
  console.log(categoryChecker);
  const [searchInput, setSearchInput] = useState("");
  const { dataSetter, loading, fetchMovie } = useFetch(
    `https://api.themoviedb.org/3/search/${categoryChecker}?api_key=b23cab54b01ec0634aae0d6fc905411b&query=${searchInput.trim()}`
  );
  // https://api.themoviedb.org/3/search/movie?api_key=b23cab54b01ec0634aae0d6fc905411b
  useEffect(() => {
    fetchMovie();
  }, [extract, searchInput]);

  const handleSearchIinput = (e) => {
    setSearchInput(e.target.value);
  };
  console.log(searchInput);
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    setHide((prev) => !prev);
  };

  const handleExtractCategory = (id) => {
    setExtract(id);
    setHide(false);
  };
  const category = ["Movies", "Tv-Series"];
  const catList = category.map((category, index) => {
    return (
      <div key={index}>
        <div
          className="hover:bg-gray-600 hover-opacity-30 px-2"
          onClick={() => handleExtractCategory(category)}
        >
          {category}
        </div>
      </div>
    );
  });

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  const movieMap = dataSetter.flatMap((data) => {
    return data.results.map((movie, index) => {
      const dates = new Date(movie?.release_date || movie?.first_air_date);
      const getYear = dates.getFullYear();
      const rate = movie?.vote_average;
      const shortenRate = rate?.toFixed(1);
      console.log(movie);
      return (
        <div
          key={index}
          className="group relative"
          onClick={() => handleCardClick(index)}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="card-movie-image"
            loading="lazy"
            className="w-[180px] opacity-[0.5] rounded-xl group-hover:opacity-[0.2] group-hover:w-[170px] group-hover:delay-100 group-hover:duration-500 group-hover:transition-all"
          />
          <NavLink to={`/video/${movie.id}`}>
            <MdPlayCircle
              className={`${
                activeCard === index ? "play-icon" : ""
              } text-blue-500 absolute top-20 
            left-15 text-[40px] group-hover:block hidden`}
            />
          </NavLink>
          <div className="movie absolute left-0 top-42 px-3 md:top-47">
            <p className="tvss text-white  text-[13px] font-bold-semibold">
              {movie?.title || movie.original_name}
            </p>
            <div className="flex items-center gap-3 text-gray-200">
              <div className="flex items-center gap-2 font-medium">
                <p className="text-[13px]">{getYear}</p>
                <span className="flex items-center">
                  <TiStarFullOutline className="text-[13px]" />
                  <p className="text-[12px]"> {shortenRate}</p>
                </span>
              </div>
              <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
                movie
              </p>
            </div>
          </div>
        </div>
      );
    });
  });
  return (
    <div className="bg-black w-full min-h-screen">
      <MoviePageHeader />
      <div className="py-25 px-5 md:py-40 md:px-10">
        <form className="w-full h-[45px] flex items-center gap-5 rounded bg-[#212529] px-2 md:gap-6 md:h-[60px] ">
          <div
            className="flex items-center gap-5 cursor-pointer md:gap-2"
            onClick={handleHide}
          >
            <p className="text-white text-base">{extract}</p>
            <RxCaretDown className="text-white text-[20px] font-semibold" />
          </div>
          <div className="w-[1px] h-[30px] bg-white md:h-[50px]"></div>
          <input
            type="text"
            value={searchInput}
            className="py-4 w-[80%] outline-none border-none text-2xl font-normal
             text-white placeholder:text-[19px] placeholder:text-white placeholder:font-normal 
             placeholder:px-7 md:placeholder:px-7 md:placeholder:font-semibold md:placeholder:text-2xl"
            placeholder="Enter your keywords..."
            onChange={handleSearchIinput}
          />
        </form>
        <div
          className={`flex flex-col gap-4 text-white w-[170px] h-[70px] rounded my-5 px-2 bg-[#212529] 
      cursor-pointer  md:h-[90px] ${hide ? "block" : "hidden"}`}
        >
          {" "}
          {catList}
        </div>
        <p
          className={`text-center text-white text-base md:text-lg pt-5 ${
            searchInput ? "hidden" : "block"
          }`}
        >
          Results will show after you type.
        </p>
        <section className="tv grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-6  py-20">
          {movieMap}
        </section>
      </div>
    </div>
  );
}
