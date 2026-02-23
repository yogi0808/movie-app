import type { FilterContextType } from '@utils/types';
import { createContext, useContext } from 'react';

export const movieFilterContext = createContext<FilterContextType | undefined>(undefined); // filter context

/**
 * hook to easily ues the filter context
 *
 * @returns - filter context
 */
export function useMovieFilterContext(): FilterContextType {
  const context = useContext(movieFilterContext);

  if (!context) {
    throw new Error('Error in Context');
  }

  return context;
}
