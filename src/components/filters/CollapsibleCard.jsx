import classNames from "classnames"
import React, { Activity, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

const CollapsibleCard = ({ title, count, children, open }) => {
  const [isActive, setIsActive] = useState(open ? true : false)

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
