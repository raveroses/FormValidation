export default function CardSection() {
  return (
    <div className="pt-[40px] border-b-1">
      <section className="trending">
        <h2 className="text-white text-[25px]">Top Trending</h2>
        <div className="card bg-[url(https://image.tmdb.org/t/p/w300//oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg)] bg-center b bg-fixed w-[200px] h-[100px]"></div>
      </section>
      <section className="top-rating"></section>
      <section className="popular"></section>
      <section className="movies"></section>
    </div>
  );
}
