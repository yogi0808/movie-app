import CollapsibleCard from "@/components/filters/CollapsibleCard"
import RootLayout from "@/layouts/RootLayout"
import React from "react"

const MoviesScreen = () => {
  return (
    <RootLayout>
      <section className="max-w-325 mx-auto px-5 md:px-10 py-4 md:py-7.5">
        <h2 className="font-semibold text-2xl mb-5">Popular Movies</h2>
        <div className="md:w-65">
          <CollapsibleCard>
            <p>Hello</p>
          </CollapsibleCard>
        </div>
        <div></div>
      </section>
    </RootLayout>
  )
}

export default MoviesScreen
