import Tabs from "./Tabs"

const TitleWithTabs = ({ data = [], title, activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-5 px-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Tabs
        data={data}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
    </div>
  )
}

export default TitleWithTabs
