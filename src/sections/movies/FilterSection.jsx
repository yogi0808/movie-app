import React from "react"
import SortBy from "./SortBy"
import WhereToWatch from "./WhereToWatch"
import Filters from "./Filters"

const FilterSection = () => {
  return (
    <div className="md:min-w-65 w-full flex flex-col gap-3">
      <SortBy />
      <WhereToWatch />
      <Filters />
    </div>
  )
}

export default FilterSection
