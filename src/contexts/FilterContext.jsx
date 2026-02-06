import { createContext, useContext, useEffect, useState } from "react"
import countries from "@constants/countries.json"
import { sortOptions } from "@/constants"

const filterContext = createContext(null)

const FilterContextProvider = ({ children }) => {
  const [country, setCountry] = useState(countries[101])
  const [sortBy, setSortBy] = useState(sortOptions[0])
  const [providers, setProviders] = useState([])
  const [selectedProviders, setSelectedProviders] = useState([])

  const fetchProviders = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}watch/providers/movie?watch_region=${country.value}`,
      {
        method: "GET",
        headers: {
          authorization: import.meta.env.VITE_TOKEN,
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      setProviders(data.results)
    }
  }

  const selectProvider = (pvd) => {
    setSelectedProviders((priv) => [...priv, pvd])
  }

  const selectCountry = (cunt) => {
    setCountry(cunt)
  }

  useEffect(() => {
    fetchProviders()
  }, [country])
  return (
    <filterContext.Provider
      value={{
        country,
        providers,
        selectedProviders,
        selectCountry,
        sortBy,
        setSortBy,
        selectProvider,
      }}
    >
      {children}
    </filterContext.Provider>
  )
}

export default FilterContextProvider

export function useFilterContext() {
  const context = useContext(filterContext)
  if (!context) {
    throw new Error("Error in Context")
  }

  return context
}
