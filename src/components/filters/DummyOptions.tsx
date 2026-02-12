import { useState } from "react"

import { dummyAvailableSearch } from "@constants/index"

/**
 * sows the dummy options in the filter section
 *
 * @returns - jsx for the dummy options
 */
const DummyOptions = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true) // for tracking the open and close state for search available

  return (
    <>
      <div className="divider-box">
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
      </div>
      <div className="divider-box">
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
        {!isChecked ? (
          <div className="mt-1.5">
            {dummyAvailableSearch.map((item: string, idx: number) => (
              <label
                key={idx}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="checkbox"
                  defaultChecked
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default DummyOptions
