import classNames from "classnames"
import { useEffect, useRef, useState } from "react"

import SortBy from "@sections/movies/SortBy"
import Filters from "@sections/movies/Filters"
import WhereToWatch from "@sections/movies/WhereToWatch"
import { useFilterContext } from "@contexts/FilterContext"

/**
 * displays all the filters in the movie screen left
 *
 * @returns - jsx for the filter section
 */
const FilterSection = () => {
  const [isSearchFixed, setIsSearchFixed] = useState<boolean>(false) // tacking the search bar fixed or not
  const { searchAvailable, fetchFilteredMovies } = useFilterContext() // getting the search available or not and fetch filtered movies function to fetch the movies form the filter context
  const searchBtnRef = useRef<HTMLDivElement | null>(null) // ref of the search button

  const observerRef = useRef<IntersectionObserver | null>(null) // ref of the intersection observer

  // class names of the search button based on the fixed position and search availability
  const searchClassNames = classNames(
    "rounded-full p-3 cursor-pointer disabled:bg-search-border w-full disabled:cursor-not-allowed disabled:text-slider-bg bg-highlight text-white text-xl font-semibold leading-5",
    {
      "fixed bottom-0 left-0 right-0 z-9 rounded-none":
        searchAvailable && isSearchFixed,
    },
  )

  // use effect for creating an intersection observer
  useEffect(() => {
    // disconnect observer if already have one
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    /**
     * callback function for the intersection observer to change the page number
     *
     * @param {object[]} entries - list of the object which is targeted
     */
    const cb = (entries: IntersectionObserverEntry[]) => {
      if (!entries[0].isIntersecting && searchAvailable) {
        setIsSearchFixed(true)
      } else {
        setIsSearchFixed(false)
      }
    }

    // creating intersection observer and storing it in ref
    observerRef.current = new IntersectionObserver(cb, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    })

    // attaching the target to observer
    if (searchBtnRef.current) {
      observerRef.current.observe(searchBtnRef.current)
    }

    // cleaning the observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [searchAvailable])

  return (
    <div className="sm:min-w-65 sm:w-65 max-sm:w-full flex flex-col gap-3">
      <SortBy />
      <WhereToWatch />
      <Filters />
      <div className="w-full">
        <div ref={searchBtnRef}></div>
        <button
          disabled={!searchAvailable}
          onClick={() => {
            fetchFilteredMovies()
          }}
          className={searchClassNames}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default FilterSection
