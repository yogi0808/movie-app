import React, { useState } from "react"
import BoxWithDivider from "../BoxWithDivider"
import {
  sliderOneThumbsTrackColors,
  sliderTwoThumbsTrackColors,
} from "@/constants"
import CustomRange from "./CustomRange"
import { useFilterContext } from "@/contexts/FilterContext"

const Sliders = () => {
  const [userScore, setUserScore] = useState([0, 10])
  const { userVotes, changeUserVotes, runtime, changeRuntime } =
    useFilterContext()

  return (
    <>
      <BoxWithDivider>
        <h3 className="mb-2.5 font-light">User Score</h3>
        <CustomRange
          min={0}
          max={10}
          step={1}
          values={userScore}
          onChange={(val) => setUserScore(val)}
          colors={sliderTwoThumbsTrackColors}
        />
      </BoxWithDivider>
      <BoxWithDivider>
        <h3 className="mb-2.5 font-light">Minimum User Votes</h3>
        <CustomRange
          min={0}
          max={500}
          step={50}
          values={userVotes}
          onChange={changeUserVotes}
          colors={sliderOneThumbsTrackColors}
        />
      </BoxWithDivider>
      <BoxWithDivider>
        <h3 className="mb-2.5 font-light">Runtime</h3>
        <CustomRange
          min={0}
          max={400}
          step={15}
          values={runtime}
          onChange={changeRuntime}
          colors={sliderTwoThumbsTrackColors}
        />
      </BoxWithDivider>
    </>
  )
}

export default Sliders
