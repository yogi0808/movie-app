import type { ChipProps } from "@utils/types"
import classNames from "classnames"

/**
 * display the text in the capsule shape and user can select it
 *
 * @param {object} data - data needed for the chip
 *
 * @returns
 */
const Chip = ({ data, isSelected, handleSelect }: ChipProps) => {
  // class names for chip. changing based on the selected state
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
