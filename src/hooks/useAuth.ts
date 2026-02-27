import type { AuthContextType } from '@utils/types';
import { createContext, useContext } from 'react';

// creating auth context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * hook for easily use auth context
 *
 * @returns - auth context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
