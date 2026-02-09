import { createContext, useContext, useEffect, useState } from "react"
import countries from "@constants/countries.json"
import languages from "@constants/languages.json"
import { includeAdultOptions, sortOptions } from "@/constants"

const filterContext = createContext(null)

const FilterContextProvider = ({ children }) => {
  const [filteredMovies, setFilteredMovies] = useState([])
  const [selectedSortBy, setSelectedSortBy] = useState(sortOptions[0])
  const [selectedCountry, setSelectedCountry] = useState(countries[101])
  const [providers, setProviders] = useState([])
  const [selectedProviders, setSelectedProviders] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [selectedAdultOpt, setSelectedAdultOpt] = useState(
    includeAdultOptions[0],
  )
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedCertifications, setSelectedCertifications] = useState([])
  const [runtime, setRuntime] = useState([0, 400])
  const [userVotes, setUserVotes] = useState([0])
  const [nextPage, setNextPage] = useState(1)
  const [searchAvailable, setSearchAvailable] = useState(false)

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

  const fetchGenres = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}genre/movie/list`,
      {
        method: "GET",
        headers: {
          authorization: import.meta.env.VITE_TOKEN,
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      setGenres(data.genres)
    }
  }

  const fetchFilteredMovies = async () => {
    let query = `discover/movie?page=${nextPage}&include_adult=${selectedAdultOpt.value}&with_original_language=${selectedLanguage.value === "none" ? "" : selectedLanguage.value}&sort_by=${selectedSortBy.value}&with_watch_monetization_types=${selectedProviders.join(",")}&with_ott_providers=${selectedProviders.join(",")}&with_genres=${selectedGenres.join(",")}&certification=${selectedCertifications.join(",")}&vote_count.gte=${userVotes[0]}&with_runtime.gte=${runtime[0]}&with_runtime.lte=${runtime[1]}`

    console.log(query)

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}${query}`, {
      method: "GET",
      headers: {
        authorization: import.meta.env.VITE_TOKEN,
      },
    })

    if (res.ok) {
      const data = await res.json()

      if (data.page <= 1) {
        setFilteredMovies(data.results)
      } else {
        setFilteredMovies((prev) => [...prev, ...data.results])
      }

      setSearchAvailable(false)
    }
  }

  const selectSortBy = (val, opt) => {
    setSelectedSortBy({ value: val, option: opt })
    setSearchAvailable(true)
  }

  const changeRuntime = (val) => {
    setRuntime(val)
    setSearchAvailable(true)
  }

  const changeUserVotes = (val) => {
    setUserVotes(val)
    setSearchAvailable(true)
  }

  const selectGenre = (val) => {
    if (selectedGenres.includes(val)) {
      setSelectedGenres((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedGenres((priv) => [...priv, val])
    }
    setSearchAvailable(true)
  }

  const selectCertification = (val) => {
    if (selectedCertifications.includes(val)) {
      setSelectedCertifications((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedCertifications((priv) => [...priv, val])
    }
    setSearchAvailable(true)
  }

  const selectProvider = (val) => {
    if (selectedProviders.includes(val)) {
      setSelectedProviders((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedProviders((priv) => [...priv, val])
    }
    setSearchAvailable(true)
  }

  const selectCountry = (val, opt) => {
    setSelectedCountry({ value: val, option: opt })
    setSearchAvailable(true)
  }

  const selectLanguage = (val, opt) => {
    setSelectedLanguage({ value: val, option: opt })
    setSearchAvailable(true)
  }

  const selectAdultOpt = (val, opt) => {
    setSelectedAdultOpt({ value: val, option: opt })
    setSearchAvailable(true)
  }

  useEffect(() => {
    fetchProviders()
  }, [selectedCountry])

  useEffect(() => {
    fetchGenres()
  }, [])

  useEffect(() => {
    fetchFilteredMovies()
  }, [nextPage])

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
        genres,
        selectedGenres,
        selectGenre,
        selectedCertifications,
        selectCertification,
        filteredMovies,
        runtime,
        changeRuntime,
        userVotes,
        changeUserVotes,
        setNextPage,
        searchAvailable,
        fetchFilteredMovies,
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
