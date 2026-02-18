/**
 * displays the emojis for reacting the movie and scales emoji on hover
 *
 * @returns - jsx for the emoji reaction
 */
const Emoji = () => {
  return (
    <div className="ml-4 flex items-center justify-between">
      <div className="w-9 h-9 bg-emoji-ring rounded-full hover:z-2 hover:scale-120 duration-150 ease-linear cursor-pointer">
        <img src="/emoji1.svg" className="w-full h-full p-1" alt="emoji" />
      </div>
      <div className="w-9 h-9 bg-emoji-ring rounded-full hover:z-2 hover:scale-120 duration-150 ease-linear -translate-x-3 cursor-pointer">
        <img src="/emoji2.svg" className="w-full h-full p-1 translate-x-0" alt="emoji" />
      </div>
      <div className="w-9 h-9 bg-emoji-ring rounded-full hover:z-2 hover:scale-120 duration-150 ease-linear -translate-x-6 cursor-pointer">
        <img src="/emoji3.svg" className="w-full h-full p-1" alt="emoji" />
      </div>
    </div>
  );
};

export default Emoji;
