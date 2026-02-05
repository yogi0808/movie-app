import React, { Activity, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

const CollapsibleCard = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="max-w-65 shadow-card border border-search-border rounded-lg flex flex-col">
      <div
        className="flex justify-between px-4 py-3.5 cursor-pointer"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <MdKeyboardArrowRight className="text-xl origin-center" />
      </div>
      <Activity mode={isActive ? "visible" : "hidden"}>{children}</Activity>
    </div>
  )
}

export default CollapsibleCard
