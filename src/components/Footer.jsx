import { FooterLinks } from "../constants"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="px-8 py-12 pb-20 text-white bg-primary flex gap-10 flex-wrap justify-center items-end">
      <div className="flex flex-col gap-12">
        <div className="w-32.5">
          <Logo xl />
        </div>
        <button className="bg-white px-4 py-3 font-bold rounded text-[#01b4e4]">
          Hi Yogesh!
        </button>
      </div>
      <div className="flex gap-10 flex-wrap">
        {FooterLinks.map((link) => (
          <div
            key={link.id}
            className="flex flex-col"
          >
            <h2 className="uppercase font-extrabold mb-2">{link.title}</h2>
            {link.links.map((link) => (
              <a
                key={link.id}
                className="hover:underline font-semibold transition-colors ease-out duration-300"
                href={link.link}
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
