import { TiStarFullOutline } from "react-icons/ti";
import { MdPlayCircle } from "react-icons/md";
export default function CardSection() {
  return (
    <div className="pt-[90px] border-b-1 md:pt-[40px] bg-black px-4 md:px-8">
      <section className="trending">
        <h2 className="text-white text-[25px] border-b-1 border-white  w-[150px]">
          Top Trending
        </h2>
        <div className="group card-div flex gap-4 w-full pt-7 ">
          <div className="relative">
            <img
              src="https://image.tmdb.org/t/p/w300//pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg"
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
          </div>
        </div>
      </section>
      <section className="top-rating"></section>
      <section className="popular"></section>
      <section className="movies"></section>
    </div>
  );
}
