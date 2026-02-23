import type { SeasonType } from '@utils/types';
import { formateDate } from '@utils/utils';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

/**
 * displays the last season data like season number, rating, overview etc...
 *
 * @param {object} data - data about last season
 * @returns - jsx for the season component
 */
const Season = ({ data }: { data: SeasonType | null }) => {
  if (!data) return; // just for safety

  const imgUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}w260_and_h390_face${data.poster_path}`;

  return (
    <section className="flex flex-col w-full border-b border-search-border py-7.5">
      <h3 className="text-2xl font-semibold mb-2">Current Season</h3>
      <div className="border border-search-border shadow-card rounded-lg flex overflow-hidden">
        <div className="min-w-32.5 w-32.5 border-r border-search-border cursor-pointer">
          <img src={imgUrl} alt={data.name} />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div>
            <h2 className="text-xl font-bold hover-underline hover:text-black/60">
              Season {data.season_number}
            </h2>
            <div className="flex gap-2">
              <div className="flex items-center justify-center gap-1 rounded bg-primary text-white px-1.5">
                <IoIosStar className="text-xs" />
                <p className="font-bold">
                  {Math.round((data.vote_average / 10) * 100)}
                  <span className="text-xs">%</span>
                </p>
              </div>
              <p>
                {data.air_date.split('-')[0]} <span>•</span> {data.episode_count} Episodes
              </p>
            </div>
          </div>
          <p>{data.overview}</p>
          <p className="flex gap-1 items-center">
            <FaRegCalendarAlt className="text-sm" />
            (8x8, {formateDate(data.air_date)})
          </p>
        </div>
      </div>
      <p className="text-lg underline underline-offset-3 mt-5 decoration-underline decoration-2 font-semibold">
        View All Seasons
      </p>
    </section>
  );
};

export default Season;
