import React from "react"
import BoxWithDivider from "../BoxWithDivider"

const DummyOptions = () => {
  return (
    <>
      <BoxWithDivider>
        <h3 className="mb-2.5 font-light">Show Me</h3>
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              name="me"
              type="radio"
              value="Everything"
              className="radio"
              defaultChecked
            />
            <span>Everything</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              name="me"
              type="radio"
              value="Movies I Haven't Seen"
              className="radio"
            />
            <span>Movies I Haven't Seen</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              name="me"
              type="radio"
              value="Movies I Have Seen"
              className="radio"
            />
            <span>Movies I Have Seen</span>
          </label>
        </div>
      </BoxWithDivider>
      <BoxWithDivider>
        <h3 className="mb-2.5 font-light">Availabilities</h3>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox"
            defaultChecked
          />
          <span>Search all availabilities?</span>
        </label>
      </BoxWithDivider>
    </>
  )
}

export default DummyOptions
