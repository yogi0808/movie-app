import BoxWithDivider from "@/components/BoxWithDivider"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import ProviderCard from "@/components/filters/ProviderCard"
import { adultContent, sortOptions } from "@/constants"
import { useFilterContext } from "@/contexts/FilterContext"
import countries from "@constants/countries.json"
import React from "react"

const FilterSection = () => {
  const {
    country,
    providers,
    includeAdult,
    setIncludeAdult,
    selectCountry,
    sortBy,
    setSortBy,
  } = useFilterContext()

  return (
    <div className="md:w-65 flex flex-col gap-3">
      <CollapsibleCard title="Sort">
        <BoxWithDivider>
          <DropDown
            label="Sort Results By"
            selected={sortBy}
            handleSelect={setSortBy}
            list={sortOptions}
          />
        </BoxWithDivider>
      </CollapsibleCard>
      <CollapsibleCard title="Where To Watch">
        <BoxWithDivider className="flex flex-col gap-2">
          <DropDown
            label="Country"
            selected={country}
            handleSelect={selectCountry}
            list={countries}
            search
          />
          <div className="flex flex-wrap gap-x-1.5 gap-y-2.5">
            {providers.map((item) => (
              <ProviderCard
                provider={item}
                key={item.provider_id}
              />
            ))}
          </div>
        </BoxWithDivider>
      </CollapsibleCard>
    </div>
  )
}

export default FilterSection
