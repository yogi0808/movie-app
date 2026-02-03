import Logo from "../Logo";
import LinkWidthOptions from "./LinkWidthOptions";
import { HeaderLinks } from "@constants/index";
import { MdAdd, MdNotifications, MdOutlineSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import useScroll from "@hooks/useScroll";
import classNames from "classnames";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";

/**
 * header component that displays the logo navigation lins and also hides when user is scrolls down and when user scrolls back up it appears again.
 * @returns - jsx for the header component
 */
const Header = () => {
  const { scrollDirection } = useScroll(); // to get the user scroll direction it is custom hook
  const [isMobileNavActive, setIsMobileNavActive] = useState(false); // track the open and close status of the mobile navigation popup

  const mobileNavRef = useRef(); // ref of the mobile navigation popup

  // getting dynamic class names based on the condition
  const headerClassNames = classNames(
    "w-full sticky transition-all duration-300 ease-out top-0 bg-primary text-white h-16 z-99",
    {
      "top-0!": scrollDirection === "down",
      "-top-16!": scrollDirection !== "down",
    },
  );

  useEffect(() => {
    /**
     * this function is for handling the click out side of the mobile navigation popup menu to close menu if click out side the menu
     * @constructor
     * @param {object} e - mousedown event object
     */
    const handleClickOutside = (e) => {
      if (!mobileNavRef?.current?.contains(e.target)) {
        setIsMobileNavActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // adding an handleClickOutside to mouse click in dom

    /**
     * this return function is for removing the event listener from the dom
     */
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavRef]);

  return (
    <>
      <MobileNav isActive={isMobileNavActive} navRef={mobileNavRef} />
      <header className={headerClassNames}>
        <div className="max-w-325 h-full mx-auto px-5 lg:px-10 flex justify-between">
          <div className="flex-1 flex justify-start items-center lg:hidden">
            <button onClick={() => setIsMobileNavActive((prev) => !prev)}>
              <GiHamburgerMenu className="text-xl" />
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-38.5 mr-4 hidden lg:inline">
              <Logo />
            </div>
            <div className="w-13.75 mr-4 lg:hidden">
              <Logo xl />
            </div>
            <nav className="hidden gap-3.75 h-fit lg:flex">
              {HeaderLinks.map((link) => (
                <LinkWidthOptions key={link.id} link={link} />
              ))}
            </nav>
          </div>
          <div className="flex gap-3.5 lg:gap-7.5 justify-end lg:justify-center items-center h-full max-lg:flex-1">
            <button className="hidden lg:inline">
              <MdAdd size={25} className="text-white" />
            </button>
            <button className="border border-white py-0.5 px-1 rounded font-semibold text-sm hidden lg:inline">
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
    </>
  );
};

export default Header;
