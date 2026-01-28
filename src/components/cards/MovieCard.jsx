const MovieCard = ({ data }) => {
  const rating = Math.round((data.vote_average / 10) * 100)
  const ratingColor =
    rating >= 70 ? "#00c950" : rating >= 50 ? "#ffb86a" : "#fb2c36"

  return (
    <div className="max-w-37.5 cursor-pointer flex flex-col content-stretch">
      <div className="w-37.5 aspect-2/3 bg-stone-200/60 rounded-lg flex justify-center items-center">
        <img
          src={`https://media.themoviedb.org/t/p/original${data.poster_path}`}
          className="rounded-lg w-full"
          loading="lazy"
        />
      </div>
      <div className="px-2.5 pt-6.5 relative">
        <div className="w-9.5 h-9.5 bg-black flex items-center justify-center rounded-full absolute -top-4.75 left-2.5">
          <div
            className="w-8 h-8 bg-green-500 absolute rounded-full"
            style={{
              background: `conic-gradient( ${ratingColor} ${(360 * rating) / 100}deg, ${ratingColor}66 ${(360 * rating) / 100}deg)`,
            }}
          />
          <div className="w-6.75 h-6.75 bg-black absolute rounded-full flex items-center justify-center">
            <p className="text-white leading-3 text-sm font-bold">{rating}</p>
            <span className="text-[6px] leading-6 text-white self-start">
              %
            </span>
          </div>
        </div>
        <a className="font-bold hover:underline hover:text-highlight transition-all duration-300 ease-out">
          {data.title}
        </a>
        <p className="text-stone-500 leading-6">
          {new Date(data.release_date).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
