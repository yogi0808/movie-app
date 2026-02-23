import type { PropsWithChildren, ReactNode } from 'react';

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type?: 'tv' | 'movie';
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
}

export interface MoviesResponseDataType {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}

export interface GenreType {
  id: number;
  name: string;
}

export interface GenresResponseDataType {
  genres: GenreType[];
}

export interface ProviderType {
  display_priorities: Record<string, number>;
  display_priority: number;
  logo_path: string;
  provider_name: string;
  provider_id: number;
}

export interface ProviderResponseDataType {
  results: ProviderType[];
}

export interface LogoProps {
  xl?: boolean;
}

export interface GradientTextProps extends PropsWithChildren {
  gradient: string;
  className?: string;
}

export interface OptionType<T = string> {
  option: string;
  value: T;
}

export interface DropDownProps {
  label: string;
  selected: OptionType<string | boolean>;
  list: OptionType<string | boolean>[];
  handleSelect(val: string | boolean, opt: string | boolean): void;
  search?: boolean;
  valueKey: keyof OptionType<string | boolean>;
  optionKey: keyof OptionType<string>;
}

export interface TabsProps {
  data: string[];
  activeTab: number;
  onTabChange(index: number): void;
}

export interface TitleWithTabsProps extends TabsProps {
  title: string;
}

export interface FooterLinkType {
  id: number;
  text: string;
  link: string;
}

export interface FooterLinkItemType {
  id: number;
  title: string;
  links: FooterLinkType[];
}

export interface LinkOptionsType {
  id: number;
  text: string;
  link: string;
}

export interface HeaderLinkType {
  id: number;
  title: string;
  options: LinkOptionsType[];
}

export interface LinkWithOptionsProp {
  link: HeaderLinkType;
}

export interface MobileNavProps {
  isActive: boolean;
  navRef: React.Ref<HTMLDivElement>;
}

export interface MobileNavLinkProp {
  link: HeaderLinkType;
}

export interface SectionProps extends PropsWithChildren {
  className?: string;
  outerSectionClassName?: string;
}

export interface RatingIndicatorProps {
  voteAverage: number | null;
  className: string;
  xl?: boolean;
}

export interface MoviePopupLinkType {
  id: number;
  link: string;
  icon: ReactNode;
  text: string;
}

export interface ChipProps {
  data: OptionType<number> | OptionType<string>;
  isSelected: boolean;
  handleSelect(): void;
}

export interface CollapsibleCardProps extends PropsWithChildren {
  title: string;
  count?: number;
  open?: boolean;
}

export interface CustomRangeProps {
  min: number;
  max: number;
  step: number;
  values: number[];
  onChange(values: number[]): void;
  colors: string[];
  mainMarkDivider: number;
}

export interface ReleaseDatesType {
  from: Date | null;
  to: Date | null;
}

export interface FilterContextType {
  selectedSortBy: OptionType;
  selectSortBy(val: string, opt: string): void;
  providers: ProviderType[];
  selectedProviders: number[];
  selectProvider(val: number): void;
  selectedCountry: OptionType;
  selectCountry(val: string, opt: string): void;
  selectedLanguage: OptionType;
  selectLanguage(val: string, opt: string): void;
  selectedAdultOpt: OptionType<boolean>;
  selectAdultOpt(val: boolean, opt: string): void;
  genres: GenreType[];
  selectedGenres: number[];
  selectGenre(val: number): void;
  selectedCertifications: string[];
  selectCertification(val: string): void;
  filteredMovies: MovieType[];
  runtime: number[];
  changeRuntime(val: number[]): void;
  userVotes: number[];
  changeUserVotes(val: number[]): void;
  setNextPage: React.Dispatch<React.SetStateAction<number>>;
  searchAvailable: boolean;
  fetchFilteredMovies(): Promise<void>;
  releaseDates: ReleaseDatesType;
  selectReleaseDate(key: 'from' | 'to', val: Date | null): void;
}

export interface InitialStateType {
  providers: ProviderType[];
  genres: GenreType[];
  selectedSortBy: OptionType;
  selectedCountry: OptionType;
  selectedProviders: number[];
  selectedLanguage: OptionType;
  selectedAdultOpt: OptionType<boolean>;
  selectedGenres: number[];
  selectedCertifications: string[];
  runtime: number[];
  userVotes: number[];
  searchAvailable: boolean;
  releaseDates: ReleaseDatesType;
}

export type ActionType =
  | { type: 'setGenres'; val: GenreType[] }
  | { type: 'setProviders'; val: ProviderType[] }
  | { type: 'selectSort'; val: string; opt: string }
  | { type: 'changeRuntime'; val: number[] }
  | { type: 'changeUserVotes'; val: number[] }
  | { type: 'selectGenre'; val: number }
  | { type: 'selectCertification'; val: string }
  | { type: 'selectProvider'; val: number }
  | { type: 'selectCountry'; val: string; opt: string }
  | { type: 'selectLanguage'; val: string; opt: string }
  | { type: 'selectAdultOpt'; val: boolean; opt: string }
  | {
      type: 'selectReleaseDate';
      key: 'from' | 'to';
      val: Date | null;
    };

export interface CompanyType {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface CountryType {
  iso_3166_1: string;
  name: string;
}

export interface LanguageType {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailsType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: CompanyType[];
  production_countries: CountryType[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: LanguageType[];
  status: string;
  tagline: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CreatorType {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
}

export interface EpisodeToAirType {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface NetworkType {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface SeasonType {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface TvDetailsType {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatorType[];
  episode_run_time: number[];
  first_air_date: string;
  genres: GenreType[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeToAirType;
  name: string;
  next_episode_to_air: EpisodeToAirType;
  networks: NetworkType[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: CompanyType[];
  production_countries: CountryType[];
  seasons: SeasonType[];
  spoken_languages: LanguageType[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface CastType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface AuthDetailsType {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number;
}

export interface ReviewType {
  author: string;
  author_details: AuthDetailsType;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface MediaImageType {
  aspect_ratio: number;
  height: number;
  iso_3166_1: string;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export type MediaTabType = 'backdrops' | 'posters';

export interface HeroPropType {
  poster_path: string;
  backdrop_path: string;
  title: string;
  release_date: string;
  genres: GenreType[];
  runtime: number;
  vote_average: number;
  overview: string;
  tagline: string;
}

export interface KeywordType {
  id: number;
  name: string;
}

export interface InfoPropType {
  idEndpoint: string;
  data: {
    network: NetworkType | null;
    status: string;
    language: string;
    budget: number | null;
    revenue: number | null;
    type: string | null;
  };
}

export type MediaType = 'tv' | 'movie';
