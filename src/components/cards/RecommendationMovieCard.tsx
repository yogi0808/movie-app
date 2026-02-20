import type { MovieType } from '@utils/types';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { formateDateForPicker } from '@utils/utils';
import { IoIosStar, IoMdHeart } from 'react-icons/io';
import { FaBookmark } from 'react-icons/fa6';

const RecommendationMovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <div className="min-w-62.5">
      <div className="relative cursor-pointer rounded-lg overflow-hidden group h-35.25 bg-card bg-[url('/image.svg')] bg-size-[5rem] bg-center bg-no-repeat">
        <img
          src={`https://media.themoviedb.org/t/p/w500_and_h282_face${movie.backdrop_path}`}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.classList.add('hidden');
          }}
          alt={movie.title || movie.name}
        />
        <div className="absolute bottom-0 left-0 right-0 justify-between items-center bg-white/90 p-2.5 hidden group-hover:flex">
          <div className="flex gap-1 items-center">
            <FaRegCalendarAlt />{' '}
            {formateDateForPicker(movie.release_date || movie.first_air_date || '')}
          </div>
          <div className="flex gap-2 items-center">
            <IoIosStar className="text-sm" />
            <IoMdHeart className="text-sm" />
            <FaBookmark className="text-xs" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="pr-5 hover-underline hover:text-black/60">{movie.title || movie.name}</p>
        <p>{Math.round((movie.vote_average / 10) * 100)}%</p>
      </div>
    </div>
  );
};

export default RecommendationMovieCard;
