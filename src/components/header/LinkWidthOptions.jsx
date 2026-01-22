import { useState } from "react"

const LinkWidthOptions = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative px-4 py-2"
    >
      <label className="font-semibold leading-6">{link.title}</label>
      <div
        className={`bg-white min-w-35 border border-gray-300 text-black ${
          isOpen ? "flex" : "hidden"
        } flex-col py-1.5 rounded absolute top-9 left-0`}
      >
        {link.options.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="hover:bg-gray-200 p-1 px-4 text-sm w-full text-start transition-all ease-in-out duration-200"
          >
            {item.text}
          </a>
        ))}
      </div>
    </button>
  )
}

export default LinkWidthOptions
