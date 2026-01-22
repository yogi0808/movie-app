import Header from "../components/header/Header"
import Footer from "../components/Footer"

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
