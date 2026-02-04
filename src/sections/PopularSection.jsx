import { useState } from "react";
import TitleWithTabs from "@components/TitleWithTabs";
import MovieCard from "@components/cards/MovieCard";
import { endpointsForPopularMovies } from "@constants/index";
import Section from "./Section";
import MovieCardSkeleton from "@/components/cards/MovieCardSkeleton";
import useFetchMovies from "@/hooks/useFetchMovies";

/**
 * this component is responsible for getting and displaying popular movies data based on the user preference with tab.
 *
 * @returns - jsx for the popular section
 */
const PopularSection = () => {
  const [activeTab, setActiveTab] = useState(0); // to track the selected(active) tab
  const { data, isLoading } = useFetchMovies(
    endpointsForPopularMovies[activeTab],
  ); // custom hook for data fetching return the data, error, and loading state

  /**
   * change the activeTab state for change the status of the active tab
   *
   * @param {number} idx - index number of the tab which will selected next
   */
  const changeTab = (idx) => {
    setActiveTab(idx);
  };

  return (
    <Section>
      <TitleWithTabs
        title="What's Popular"
        data={["Streaming", "On TV", "For Rent", "In Theaters"]}
        activeTab={activeTab}
        onTabChange={changeTab}
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
    </Section>
  );
};

export default PopularSection;
