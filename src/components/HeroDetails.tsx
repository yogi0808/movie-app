import type { HeroPropType } from '@utils/types';
import RenderGenres from './RenderGenres';
import { formatRuntime } from '@utils/utils';
import RatingIndicator from './cards/RatingIndicator';
import Emoji from './Emoji';
import { FaCircleInfo, FaPlay } from 'react-icons/fa6';
import ButtonWithTooltip from './ButtonWithTooltip';
import { detailHeroBtns } from '@constants/index';

/**
 * displays the hero section's details with movie information
 *
 * @param {object} data - data about the single movie
 * @returns - jsx for the details hero
 */
const HeroDetails = ({ data }: { data: HeroPropType }) => {
  return (
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
          <span className="underline underline-offset-2 decoration-2 decoration-accent">Vibe</span>
          ? <FaCircleInfo className="text-xs inline" />
        </button>
      </div>
      <div className="flex gap-5 mt-3">
        {detailHeroBtns.map((item) => (
          <ButtonWithTooltip key={item.id} tooltipText={item.toolTip}>
            {item.icon}
          </ButtonWithTooltip>
        ))}
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
  );
};

export default HeroDetails;
