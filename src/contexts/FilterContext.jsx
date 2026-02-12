import { createContext, useContext, useEffect, useState } from "react"

import countries from "@constants/countries.json"
import languages from "@constants/languages.json"
import { apiFetch, formateDateForPicker } from "@utils/utils"
import { includeAdultOptions, sortOptions } from "@constants"

const filterContext = createContext(null) // filter context

const FilterContextProvider = ({ children }) => {
  const [filteredMovies, setFilteredMovies] = useState([]) // move list of the filtered search
  const [selectedSortBy, setSelectedSortBy] = useState(sortOptions[0]) // selected search option
  const [selectedCountry, setSelectedCountry] = useState(countries[101]) // selected country
  const [providers, setProviders] = useState([]) // all the providers to display based on the country
  const [selectedProviders, setSelectedProviders] = useState([]) // list of the selected providers
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]) // selected language
  const [selectedAdultOpt, setSelectedAdultOpt] = useState(
    includeAdultOptions[0],
  ) // selected adult option include or exclude
  const [genres, setGenres] = useState([]) // list of the all genres
  const [selectedGenres, setSelectedGenres] = useState([]) // list of the selected genres
  const [selectedCertifications, setSelectedCertifications] = useState([]) // list of the selected certifications
  const [runtime, setRuntime] = useState([0, 400]) // selected value of the runtime
  const [userVotes, setUserVotes] = useState([0]) //  selected value of the user votes
  const [nextPage, setNextPage] = useState(1) // page number for fetch data next time
  const [searchAvailable, setSearchAvailable] = useState(false) // is any search options are changed
  const [releaseDates, setReleaseDates] = useState({
    from: null,
    to: formateDateForPicker(new Date()),
  }) // selected release dates

  /**
   * for fetching the data for the provider based on the selected country
   */
  const fetchProviders = async () => {
    const data = await apiFetch(
      `watch/providers/movie?watch_region=${selectedCountry.value}`,
    )
    setProviders(data.results)
  }

  /**
   * for fetching the list of the genres
   */
  const fetchGenres = async () => {
    const data = await apiFetch("genre/movie/list")
    setGenres(data.genres)
  }

  /**
   * to fetch the moves list based on the search options
   */
  const fetchFilteredMovies = async () => {
    const params = new URLSearchParams({
      page: nextPage,
      include_adult: selectedAdultOpt.value,
      with_original_language:
        selectedLanguage.value === "none" ? "" : selectedLanguage.value,
      sort_by: selectedSortBy.value,
      with_watch_monetization_types: selectedProviders.join(","),
      with_ott_providers: selectedProviders.join(","),
      with_genres: selectedGenres.join(","),
      certification: selectedCertifications.join(","),
      "vote_count.gte": userVotes[0],
      "with_runtime.gte": runtime[0],
      "with_runtime.lte": runtime[1],
    })

    if (releaseDates.from) params.append("release_date.gte", releaseDates.from)
    if (releaseDates.to) params.append("release_date.lte", releaseDates.to)

    const data = await apiFetch(`discover/movie?${params}`)

    if (data.page <= 1 || searchAvailable) {
      setFilteredMovies(data.results)
      setNextPage(1)
      setSearchAvailable(false)
    } else {
      setFilteredMovies((prev) => [...prev, ...data.results])
    }
  }

  /**
   * for selecting the sort option and changing the search available state
   *
   * @param {string} val - value to store in sort option
   * @param {string} opt - option to store in sort option
   */
  const selectSortBy = (val, opt) => {
    setSelectedSortBy({ value: val, option: opt })
    setSearchAvailable(true)
  }

  /**
   * for selecting the release date and changing the search available state
   *
   * @param {string} key - key for tracking the date for or to
   * @param {string} val - date in yyyy/mm/dd formate
   */
  const selectReleaseDate = (key, val) => {
    setReleaseDates((prev) => ({ ...prev, [key]: formateDateForPicker(val) }))
    setSearchAvailable(true)
  }

  /**
   * for selecting the runtime value from range and changing the search available state
   *
   * @param {number[]} val - the value of the runtime range
   */
  const changeRuntime = (val) => {
    setRuntime(val)
    setSearchAvailable(true)
  }

  /**
   * for selecting the user vot from range and changing the search available state
   *
   * @param {number[]} val - value of the user vote range
   */
  const changeUserVotes = (val) => {
    setUserVotes(val)
    setSearchAvailable(true)
  }

  /**
   * selects the genre and change the state of the search available state
   *
   * @param {number} val - id of the genres to select
   */
  const selectGenre = (val) => {
    if (selectedGenres.includes(val)) {
      setSelectedGenres((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedGenres((priv) => [...priv, val])
    }
    setSearchAvailable(true)
  }

  /**
   * selects the certification and change the state of the search available state
   *
   * @param {string} val - id of the certification
   */
  const selectCertification = (val) => {
    if (selectedCertifications.includes(val)) {
      setSelectedCertifications((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedCertifications((priv) => [...priv, val])
    }
    setSearchAvailable(true)
  }

  /**
   * selects the provider and change the state of the search available state
   *
   * @param {number} val - id of the provider
   */
  const selectProvider = (val) => {
    if (selectedProviders.includes(val)) {
      setSelectedProviders((priv) => priv.filter((a) => a !== val))
    } else {
      setSelectedProviders((priv) => [...priv, val])
    }
    setSearchAvailable(true)
  }

  /**
   * selects the country and changes the state of the search available state
   *
   * @param {string} val - value of the country selected(ex: IN)
   * @param {string} opt - option of the country selected(ex: India)
   */
  const selectCountry = (val, opt) => {
    setSelectedCountry({ value: val, option: opt })
  }

  /**
   * selects the language and changes the state of the search available state
   *
   * @param {string} val - value of the selected language(Ex: hi)
   * @param {string} opt - option fo the selected language(Ex: Hindi)
   */
  const selectLanguage = (val, opt) => {
    setSelectedLanguage({ value: val, option: opt })
    setSearchAvailable(true)
  }

  /**
   * selects the adult option and change the state of the search available state
   *
   * @param {boolean} val - value of the selected adult option (Ex: false/true)
   * @param {string} opt - option of the selected adult option (Ex: Include Adult content)
   */
  const selectAdultOpt = (val, opt) => {
    setSelectedAdultOpt({ value: val, option: opt })
    setSearchAvailable(true)
  }

  // runs the fetch provider function on component mount and selected country change
  useEffect(() => {
    fetchProviders()
  }, [selectedCountry.value])

  // runs the fetch genres function on component mount
  useEffect(() => {
    fetchGenres()
  }, [])

  // runs the fetch movies function on component mount and when the next page value changes
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
        releaseDates,
        selectReleaseDate,
      }}
    >
      {children}
    </filterContext.Provider>
  )
}

export default FilterContextProvider

/**
 * hook to easily ues the filter context
 *
 * @returns - filter context
 */
export function useFilterContext() {
  const context = useContext(filterContext)
  if (!context) {
    throw new Error("Error in Context")
  }

  return context
}
