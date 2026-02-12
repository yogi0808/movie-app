import type { PropsWithChildren, ReactNode } from "react"

export interface LogoProps {
  xl?: boolean
}

export interface GradientTextProps extends PropsWithChildren {
  gradient: string
  className?: string
}

export interface OptionType {
  option: string
  value: string
}

export interface DropDownProps {
  label: string
  selected: OptionType
  list: any[]
  handleSelect(val: string, opt: string): void
  search?: boolean
  valueKey: string
  optionKey: string
}

export interface TabsProps {
  data: string[]
  activeTab: number
  onTabChange(index: number): void
}

export interface TitleWithTabsProps extends TabsProps {
  title: string
}

export interface FooterLinkType {
  id: number
  text: string
  link: string
}

export interface FooterLinkItemType {
  id: number
  title: string
  links: FooterLinkType[]
}

export interface LinkOptionsType {
  id: number
  text: string
  link: string
}

export interface HeaderLinkType {
  id: number
  title: string
  options: LinkOptionsType[]
}

export interface LinkWithOptionsProp {
  link: HeaderLinkType
}

export interface MobileNavProps {
  isActive: boolean
  navRef: React.Ref<HTMLDivElement>
}

export interface MobileNavLinkProp {
  link: HeaderLinkType
}

export interface SectionProps extends PropsWithChildren {
  className?: string
  outerSectionClassName?: string
}

export interface RatingIndicatorProps {
  voteAverage: number | null
  className: string
}

export interface MovieType {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  release_date?: string
  first_air_date?: string
  title?: string
  name?: string
  video?: boolean
}

export interface MoviePopupLinkType {
  id: number
  link: string
  icon: ReactNode
  text: string
}

export interface ChipProps {
  data: OptionType
  isSelected: boolean
  handleSelect(): void
}

export interface CollapsibleCardProps extends PropsWithChildren {
  title: string
  count?: number
  open?: boolean
}

export interface CustomRangeProps {
  min: number
  max: number
  step: number
  values: number[]
  onChange(values: number[]): void
  colors: string[]
  mainMarkDivider: number
}

export interface ProviderType {
  display_priorities: any
  display_priority: number
  logo_path: string
  provider_name: string
  provider_id: number
}