import { Activity, useEffect, useRef, useState } from "react"
import { MoviePopupLinks } from "../../constants/index"

const MovieCard = ({ data }) => {
  const [isPopupActive, setIsPopupActive] = useState(false)
  const rating = Math.round((data.vote_average / 10) * 100)
  const ratingColor =
    rating >= 70 ? "#00c950" : rating >= 50 ? "#ffb86a" : "#fb2c36"

  const popupRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!popupRef?.current?.contains(e.target)) {
        setIsPopupActive(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [popupRef])

  return (
    <div className="max-w-37.5 relative flex flex-col content-stretch">
      <div
        className={`w-37.5 aspect-2/3 cursor-pointer bg-stone-200/60 rounded-lg relative flex justify-center items-center shadow-[0_2px_8px] shadow-black/10`}
      >
        <Activity mode={data.poster_path ? "visible" : "hidden"}>
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`}
            className="rounded-lg w-full"
            loading="lazy"
          />
        </Activity>
        <button
          className="absolute top-2 right-2 w-6.5 cursor-pointer aspect-square opacity-60"
          onClick={() => setIsPopupActive((prev) => !prev)}
        >
          <img
            src="/more.svg"
            alt="more options"
          />
        </button>
        <Activity mode={isPopupActive ? "visible" : "hidden"}>
          <div
            ref={popupRef}
            className="z-10 bg-white min-w-32 border border-gray-300 text-black/60 flex flex-col rounded-lg absolute top-9 left-2/5 shadow overflow-hidden"
          >
            {MoviePopupLinks.map((link) => (
              <a
                href={link.link}
                className="hover:bg-gray-200 font-semibold py-2.5 px-5 text-sm w-full flex items-center gap-1 text-start border-b border-inherit transition-all ease-in-out duration-200"
              >
                {link.icon}
                {link.text}
              </a>
            ))}
          </div>
        </Activity>
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
        <a
          href="#"
          className="font-bold hover:underline hover:text-highlight leading-5 inline-block transition-all duration-300 ease-out"
        >
          {data.title || data.name}
        </a>
        <p className="text-stone-500">
          {new Date(
            data.release_date || data.first_air_date,
          ).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
      <Activity mode={isPopupActive ? "visible" : "hidden"}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-lg rounded-lg" />
      </Activity>
    </div>
  )
}

export default MovieCard
