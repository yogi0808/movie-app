import { MdArrowRightAlt } from "react-icons/md"

import GradientText from "@components/GradientText"
import Section from "@sections/home/Section"

/**
 * it displays the hero section with big gradient font and a CtA button.
 *
 * @returns - jsx for hero
 */
const Hero = () => {
  return (
    <Section
      className="bg-[url('/hero-banner.jpg')] bg-no-repeat bg-cover h-112.5 bg-center text-white"
      outerSectionClassName="pt-0!"
    >
      <div className="bg-black/50 w-full h-full flex justify-center flex-col px-10">
        <GradientText
          gradient="bg-gradient"
          className="h-30 overflow-hidden"
        >
          <h1 className="font-bold text-6xl text-transparent font-barlow">
            That's a<br />
            Wrap 2025
          </h1>
        </GradientText>
        <div className="mt-2.5">
          <p className="text-xl mb-5 leading-7.5">
            The best (and worst) of the year from TMDB.
          </p>
          <a className="flex hover:bg-gradient items-center gap-1 font-semibold w-fit border-2 rounded-full px-4 py-1">
            Check it out <MdArrowRightAlt size={20} />
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Hero
