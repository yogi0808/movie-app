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
    let query = `discover/movie?page=${nextPage}`
    console.log(nextPage)

    if (selectedSortBy.value) {
      query += `&sort_by=${selectedSortBy.value}`
    } else if (selectedProviders.length > 0) {
      query += `&with_watch_providers=${selectedProviders.join(",")}`
    } else if (selectedGenres.length > 0) {
      query += `&with_genres=${selectedGenres.join(",")}`
    } else if (selectedCertifications.length > 0) {
      query += `&certification=${selectedCertifications.join(",")}`
    } else if (selectedAdultOpt) {
      query += `&include_adult=${selectedAdultOpt.value}`
    } else if (selectedLanguage.value) {
      query += `&language=${selectedLanguage.value}`
    } else if (userVotes.length > 0) {
      query += `&vote_count.gte=${userVotes[0]}`
    } else if (runtime.length > 1) {
      query += `&with_runtime.gte=${runtime[0]}&with_runtime.lte=${runtime[1]}`
    }

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
    }
  }

  const selectSortBy = (val, opt) => {
    setSelectedSortBy({ value: val, option: opt })
  }

  const changeRuntime = (val) => {
    setRuntime(val)
  }

  const changeUserVotes = (val) => {
    setUserVotes(val)
  }

  const selectGenre = (val) => {
    if (selectedGenres.includes(val)) {
      setSelectedGenres((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedGenres((priv) => [...priv, val])
    }
  }

  const selectCertification = (val) => {
    if (selectedCertifications.includes(val)) {
      setSelectedCertifications((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedCertifications((priv) => [...priv, val])
    }
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
