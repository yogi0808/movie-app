import classNames from "classnames"
import React from "react"

/**
 *
 * @param {elements} children - child elements for this wrapper
 * @param {string} className - for extending the class names based on custom requirements
 * @param {string} outerSectionClassName - for extending the main wrapper class names based on the custom requirements
 *
 * @returns
 */
const Section = ({ children, className, outerSectionClassName }) => {
  // adding the extended class names if provided
  const outerSectionClassNames = classNames("md:px-5 pt-7.5", {
    [outerSectionClassName]: outerSectionClassName,
  })

  // adding the extended class names if provided
  const innerDivClassNames = classNames("max-w-325 w-full mx-auto relative", {
    [className]: className,
  })

  return (
    <section className={outerSectionClassNames}>
      <div className={innerDivClassNames}>{children}</div>
    </section>
  )
}

export default Section
