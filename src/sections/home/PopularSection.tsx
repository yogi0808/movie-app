import { useState } from "react"

import Section from "@sections/home/Section"
import type { MovieType } from "@utils/types"
import useFetchMovies from "@hooks/useFetchMovies"
import MovieCard from "@components/cards/MovieCard"
import TitleWithTabs from "@components/TitleWithTabs"
import { endpointsForPopularMovies } from "@constants/index"
import MovieCardSkeleton from "@components/cards/MovieCardSkeleton"

/**
 * this component is responsible for getting and displaying popular movies data based on the user preference with tab.
 *
 * @returns - jsx for the popular section
 */
const PopularSection = () => {
  const [activeTab, setActiveTab] = useState<number>(0) // to track the selected(active) tab
  const { data, isLoading } = useFetchMovies(
    endpointsForPopularMovies[activeTab],
  ) // custom hook for data fetching return the data, error, and loading state

  /**
   * change the activeTab state for change the status of the active tab
   *
   * @param {number} idx - index number of the tab which will selected next
   */
  const changeTab = (idx: number) => {
    setActiveTab(idx)
  }

  return (
    <Section>
      <TitleWithTabs
        title="What's Popular"
        data={["Streaming", "On TV", "For Rent", "In Theaters"]}
        activeTab={activeTab}
        onTabChange={changeTab}
      />
      {isLoading ? (
        <div className="flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-5 lg:px-10 relative animate-breath">
          {new Array(10).fill("").map((_, idx) => (
            <MovieCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <div className="flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-5 lg:px-10 relative animate-fade-in">
          {data.results.map((movieData: MovieType) => (
            <MovieCard
              data={movieData}
              key={movieData.id}
            />
          ))}
        </div>
      )}
      <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
    </Section>
  )
}

export default PopularSection
