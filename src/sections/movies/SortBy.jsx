import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import { sortOptions } from "@/constants"
import { useFilterContext } from "@/contexts/FilterContext"
import React from "react"

/**
 * displays the sort options in the filter section
 *
 * @returns - jsx for the sort options
 */
const SortBy = () => {
  const { selectedSortBy, selectSortBy } = useFilterContext() // getting the selected sort options and the function to select the sor options form the filter context

  return (
    <CollapsibleCard title="Sort">
      <div className="divider-box">
        <DropDown
          label="Sort Results By"
          selected={selectedSortBy}
          handleSelect={selectSortBy}
          list={sortOptions}
          valueKey="value"
          optionKey="option"
        />
      </div>
    </CollapsibleCard>
  )
}

export default SortBy
