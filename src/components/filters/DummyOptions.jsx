import React, { useState } from "react"
import BoxWithDivider from "../BoxWithDivider"

const DummyOptions = () => {
  const [isChecked, setIsChecked] = useState(true)

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
            onChange={() => setIsChecked((prev) => !prev)}
            checked={isChecked}
          />
          <span>Search all availabilities?</span>
        </label>
        {isChecked ? (
          ""
        ) : (
          <div className="mt-1.5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked
              />
              <span>Steam</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked
              />
              <span>Free</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked
              />
              <span>Ads</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked
              />
              <span>Rent</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked
              />
              <span>Buy</span>
            </label>
          </div>
        )}
      </BoxWithDivider>
    </>
  )
}

export default DummyOptions
