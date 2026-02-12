import { useState } from "react"
import BoxWithDivider from "../BoxWithDivider"
import { IoClose, IoCloseCircle } from "react-icons/io5"

/**
 * displays the input and all the selected keyword of the user
 *
 * @returns - jsx for keyword input
 */
const KeywordSearch = () => {
  const [selectedKeywords, setSelectedKeywords] = useState([]) // holds the list of selected keywords

  /**
   * performs the task based on the enter and backspace on enter add the key word in selected keyword list and on backspace remove the value from the selected keyword list(if input is empty)
   *
   * @param {eventObject} e - event object of the input based on key down
   */
  const handleKeyDown = (e) => {
    const value = e.target.value
    if (e.key === "Enter") {
      setSelectedKeywords((prev) => [...prev, value])
      e.target.value = ""
    } else if (e.key === "Backspace" && value === "") {
      setSelectedKeywords((prev) => prev.slice(0, -1))
    }
  }

  return (
    <BoxWithDivider>
      <h3 className="mb-2.5 font-light">Keywords</h3>
      <label className="w-full flex items-center rounded-lg p-0.75 border border-search-border focus-within:border-highlight">
        <div className="flex flex-wrap gap-1">
          {selectedKeywords.map((item, idx) => (
            <span
              key={idx}
              className="text-sm flex justify-center items-center gap-1 rounded-lg bg-keyword-bg px-2 py-1"
            >
              {item}
              <button
                type="button"
                className="cursor-pointer"
              >
                <IoCloseCircle className="text-base" />
              </button>
            </span>
          ))}
        </div>
        <input
          name="keyword"
          className="w-full min-w-12.5 outline-none px-3 py-1.5 self-end"
          type="text"
          placeholder="Filter by keywords..."
          onKeyDown={handleKeyDown}
        />
        {selectedKeywords.length > 0 ? (
          <button
            onClick={() => setSelectedKeywords([])}
            className="flex justify-center items-center cursor-pointer text-slider-bg hover:text-black"
          >
            <IoClose className="text-xl" />
          </button>
        ) : (
          ""
        )}
      </label>
    </BoxWithDivider>
  )
}

export default KeywordSearch
