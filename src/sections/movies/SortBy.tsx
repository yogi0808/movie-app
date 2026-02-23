import { sortOptions } from '@constants/index';
import DropDown from '@components/DropDown';
import { useFilterContext } from '@hooks/useFilterContext';
import CollapsibleCard from '@components/filters/CollapsibleCard';
import type { MediaType } from '@utils/types';

/**
 * displays the sort options in the filter section
 *
 * @param {string} type - type of the media
 *
 * @returns - jsx for the sort options
 */
const SortBy = ({ type }: { type: MediaType }) => {
  const { selectedSortBy, selectSortBy } = useFilterContext(type); // getting the selected sort options and the function to select the sor options form the filter context

  return (
    <CollapsibleCard title="Sort">
      <div className="divider-box">
        <DropDown
          label="Sort Results By"
          selected={selectedSortBy}
          handleSelect={selectSortBy}
          list={sortOptions}
          valueKey="value"
          optionKey="option"
        />
      </div>
    </CollapsibleCard>
  );
};

export default SortBy;
