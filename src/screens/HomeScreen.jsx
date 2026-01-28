import SearchBar from "../components/header/SearchBar"
import Hero from "../sections/Hero"
import RootLayout from "../layouts/RootLayout"
import TrendingSection from "../sections/TrendingSection"
import PopularSection from "../sections/PopularSection"

const HomeScreen = () => {
  return (
    <RootLayout>
      <SearchBar />
      <Hero />
      <TrendingSection />
      <PopularSection />
    </RootLayout>
  )
}

export default HomeScreen
