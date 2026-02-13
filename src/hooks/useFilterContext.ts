import type { FilterContextType } from "@utils/types"
import { createContext, useContext } from "react"

export const filterContext = createContext<FilterContextType | undefined>(undefined) // filter context

/**
 * hook to easily ues the filter context
 *
 * @returns - filter context
 */
export function useFilterContext(): FilterContextType {
  const context = useContext(filterContext)

  if (!context) {
    throw new Error("Error in Context")
  }

  return context
}