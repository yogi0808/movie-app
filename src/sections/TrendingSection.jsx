import { useState } from "react"
import MovieCard from "../components/cards/MovieCard"
import TitleWithTabs from "../components/TitleWithTabs"

const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (idx) => {
    setActiveTab(idx)
  }

  return (
    <section className="px-5 py-7.5 flex justify-center">
      <div className="max-w-325 flex flex-col gap-5 w-full">
        <TitleWithTabs
          title="Trending"
          data={["Today", "This Week"]}
          activeTab={activeTab}
          onTabChange={changeTab}
        />
        <div className="relative">
          <img
            className="absolute left-0 -bottom-9 -z-1 w-full"
            src="line-bg.svg"
          />
          <div className="flex space-x-5 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide px-10">
            <MovieCard
              data={{
                adult: false,
                backdrop_path: "/swxhEJsAWms6X1fDZ4HdbvYBSf9.jpg",
                id: 1234731,
                title: "Anaconda",
                original_title: "Anaconda",
                overview:
                  "A group of friends facing mid-life crises head to the rainforest with the intention of remaking their favorite movie from their youth, only to find themselves in a fight for their lives against natural disasters, giant snakes and violent criminals.",
                poster_path: "/hBxN6dwrANN1ic3a4G9x6JZcR3C.jpg",
                media_type: "movie",
                original_language: "en",
                genre_ids: [12, 35, 27],
                popularity: 173.158,
                release_date: "2025-12-24",
                video: false,
                vote_average: 6.0,
                vote_count: 191,
              }}
            />
          </div>
          <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection
