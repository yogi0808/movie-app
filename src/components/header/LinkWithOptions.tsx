import { useState } from "react"
import classNames from "classnames"
import { Link } from "react-router"

import type { LinkOptionsType, LinkWithOptionsProp } from "@utils/types"

/**
 * this component is responsible for showing the options based on hover of particular header option and it'll provide the link for each options that will visible on the popup.
 *
 * @param {object} param0 - default prop with link object
 *  @param {object} link - object for data needed in link of it's popup menu
 * @returns - jsx for single link in header
 */
const LinkWithOptions = ({ link }: LinkWithOptionsProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false) // for popup activated and deactivated state

  // creating an dynamic class name string based on the condition
  const popupListClassNames = classNames(
    "bg-white min-w-35 border border-gray-300 text-black flex-col py-1.5 rounded absolute top-9 left-0 flex",
    {
      "hidden!": !isOpen,
    },
  )

  return (
    <button
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative px-4 py-2"
    >
      <label className="font-semibold leading-6">{link.title}</label>
      <div className={popupListClassNames}>
        {link.options.map((item: LinkOptionsType) => (
          <Link
            key={item.id}
            to={item.link}
            className="hover:bg-gray-200 p-1 px-4 text-sm w-full text-start transition-all ease-in-out duration-200"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </button>
  )
}

export default LinkWithOptions
