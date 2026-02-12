import classNames from "classnames"
import { MdOutlineSearch } from "react-icons/md"

import useScroll from "@hooks/useScroll"

/**
 * search bar component show in home page top under the header and it sticks to the top if the header is not visible and if header is visible it sticks to header bottom side.
 *
 * @returns - jsx for the search bar
 */
const SearchBar = () => {
  const { scrollDirection } = useScroll() // to get the user scroll direction it is custom hook

  // getting dynamic class names based on the condition
  const searchBarClassNames = classNames(
    "w-full border-b border-search-border sticky transition-all duration-300 ease-out bg-white h-11.5 z-98 top-16",
    {
      "top-0!": scrollDirection !== "down",
    },
  )

  return (
    <section className={searchBarClassNames}>
      <div className="max-w-325 h-full mx-auto pl-10 flex items-center">
        <MdOutlineSearch
          className="text-black"
          size={20}
        />
        <input
          type="text"
          name="search"
          className="w-full px-2.5 h-full focus:outline-none font-arial! leading-6 mt-0.5 italic text-search-text placeholder-search-text"
          placeholder="Search for a movie, tv show, person..."
        />
      </div>
    </section>
  )
}

export default SearchBar
