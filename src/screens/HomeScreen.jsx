import Hero from "@/sections/home/Hero"
import RootLayout from "@layouts/RootLayout"
import SearchBar from "@components/header/SearchBar"
import PopularSection from "@/sections/home/PopularSection"
import TrendingSection from "@/sections/home/TrendingSection"
import FreeToWatchSection from "@/sections/home/FreeToWatchSection"

/**
 * uses the root layout for home screen. this screen shown in the root route("/").
 *
 * @returns - jsx for home screen
 */
const HomeScreen = () => {
  return (
    <RootLayout>
      <SearchBar />
      <Hero />
      <TrendingSection />
      <PopularSection />
      <FreeToWatchSection />
    </RootLayout>
  )
}

export default HomeScreen
