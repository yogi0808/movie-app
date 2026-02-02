import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

/**
 * this layout is used with header and footer all the content goes between header and footer displays header in top and footer in bottom.
 *
 * @param {object} param0
 *  @param {element} children - all the content in between header and footer
 * @returns - jsx for root layout
 */
const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
