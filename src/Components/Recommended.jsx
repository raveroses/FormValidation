import { TiStarFullOutline } from "react-icons/ti";
import useFetch from "./api/UseFetch";
import { useEffect } from "react";
const Recommended = ({ param }) => {
  const { dataSetter, loading, fetchMovie } = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=b23cab54b01ec0634aae0d6fc905411b"
  );
  useEffect(() => {
    fetchMovie();
  }, []);

  console.log(dataSetter);
  return (
    <>
      <div className="cover px-4 py-40 md:px-8 md:py-15">
        <p className="text-gray-400 text-[25px] font-semibold tracking-[3px] ">
          Recommends
        </p>

        <div className="card-flex flex items-center gap-10">
          <div className="py-5">
            <div className="relative">
              <img
                src="https://image.tmdb.org/t/p/original//oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg"
                alt="poster-image"
                className="w-[150px] rounded-2xl"
                loading="lazy"
              />
              <div>
                <div className=" absolute left-0 top-42 px-3 md:top-40">
                  <p className="text-white  text-[16px] font-bold-semibold">
                    guy
                  </p>
                  <div className="flex items-center justify-between gap-3 text-gray-200">
                    <div className="flex items-center gap-2 font-medium">
                      <p className="text-[13px]">2025</p>
                      <span className="flex items-center">
                        <TiStarFullOutline className="text-[13px]" />
                        <p className="text-[12px]">57</p>
                      </span>
                    </div>
                    <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
                      movie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
