import RootLayout from '@layouts/RootLayout';
import type { MovieType, ReviewType } from '@utils/types';
import { apiFetch, formateDate } from '@utils/utils';
import { useEffect, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, useParams } from 'react-router';

/**
 * fetches and displays the review based on id
 *
 * @returns - jsx for review screen
 */
const ReviewScreen = () => {
  const { reviewId } = useParams(); // review id form params
  const [movie, setMovie] = useState<MovieType>(); // movie data
  const [reviewData, setReviewData] = useState<ReviewType>(); // review data

  const idData = reviewId?.split('-') || ''; // separating the review id param and getting movie id and type from it
  const movieEndpoint = `${idData[0]}/${idData[1]}`; // joining movie id and type and making movie endpoint
  const rId = idData[2]; // review id

  // fetches the movie data and review data on load
  useEffect(() => {
    const fetchData = async () => {
      const reviewData = await apiFetch(`${movieEndpoint}/reviews`);
      const review = reviewData.results.filter((a: ReviewType) => a.id === rId);

      setReviewData(review[0]);

      const movieData = await apiFetch(movieEndpoint);
      setMovie(movieData);
    };
    fetchData();
  }, [movieEndpoint, rId]);

  // poster link
  const posterSrc = `${import.meta.env.VITE_IMAGE_BASE_URL}w600_and_h900_face${movie?.poster_path}`;

  // showing the loader while fetching the data
  if (!movie || !reviewData) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <div className="aspect-square w-10 border-6 border-transparent border-t-accent rounded-full animate-spin ring-6 ring-primary" />
      </section>
    );
  }

  return (
    <RootLayout>
      <section className="bg-black/5">
        <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-3">
          <Link
            to={`/details/${idData[0]}-${idData[1]}`}
            className="flex w-fit gap-2 items-center font-semibold text-xl"
          >
            <GoArrowLeft /> Back to main
          </Link>
        </div>
      </section>
      <section className="max-w-325 h-full mx-auto px-5 lg:px-10 py-5 flex max-md:flex-wrap">
        <div className="min-w-45 w-45 md:mr-4 pb-8">
          <img src={posterSrc} alt={movie?.title} />
        </div>
        <div className="md:px-4">
          <h2 className="text-2xl font-semibold mb-2.5">
            <span className="underline underline-offset-3 decoration-underline hover:text-black/60 cursor-pointer">
              {movie.title}
            </span>{' '}
            {movie.release_date ? (
              <span className="text-black/40">({movie.release_date.split('-')[0]})</span>
            ) : (
              ''
            )}
          </h2>
          <h4 className="font-semibold text-xl">
            Written by{' '}
            <span className="underline underline-offset-3 decoration-underline hover:text-black/60 cursor-pointer">
              {reviewData.author}
            </span>{' '}
            on {formateDate(reviewData.created_at)}
          </h4>
          <pre className="text-wrap mt-7.5">{reviewData.content}</pre>
        </div>
      </section>
    </RootLayout>
  );
};

export default ReviewScreen;
