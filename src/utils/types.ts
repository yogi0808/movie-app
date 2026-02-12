import type { PropsWithChildren } from "react"

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
  className: string
  outerSectionClassName: string
}

export interface RatingIndicatorProps {
  voteAverage: number | null
  className: string
}