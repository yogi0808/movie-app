import type { CastType } from '@utils/types';

/**
 * displays the image, name and rol of the cast for this movie
 *
 * @param {object} data - data about the single cast
 * @returns
 */
const CastCard = ({ data }: { data: CastType }) => {
  return (
    <div className="min-w-34.5 w-34.5 overflow-hidden rounded-lg shadow-card" key={data.id}>
      <div className="h-43.75 bg-card bg-[url('/person.svg')] bg-size-[5rem] bg-center bg-no-repeat">
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}w276_and_h350_face${data.profile_path}`}
          className="w-full h-full"
          alt={data.name}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.classList.add('hidden');
          }}
        />
      </div>
      <div className="p-2.5">
        <p className="font-bold hover-underline hover:opacity-70 hover:text-black/50">
          {data.name}
        </p>
        <p>{data.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
