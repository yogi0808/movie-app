import { useEffect, useState, type PropsWithChildren } from "react"

import countries from "@constants/countries.json"
import languages from "@constants/languages.json"
import { apiFetch, formateDateForPicker } from "@utils/utils"
import { includeAdultOptions, sortOptions } from "@constants/index"
import type {
  GenreType,
  ProviderType,
  ReleaseDatesType,
  MovieType,
  OptionType,
  GenresResponseDataType,
  MoviesResponseDataType,
  ProviderResponseDataType,
} from "@utils/types"

import { filterContext } from "@hooks/useFilterContext"

const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]) // move list of the filtered search
  const [selectedSortBy, setSelectedSortBy] = useState<OptionType>(
    sortOptions[0],
  ) // selected search option
  const [selectedCountry, setSelectedCountry] = useState<OptionType>(
    countries[101],
  ) // selected country
  const [providers, setProviders] = useState<ProviderType[]>([]) // all the providers to display based on the country
  const [selectedProviders, setSelectedProviders] = useState<number[]>([]) // list of the selected providers
  const [selectedLanguage, setSelectedLanguage] = useState<OptionType>(
    languages[0],
  ) // selected language
  const [selectedAdultOpt, setSelectedAdultOpt] = useState<OptionType<boolean>>(
    includeAdultOptions[0],
  ) // selected adult option include or exclude
  const [genres, setGenres] = useState<GenreType[]>([]) // list of the all genres
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]) // list of the selected genres
  const [selectedCertifications, setSelectedCertifications] = useState<
    string[]
  >([]) // list of the selected certifications
  const [runtime, setRuntime] = useState<number[]>([0, 400]) // selected value of the runtime
  const [userVotes, setUserVotes] = useState<number[]>([0]) //  selected value of the user votes
  const [nextPage, setNextPage] = useState<number>(1) // page number for fetch data next time
  const [searchAvailable, setSearchAvailable] = useState<boolean>(false) // is any search options are changed
  const [releaseDates, setReleaseDates] = useState<ReleaseDatesType>({
    from: null,
    to: new Date(),
  }) // selected release dates

  /**
   * to fetch the moves list based on the search options
   */
  const fetchFilteredMovies = async () => {
    const params = new URLSearchParams({
      page: String(nextPage),
      include_adult: String(selectedAdultOpt.value),
      with_original_language:
        selectedLanguage.value === "none" ? "" : selectedLanguage.value,
      sort_by: selectedSortBy.value,
      with_watch_monetization_types: selectedProviders.join(","),
      with_ott_providers: selectedProviders.join(","),
      with_genres: selectedGenres.join(","),
      certification: selectedCertifications.join(","),
      "vote_count.gte": String(userVotes[0]),
      "with_runtime.gte": String(runtime[0]),
      "with_runtime.lte": String(runtime[1]),
    })

    if (releaseDates.from)
      params.append("release_date.gte", formateDateForPicker(releaseDates.from))
    if (releaseDates.to)
      params.append("release_date.lte", formateDateForPicker(releaseDates.to))

    const data: MoviesResponseDataType = await apiFetch(
      `discover/movie?${params}`,
    )

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
  const selectSortBy = (val: string, opt: string) => {
    setSelectedSortBy({ value: val, option: opt })
    setSearchAvailable(true)
  }

  /**
   * for selecting the release date and changing the search available state
   *
   * @param {string} key - key for tracking the date for or to
   * @param {string} val - date in yyyy/mm/dd formate
   */
  const selectReleaseDate = (key: "from" | "to", val: Date | null) => {
    setReleaseDates((prev) => ({ ...prev, [key]: val }))
    setSearchAvailable(true)
  }

  /**
   * for selecting the runtime value from range and changing the search available state
   *
   * @param {number[]} val - the value of the runtime range
   */
  const changeRuntime = (val: number[]) => {
    setRuntime(val)
    setSearchAvailable(true)
  }

  /**
   * for selecting the user vot from range and changing the search available state
   *
   * @param {number[]} val - value of the user vote range
   */
  const changeUserVotes = (val: number[]) => {
    setUserVotes(val)
    setSearchAvailable(true)
  }

  /**
   * selects the genre and change the state of the search available state
   *
   * @param {number} val - id of the genres to select
   */
  const selectGenre = (val: number) => {
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
  const selectCertification = (val: string) => {
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
  const selectProvider = (val: number) => {
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
  const selectCountry = (val: string, opt: string) => {
    setSelectedCountry({ value: val, option: opt })
  }

  /**
   * selects the language and changes the state of the search available state
   *
   * @param {string} val - value of the selected language(Ex: hi)
   * @param {string} opt - option fo the selected language(Ex: Hindi)
   */
  const selectLanguage = (val: string, opt: string) => {
    setSelectedLanguage({ value: val, option: opt })
    setSearchAvailable(true)
  }

  /**
   * selects the adult option and change the state of the search available state
   *
   * @param {boolean} val - value of the selected adult option (Ex: false/true)
   * @param {string} opt - option of the selected adult option (Ex: Include Adult content)
   */
  const selectAdultOpt = (val: boolean, opt: string) => {
    setSelectedAdultOpt({ value: val, option: opt })
    setSearchAvailable(true)
  }

  // runs the fetch provider function on component mount and selected country change
  useEffect(() => {
    /**
     * for fetching the data for the provider based on the selected country
     */
    const fetchProviders = async () => {
      const data: ProviderResponseDataType = await apiFetch(
        `watch/providers/movie?watch_region=${selectedCountry.value}`,
      )
      setProviders(data.results)
    }

    fetchProviders()
  }, [selectedCountry.value])

  // runs the fetch genres function on component mount
  useEffect(() => {
    /**
     * for fetching the list of the genres
     */
    const fetchGenres = async () => {
      const data: GenresResponseDataType = await apiFetch("genre/movie/list")
      setGenres(data.genres)
    }

    fetchGenres()
  }, [])

  // runs the fetch movies function on component mount and when the next page value changes
  useEffect(() => {
    const loadMovies = async () => {
      await fetchFilteredMovies()
    }

    loadMovies()
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
