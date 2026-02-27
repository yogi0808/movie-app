import type { GenreType } from '@utils/types';
import { getGenrePrefix } from '@utils/utils';

/**
 * renders the list of the genres and adds hover effect on each genres
 *
 * @param {array} genres - list of the genres
 * @returns - jsx for the genres component
 */
const RenderGenres = ({ genres }: { genres: GenreType[] }) => {
  return (
    <span className="list-dot">
      {genres.map((item, idx) => (
        <>
          <p key={item.id} className="inline hover:text-white/70 hover-underline">
            {item.name}
          </p>
          {getGenrePrefix(idx, genres.length)}
        </>
      ))}
    </span>
  );
};

export default RenderGenres;
