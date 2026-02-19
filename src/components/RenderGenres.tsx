import type { GenreType } from '@utils/types';

/**
 * renders the list of the genres and adds hover effect on each genres
 *
 * @param {array} genres - list of the genres
 * @returns - jsx for the genres component
 */
const RenderGenres = ({ genres }: { genres: GenreType[] }) => {
  return (
    <span className="list-dot">
      {genres.map((item, idx) => {
        if (idx === genres.length - 1) {
          return (
            <>
              <p key={item.id} className="inline hover:text-white/70 hover-underline">
                {item.name}
              </p>
            </>
          );
        } else if (idx === genres.length - 2) {
          return (
            <>
              <p key={item.id} className="inline hover:text-white/70 hover-underline">
                {item.name}
              </p>
              , and{' '}
            </>
          );
        }
        return (
          <>
            <p key={item.id} className="inline hover:text-white/70 hover-underline">
              {item.name}
            </p>
            ,{' '}
          </>
        );
      })}
    </span>
  );
};

export default RenderGenres;
