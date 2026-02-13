import type { LogoProps } from '@utils/types';

/**
 * logo component it returns the logo based on user choice like small of big by default the logo is small if user specifies the size with xl it returns the logo based ont that.
 *
 * @param {object} param0
 *  @param {boolean} xl - for logo default is false and decides the logo type
 * @returns - return image with logo
 */
const Logo = ({ xl = false }: LogoProps) => {
  if (xl) {
    return <img src="/tmdb-logo-big.svg" />;
  }

  return <img src="/tmdb-logo-small.svg" />;
};

export default Logo;
