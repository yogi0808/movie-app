import Tabs from "./Tabs";

/**
 * displays the tabs and the title title in left and the tabs is in the right
 *
 * @param {*} param0
 * @param {object} param0 - with prop data, activeTab, onTabChange
 *  @param {list} data - it is a list of string for tab title
 *  @param {string} title - the title of the section with tabs
 *  @param {number} activeTab - it is an index number of the selected(active) tab
 *  @param {function} onTabChange - it is an function with 1 param index it is responsible for change the index number for selected(active) tab and perform some action based on the the selected(active) tab.
 *
 * @returns - jsx for title and tabs
 */
const TitleWithTabs = ({ data = [], title, activeTab, onTabChange }) => {
  return (
    <div className="flex lg:items-center gap-2 lg:gap-5 px-5 md:px-10 flex-wrap">
      <h2 className="text-2xl font-semibold leading-6">{title}</h2>
      <Tabs data={data} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default TitleWithTabs;
