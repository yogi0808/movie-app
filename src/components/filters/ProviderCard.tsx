import classNames from "classnames"
import { GiCheckMark } from "react-icons/gi"

import type { ProviderType } from "@utils/types"
import { useFilterContext } from "@hooks/useFilterContext"

/**
 * displays the image of the provider and give ability to select the provider
 *
 * @param {object} provider - has the value of the single provider
 *
 * @returns - jsx for the provider
 */
const ProviderCard = ({ provider }: { provider: ProviderType }) => {
  const { selectedProviders, selectProvider } = useFilterContext() // getting the selected providers(list of the provider id) and the select provider(function to select the provider) from the filter context
  const isActive = selectedProviders.includes(provider.provider_id) // for tracking the selected state of the provider

  // class names for the provider overlay div to show or hid based on the active state
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
