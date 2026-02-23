import type { HeroPropType } from '@utils/types';
import HeroDetails from '@components/HeroDetails';
import { AiOutlineFullscreen } from 'react-icons/ai';

/**
 * displays the hero section in details page with banner and movie information
 *
 * @param {object} data - data about the single movie
 * @returns - jsx for the details hero page
 */
const Hero = ({ data }: { data: HeroPropType }) => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-position text-white"
      style={{
        backgroundImage: `url('${import.meta.env.VITE_IMAGE_BASE_URL}w1920_and_h800_multi_faces${data.backdrop_path}')`,
      }}
    >
      <div className="bg-gradient4">
        <div className="px-10 py-7.5 max-w-325 mx-auto flex max-md:flex-col">
          <div className="lg:min-w-75 lg:w-75 overflow-hidden rounded-lg relative group">
            <img
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}w600_and_h900_face${data.poster_path}`}
              className="w-full"
              alt={data.title}
            />
            <div className="inset-0 absolute backdrop-blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-150 ease-linear bg-black/70 flex gap-1 justify-center items-center cursor-pointer">
              <AiOutlineFullscreen className="text-2xl" />
              <p className="underline underline-offset-3 decoration-underline text-white/60 text-2xl">
                Expand
              </p>
            </div>
          </div>
          <HeroDetails data={data} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
