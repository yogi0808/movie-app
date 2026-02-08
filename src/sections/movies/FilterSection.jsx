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
import SortBy from "./SortBy"
import WhereToWatch from "./WhereToWatch"
import Filters from "./Filters"

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
      <SortBy />
      <WhereToWatch />
      <Filters />
    </div>
  )
}

export default FilterSection
