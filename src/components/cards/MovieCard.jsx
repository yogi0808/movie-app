import { Activity, useRef, useState } from "react"
import { MoviePopupLinks } from "@constants/index"
import RatingIndicator from "./RatingIndicator"
import { formateDate } from "@/utils/utils"
import useHandleClickOutside from "@/hooks/useHandleClickOutside"

/**
 * movie card component for displaying movie image, title or name, date, and ratting also show the popup menu based on user action like click on more option.
 *
 * @param {object} param0 - with props data, isLoading
 *  @param {object} data - movie Data
 * @returns - jsx for the single movie data display
 */
const MovieCard = ({ data }) => {
  const [isPopupActive, setIsPopupActive] = useState(false) // using this state for popup activation and deactivation
  const popupRef = useRef() // ref for popup menu

  useHandleClickOutside(popupRef, setIsPopupActive)

  return (
    <div className="min-w-37.5 relative flex flex-col content-stretch">
      <div className="min-w-37.5 aspect-2/3 cursor-pointer bg-card bg-[url('/image.svg')] bg-size-[5rem] bg-center bg-no-repeat rounded-lg relative flex justify-center items-center shadow-card">
        <img
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`}
          className="rounded-lg w-full"
          onError={(e) => {
            e.target.classList.add("hidden")
          }}
        />
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
            className="z-10 bg-white min-w-32 border animate-fade-in border-gray-300 text-black/60 flex flex-col rounded-lg absolute top-9 left-2/5 shadow overflow-hidden"
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
        <RatingIndicator
          voteAverage={data.vote_average}
          className="absolute -top-4.75 left-2.5"
        />
        <a
          href="#"
          className="font-bold hover:underline hover:text-highlight leading-5 inline-block transition-all duration-300 ease-out"
        >
          {data.title || data.name}
        </a>
        <p className="text-stone-500">
          {formateDate(data.release_date || data.first_air_date)}
        </p>
      </div>
      <Activity mode={isPopupActive ? "visible" : "hidden"}>
        <div className="absolute top-0 animate-fade-in left-0 right-0 bottom-0 bg-black/50 backdrop-blur-lg rounded-lg" />
      </Activity>
    </div>
  )
}

export default MovieCard
