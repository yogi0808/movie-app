import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

import { authFetch } from '@utils/utils';
import { AuthContext } from '@hooks/useAuth';
import type { LoginDataType, RegisterDataType, User } from '@utils/types';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // getting user form the localstorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user', e);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  /**
   * it does api request to our backend and the loges user in based on username and password
   *
   * @param data - data for login
   */
  const login = async (data: LoginDataType) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await authFetch('login', data);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }

      setUser(result.user);
      localStorage.setItem('user', JSON.stringify(result.user));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login error');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * it does api request to our backend and registers new user
   *
   * @param data - data for register
   */
  const register = async (data: RegisterDataType) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await authFetch('register', data, false);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Register error');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * it does api request to our backend for logout
   */
  const logout = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await authFetch('logout');
    } catch (err) {
      console.error('Logout request failed', err);
      throw err;
    } finally {
      setUser(null);
      localStorage.removeItem('user');
      setIsLoading(false);
    }
  };

  /**
   * does api request to our backend for forgot password
   *
   * @param email - email
   */
  const forgotPassword = async (email: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await authFetch('forgot-password', { email }, false);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Forgot password error');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * does api request to our backend for resending verification email
   *
   * @param email - email
   */
  const resendVerificationEmail = async (email: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await authFetch('resend-verification', { email }, false);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Resend verification error');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * does api request to our backend for password reset and sets new password
   *
   * @param token
   * @param password
   */
  const resetPassword = async (token: string, password: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await authFetch(`reset-password?token=${token}`, { password }, false);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Reset failed');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Reset password error');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        forgotPassword,
        resendVerificationEmail,
        resetPassword,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
