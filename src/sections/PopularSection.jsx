import { useEffect, useState } from "react"
import { useGetMoviesQuery } from "../redux/api/movies"
import TitleWithTabs from "../components/TitleWithTabs"
import MovieCard from "../components/cards/MovieCard"

const PopularSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [param, setParam] = useState(
    "discover/movie?include_adult=false&with_watch_monetization_types=flatrate&include_video=false&watch_region=US&sort_by=popularity.desc",
  )

  const { data = [], error, isLoading } = useGetMoviesQuery(param)

  const changeTab = (idx) => {
    setActiveTab(idx)
  }

  useEffect(() => {
    switch (activeTab) {
      case 0:
        setParam(
          "discover/movie?include_adult=false&with_watch_monetization_types=flatrate&include_video=false&watch_region=US&sort_by=popularity.desc",
        )
        break
      case 1:
        setParam("tv/popular?include_adult=false&language=en-US")
        break
      case 2:
        setParam(
          "discover/movie?include_adult=false&with_watch_monetization_types=rent&include_video=false&watch_region=US&sort_by=popularity.desc",
        )
        break
      case 3:
        setParam("movie/now_playing?region=US&language=en-US")
        break
      default:
        setParam(
          "discover/movie?include_adult=false&with_watch_monetization_types=flatrate&include_video=false&watch_region=US&sort_by=popularity.desc",
        )
    }
  }, [activeTab])

  return (
    <section className="px-5 pt-7.5 flex justify-center">
      <div className="max-w-325 flex flex-col w-full">
        <TitleWithTabs
          title="What's Popular"
          data={["Streaming", "On TV", "For Rent", "In Theaters"]}
          activeTab={activeTab}
          onTabChange={changeTab}
        />
        <div className="flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-10">
          {isLoading
            ? "Loading..."
            : error
              ? error?.status_message
              : data.map((movieData) => (
                  <MovieCard
                    data={movieData}
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
