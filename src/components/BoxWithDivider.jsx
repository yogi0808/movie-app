import classNames from "classnames"
import React from "react"

const BoxWithDivider = ({ children, className }) => {
  const mainClassNames = classNames(
    "p-4 pt-3.5 border-t border-search-border",
    {
      [className]: className,
    },
  )

  return <div className={mainClassNames}>{children}</div>
}

export default BoxWithDivider
