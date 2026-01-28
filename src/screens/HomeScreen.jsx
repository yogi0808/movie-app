import SearchBar from "../components/header/SearchBar"
import Hero from "../sections/Hero"
import RootLayout from "../layouts/RootLayout"
import TrendingSection from "../sections/TrendingSection"

const HomeScreen = () => {
  return (
    <RootLayout>
      <SearchBar />
      <Hero />
      <TrendingSection />
    </RootLayout>
  )
}

export default HomeScreen
