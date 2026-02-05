import classNames from "classnames"
import React, { Activity, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

const CollapsibleCard = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false)

  const iconsClassNames = classNames("text-xl origin-center", {
    "rotate-90": isActive,
  })

  return (
    <div className="max-w-65 shadow-card border border-search-border rounded-lg flex flex-col">
      <div
        className="flex justify-between px-4 py-3.5 cursor-pointer items-center"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <MdKeyboardArrowRight className={iconsClassNames} />
      </div>
      <Activity mode={isActive ? "visible" : "hidden"}>{children}</Activity>
    </div>
  )
}

export default CollapsibleCard
