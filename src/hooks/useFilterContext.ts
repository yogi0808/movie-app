import type { FilterContextType } from '@utils/types';
import { createContext, useContext } from 'react';

export const movieFilterContext = createContext<FilterContextType | undefined>(undefined); // filter context
export const tvFilterContext = createContext<FilterContextType | undefined>(undefined); // filter context

/**
 * hook to easily ues the filter context
 *
 * @returns - filter context
 */
export function useFilterContext(type: 'tv' | 'movie'): FilterContextType {
  const context = useContext(type === 'tv' ? tvFilterContext : movieFilterContext);

  if (!context) {
    throw new Error('Error in Context');
  }

  return context;
}
