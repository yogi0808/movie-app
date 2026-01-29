import Logo from "../Logo"
import LinkWidthOptions from "./LinkWidthOptions"
import { HeaderLinks } from "../../constants"
import { MdAdd, MdNotifications, MdOutlineSearch } from "react-icons/md"
import useScroll from "../../hooks/useScroll"

const Header = () => {
  const { scrollDirection } = useScroll()

  return (
    <header
      className={`w-full sticky ${scrollDirection === "down" ? "top-0!" : "-top-16!"} transition-all duration-300 ease-out top-0 bg-primary text-white h-16 z-99`}
    >
      <div className="max-w-325 h-full mx-auto px-10 flex justify-between">
        <div className="flex items-center">
          <div className="w-38.5 flex mr-4">
            <Logo />
          </div>
          <nav className="flex gap-3.75 flex-wrap h-fit">
            {HeaderLinks.map((link) => (
              <LinkWidthOptions
                key={link.id}
                link={link}
              />
            ))}
          </nav>
        </div>
        <div className="flex gap-7.5 justify-center items-center h-full">
          <button>
            <MdAdd
              size={25}
              className="text-white"
            />
          </button>
          <button className="border border-white py-0.5 px-1 rounded font-semibold text-sm">
            EN
          </button>
          <button>
            <MdNotifications
              size={20}
              className="text-white"
            />
          </button>
          <button className="bg-accent text-[14px] font-semibold h-8 rounded-full aspect-square">
            Y
          </button>
          <button>
            <MdOutlineSearch
              size={30}
              className="text-highlight"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
