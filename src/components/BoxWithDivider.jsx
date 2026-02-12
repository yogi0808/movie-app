import classNames from "classnames"
import React from "react"

/**
 * display the children in to box with the divider line
 *
 * @param {elements} children - children of the this wrapper div to display inside the wrapper
 * @param {string} className - for optional class names if want in some case
 *
 * @returns - jsx for the div that has the divider line
 */
const BoxWithDivider = ({ children, className }) => {
  // class names for the box with extended class names from the parent
  const mainClassNames = classNames(
    "p-4 pt-3.5 border-t border-search-border",
    {
      [className]: className,
    },
  )

  return <div className={mainClassNames}>{children}</div>
}

export default BoxWithDivider
