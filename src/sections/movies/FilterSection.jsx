import BoxWithDivider from "@/components/BoxWithDivider"
import Chip from "@/components/Chip"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import DummyOptions from "@/components/filters/DummyOptions"
import ProviderCard from "@/components/filters/ProviderCard"
import { certifications, includeAdultOptions, sortOptions } from "@/constants"
import { useFilterContext } from "@/contexts/FilterContext"
import countries from "@constants/countries.json"
import languages from "@constants/languages.json"
import React from "react"

const FilterSection = () => {
  const {
    providers,
    selectedSortBy,
    selectSortBy,
    selectedCountry,
    selectCountry,
    selectedLanguage,
    selectLanguage,
    selectedAdultOpt,
    selectAdultOpt,
    genres,
    selectedGenres,
    selectGenre,
    selectedCertifications,
    selectCertification,
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
        <BoxWithDivider>
          <h3 className="mb-2.5 font-light">Genres</h3>
          <div className="flex gap-y-2 gap-x-1.5 flex-wrap">
            {genres.map((item) => (
              <Chip
                data={{ value: item.id, option: item.name }}
                isSelected={selectedGenres.includes(item.id)}
                handleSelect={() => selectGenre(item.id)}
                key={item.id}
              />
            ))}
          </div>
        </BoxWithDivider>
        <BoxWithDivider>
          <h3 className="mb-2.5 font-light">Certification</h3>
          <div className="flex gap-y-2 gap-x-1.5 flex-wrap">
            {certifications.map((item) => (
              <Chip
                data={{ value: item, option: item }}
                isSelected={selectedCertifications.includes(item)}
                handleSelect={() => selectCertification(item)}
                key={item}
              />
            ))}
          </div>
        </BoxWithDivider>
        <BoxWithDivider>
          <DropDown
            label="Adult Content"
            selected={selectedAdultOpt}
            handleSelect={selectAdultOpt}
            list={includeAdultOptions}
            valueKey="value"
            optionKey="option"
          />
        </BoxWithDivider>
        <BoxWithDivider>
          <DropDown
            label="Language"
            selected={selectedLanguage}
            handleSelect={selectLanguage}
            list={languages}
            valueKey="value"
            optionKey="option"
            search
          />
        </BoxWithDivider>
      </CollapsibleCard>
    </div>
  )
}

export default FilterSection
