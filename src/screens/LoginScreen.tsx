import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import RootLayout from '@layouts/RootLayout';
import { useAuth } from '@hooks/useAuth';

/**
 * login page for user login with username and password
 *
 * @returns - jsx for the login page
 */
const LoginScreen = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login, error, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      if (!error) {
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <RootLayout>
      <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Login to your Account</h1>
          {error && <p className="text-red-500 font-semibold">{error}</p>}
          <p>
            In order to use the editing and rating capabilities of TMDB, as well as get personal
            recommendations you will need to login to your account. If you do not have an account,
            registering for an account is free and simple.{' '}
            <Link
              className="underline underline-offset-3 decoration-underline text-highlight cursor-pointer"
              to="/register"
            >
              Click here
            </Link>{' '}
            to get started.
          </p>
          <p>
            If you signed up but didn&apos;t get your verification email,{' '}
            <span className="underline underline-offset-3 decoration-underline text-highlight">
              click here
            </span>{' '}
            to have it resent.
          </p>
        </div>
        <form className="mt-8 flex flex-col gap-4 text-btn-hover" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
              placeholder="Enter your username"
              required
            />
          </label>
          <label className="flex flex-col">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
              placeholder="Enter your password"
              required
            />
          </label>
          <div className="flex gap-4 items-center mt-3.5">
            <button
              type="submit"
              className="rounded-lg px-3 py-1.5 bg-date-picker cursor-pointer disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <Link
              className="underline underline-offset-3 decoration-underline text-highlight cursor-pointer"
              to="/forgot-password"
            >
              Reset Password
            </Link>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

export default LoginScreen;
