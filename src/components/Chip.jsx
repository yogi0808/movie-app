import classNames from "classnames"
import React from "react"

const Chip = ({ data, isSelected, handleSelect }) => {
  const chipClasses = classNames(
    "px-3 py-1.5 flex flex-col h-fit hover:bg-highlight hover:text-white rounded-full border border-chip-border text-sm cursor-pointer",
    {
      "bg-highlight text-white": isSelected,
    },
  )

  return (
    <div
      onClick={handleSelect}
      className={chipClasses}
    >
      <p className="leading-4 border-b border-white">{data.option}</p>
    </div>
  )
}

export default Chip
