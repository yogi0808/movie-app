import { useState } from "react";
import MovieCard from "@components/cards/MovieCard";
import TitleWithTabs from "@components/TitleWithTabs";
import Section from "./Section";
import MovieCardSkeleton from "@/components/cards/MovieCardSkeleton";
import useFetchMovies from "@/hooks/useFetchMovies";
import { endpointsForTrendingMovies } from "@/constants";

/**
 * this component is responsible for getting and displaying trending movies data based on the user preference with tab.
 *
 * @returns - jsx for the popular section
 */
const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState(0); // to track the selected(active) tab
  const { data, isLoading } = useFetchMovies(
    endpointsForTrendingMovies[activeTab],
  ); // custom hook for data fetching return the data, error, and loading state

  /**
   * change the activeTab state for changing the state of the active tab
   * @param {number} idx - index  number of the tab which will selected next
   */
  const changeTab = (idx) => {
    setActiveTab(idx);
  };

  return (
    <Section className="max-lg:bg-[url('/line-bg.svg')] bg-no-repeat bg-position-[50%_200px] bg-size-[1400px]">
      <TitleWithTabs
        title="Trending"
        data={["Today", "This Week"]}
        activeTab={activeTab}
        onTabChange={changeTab}
      />
      <div className="relative">
        <img
          className="absolute left-0 top-35 -z-1 w-full max-lg:hidden"
          src="line-bg.svg"
        />
        <div className="flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-5 lg:px-10 relative">
          {isLoading
            ? new Array(10)
                .fill("")
                .map((_, idx) => <MovieCardSkeleton key={idx} />)
            : data.results.map((movieData) => (
                <MovieCard data={movieData} key={movieData.id} />
              ))}
        </div>
        <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
      </div>
    </Section>
  );
};

export default TrendingSection;
