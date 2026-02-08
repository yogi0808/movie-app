import BoxWithDivider from "@/components/BoxWithDivider"
import Chip from "@/components/Chip"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import DummyOptions from "@/components/filters/DummyOptions"
import { certifications, includeAdultOptions } from "@/constants"
import { useFilterContext } from "@/contexts/FilterContext"
import languages from "@constants/languages.json"

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
  } = useFilterContext()

  return (
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
      <BoxWithDivider>
        <h3 className="mb-2.5 font-light">Keywords</h3>
        <input
          name="keyword"
          className="input"
          type="text"
          placeholder="Filter by keywords..."
        />
      </BoxWithDivider>
    </CollapsibleCard>
  )
}

export default Filters
