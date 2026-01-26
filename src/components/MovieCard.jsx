const MovieCard = ({ src, name, date }) => {
  return (
    <div className="max-w-37.5 cursor-pointer flex flex-col content-stretch">
      <div className="w-37.5 bg-stone-200/60 rounded-lg">
        <img
          src={src}
          className="rounded-lg w-full"
        />
      </div>
      <div className="px-2 pt-6">
        <a className="font-bold leading-6 hover:underline hover:text-highlight transition-all duration-300 ease-out">
          {name}
        </a>
        <p className="text-stone-500 leading-6">{date}</p>
      </div>
    </div>
  )
}

export default MovieCard
