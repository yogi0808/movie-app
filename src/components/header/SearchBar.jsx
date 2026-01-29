import { MdOutlineSearch } from "react-icons/md"
import useScroll from "../../hooks/useScroll"

const SearchBar = () => {
  const { scrollDirection } = useScroll()

  return (
    <section
      className={`w-full border-b border-[#e3e3e3] sticky ${scrollDirection === "down" ? "top-16" : "top-0"} transition-all duration-300 ease-out bg-white h-11.5 z-98`}
    >
      <div className="max-w-325 h-full mx-auto pl-10 flex items-center">
        <MdOutlineSearch
          className="text-black"
          size={20}
        />
        <input
          type="text"
          className="w-full px-2.5 h-full focus:outline-none font-[Arial,sans-serif]! leading-6 mt-0.5 text-[16px] italic text-[#acacac] placeholder-[#acacac]"
          placeholder="Search for a movie, tv show, person..."
        />
      </div>
    </section>
  )
}

export default SearchBar
