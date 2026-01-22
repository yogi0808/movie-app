import { useState } from "react"

const LinkWidthOptions = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative px-4 py-2"
    >
      <label className="font-semibold">{link.title}</label>
      <div
        className={`bg-white min-w-40 border border-gray-300 text-black ${
          isOpen ? "flex" : "hidden"
        } flex-col py-2 rounded absolute top-full left-0`}
      >
        {link.options.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="hover:bg-gray-200 p-1 px-3 text-sm w-full text-start transition-all ease-in-out duration-200"
          >
            {item.text}
          </a>
        ))}
      </div>
    </button>
  )
}

export default LinkWidthOptions
