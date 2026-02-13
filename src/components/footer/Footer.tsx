import Logo from '@components/Logo';
import { FooterLinks } from '@constants/index';
import type { FooterLinkItemType, FooterLinkType } from '@utils/types';

/**
 * footer component with list links.
 *
 * @returns - jsx for footer
 */
const Footer = () => {
  return (
    <footer className="text-white flex lg:items-center flex-col bg-primary">
      <div className="py-10 lg:py-20 max-lg:px-5 flex gap-10 w-fit flex-wrap max-lg:flex-col">
        <div className="relative lg:-top-9">
          <div className="w-32.5 h-23.5 absolute top-0 right-0 max-lg:hidden">
            <Logo xl />
          </div>
          <a className="text-btn lg:text-highlight bg-white w-fit wrap-break-word max-w-65 line-clamp-2 text-lg font-bold border-2 border-white rounded-sm px-4 py-2 relative lg:top-35">
            Hi yogi0808!
          </a>
        </div>
        {FooterLinks.map((link: FooterLinkItemType) => (
          <div key={link.id}>
            <h3 className="text-xl font-bold uppercase leading-7">{link.title}</h3>
            <ul className="flex flex-col">
              {link.links.map((link: FooterLinkType) => (
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
      <section className="text-xs text-white opacity-10 text-center">Build 722ea34 (9678)</section>
    </footer>
  );
};

export default Footer;
