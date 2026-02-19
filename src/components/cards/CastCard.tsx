import type { CastType } from '@utils/types';

const CastCard = ({ data }: { data: CastType }) => {
  return (
    <div className="min-w-34.5 w-34.5 overflow-hidden rounded-lg shadow-card" key={data.id}>
      <div className="h-43.75 bg-card bg-[url('/person.svg')] bg-size-[5rem] bg-center bg-no-repeat">
        <img
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face${data.profile_path}`}
          className="w-full h-full"
          alt={data.name}
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
