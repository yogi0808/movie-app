import BoxWithDivider from "@/components/BoxWithDivider"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import { countriesOptions, sortOptions } from "@/constants"
import React, { useState } from "react"

const FilterSection = () => {
  const [sort, setSort] = useState(sortOptions[0])
  const [country, setCountry] = useState(countriesOptions[101])

  return (
    <div className="md:w-65 flex flex-col gap-3">
      <CollapsibleCard title="Sort">
        <BoxWithDivider>
          <DropDown
            label="Sort Results By"
            selected={sort}
            handleSelect={setSort}
            list={sortOptions}
          />
        </BoxWithDivider>
      </CollapsibleCard>
      <CollapsibleCard title="Where To Watch">
        <BoxWithDivider>
          <DropDown
            label="Country"
            selected={country}
            handleSelect={setCountry}
            list={countriesOptions}
            search
          />
        </BoxWithDivider>
      </CollapsibleCard>
    </div>
  )
}

export default FilterSection
