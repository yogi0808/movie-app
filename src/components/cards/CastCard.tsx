import type { CastType } from '@utils/types';

const CastCard = ({ data }: { data: CastType }) => {
  return (
    <div className="min-w-35 w-35 overflow-hidden rounded-lg shadow-card" key={data.id}>
      <img
        src={`https://media.themoviedb.org/t/p/w276_and_h350_face${data.profile_path}`}
        alt={data.name}
      />
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
