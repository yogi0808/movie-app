import { useEffect, useState } from "react"
import MovieCard from "../components/cards/MovieCard"
import TitleWithTabs from "../components/TitleWithTabs"
import { useGetTrendingMoviesQuery } from "../redux/api/movies"

const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [param, setParam] = useState("day")
  const [isLoadingFac, setIsLoadingFac] = useState(true)
  const {
    data = Array(10).fill({}),
    error,
    isLoading,
  } = useGetTrendingMoviesQuery(param)

  const changeTab = (idx) => {
    setActiveTab(idx)
  }

  useEffect(() => {
    switch (activeTab) {
      case 0:
        setParam("day")
        break
      case 1:
        setParam("week")
        break
      default:
        setParam("day")
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
          title="Trending"
          data={["Today", "This Week"]}
          activeTab={activeTab}
          onTabChange={changeTab}
        />
        <div className="relative">
          <img
            className="absolute left-0 top-35 -z-1 w-full"
            src="line-bg.svg"
          />
          <div className="flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-10">
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
      </div>
    </section>
  )
}

export default TrendingSection
