import { useEffect, useRef, useState } from 'react';

import MovieCard from '@components/cards/MovieCard';
import { useFilterContext } from '@hooks/useFilterContext';
import type { MediaType, MovieType } from '@utils/types';
import MovieCardSkeleton from '@components/cards/MovieCardSkeleton';

/**
 * displays all the filtered movies on the right side
 *
 * @returns - jsx for the filtered movies
 */
const FilteredMoviesSection = ({ type }: { type: MediaType }) => {
  const [loadInfinite, setLoadInfinite] = useState<boolean>(false); // tracks if the infinite scroll is active or not
  const { filteredMovies, setNextPage } = useFilterContext(type); // getting the list of the filtered movies and the next page from the filter context

  const targetRef = useRef<HTMLDivElement | null>(null); // ref of the bottom div for loading infinitely
  const observerRef = useRef<IntersectionObserver | null>(null); // ref for the observer to survive the re-render

  // use effect for creating an intersection observer
  useEffect(() => {
    if (!loadInfinite) return;

    // disconnect observer if already have one
    if (observerRef.current) observerRef.current.disconnect();

    /**
     * callback function for the intersection observer to change the page number
     *
     * @param {object[]} entries - list of the object which is targeted
     */
    const cb = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setNextPage((prev) => prev + 1);
      }
    };

    // creating intersection observer and storing it in ref
    observerRef.current = new IntersectionObserver(cb, {
      root: null,
      rootMargin: '200px',
      threshold: 0.1,
    });

    // attaching the target to observer
    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    // cleaning the observer on unmount
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loadInfinite, setNextPage]);

  return (
    <div className="max-w-263">
      {filteredMovies.length > 0 ? (
        <div className="flex w-full h-fit flex-wrap justify-between gap-7.5 animate-fade-in">
          {filteredMovies.map((movieData: MovieType) => (
            <div key={movieData.id} className="shadow-card flex-[1_1_15%] rounded-lg pb-3">
              <MovieCard data={movieData} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex w-full h-fit flex-wrap justify-between gap-7.5 animate-breath">
          {new Array(20).fill('').map((_, idx) => (
            <MovieCardSkeleton key={idx} />
          ))}
        </div>
      )}
      <p
        className="w-full font-bold h-fit text-white text-center p-2 text-2xl bg-highlight rounded-lg cursor-pointer"
        onClick={() => {
          setLoadInfinite(true);
          setNextPage((prev) => (prev === 1 ? 2 : prev));
        }}
        ref={targetRef}
      >
        {loadInfinite ? 'Loading more movies...' : 'Load More'}
      </p>
    </div>
  );
};

export default FilteredMoviesSection;
