import Hero from "../components/Hero"
import RootLayout from "../layouts/RootLayout"
import TrendingSection from "../sections/TrendingSection"

const HomeScreen = () => {
  return (
    <RootLayout>
      <Hero />
      <TrendingSection />
    </RootLayout>
  )
}

export default HomeScreen
