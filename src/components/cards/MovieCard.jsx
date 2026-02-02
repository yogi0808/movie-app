import { Activity, useEffect, useRef, useState } from "react";
import { MoviePopupLinks } from "@constants/index";
import RatingIndicator from "./RatingIndicator";

/**
 * movie card component for displaying movie image, title or name, date, and ratting also show the popup menu based on user action like click on more option.
 *
 * @param {object} param0 - with props data, isLoading
 *  @param {object} data - movie Data
 *  @param {boolean} isLoading - for loading indication
 * @returns - jsx for the single movie data display
 */
const MovieCard = ({ data, isLoading }) => {
  const [isPopupActive, setIsPopupActive] = useState(false); // using this state for popup activation and deactivation
  const popupRef = useRef(); // ref for popup menu

  useEffect(() => {
    /**
     * this function is for handling the click out side of the popup menu to close menu if click out side the menu
     * @constructor
     * @param {object} e - mousedown event object
     */
    const handleClickOutside = (e) => {
      if (!popupRef?.current?.contains(e.target)) {
        setIsPopupActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // adding an handleClickOutside to mouse click in dom

    /**
     * this return function is for removing the event listener from the dom
     */
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupRef]);

  return (
    <div className={`max-w-37.5 relative flex flex-col content-stretch`}>
      <div
        className={`w-37.5 aspect-2/3 cursor-pointer bg-card bg-[url('/image.svg')] bg-size-[80px] bg-center bg-no-repeat rounded-lg relative flex justify-center items-center shadow-card`}
      >
        <Activity mode={isLoading ? "hidden" : "visible"}>
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`}
            className="rounded-lg w-full"
          />
        </Activity>
        <button
          className="absolute top-2 right-2 w-6.5 cursor-pointer aspect-square opacity-60"
          onClick={() => setIsPopupActive((prev) => !prev)}
        >
          <img src="/more.svg" alt="more options" />
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
          voteAverage={isLoading ? null : data.vote_average}
          className="absolute -top-4.75 left-2.5"
        />
        <Activity mode={isLoading ? "hidden" : "visible"}>
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
        </Activity>
      </div>
      <Activity mode={isPopupActive ? "visible" : "hidden"}>
        <div className="absolute top-0 animate-fade-in left-0 right-0 bottom-0 bg-black/50 backdrop-blur-lg rounded-lg" />
      </Activity>
    </div>
  );
};

export default MovieCard;
