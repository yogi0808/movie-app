import RecommendationMovieCard from '@components/cards/RecommendationMovieCard';
import type { MovieType } from '@utils/types';
import { apiFetch } from '@utils/utils';
import { useEffect, useState } from 'react';

/**
 * fetches and displays the movie list related to single movie
 *
 * @param {string} idEndpoint - endpoint with movie id to fetch related moves
 * @param {string} movieName - name of the movie
 * @returns - jsx for the related movies
 */
const Recommendations = ({ idEndpoint, movieName }: { idEndpoint: string; movieName: string }) => {
  const [data, setData] = useState<MovieType[]>([]); // list of the recommendations

  useEffect(() => {
    /**
     * fetches data for related movie to show in related section
     */
    const fetchData = async () => {
      const data = await apiFetch(`${idEndpoint}/recommendations`);
      setData(data.results);
    };

    fetchData();
  }, [idEndpoint]);

  return (
    <section className="flex flex-col w-full py-7.5">
      <h3 className="text-2xl font-semibold mb-2">Recommendations</h3>
      {data.length > 0 ? (
        <div className="relative">
          <div className="flex overflow-x-scroll gap-3.5 relative">
            {data.map((item) => (
              <RecommendationMovieCard key={item.id} movie={item} />
            ))}
          </div>
          <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
        </div>
      ) : (
        <p>
          We don&apos;t have enough data to suggest any movies based on {movieName}. You can help by
          rating movies you&apos;ve seen.
        </p>
      )}
    </section>
  );
};

export default Recommendations;
