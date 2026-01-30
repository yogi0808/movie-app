import { Activity } from "react"
import { statusColors } from "../../constants/index"

const RatingIndicator = ({ voteAverage, className }) => {
  const rating = Math.round((voteAverage / 10) * 100)
  const ratingColor =
    rating >= 70
      ? statusColors.good
      : rating >= 50
        ? statusColors.normal
        : statusColors.notGood

  return (
    <div
      className={`w-9.5 h-9.5 bg-black flex items-center justify-center rounded-full ${className}`}
    >
      <Activity mode={voteAverage ? "visible" : "hidden"}>
        <div
          className="w-8 h-8 bg-green-500 absolute rounded-full"
          style={{
            background: `conic-gradient( ${ratingColor} ${(360 * rating) / 100}deg, ${ratingColor}66 ${(360 * rating) / 100}deg)`,
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
  )
}

export default RatingIndicator
