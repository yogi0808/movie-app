import SearchBar from "@components/header/SearchBar";
import Hero from "@sections/Hero";
import RootLayout from "@layouts/RootLayout";
import TrendingSection from "@sections/TrendingSection";
import PopularSection from "@sections/PopularSection";
import FreeToWatchSection from "@sections/FreeToWatchSection";

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
  );
};

export default HomeScreen;
