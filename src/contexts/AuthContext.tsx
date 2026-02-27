import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

import type { LoginDataType, RegisterDataType, User } from '@utils/types';
import { AuthContext } from '@hooks/useAuth';

const AUTH_URL = import.meta.env.VITE_AUTH_BASE_URL + 'auth/';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  const login = async (data: LoginDataType) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`${AUTH_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

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

  const register = async (data: RegisterDataType) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`${AUTH_URL}register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

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

  const logout = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await fetch(`${AUTH_URL}logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (err) {
      console.error('Logout request failed', err);
      throw err;
    } finally {
      setUser(null);
      localStorage.removeItem('user');
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`${AUTH_URL}forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

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

  const resetPassword = async (token: string, password: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`${AUTH_URL}reset-password?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

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
      value={{ user, isLoading, login, register, logout, forgotPassword, resetPassword, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
