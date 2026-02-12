import Chip from "@/components/Chip"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import DummyOptions from "@/components/filters/DummyOptions"
import KeywordSearch from "@/components/filters/KeywordSearch"
import ReleaseDates from "@/components/filters/ReleaseDates"
import Sliders from "@/components/filters/Sliders"
import { certifications, includeAdultOptions } from "@/constants"
import { useFilterContext } from "@/contexts/FilterContext"
import languages from "@constants/languages.json"

/**
 * displays the all filter option in filter section
 *
 * @returns - jsx for the filters
 */
const Filters = () => {
  const {
    genres,
    selectedGenres,
    selectGenre,
    selectCertification,
    selectedCertifications,
    selectedAdultOpt,
    selectAdultOpt,
    selectedLanguage,
    selectLanguage,
  } = useFilterContext() // getting all the selected value for filters from the filter context

  return (
    <CollapsibleCard
      title="Filters"
      open
    >
      <DummyOptions />
      <ReleaseDates />
      <div className="divider-box">
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
      </div>
      <div className="divider-box">
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
      </div>
      <div className="divider-box">
        <DropDown
          label="Adult Content"
          selected={selectedAdultOpt}
          handleSelect={selectAdultOpt}
          list={includeAdultOptions}
          valueKey="value"
          optionKey="option"
        />
      </div>
      <div className="divider-box">
        <DropDown
          label="Language"
          selected={selectedLanguage}
          handleSelect={selectLanguage}
          list={languages}
          valueKey="value"
          optionKey="option"
          search
        />
      </div>
      <Sliders />
      <KeywordSearch />
    </CollapsibleCard>
  )
}

export default Filters
