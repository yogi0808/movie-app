import { contributors } from '@constants/index';

const DummyContentScore = () => {
  return (
    <div className="border-t border-search-border pt-7.5">
      <p className="font-semibold text-lg">Content score</p>
      <div className="flex flex-col rounded-lg overflow-hidden">
        <div className="bg-black text-white font-semibold py-1 px-3">100</div>
        <div className="bg-keyword-bg text-sm px-3 py-1">Yes! Looking good!</div>
      </div>
      <p className="font-semibold text-lg mt-7.5 mb-2.5">Top Contributors</p>
      <div className="flex flex-col gap-5">
        {contributors.map((item) => (
          <div key={item.id} className="flex gap-2.5">
            <div className="aspect-square w-11.25 h-11.25 hover-underline bg-amber-600 text-white font-semibold text-xl rounded-full flex justify-center items-center">
              {item.name.slice(0, 1)}
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-semibold">{item.contribution}</p>
              <p className="font-light underline underline-offset-3 decoration-underline cursor-pointer">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="font-light underline underline-offset-3 decoration-underline cursor-pointer mt-5 hover:text-black/60">
        View Edit History
      </p>
    </div>
  );
};

export default DummyContentScore;
