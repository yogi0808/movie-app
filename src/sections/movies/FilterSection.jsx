import React, { useEffect, useRef, useState } from "react"
import SortBy from "./SortBy"
import WhereToWatch from "./WhereToWatch"
import Filters from "./Filters"
import classNames from "classnames"
import { useFilterContext } from "@/contexts/FilterContext"

const FilterSection = () => {
  const [isSearchFixed, setIsSearchFixed] = useState(false)
  const { searchAvailable, fetchFilteredMovies } = useFilterContext()
  const searchBtnRef = useRef()

  let observer

  const cb = (entries) => {
    if (!entries[0].isIntersecting && searchAvailable) {
      setIsSearchFixed(true)
    } else {
      setIsSearchFixed(false)
    }
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }

  const searchClassNames = classNames(
    "rounded-full p-3 cursor-pointer disabled:bg-search-border w-full disabled:cursor-not-allowed disabled:text-slider-bg bg-highlight text-white text-xl font-semibold leading-5",
    {
      "fixed bottom-0 left-0 right-0 z-9 rounded-none":
        searchAvailable && isSearchFixed,
    },
  )

  const createObserver = () => {
    if (observer) {
      observer.disconnect()
    }

    observer = new IntersectionObserver(cb, options)

    observer.observe(searchBtnRef.current)
  }

  useEffect(() => {
    createObserver()
  }, [searchAvailable])

  return (
    <div className="sm:min-w-65 sm:w-65 max-sm:w-full flex flex-col gap-3">
      <SortBy />
      <WhereToWatch />
      <Filters />
      <div
        ref={searchBtnRef}
        className="w-full"
      >
        <button
          disabled={!searchAvailable}
          onClick={() => {
            fetchFilteredMovies()
            setIsSearchFixed(false)
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
