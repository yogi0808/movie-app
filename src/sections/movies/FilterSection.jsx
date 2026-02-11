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

  const observerRef = useRef(null)

  const searchClassNames = classNames(
    "rounded-full p-3 cursor-pointer disabled:bg-search-border w-full disabled:cursor-not-allowed disabled:text-slider-bg bg-highlight text-white text-xl font-semibold leading-5",
    {
      "fixed bottom-0 left-0 right-0 z-9 rounded-none":
        searchAvailable && isSearchFixed,
    },
  )

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    const cb = (entries) => {
      if (!entries[0].isIntersecting && searchAvailable) {
        setIsSearchFixed(true)
      } else {
        setIsSearchFixed(false)
      }
    }

    observerRef.current = new IntersectionObserver(cb, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    })

    if (searchBtnRef.current) {
      observerRef.current.observe(searchBtnRef.current)
    }

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
