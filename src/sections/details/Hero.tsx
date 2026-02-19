import { IoMdHeart } from 'react-icons/io';
import { FaBookmark, FaCircleInfo, FaList, FaPlay } from 'react-icons/fa6';

import Emoji from '@components/Emoji';
import { formatRuntime } from '@utils/utils';
import RenderGenres from '@components/RenderGenres';
import type { HeroPropType } from '@utils/types';
import ButtonWithTooltip from '@components/ButtonWithTooltip';
import RatingIndicator from '@components/cards/RatingIndicator';
import { AiOutlineFullscreen } from 'react-icons/ai';

/**
 * displays the hero section in details page with banner and movie information
 *
 * @param {object} data - data about the single movie
 * @returns - jsx for the details hero page
 */
const Hero = ({ data }: { data: HeroPropType }) => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-position text-white"
      style={{
        backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}')`,
      }}
    >
      <div className="bg-gradient4">
        <div className="px-10 py-7.5 max-w-325 mx-auto flex max-md:flex-col">
          <div className="lg:min-w-75 lg:w-75 overflow-hidden rounded-lg relative group">
            <img
              src={`https://media.themoviedb.org/t/p/w600_and_h900_face${data.poster_path}`}
              className="w-full"
              alt={data.title}
            />
            <div className="inset-0 absolute backdrop-blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-150 ease-linear bg-black/70 flex gap-1 justify-center items-center cursor-pointer">
              <AiOutlineFullscreen className="text-2xl" />
              <p className="underline underline-offset-3 decoration-underline text-white/60 text-2xl">
                Expand
              </p>
            </div>
          </div>
          <div className="max-md:pt-10 md:pl-10 flex justify-center flex-col">
            <div className="mb-6">
              <div className="flex gap-2">
                <h2 className="text-2xl lg:text-4xl font-bold hover:text-white/70 hover-underline">
                  {data.title}
                </h2>
                <span className="text-2xl lg:text-4xl text-white/80">
                  ({data.release_date.split('-')[0]})
                </span>
              </div>
              <div className="flex items-center mt-1 flex-wrap">
                <div className="border border-white/60 text-white/60 px-1 w-fit">U/A 16+</div>
                <p className="ml-1.5">{data.release_date} (IN)</p>
                <RenderGenres genres={data.genres} />
                {data.runtime < 1 ? '' : <p className="list-dot">{formatRuntime(data.runtime)}</p>}
              </div>
            </div>
            <div className="flex items-center flex-wrap max-md:gap-2">
              <RatingIndicator voteAverage={data.vote_average} className="" xl />
              <p className="ml-1 font-bold">
                User <br /> Score
              </p>
              <Emoji />
              <button className="bg-primary rounded-full px-3 py-2 font-bold cursor-pointer hover:scale-110 duration-150 ease-linear">
                What&apos;s your{' '}
                <span className="underline underline-offset-2 decoration-2 decoration-accent">
                  Vibe
                </span>
                ? <FaCircleInfo className="text-xs inline" />
              </button>
            </div>
            <div className="flex gap-5 mt-3">
              <ButtonWithTooltip tooltipText="Add to list">
                <FaList className="text-sm" />
              </ButtonWithTooltip>
              <ButtonWithTooltip tooltipText="Mark as favorite">
                <IoMdHeart className="text-sm" />
              </ButtonWithTooltip>
              <ButtonWithTooltip tooltipText="Add to your watch list">
                <FaBookmark className="text-sm" />
              </ButtonWithTooltip>
              <div className="hover:text-white/70 duration-150 ease-linear hover-underline flex gap-2 items-center">
                <FaPlay />
                <span>Play Trailer</span>
              </div>
            </div>
            <p className="my-5 text-lg text-white/60 font-semibold italic">{data.tagline}</p>
            <div>
              <h3 className="text-xl font-semibold mb-2.5">Overview</h3>
              <p>{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
