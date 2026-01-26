import { useState } from "react"
import MovieCard from "../components/MovieCard"
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
              src="/movie1.webp"
              name="Fallout"
              date="Apr 10, 2024"
            />
          </div>
          <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection
