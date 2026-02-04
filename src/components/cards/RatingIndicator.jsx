import { Activity } from "react";
import { getRating } from "@/utils/utils";
import classNames from "classnames";

/**
 * rating indicator component it displays rating circle indicator based on the average votes of the movie used gradient to create and ring progress.
 *
 * @param {object} param0 - with props voteAverage, className
 *  @param {number} voteAverage - average vote of the movie
 *  @param {string} className - names of class for rating div
 * @returns - jsx for the rating indicator
 */
const RatingIndicator = ({ voteAverage, className }) => {
  const { rating, ratingGradient } = getRating(voteAverage);

  // creating an class names string based on the prop class names
  const wrapperClassNames = classNames(
    "w-9.5 h-9.5 bg-black flex items-center justify-center rounded-full",
    {
      [className]: className,
    },
  );

  return (
    <div className={wrapperClassNames}>
      <Activity mode={voteAverage ? "visible" : "hidden"}>
        <div
          className="w-8 h-8 bg-green-500 absolute rounded-full"
          style={{
            background: ratingGradient,
          }}
        />
        <div className="w-6.75 h-6.75 bg-black absolute rounded-full flex items-center justify-center">
          <p className="text-white leading-3 text-sm font-bold">{rating}</p>
          <span className="text-[6px] leading-6 text-white self-start">%</span>
        </div>
      </Activity>
      <Activity mode={!voteAverage ? "visible" : "hidden"}>
        <p className="absolute text-white font-extrabold">NR</p>
      </Activity>
    </div>
  );
};

export default RatingIndicator;
