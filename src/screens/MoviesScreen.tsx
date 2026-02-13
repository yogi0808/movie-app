import RootLayout from '@layouts/RootLayout';
import FilterSection from '@sections/movies/FilterSection';
import FilterContextProvider from '@contexts/FilterContext';
import FilteredMoviesSection from '@sections/movies/FilteredMoviesSection';

/**
 * uses the root layout for movies screen and also using the filter context provider for global state in this page. this screen shown in the movies route("/movies").
 *
 * @returns - jsx for the movies screen
 */
const MoviesScreen = () => {
  return (
    <FilterContextProvider>
      <RootLayout>
        <section className="max-w-350 mx-auto px-5 md:px-10 py-4 md:py-7.5">
          <h2 className="font-semibold text-2xl mb-5">Popular Movies</h2>
          <div className="w-full flex max-sm:flex-wrap gap-x-7.5">
            <FilterSection />
            <FilteredMoviesSection />
          </div>
        </section>
      </RootLayout>
    </FilterContextProvider>
  );
};

export default MoviesScreen;
