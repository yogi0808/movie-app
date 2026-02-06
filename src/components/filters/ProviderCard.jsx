import { useFilterContext } from "@/contexts/FilterContext"
import classNames from "classnames"
import { useEffect, useState } from "react"
import { GiCheckMark } from "react-icons/gi"

const ProviderCard = ({ provider }) => {
  const [isActive, setIsActive] = useState(false)
  const { selectedProviders, selectProvider } = useFilterContext()

  const overlayClassNames = classNames(
    "absolute inset-0 bg-highlight/80 flex justify-center items-center",
    {
      hidden: !isActive,
    },
  )

  useEffect(() => {
    selectedProviders.forEach((pvd) => {
      if (pvd.provider_id === provider.provider_id) {
        setIsActive(true)
      }
    })
  }, [selectedProviders])

  return (
    <button
      className="w-12.5 relative rounded-lg aspect-square overflow-hidden cursor-pointer"
      onClick={() => selectProvider(provider)}
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
