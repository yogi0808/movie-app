import Chip from '@components/Chip';
import DropDown from '@components/DropDown';
import languages from '@constants/languages.json';
import Sliders from '@components/filters/Sliders';
import { useFilterContext } from '@hooks/useFilterContext';
import DummyOptions from '@components/filters/DummyOptions';
import KeywordSearch from '@components/filters/KeywordSearch';
import { certifications, includeAdultOptions } from '@constants/index';
import CollapsibleCard from '@components/filters/CollapsibleCard';
import ReleaseDates from '@components/filters/datepiker/ReleaseDates';
import type { GenreType, MediaType } from '@utils/types';

/**
 * displays the all filter option in filter section
 *
 * @param {string} type - type of the media
 *
 * @returns - jsx for the filters
 */
const Filters = ({ type }: { type: MediaType }) => {
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
  } = useFilterContext(type); // getting all the selected value for filters from the filter context

  return (
    <CollapsibleCard title="Filters" open>
      <DummyOptions />
      <ReleaseDates type={type} />
      <div className="divider-box">
        <h3 className="mb-2.5 font-light">Genres</h3>
        <div className="flex gap-y-2 gap-x-1.5 flex-wrap">
          {genres.map((item: GenreType) => (
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
      <Sliders type={type} />
      <KeywordSearch />
    </CollapsibleCard>
  );
};

export default Filters;
