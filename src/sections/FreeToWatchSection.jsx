import { useEffect, useState } from "react";
import MovieCard from "@components/cards/MovieCard";
import TitleWithTabs from "@components/TitleWithTabs";
import { useGetMoviesQuery } from "@redux/api/movies";
import { endpointsForFreeToWatchMovies } from "@constants";
import Section from "./Section";
import classNames from "classnames";

/**
 * this component is responsible for getting and displaying free to watch movies data based on the user preference with tab.
 *
 * @returns - jsx for the popular section
 */
const FreeToWatchSection = () => {
  const [activeTab, setActiveTab] = useState(0); // to track the selected(active) tab
  const [isLoadingFac, setIsLoadingFac] = useState(true); // fac loading to delay the data display
  const {
    data = { results: Array(10).fill({}) },
    error,
    isLoading,
  } = useGetMoviesQuery(endpointsForFreeToWatchMovies[activeTab]); // redux query for data fetching return the data, error, and loading state

  const wrapperClassNames = classNames(
    "flex space-x-5 pt-5 overflow-x-auto pb-5.75 scrollbar-hide px-5 lg:px-10 relative",
    {
      "animate-breath": isLoading,
      "animate-fade-in": !isLoading,
    },
  );

  /**
   * change the activeTab state for changing the state of the active tab
   * @param {number} idx - index  number of the tab which will selected next
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
    <Section>
      <TitleWithTabs
        title="Free To Watch"
        data={["Movie", "TV"]}
        activeTab={activeTab}
        onTabChange={changeTab}
      />
      <div className={wrapperClassNames}>
        {data.results.map((movieData) => (
          <MovieCard
            data={movieData}
            isLoading={isLoading}
            key={movieData.id}
          />
        ))}
      </div>
      <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
    </Section>
  );
};

export default FreeToWatchSection;
