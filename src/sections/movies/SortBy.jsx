import BoxWithDivider from "@/components/BoxWithDivider"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import { sortOptions } from "@/constants"
import { useFilterContext } from "@/contexts/FilterContext"
import React from "react"

const SortBy = () => {
  const { selectedSortBy, selectSortBy } = useFilterContext()

  return (
    <CollapsibleCard title="Sort">
      <BoxWithDivider>
        <DropDown
          label="Sort Results By"
          selected={selectedSortBy}
          handleSelect={selectSortBy}
          list={sortOptions}
          valueKey="value"
          optionKey="option"
        />
      </BoxWithDivider>
    </CollapsibleCard>
  )
}

export default SortBy
