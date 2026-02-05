import classNames from "classnames"
import React, { Activity, useEffect, useRef, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"

const DropDown = ({
  label,
  selected,
  list = [],
  handleSelect,
  search = false,
}) => {
  const [isActive, setIsActive] = useState(false)
  const [options, setOptions] = useState(list)

  const popupRef = useRef() // ref for popup menu

  useEffect(() => {
    /**
     * this function is for handling the click out side of the popup menu to close menu if click out side the menu
     * @constructor
     * @param {object} e - mousedown event object
     */
    const handleClickOutside = (e) => {
      if (!popupRef?.current?.contains(e.target)) {
        setIsActive(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside) // adding an handleClickOutside to mouse click in dom

    /**
     * this return function is for removing the event listener from the dom
     */
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [popupRef])

  return (
    <div>
      <h3 className="mb-2.5 font-light">{label}</h3>
      <div
        onClick={() => setIsActive((prev) => !prev)}
        ref={popupRef}
        className="flex items-center pl-3 pr-1.5 py-1.5 rounded-lg border border-search-border hover:bg-gray-50 cursor-pointer relative z-9"
      >
        <p className="flex-1 ">{selected.option}</p>
        <IoMdArrowDropdown className="text-xl" />
        <Activity mode={isActive ? "visible" : "hidden"}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="border w-full border-search-border max-w-full absolute left-0 bg-white top-[110%] shadow-card rounded-lg max-h-50 overflow-y-scroll"
          >
            <Activity mode={search ? "visible" : "hidden"}>
              <div className="px-3 py-2">
                <input
                  className="w-full px-2 py-1 border border-highlight rounded-lg"
                  placeholder="Search..."
                  type="text"
                  onChange={(e) => {
                    setOptions(
                      list.filter((a) =>
                        a.option
                          .toLowerCase()
                          .startsWith(e.target.value.toLowerCase()),
                      ),
                    )
                  }}
                  autoFocus={true}
                />
              </div>
            </Activity>
            {options.map((item, idx) => {
              const optionsClassNames = classNames(
                "px-4 py-1.5 font-semibold",
                {
                  "bg-highlight text-white": selected.value === item.value,
                  "hover:bg-gray-100": selected.value !== item.value,
                },
              )
              return (
                <p
                  key={idx}
                  className={optionsClassNames}
                  onClick={() => {
                    handleSelect(item)
                    setIsActive(false)
                  }}
                >
                  {item.option}
                </p>
              )
            })}
          </div>
        </Activity>
      </div>
    </div>
  )
}

export default DropDown
