import classNames from "classnames"
import React from "react"

const Chip = ({ data, isSelected, handleSelect }) => {
  const chipClasses = classNames(
    "px-3 py-1 hover:underline hover:bg-highlight hover:text-white rounded-full border border-chip-border text-sm cursor-pointer",
    {
      "bg-highlight text-white": isSelected,
    },
  )

  return (
    <p
      onClick={handleSelect}
      className={chipClasses}
    >
      {data.option}
    </p>
  )
}

export default Chip
