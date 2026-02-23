import { emojiList } from '@constants/index';

/**
 * displays the emojis for reacting the movie and scales emoji on hover
 *
 * @returns - jsx for the emoji reaction
 */
const Emoji = () => {
  return (
    <div className="ml-4 flex items-center justify-between">
      {emojiList.map((item: string, idx: number) => (
        <div
          key={idx}
          style={{
            transform: `translateX(-${12 * idx}px)`,
          }}
          className="w-9 h-9 bg-emoji-ring rounded-full hover:z-2 hover:scale-120 duration-150 ease-linear cursor-pointer"
        >
          <img src={item} className="w-full h-full p-1" alt="emoji" />
        </div>
      ))}
    </div>
  );
};

export default Emoji;
