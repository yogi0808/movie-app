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
      <BoxWithDivider className="pb-8">
        <h3 className="mb-2.5 font-light">User Score</h3>
        <CustomRange
          min={0}
          max={10}
          step={1}
          values={userScore}
          mainMarkDivider={5}
          onChange={(val) => setUserScore(val)}
          colors={sliderTwoThumbsTrackColors}
        />
      </BoxWithDivider>
      <BoxWithDivider className="pb-8">
        <h3 className="mb-2.5 font-light">Minimum User Votes</h3>
        <CustomRange
          min={0}
          max={500}
          step={50}
          mainMarkDivider={100}
          values={userVotes}
          onChange={changeUserVotes}
          colors={sliderOneThumbsTrackColors}
        />
      </BoxWithDivider>
      <BoxWithDivider className="pb-8">
        <h3 className="mb-2.5 font-light">Runtime</h3>
        <CustomRange
          min={0}
          max={400}
          step={15}
          mainMarkDivider={120}
          values={runtime}
          onChange={changeRuntime}
          colors={sliderTwoThumbsTrackColors}
        />
      </BoxWithDivider>
    </>
  )
}

export default Sliders
