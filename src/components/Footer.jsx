import { FooterLinks } from "../constants"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="text-white bg-primary">
      <div className="relative flex gap-10.5 flex-wrap text-sm py-20 max-w-325 mx-auto justify-center leading-[24px]">
        <div className="flex h-fit flex-col relative -top-9">
          <div className="w-32.5 h-23.5 self-end">
            <Logo xl />
          </div>
          <button className="bg-white w-full px-4.5 py-2.5 text-lg font-bold relative top-10 rounded text-highlight">
            Hi yogi0808!
          </button>
        </div>
        {FooterLinks.map((link) => (
          <div
            key={link.id}
            className="flex h-fit flex-col"
          >
            <h2 className="uppercase font-bold text-xl">{link.title}</h2>
            {link.links.map((link) => (
              <a
                key={link.id}
                className="hover:underline text-[17px] font-normal transition-all ease-out duration-300"
                href={link.link}
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
      <section className="text-[11px] text-white opacity-10 text-center">
        Build 722ea34 (9678)
      </section>
    </footer>
  )
}

export default Footer
