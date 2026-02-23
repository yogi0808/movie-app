import { mediaTab } from '@constants/index';
import type { MediaImageType } from '@utils/types';
import { apiFetch } from '@utils/utils';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

// type for the count tracking
interface CountType {
  backdrops: number;
  posters: number;
}

/**
 * fetches and displays the movie media (posters, backdrops)
 *
 * @param {string} idEndpoint - endpoint for fetching the more details about the movie like images
 * @returns - jsx for the media component
 */
const Media = ({ idEndpoint }: { idEndpoint: string }) => {
  const [activeTab, setActiveTab] = useState<number>(0); // tracks selected tab
  const [posters, setPosters] = useState<MediaImageType[]>([]); // list of the posters
  const [backdrops, setBackdrops] = useState<MediaImageType[]>([]); // list of the backdrops
  const [count, setCount] = useState<CountType>({
    posters: 0,
    backdrops: 0,
  }); // tracks the count of the backdrop and poster

  useEffect(() => {
    /**
     * fetches the media data for single movie on load
     */
    const fetchData = async () => {
      const data = await apiFetch(`${idEndpoint}/images`);
      setCount({
        posters: data.posters.length,
        backdrops: data.backdrops.length,
      });
      setBackdrops(data.backdrops.slice(0, 6));
      setPosters(data.posters.slice(0, 6));
    };

    fetchData();
  }, [idEndpoint]);

  return (
    <section className="w-full border-b border-search-border py-7.5">
      <div className="flex gap-12.5 mb-5">
        <h3 className="text-2xl font-semibold mb-2">Media</h3>
        <div className="flex gap-6 font-semibold text-lg h-fit">
          {mediaTab.map((item, idx) => {
            const tabClassNames = classNames('hover-underline capitalize pb-1', {
              'border-b-4': activeTab === idx,
            });
            return (
              <h4 key={idx} className={tabClassNames} onClick={() => setActiveTab(idx)}>
                {item} <span className="text-black/60">{count[item]}</span>
              </h4>
            );
          })}
        </div>
      </div>
      <div className="relative rounded-t-lg overflow-hidden">
        <div className="flex overflow-x-scroll overflow-y-hidden pb-5 relative max-h-75">
          {activeTab === 1
            ? posters.map((item, idx) => (
                <img
                  key={idx}
                  className="h-75"
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}w440_and_h660_face${item.file_path}`}
                  alt={item.file_path}
                />
              ))
            : backdrops.map((item, idx) => (
                <img
                  key={idx}
                  className="h-75"
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}w1066_and_h600_face${item.file_path}`}
                  alt={item.file_path}
                />
              ))}
          {(activeTab === 1 && count.backdrops < 6) || (activeTab !== 1 && count.posters < 6) ? (
            ''
          ) : (
            <div className="min-w-35 w-35 flex justify-center items-center">
              <p className="font-bold hover-underline hover:text-black/50 hover:opacity-50 flex gap-2 items-center">
                View More <MdArrowRightAlt />
              </p>
            </div>
          )}
        </div>
        <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
      </div>
    </section>
  );
};

export default Media;
