import type { KeywordType } from '@utils/types';
import { apiFetch } from '@utils/utils';
import { useEffect, useState } from 'react';

const Keywords = ({ idEndpoint }: { idEndpoint: string }) => {
  const [keywords, setKeywords] = useState<KeywordType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(`${idEndpoint}/keywords`);
      console.log(data);
      setKeywords(data.results);
    };

    fetchData();
  }, [idEndpoint]);
  return (
    <div>
      <p className="font-semibold text-lg">Keywords</p>
      <div className="flex gap-x-1.25 gap-y-2.5 flex-wrap">
        {keywords.map((item) => (
          <div
            className="px-2.5 py-1 border border-search-border bg-keyword-bg rounded-lg text-xs cursor-pointer"
            key={item.id}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
