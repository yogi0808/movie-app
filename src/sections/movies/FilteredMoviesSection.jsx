import MovieCard from "@/components/cards/MovieCard"
import { useFilterContext } from "@/contexts/FilterContext"
import React, { useEffect, useRef, useState } from "react"

const FilteredMoviesSection = () => {
  const [loadInfinite, setLoadInfinite] = useState(false)
  const { filteredMovies, setNextPage } = useFilterContext()
  const prevY = useRef(0)

  const obsRef = useRef(null)

  let observer

  const cb = (entries) => {
    const y = entries[0].boundingClientRect.y
    if (prevY.current > y) {
      setNextPage((prev) => prev + 1)
    }

    prevY.current = y
  }

  const options = {
    root: null,
    rootMargin: "200px",
    threshold: 0.01,
  }

  const createObserver = () => {
    if (observer) {
      observer.disconnect()
    }

    observer = new IntersectionObserver(cb, options)

    observer.observe(obsRef.current)
  }

  useEffect(() => {
    if (loadInfinite) {
      createObserver()
    }
  }, [loadInfinite])

  return (
    <div className="flex w-full flex-wrap justify-between gap-7.5 max-w-263">
      {filteredMovies
        ? filteredMovies.map((movieData) => (
            <div
              key={movieData.id}
              className="shadow-card flex-[1_1_15%] rounded-lg pb-3"
            >
              <MovieCard data={movieData} />
            </div>
          ))
        : ""}
      <p
        className="w-full font-bold h-fit text-white text-center p-2 text-2xl bg-highlight rounded-lg cursor-pointer"
        onClick={() => {
          setLoadInfinite(true)
          setNextPage((prev) => (prev === 1 ? 2 : prev))
        }}
        ref={obsRef}
      >
        Load More
      </p>
    </div>
  )
}

export default FilteredMoviesSection
