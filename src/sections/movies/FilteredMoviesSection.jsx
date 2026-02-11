import MovieCard from "@/components/cards/MovieCard"
import { useFilterContext } from "@/contexts/FilterContext"
import React, { useEffect, useRef, useState } from "react"

const FilteredMoviesSection = () => {
  const [loadInfinite, setLoadInfinite] = useState(false)
  const { filteredMovies, setNextPage } = useFilterContext()

  const targetRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (!loadInfinite) return

    if (observerRef.current) observerRef.current.disconnect()

    const cb = (entries) => {
      if (entries[0].isIntersecting) {
        setNextPage((prev) => prev + 1)
      }
    }

    observerRef.current = new IntersectionObserver(cb, {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    })

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current)
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [loadInfinite, setNextPage])

  return (
    <div className="flex w-full h-fit flex-wrap justify-between gap-7.5 max-w-263">
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
        ref={targetRef}
      >
        {loadInfinite ? "Loading more movies..." : "Load More"}
      </p>
    </div>
  )
}

export default FilteredMoviesSection
