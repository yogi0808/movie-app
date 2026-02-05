import BoxWithDivider from "@/components/BoxWithDivider"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import RootLayout from "@/layouts/RootLayout"
import React, { useState } from "react"

const MoviesScreen = () => {
  const [sort, setSort] = useState({
    option: "Popularity Descending",
    value: "sort_by=popularity.desc",
  })

  return (
    <RootLayout>
      <section className="max-w-325 mx-auto px-5 md:px-10 py-4 md:py-7.5">
        <h2 className="font-semibold text-2xl mb-5">Popular Movies</h2>
        <div className="md:w-65">
          <CollapsibleCard title="Sort">
            <BoxWithDivider>
              <DropDown
                label="Sort Results By"
                selected={sort}
                handleSelect={setSort}
                list={[
                  {
                    option: "Popularity Descending",
                    value: "sort_by=popularity.desc",
                  },
                  {
                    option: "Popularity Ascending",
                    value: "sort_by=popularity.asc",
                  },
                  {
                    option: "Rating Descending",
                    value: "sort_by=vote_average.desc",
                  },
                  {
                    option: "Rating Ascending",
                    value: "sort_by=vote_average.asc",
                  },
                  {
                    option: "Release Date Descending",
                    value: "sort_by=primary_release_date.desc",
                  },
                  {
                    option: "Release Date Ascending",
                    value: "sort_by=primary_release_date.asc",
                  },
                  { option: "Title (A - Z)", value: "sort_by=title.desc" },
                  { option: "Title (Z - A)", value: "sort_by=title.asc" },
                ]}
              />
            </BoxWithDivider>
          </CollapsibleCard>
        </div>
        <div></div>
      </section>
    </RootLayout>
  )
}

export default MoviesScreen
