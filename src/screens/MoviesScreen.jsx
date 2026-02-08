import FilterContextProvider from "@/contexts/FilterContext"
import RootLayout from "@/layouts/RootLayout"
import FilterSection from "@/sections/movies/FilterSection"
import React from "react"

const MoviesScreen = () => {
  return (
    <FilterContextProvider>
      <RootLayout>
        <section className="max-w-350 mx-auto px-5 md:px-10 py-4 md:py-7.5">
          <h2 className="font-semibold text-2xl mb-5">Popular Movies</h2>
          <FilterSection />
          <div></div>
        </section>
      </RootLayout>
    </FilterContextProvider>
  )
}

export default MoviesScreen
