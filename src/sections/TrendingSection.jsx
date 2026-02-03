import { useEffect, useState } from "react";
import MovieCard from "@components/cards/MovieCard";
import TitleWithTabs from "@components/TitleWithTabs";
import { useGetTrendingMoviesQuery } from "@redux/api/movies";
import Section from "./Section";
import classNames from "classnames";

/**
 * this component is responsible for getting and displaying trending movies data based on the user preference with tab.
 *
 * @returns - jsx for the popular section
 */
const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState(0); // to track the selected(active) tab
  const [isLoadingFac, setIsLoadingFac] = useState(true); // fac loading to delay the data display
  const {
    data = { results: Array(10).fill({}) },
    error,
    isLoading,
  } = useGetTrendingMoviesQuery(activeTab === 1 ? "week" : "day"); // redux query for data fetching return the data, error, and loading state

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
      </div>
    </Section>
  );
};

export default TrendingSection;
