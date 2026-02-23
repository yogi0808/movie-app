import DropDown from '@components/DropDown';
import type { MediaType, ProviderType } from '@utils/types';
import countries from '@constants/countries.json';
import { useFilterContext } from '@hooks/useFilterContext';
import ProviderCard from '@components/filters/ProviderCard';
import CollapsibleCard from '@components/filters/CollapsibleCard';

/**
 * displays the where to watch options like all providers and country dorp down
 *
 * @param {string} type - type of the media
 *
 * @returns - jsx for the where to watch
 */
const WhereToWatch = ({ type }: { type: MediaType }) => {
  const { selectedCountry, selectCountry, providers } = useFilterContext(type); // getting the selected country, providers list and function to select the country

  return (
    <CollapsibleCard title="Where To Watch" count={providers.length}>
      <div className="divider-box flex flex-col gap-2">
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
          {providers.map((item: ProviderType) => (
            <ProviderCard type={type} provider={item} key={item.provider_id} />
          ))}
        </div>
      </div>
    </CollapsibleCard>
  );
};

export default WhereToWatch;
