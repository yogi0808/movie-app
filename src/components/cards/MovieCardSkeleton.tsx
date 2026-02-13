import RatingIndicator from '@components/cards/RatingIndicator';

/**
 * movie card component for displaying movie image, title or name, date, and ratting also show the popup menu based on user action like click on more option.
 *
 * @returns - jsx for the single movie skeleton data display
 */
const MovieCardSkeleton = () => {
  return (
    <div className="max-w-37.5 relative flex flex-col content-stretch">
      <div className="w-37.5 aspect-2/3 cursor-pointer bg-card bg-[url('/image.svg')] bg-size-[5rem] bg-center bg-no-repeat rounded-lg relative flex justify-center items-center shadow-card"></div>
      <div className="px-2.5 pt-6.5 relative">
        <RatingIndicator voteAverage={null} className="absolute -top-4.75 left-2.5" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
