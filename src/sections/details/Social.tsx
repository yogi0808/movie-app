import type { ReviewType } from '@utils/types';
import { apiFetch, ellipseByWordCount, formateDate } from '@utils/utils';
import { useEffect, useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-router';

/**
 * displays the review of the movie
 *
 * @param {string} idEndpoint - endpoint with id to fetch data related movie
 * @returns - jsx for the reviews
 */
const Social = ({ idEndpoint }: { idEndpoint: string }) => {
  const [review, setReview] = useState<ReviewType>(); // review data
  const [reviewCount, setReviewCount] = useState<number>(0); // tracking the count of the all review
  const { isOverflowing, ellipseContent } = ellipseByWordCount(review?.content || '', 100); // util function to calculate overflow

  useEffect(() => {
    /**
     * fetches the reviews related to movie on load
     */
    const fetchData = async () => {
      const data = await apiFetch(`${idEndpoint}/reviews`);
      setReviewCount(data.total_results);
      setReview(data.results[0]);
    };

    fetchData();
  }, [idEndpoint]);

  return (
    <section className="w-full border-b border-search-border py-7.5">
      <div className="flex gap-12.5 mb-5">
        <h3 className="text-2xl font-semibold mb-2">Social</h3>
        <div className="flex gap-6 font-semibold text-lg h-fit">
          <h4 className="border-b-4 hover-underline pb-1">
            Reviews <span className="text-black/60">{reviewCount}</span>
          </h4>
          <h4 className="hover-underline pb-1">Discussions</h4>
        </div>
      </div>
      {!review ? (
        <div>
          We don&apos;t have any reviews for Hellfire. Would you like to{' '}
          <span className="underline underline-offset-3 decoration-underline hover:text-black/60 cursor-pointer">
            write one
          </span>
          ?
        </div>
      ) : (
        <div>
          <div className="border border-search-border shadow-card rounded-lg p-5">
            <div className="flex gap-4">
              <div className="aspect-square bg-black/10 flex justify-center items-center rounded-full w-11.25">
                <IoPerson className="text-3xl text-black/50" />
              </div>
              <div>
                <h2 className="text-xl font-bold underline decoration-underline underline-offset-3">
                  A review by {review.author}
                </h2>
                <div>
                  <p className="text-sm font-light">
                    Written by{' '}
                    <span className="hover-underline font-semibold">{review.author}</span> on{' '}
                    {formateDate(review.created_at)}
                  </p>
                </div>
              </div>
            </div>
            <pre className="mt-5 w-full text-wrap">
              {ellipseContent}
              {isOverflowing ? (
                <Link
                  to={review.url}
                  className="underline underline-offset-3 decoration-underline hover:text-black/60 cursor-pointer"
                >
                  read the rest
                </Link>
              ) : (
                ''
              )}
            </pre>
          </div>
          <p className="text-lg underline underline-offset-3 mt-5 decoration-underline decoration-2 font-semibold">
            Read All Reviews
          </p>
        </div>
      )}
    </section>
  );
};

export default Social;
