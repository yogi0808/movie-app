import BoxWithDivider from "@/components/BoxWithDivider"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import DummyOptions from "@/components/filters/DummyOptions"
import ProviderCard from "@/components/filters/ProviderCard"
import { sortOptions } from "@/constants"
import { useFilterContext } from "@/contexts/FilterContext"
import countries from "@constants/countries.json"
import React from "react"

const FilterSection = () => {
  const {
    providers,
    selectedSortBy,
    selectSortBy,
    selectedCountry,
    selectCountry,
  } = useFilterContext()

  return (
    <div className="md:w-65 flex flex-col gap-3">
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
      <CollapsibleCard
        title="Where To Watch"
        count={providers.length}
      >
        <BoxWithDivider className="flex flex-col gap-2">
          <DropDown
            label="Country"
            selected={selectedCountry}
            handleSelect={selectCountry}
            list={countries}
            valueKey="value"
            optionKey="option"
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
      <CollapsibleCard
        title="Filters"
        open
      >
        <DummyOptions />
      </CollapsibleCard>
    </div>
  )
}

export default FilterSection
