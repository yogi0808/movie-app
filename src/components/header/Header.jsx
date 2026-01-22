import Logo from "../Logo"
import LinkWidthOptions from "./LinkWidthOptions"
import { HeaderLinks } from "../../constants"
import { MdAdd, MdNotifications, MdOutlineSearch } from "react-icons/md"

const Header = () => {
  return (
    <header className="w-full sticky top-0 bg-primary text-white h-16">
      <div className="max-w-325 h-full mx-auto px-10 flex justify-between">
        <div className="flex items-center">
          <div className="w-39 flex mr-3">
            <Logo />
          </div>
          <nav className="flex gap-4 flex-wrap h-fit">
            {HeaderLinks.map((link) => (
              <LinkWidthOptions
                key={link.id}
                link={link}
              />
            ))}
          </nav>
        </div>
        <div className="flex gap-7.5 justify-center items-center h-full">
          <button className="">
            <MdAdd
              size={25}
              color="white"
            />
          </button>
          <button className="border border-white py-0.5 px-1 rounded font-semibold text-sm">
            EN
          </button>
          <button>
            <MdNotifications
              size={25}
              color="white"
            />
          </button>
          <button className="bg-accent h-8 rounded-full aspect-square">
            Y
          </button>
          <button>
            <MdOutlineSearch
              size={25}
              color="#01b4e4"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
