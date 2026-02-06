import BoxWithDivider from "@/components/BoxWithDivider"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import { sortOptions } from "@/constants"
import countries from "@constants/countries.json"
import React, { useState } from "react"

const FilterSection = () => {
  const [sort, setSort] = useState(sortOptions[0])
  const [country, setCountry] = useState(countries[101])

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
            list={countries}
            search
          />
        </BoxWithDivider>
      </CollapsibleCard>
    </div>
  )
}

export default FilterSection
