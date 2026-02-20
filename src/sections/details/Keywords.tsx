import type { KeywordType } from '@utils/types';
import { apiFetch } from '@utils/utils';
import { useEffect, useState } from 'react';

/**
 * fetches and displays the keywords related to movie
 *
 * @param {string} idEndpoint - endpoint to fetch more data related to movie
 * @returns - jsx for the keyword component
 */
const Keywords = ({ idEndpoint }: { idEndpoint: string }) => {
  const [keywords, setKeywords] = useState<KeywordType[]>([]); // list of the keywords
  useEffect(() => {
    /**
     * fetches the data on load for keyword
     */
    const fetchData = async () => {
      const data = await apiFetch(`${idEndpoint}/keywords`);
      setKeywords(data.results || data.keywords);
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
