import classNames from 'classnames';

import { HeaderLinks, mobileHeaderLinks } from '@constants/index';
import MobileNavLink from '@components/header/MobileNavLink';
import type { HeaderLinkType, LinkOptionsType, MobileNavProps } from '@utils/types';

/**
 * this is mobile nav menu for responsiveness it displays the links in columns
 *
 * @param {boolean} isActive - it is for changing the position of the mobile menu based on the active stat
 * @param {Ref} navRaf - it is for referencing the mobile nav window
 *
 * @returns - jsx for the mobile nav menu
 */
const MobileNav = ({ isActive, navRef }: MobileNavProps) => {
  // creating the class names string based on the conditional classes
  const wrapperClassNames = classNames(
    'w-4/5 p-5 fixed flex flex-col gap-2.5 top-16 text-white bg-m-nav/90 lg:hidden backdrop-blur-xl h-full z-99 transition-all duration-200 ease-linear -left-full',
    {
      'left-0!': isActive,
    },
  );

  return (
    <div ref={navRef} className={wrapperClassNames}>
      {HeaderLinks.map((link: HeaderLinkType) => (
        <MobileNavLink link={link} key={link.id} />
      ))}
      <div className="mt-2.5 text-white/60 font-semibold gap-2.5 leading-6 flex flex-col">
        {mobileHeaderLinks.map((link: LinkOptionsType) => (
          <a key={link.id} href={link.link}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
