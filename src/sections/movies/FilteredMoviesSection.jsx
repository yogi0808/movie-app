import MovieCard from "@/components/cards/MovieCard"
import { useFilterContext } from "@/contexts/FilterContext"
import React from "react"

const FilteredMoviesSection = () => {
  const { filteredMovies } = useFilterContext()
  return (
    <div className="flex flex-wrap justify-between gap-7.5 max-w-263">
      {filteredMovies
        ? filteredMovies.results.map((movieData) => (
            <div
              key={movieData.id}
              className="shadow-card flex-[1_1_15%] rounded-lg pb-3"
            >
              <MovieCard data={movieData} />
            </div>
          ))
        : ""}
    </div>
  )
}

export default FilteredMoviesSection
