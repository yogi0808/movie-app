import { FooterLinks } from "@constants/index";
import Logo from "../Logo";

/**
 * footer component with list links.
 *
 * @returns - jsx for footer
 */
const Footer = () => {
  return (
    <footer className="text-white flex items-center flex-col bg-primary">
      <div className="py-20 flex gap-10 flex-wrap">
        <div className="relative -top-9">
          <div className="w-32.5 h-23.5 absolute top-0 right-0">
            <Logo xl />
          </div>
          <a className="text-highlight bg-white wrap-break-word max-w-65 line-clamp-2 text-lg font-bold border-2 border-white rounded-sm px-4 py-2 relative top-35">
            Hi yogi0808!
          </a>
        </div>
        {FooterLinks.map((link) => (
          <div key={link.id}>
            <h3 className="text-xl font-bold uppercase leading-7">
              {link.title}
            </h3>
            <ul className="flex flex-col">
              {link.links.map((link) => (
                <li
                  key={link.id}
                  className=" text-sm max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white"
                >
                  <a
                    className="text-lg leading-6 hover:underline transition-all duration-300 ease-out"
                    href={link.link}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <section className="text-xs text-white opacity-10">
        Build 722ea34 (9678)
      </section>
    </footer>
  );
};

export default Footer;
