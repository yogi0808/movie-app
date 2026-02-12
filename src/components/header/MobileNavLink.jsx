import classNames from "classnames"
import React, { useState } from "react"

/**
 *
 * @param {object} link - it is for single link data has the main link title and the object of the sublinks.
 * @returns - jsx for the links
 */
const MobileNavLink = ({ link }) => {
  const [isActive, setIsActive] = useState(false) // track the active state of the link options

  // will return the class names based on the conditions
  const linksClassNames = classNames("mt-2.5 mb-5 flex flex-col gap-2.5", {
    hidden: !isActive,
  })

  return (
    <div>
      <h1
        key={link.id}
        className="text-xl font-semibold leading-7.75"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {link.title}
      </h1>
      <div className={linksClassNames}>
        {link.options.map((link) => (
          <a
            href={link.link}
            key={link.id}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default MobileNavLink
