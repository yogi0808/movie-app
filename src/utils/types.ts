import type { PropsWithChildren } from "react"

export interface LogoProps {
  xl?: boolean
}

export interface GradientTextProps extends PropsWithChildren {
  gradient: string
  className?: string
}