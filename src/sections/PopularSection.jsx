import { useEffect, useState } from "react"
import { useGetMoviesQuery } from "../redux/api/movies"
import TitleWithTabs from "../components/TitleWithTabs"
import MovieCard from "../components/cards/MovieCard"
import { endpointsForPopularMovies } from "../constants/index"

const PopularSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isLoadingFac, setIsLoadingFac] = useState(true)
  const [param, setParam] = useState(endpointsForPopularMovies[0])

  const {
    data = Array(10).fill({}),
    error,
    isLoading,
  } = useGetMoviesQuery(param)

  const changeTab = (idx) => {
    setActiveTab(idx)
  }

  useEffect(() => {
    switch (activeTab) {
      case 0:
        setParam(endpointsForPopularMovies[0])
        break
      case 1:
        setParam(endpointsForPopularMovies[1])
        break
      case 2:
        setParam(endpointsForPopularMovies[2])
        break
      case 3:
        setParam(endpointsForPopularMovies[3])
        break
      default:
        setParam(endpointsForPopularMovies[0])
    }
  }, [activeTab])

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingFac(false)
    }, 2500)
  }, [])

  return (
    <section className="px-5 pt-7.5 flex justify-center">
      <div className="max-w-325 flex flex-col w-full">
        <TitleWithTabs
          title="What's Popular"
          data={["Streaming", "On TV", "For Rent", "In Theaters"]}
          activeTab={activeTab}
          onTabChange={changeTab}
        />
        <div
          className={`flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-10 ${isLoadingFac ? "animate-breath" : "animate-fade-in"}`}
        >
          {data.map((movieData) => (
            <MovieCard
              data={movieData}
              isLoading={isLoadingFac}
              key={movieData.id}
            />
          ))}
        </div>
        <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
      </div>
    </section>
  )
}

export default PopularSection
