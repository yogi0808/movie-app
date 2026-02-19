import CastCard from '@components/cards/CastCard';
import type { CastType } from '@utils/types';
import { apiFetch } from '@utils/utils';
import { useEffect, useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

const CastList = ({ idEndpoint }: { idEndpoint: string }) => {
  const [data, setData] = useState<CastType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(`${idEndpoint}/credits`);
      console.log(data.cast.slice(0, 10));
      setData(data.cast.slice(0, 9));
    };

    fetchData();
  }, [idEndpoint]);

  return (
    <section className="flex flex-col w-full border-b border-search-border py-7.5">
      <h3 className="text-2xl font-semibold mb-2">Top Billed Cast</h3>
      <div className="relative">
        <div className="flex overflow-x-scroll gap-3.5 pb-5 relative">
          {data.map((item) => (
            <CastCard data={item} key={item.id} />
          ))}
          <div className="min-w-35 w-35 flex justify-center items-center">
            <p className="font-bold hover-underline hover:text-black/50 hover:opacity-50 flex gap-2 items-center">
              View More <MdArrowRightAlt />
            </p>
          </div>
        </div>
        <div className="h-full w-15 bg-gradient3 absolute right-0 top-0"></div>
      </div>
      <p className="text-lg underline underline-offset-3 decoration-underline decoration-2 font-semibold">
        Full Cast&Crew
      </p>
    </section>
  );
};

export default CastList;
