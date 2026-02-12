import classNames from "classnames"
import React, { Activity, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

/**
 * this is a card with open and close state by clicking the title of arrow button we can open(expend) the card all the children are shown in the open(expended) state
 *
 * @param {string} title - title of the card
 * @param {number} count - count is for sowing the count in top of this box (it is optional)
 * @param {boolean} open - indicates by default this card is open or not
 * @param {elements} children - sub elements to show in this card
 *
 * @returns - jsx for the collapsible card
 */
const CollapsibleCard = ({ title, count, children, open }) => {
  const [isActive, setIsActive] = useState(open) // for tracking card is open and close state

  // classes for icon to rotate on open state
  const iconsClassNames = classNames("text-xl origin-center", {
    "rotate-90": isActive,
  })

  return (
    <div className="min-w-65 shadow-card border border-search-border rounded-lg flex flex-col">
      <div
        className="flex justify-between px-4 py-3.5 cursor-pointer items-center"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2.5 justify-center items-center">
          {count ? (
            <p className="px-3 py-0.5 rounded-lg bg-search-border font-light text-sm">
              {count}
            </p>
          ) : (
            ""
          )}
          <MdKeyboardArrowRight className={iconsClassNames} />
        </div>
      </div>
      <Activity mode={isActive ? "visible" : "hidden"}>{children}</Activity>
    </div>
  )
}

export default CollapsibleCard
