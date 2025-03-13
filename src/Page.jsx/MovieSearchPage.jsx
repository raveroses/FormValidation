import { useEffect } from "react";
import MoviePageHeader from "../Components/MoviesPageHeader";
import useFetch from "../Components/api/UseFetch";
export default function MovieSearchPage() {
  const { dataSetter, loading, fetchMovie } = useFetch("");
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div className="relative bg-black w-full h-screen">
      <MoviePageHeader />
      <div className="w-full h-screen absolute top-30 bg-gray-600 opacity-20 px-8">
        <div className="w-full h-[60px] bg-gray-100 opacity-60 my-7 ">
          <div></div>
          <form>
            <input
              type="text"
              className="py-4 w-[80%] outline-none border-none placeholder:text-4xl placeholder:text-white placeholder:font-extrabold"
              placeholder="Enter your keywords"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
