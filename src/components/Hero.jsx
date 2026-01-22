import { MdArrowRightAlt } from "react-icons/md"
import GradientText from "./GradientText"

const Hero = () => {
  return (
    <section>
      <div className="w-full bg-[url('/hero-banner.jpg')] max-w-325 mx-auto bg-no-repeat bg-cover h-112.5 bg-center text-white">
        <div className="bg-black/70 w-full h-full flex justify-center flex-col gap-5 px-10">
          <GradientText gradient="bg-gradient">
            <h1 className="font-bold text-6xl text-transparent">
              That's a<br />
              Wrap 2025
            </h1>
          </GradientText>
          <p className="font-semibold text-lg">
            The best (and worst) of the year from TMDB.
          </p>
          <button className="flex hover:bg-gradient font-bold transition-all ease-out duration-300 w-fit border-2 rounded-full px-5 py-1 justify-center items-center gap-2">
            Check it out <MdArrowRightAlt size={25} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
