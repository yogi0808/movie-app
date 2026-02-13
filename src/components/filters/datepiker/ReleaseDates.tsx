import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { IoMdCalendar } from 'react-icons/io';

import { releaseDateSearch } from '@constants/index';
import '@components/filters/datepiker/datepiker.css';
import { useFilterContext } from '@hooks/useFilterContext';

/**
 * displays teh inputs for date and checkboxes for the search input and dates for the from and to
 *
 * @returns - jsx for the release dates
 */
const ReleaseDates = () => {
  const [searchAll, setSearchAll] = useState<boolean>(true); // for tracking the all search checkbox to sow search option based on selected state
  const { releaseDates, selectReleaseDate } = useFilterContext(); // getting selected release dates(object with from and to dates) and select release date(function to select the date) from filter context

  return (
    <div className="divider-box">
      <h3 className="mb-2.5 font-light">Release Dates</h3>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => setSearchAll((prev) => !prev)}
            checked={searchAll}
          />
          <span>Search all Releases?</span>
        </label>
        {!searchAll ? (
          <div>
            {releaseDateSearch.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox" defaultChecked />
                <span>{item}</span>
              </label>
            ))}
          </div>
        ) : (
          ''
        )}
        <div className="flex justify-between items-center">
          <p className="text-gray-400">from</p>

          <label className="border border-date-picker flex justify-between rounded-lg overflow-hidden">
            <DatePicker
              className="outline-none inline-block py-1.5 pl-3 md:max-w-30"
              selected={releaseDates.from}
              dateFormat="dd/MM/YYYY"
              onChange={(date: Date | null) => selectReleaseDate('from', date)}
            />
            <span className="bg-date-picker p-1.5 flex justify-center items-center">
              <IoMdCalendar className="text-xl text-black/70" />
            </span>
          </label>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">to</p>

          <label className="border border-date-picker flex justify-between rounded-lg overflow-hidden">
            <DatePicker
              className="outline-none inline-block py-1.5 pl-3 md:max-w-30"
              selected={releaseDates.to}
              dateFormat="dd/MM/YYYY"
              onChange={(date: Date | null) => selectReleaseDate('to', date)}
            />
            <span className="bg-date-picker p-1.5 flex justify-center items-center">
              <IoMdCalendar className="text-xl text-black/70" />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ReleaseDates;
