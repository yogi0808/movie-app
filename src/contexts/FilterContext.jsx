import { createContext, useContext, useEffect, useState } from "react"
import countries from "@constants/countries.json"
import languages from "@constants/languages.json"
import { includeAdultOptions, sortOptions } from "@/constants"

const filterContext = createContext(null)

const FilterContextProvider = ({ children }) => {
  const [selectedSortBy, setSelectedSortBy] = useState(sortOptions[0])
  const [selectedCountry, setSelectedCountry] = useState(countries[101])
  const [providers, setProviders] = useState([])
  const [selectedProviders, setSelectedProviders] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [selectedAdultOpt, setSelectedAdultOpt] = useState(
    includeAdultOptions[0],
  )

  const fetchProviders = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}watch/providers/movie?watch_region=${selectedCountry.value}`,
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

  const selectSortBy = (val, opt) => {
    setSelectedSortBy({ value: val, option: opt })
  }

  const selectProvider = (val) => {
    if (selectedProviders.includes(val)) {
      setSelectedProviders((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedProviders((priv) => [...priv, val])
    }
  }

  const selectCountry = (val, opt) => {
    setSelectedCountry({ value: val, option: opt })
  }

  const selectLanguage = (val, opt) => {
    setSelectedLanguage({ value: val, option: opt })
  }

  const selectAdultOpt = (val, opt) => {
    setSelectedAdultOpt({ value: val, option: opt })
  }

  useEffect(() => {
    fetchProviders()
  }, [selectedCountry])

  return (
    <filterContext.Provider
      value={{
        selectedSortBy,
        selectSortBy,
        providers,
        selectedProviders,
        selectProvider,
        selectedCountry,
        selectCountry,
        selectedLanguage,
        selectLanguage,
        selectedAdultOpt,
        selectAdultOpt,
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
