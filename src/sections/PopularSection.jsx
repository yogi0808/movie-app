import { useEffect, useState } from "react";
import { useGetMoviesQuery } from "@redux/api/movies";
import TitleWithTabs from "@components/TitleWithTabs";
import MovieCard from "@components/cards/MovieCard";
import { endpointsForPopularMovies } from "@constants/index";

/**
 * this component is responsible for getting and displaying popular movies data based on the user preference with tab.
 *
 * @returns - jsx for the popular section
 */
const PopularSection = () => {
  const [activeTab, setActiveTab] = useState(0); // to track the selected(active) tab
  const [isLoadingFac, setIsLoadingFac] = useState(true); // fac loading to delay the data display

  const {
    data = { results: Array(10).fill({}) },
    error,
    isLoading,
  } = useGetMoviesQuery(endpointsForPopularMovies[activeTab]); // redux query for data fetching returns the data, error, and loading state

  /**
   * change the activeTab state for change the status of the active tab
   *
   * @param {number} idx - index number of the tab which will selected next
   */
  const changeTab = (idx) => {
    setActiveTab(idx);
  };

  // this effect is for fac loading time
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingFac(false);
    }, 2500);
  }, []);

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
          className={`flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-10 ${isLoading ? "animate-breath" : "animate-fade-in"}`}
        >
          {data.results.map((movieData) => (
            <MovieCard
              data={movieData}
              isLoading={isLoading}
              key={movieData.id}
            />
          ))}
        </div>
        <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
      </div>
    </section>
  );
};

export default PopularSection;
