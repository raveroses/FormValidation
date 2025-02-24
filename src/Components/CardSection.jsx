import { TiStarFullOutline } from "react-icons/ti";
import { MdPlayCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import useFetch from "./api/useFetch";
// import { useEffect } from "react";
export default function CardSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const MovieFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        // "https://api.themoviedb.org/3/collection/10/images?api_key=b23cab54b01ec0634aae0d6fc905411b"
        "https://api.themoviedb.org/3/movie/popular?api_key=b23cab54b01ec0634aae0d6fc905411b"
      );
      const datass = await response.json();
      //   console.log(datass);
      setData((prev) => [...prev, datass]);
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };
  useEffect(() => {
    MovieFetch();
  }, []);

  if (loading) {
    <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>;
  }
  console.log(data);
  //   const [saver, setSaver] = useState([]);
  const check = data.flatMap((items) => {
    items.results.map((items, index) => {
      console.log(items.poster_path, index);

      <div className="relative" key={index}>
        <img
          src={`https://image.tmdb.org/t/p/original/${items.poster_path}`}
          alt="card-movie-image"
          className="w-[160px] opacity-[0.5] rounded-xl group-hover:opacity-[0.2] group-hover:w-[170px] group-hover:delay-100 group-hover:duration-500 group-hover:transition-all"
        />
        <MdPlayCircle className="text-blue-500 absolute top-20 left-15 text-[40px] group-hover:block md:hidden" />
        <div className=" absolute left-0 top-40 px-3">
          <p className="text-white  text-[16px] font-bold-semibold">
            Captain America: Brave New World
          </p>
          <div className="flex items-center justify-between text-gray-200">
            <div className="flex items-center gap-2 font-medium">
              <p className="text-[13px]">2025</p>
              <span className="flex items-center">
                <TiStarFullOutline className="text-[13px]" />
                <p className="text-[12px]"> 6.2</p>
              </span>
            </div>
            <p className="text-[13px] border-1 px-1 border-gray-400 rounded">
              {" "}
              movie
            </p>
          </div>
        </div>
      </div>;
    });
  });

  console.log(check);
  return (
    <div className="pt-[90px] border-b-1 md:pt-[40px] bg-black px-4 md:px-8">
      <section className="trending">
        <h2 className="text-white text-[25px] border-b-1 border-white  w-[150px]">
          Top Trending
        </h2>
        <div className="group card-div flex gap-4 w-full pt-7 ">{check}</div>
      </section>
      <section className="top-rating"></section>
      <section className="popular"></section>
      <section className="movies"></section>
    </div>
  );
}
