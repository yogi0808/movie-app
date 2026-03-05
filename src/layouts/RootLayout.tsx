import type { PropsWithChildren } from 'react';

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

/**
 * this layout is used with header and footer all the content goes between header and footer displays header in top and footer in bottom.
 *
 * @param {object} param0
 *  @param {element} children - all the content in between header and footer
 * @returns - jsx for root layout
 */
const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-white relative z-1 flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default RootLayout;
