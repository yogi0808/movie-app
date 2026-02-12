import classNames from "classnames"
import { IoMdArrowDropdown } from "react-icons/io"
import React, { useEffect, useRef, useState } from "react"

import useHandleClickOutside from "@/hooks/useHandleClickOutside"

/**
 * custom drop down with the search option for user to search in list
 *
 * @param {string} label - label text for the dropdown
 * @param {object} selected - current selected option
 * @param {array} list - list of the options data
 * @param {function} handleSelect - for selecting the option form the list
 * @param {boolean} search - for display search option or not default is false
 * @param {string} valueKey - for select the value from the data object
 * @param {string} optionKey - for select the option from the data object
 *
 * @returns - jsx for the dropdown
 */
const DropDown = ({
  label,
  selected,
  list = [],
  handleSelect,
  search = false,
  valueKey,
  optionKey,
}) => {
  const [isActive, setIsActive] = useState(false) // for tracking the state of the dropdown is open or close
  const [options, setOptions] = useState(list) // copy of the list data

  const popupRef = useRef() // ref for popup menu
  const selectedRef = useRef() // ref for selected option

  useHandleClickOutside(popupRef, setIsActive) // custom hook to handle the click out side of the popup(list)

  // scroll's to the selected option when the list is open
  useEffect(() => {
    if (isActive && selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      })
    }
  }, [isActive])

  return (
    <div>
      <h3 className="mb-2.5 font-light">{label}</h3>
      <div
        onClick={() => setIsActive((prev) => !prev)}
        ref={popupRef}
        className="flex items-center pl-3 pr-1.5 py-1.5 rounded-lg border border-search-border hover:bg-gray-50 cursor-pointer relative"
      >
        <p className="flex-1">{selected.option}</p>
        <IoMdArrowDropdown className="text-xl" />
        {isActive && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="border w-full border-search-border max-w-full absolute left-0 bg-white top-[110%] shadow-card rounded-lg max-h-50 overflow-y-auto z-9"
          >
            {search && (
              <div className="px-3 py-2 sticky bg-white top-0 left-0">
                <input
                  className="w-full px-2 py-1 border focus:border-highlight rounded-lg outline-none"
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
            )}
            {options.map((item, idx) => {
              const isSelected = selected.value === item[valueKey]
              const optionsClassNames = classNames(
                "px-4 py-1.5 font-semibold",
                {
                  "bg-highlight text-white": isSelected,
                  "hover:bg-gray-100": !isSelected,
                },
              )
              return (
                <p
                  key={idx}
                  ref={isSelected ? selectedRef : null}
                  className={optionsClassNames}
                  onClick={() => {
                    if (search) {
                      setOptions(list)
                    }
                    handleSelect(item[valueKey], item[optionKey])
                    setIsActive(false)
                  }}
                >
                  {item[optionKey]}
                </p>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default DropDown
