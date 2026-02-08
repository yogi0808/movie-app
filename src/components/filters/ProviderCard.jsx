import { useFilterContext } from "@/contexts/FilterContext"
import classNames from "classnames"
import { GiCheckMark } from "react-icons/gi"

const ProviderCard = ({ provider }) => {
  const { selectedProviders, selectProvider } = useFilterContext()
  const isActive = selectedProviders.includes(provider.provider_id)

  const overlayClassNames = classNames(
    "absolute inset-0 bg-highlight/80 flex justify-center items-center",
    {
      hidden: !isActive,
    },
  )

  return (
    <button
      className="w-12.5 relative rounded-lg aspect-square overflow-hidden cursor-pointer"
      onClick={() => selectProvider(provider.provider_id)}
    >
      <img
        src={`https://media.themoviedb.org/t/p/original${provider.logo_path}`}
      />
      <div className={overlayClassNames}>
        <GiCheckMark className="text-white text-3xl" />
      </div>
    </button>
  )
}

export default ProviderCard
