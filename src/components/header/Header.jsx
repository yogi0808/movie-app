import Logo from "../Logo";
import LinkWidthOptions from "./LinkWidthOptions";
import { HeaderLinks } from "@constants/index";
import { MdAdd, MdNotifications, MdOutlineSearch } from "react-icons/md";
import useScroll from "@hooks/useScroll";
import classNames from "classnames";

/**
 * header component that displays the logo navigation lins and also hides when user is scrolls down and when user scrolls back up it appears again.
 * @returns - jsx for the header component
 */
const Header = () => {
  const { scrollDirection } = useScroll(); // to get the user scroll direction it is custom hook

  // getting dynamic class names based on the condition
  const headerClassNames = classNames(
    "w-full sticky transition-all duration-300 ease-out top-0 bg-primary text-white h-16 z-99",
    {
      "top-0!": scrollDirection === "down",
      "-top-16!": scrollDirection !== "down",
    },
  );

  return (
    <header className={headerClassNames}>
      <div className="max-w-325 h-full mx-auto px-10 flex justify-between">
        <div className="flex items-center">
          <div className="w-38.5 flex mr-4">
            <Logo />
          </div>
          <nav className="flex gap-3.75 flex-wrap h-fit">
            {HeaderLinks.map((link) => (
              <LinkWidthOptions key={link.id} link={link} />
            ))}
          </nav>
        </div>
        <div className="flex gap-7.5 justify-center items-center h-full">
          <button>
            <MdAdd size={25} className="text-white" />
          </button>
          <button className="border border-white py-0.5 px-1 rounded font-semibold text-sm">
            EN
          </button>
          <button>
            <MdNotifications size={20} className="text-white" />
          </button>
          <button className="bg-accent text-sm font-semibold h-8 rounded-full aspect-square">
            Y
          </button>
          <button>
            <MdOutlineSearch size={30} className="text-highlight" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
