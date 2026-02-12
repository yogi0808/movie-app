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