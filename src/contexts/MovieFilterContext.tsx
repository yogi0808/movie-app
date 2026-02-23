import { useEffect, useReducer, useState, type PropsWithChildren } from 'react';

import { apiFetch, formateDateForPicker } from '@utils/utils';
import type {
  MovieType,
  GenresResponseDataType,
  MoviesResponseDataType,
  ProviderResponseDataType,
} from '@utils/types';

import { movieFilterContext } from '@hooks/useMovieFilterContext';
import { MovieFilterInitialState, MovieFilterReducer } from '../reducers/MovieFilterReducer';

const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]); // move list of the filtered search
  const [nextPage, setNextPage] = useState<number>(1); // page number for fetch data next time
  const [searchAvailable, setSearchAvailable] = useState<boolean>(false); // is any search options are changed
  const [state, dispatch] = useReducer(MovieFilterReducer, MovieFilterInitialState);

  /**
   * to fetch the moves list based on the search options
   */
  const fetchFilteredMovies = async () => {
    const params = new URLSearchParams({
      page: String(nextPage),
      include_adult: String(state.selectedAdultOpt.value),
      with_original_language:
        state.selectedLanguage.value === 'none' ? '' : state.selectedLanguage.value,
      sort_by: state.selectedSortBy.value,
      with_watch_monetization_types: state.selectedProviders.join(','),
      with_ott_providers: state.selectedProviders.join(','),
      with_genres: state.selectedGenres.join(','),
      certification: state.selectedCertifications.join(','),
      'vote_count.gte': String(state.userVotes[0]),
      'with_runtime.gte': String(state.runtime[0]),
      'with_runtime.lte': String(state.runtime[1]),
    });

    if (state.releaseDates.from)
      params.append('release_date.gte', formateDateForPicker(state.releaseDates.from));
    if (state.releaseDates.to)
      params.append('release_date.lte', formateDateForPicker(state.releaseDates.to));

    const data: MoviesResponseDataType = await apiFetch(`discover/movie?${params}`);

    if (data.page <= 1 || searchAvailable) {
      setFilteredMovies(data.results);
      setNextPage(1);
      setSearchAvailable(false);
    } else {
      setFilteredMovies((prev) => [...prev, ...data.results]);
    }
  };

  /**
   * for selecting the sort option and changing the search available state
   *
   * @param {string} val - value to store in sort option
   * @param {string} opt - option to store in sort option
   */
  const selectSortBy = (val: string, opt: string) => {
    dispatch({ type: 'selectSort', val, opt });
    setSearchAvailable(true);
  };

  /**
   * for selecting the release date and changing the search available state
   *
   * @param {string} key - key for tracking the date for or to
   * @param {string} val - date in yyyy/mm/dd formate
   */
  const selectReleaseDate = (key: 'from' | 'to', val: Date | null) => {
    dispatch({ type: 'selectReleaseDate', key, val });
    setSearchAvailable(true);
  };

  /**
   * for selecting the runtime value from range and changing the search available state
   *
   * @param {number[]} val - the value of the runtime range
   */
  const changeRuntime = (val: number[]) => {
    dispatch({ type: 'changeRuntime', val });
    setSearchAvailable(true);
  };

  /**
   * for selecting the user vot from range and changing the search available state
   *
   * @param {number[]} val - value of the user vote range
   */
  const changeUserVotes = (val: number[]) => {
    dispatch({ type: 'changeUserVotes', val });
    setSearchAvailable(true);
  };

  /**
   * selects the genre and change the state of the search available state
   *
   * @param {number} val - id of the genres to select
   */
  const selectGenre = (val: number) => {
    dispatch({ type: 'selectGenre', val });
    setSearchAvailable(true);
  };

  /**
   * selects the certification and change the state of the search available state
   *
   * @param {string} val - id of the certification
   */
  const selectCertification = (val: string) => {
    dispatch({ type: 'selectCertification', val });
    setSearchAvailable(true);
  };

  /**
   * selects the provider and change the state of the search available state
   *
   * @param {number} val - id of the provider
   */
  const selectProvider = (val: number) => {
    dispatch({ type: 'selectProvider', val });
    setSearchAvailable(true);
  };

  /**
   * selects the country and changes the state of the search available state
   *
   * @param {string} val - value of the country selected(ex: IN)
   * @param {string} opt - option of the country selected(ex: India)
   */
  const selectCountry = (val: string, opt: string) => {
    dispatch({ type: 'selectCountry', val, opt });
  };

  /**
   * selects the language and changes the state of the search available state
   *
   * @param {string} val - value of the selected language(Ex: hi)
   * @param {string} opt - option fo the selected language(Ex: Hindi)
   */
  const selectLanguage = (val: string, opt: string) => {
    dispatch({ type: 'selectLanguage', val, opt });
    setSearchAvailable(true);
  };

  /**
   * selects the adult option and change the state of the search available state
   *
   * @param {boolean} val - value of the selected adult option (Ex: false/true)
   * @param {string} opt - option of the selected adult option (Ex: Include Adult content)
   */
  const selectAdultOpt = (val: boolean, opt: string) => {
    dispatch({ type: 'selectAdultOpt', val, opt });
    setSearchAvailable(true);
  };

  // runs the fetch provider function on component mount and selected country change
  useEffect(() => {
    /**
     * for fetching the data for the provider based on the selected country
     */
    const fetchProviders = async () => {
      const data: ProviderResponseDataType = await apiFetch(
        `watch/providers/movie?watch_region=${state.selectedCountry.value}`,
      );
      dispatch({ type: 'setProviders', val: data.results });
    };

    fetchProviders();
  }, [state.selectedCountry.value]);

  // runs the fetch genres function on component mount
  useEffect(() => {
    /**
     * for fetching the list of the genres
     */
    const fetchGenres = async () => {
      const data: GenresResponseDataType = await apiFetch('genre/movie/list');
      dispatch({ type: 'setGenres', val: data.genres });
    };

    fetchGenres();
  }, []);

  // runs the fetch movies function on component mount and when the next page value changes
  useEffect(() => {
    const loadMovies = async () => {
      await fetchFilteredMovies();
    };

    loadMovies();
  }, [nextPage]);

  return (
    <movieFilterContext.Provider
      value={{
        ...state,
        filteredMovies,
        searchAvailable,
        selectSortBy,
        selectGenre,
        setNextPage,
        changeRuntime,
        selectCountry,
        selectAdultOpt,
        selectLanguage,
        selectProvider,
        changeUserVotes,
        selectReleaseDate,
        fetchFilteredMovies,
        selectCertification,
      }}
    >
      {children}
    </movieFilterContext.Provider>
  );
};

export default FilterContextProvider;
