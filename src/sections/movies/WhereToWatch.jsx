import BoxWithDivider from "@/components/BoxWithDivider"
import DropDown from "@/components/DropDown"
import CollapsibleCard from "@/components/filters/CollapsibleCard"
import ProviderCard from "@/components/filters/ProviderCard"
import { useFilterContext } from "@/contexts/FilterContext"
import countries from "@constants/countries.json"

const WhereToWatch = () => {
  const { selectedCountry, selectCountry, providers } = useFilterContext()

  return (
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
  )
}

export default WhereToWatch
