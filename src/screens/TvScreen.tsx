import RootLayout from '@layouts/RootLayout';
import FilterSection from '@sections/movies/FilterSection';
import TvFilterContextProvider from '@contexts/TvFilterContext';
import FilteredMoviesSection from '@sections/movies/FilteredMoviesSection';

/**
 * uses the root layout for movies screen and also using the filter context provider for global state in this page. this screen shown in the tv route("/tv").
 *
 * @returns - jsx for the tv screen
 */
const TvScreen = () => {
  return (
    <RootLayout>
      <TvFilterContextProvider>
        <section className="max-w-350 mx-auto px-5 md:px-10 py-4 md:py-7.5">
          <h2 className="font-semibold text-2xl mb-5">Popular TV Shows</h2>
          <div className="w-full flex max-sm:flex-wrap gap-x-7.5">
            <FilterSection type="tv" />
            <FilteredMoviesSection type="tv" />
          </div>
        </section>
      </TvFilterContextProvider>
    </RootLayout>
  );
};

export default TvScreen;
