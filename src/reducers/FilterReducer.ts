import { includeAdultOptions, sortOptions } from '@constants/index';
import countries from '@constants/countries.json';
import languages from '@constants/languages.json';
import type { ActionType, InitialStateType } from '@utils/types';

// initial state for the filter reducer
export const FilterInitialState: InitialStateType = {
  providers: [],
  genres: [],
  selectedSortBy: sortOptions[0],
  selectedCountry: countries[101],
  selectedProviders: [],
  selectedLanguage: languages[0],
  selectedAdultOpt: includeAdultOptions[0],
  selectedGenres: [],
  selectedCertifications: [],
  runtime: [0, 400],
  userVotes: [0],
  searchAvailable: false,
  releaseDates: {
    from: null,
    to: new Date(),
  },
};

/**
 *
 * @param {object} state - of the reducer for modifications
 * @param {object} action - for changing and modifying data on event of string
 * @returns - updated state of the reducer
 */
export function FilterReducer(state: InitialStateType, action: ActionType): InitialStateType {
  // handling all action type with switch
  switch (action.type) {
    case 'selectSort':
      return {
        ...state,
        selectedSortBy: { value: action.val, option: action.opt },
      };
    case 'selectReleaseDate':
      return {
        ...state,
        releaseDates: { ...state.releaseDates, [action.key]: action.val },
      };
    case 'changeRuntime':
      return {
        ...state,
        runtime: action.val,
      };
    case 'changeUserVotes':
      return {
        ...state,
        userVotes: action.val,
      };
    case 'selectGenre':
      if (state.selectedGenres.includes(action.val)) {
        return {
          ...state,
          selectedGenres: state.selectedGenres.filter((a) => a !== action.val),
        };
      } else {
        return {
          ...state,
          selectedGenres: [...state.selectedGenres, action.val],
        };
      }
    case 'selectCertification':
      if (state.selectedCertifications.includes(action.val)) {
        return {
          ...state,
          selectedCertifications: state.selectedCertifications.filter((a) => a !== action.val),
        };
      } else {
        return {
          ...state,
          selectedCertifications: [...state.selectedCertifications, action.val],
        };
      }
    case 'selectProvider':
      if (state.selectedProviders.includes(action.val)) {
        return {
          ...state,
          selectedProviders: state.selectedProviders.filter((a) => a !== action.val),
        };
      } else {
        return {
          ...state,
          selectedProviders: [...state.selectedProviders, action.val],
        };
      }
    case 'selectCountry':
      return {
        ...state,
        selectedCountry: { value: action.val, option: action.opt },
      };
    case 'selectLanguage':
      return {
        ...state,
        selectedLanguage: { value: action.val, option: action.opt },
      };
    case 'selectAdultOpt':
      return {
        ...state,
        selectedAdultOpt: { value: action.val, option: action.opt },
      };
    case 'setGenres':
      return {
        ...state,
        genres: action.val,
      };
    case 'setProviders':
      return {
        ...state,
        providers: action.val,
      };
    default:
      return state;
  }
}
