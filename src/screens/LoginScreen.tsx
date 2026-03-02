import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import Input from '@components/Input';
import { useAuth } from '@hooks/useAuth';
import { validators } from '@utils/utils';
import RootLayout from '@layouts/RootLayout';

/**
 * login page for user login with username and password
 *
 * @returns - jsx for the login page
 */
const LoginScreen = () => {
  const [formData, setFormData] = useState({ username: '', password: '' }); // login form data
  const [touched, setTouched] = useState({ username: false, password: false });
  const { login, error, isLoading } = useAuth(); // auth context
  const navigate = useNavigate(); // navigation to navigate user to home

  const errors = {
    username: validators.username(formData.username),
    password: validators.password(formData.password),
  };

  /**
   * handles input change and set the state
   *
   * @param e - input change event
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  /**
   * calls the login function and loges user in
   *
   * @param e - form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isDataValid = Object.values(errors).some(Boolean);
    if (isDataValid) return;

    try {
      await login(formData);
      setFormData({ username: '', password: '' });
      setTouched({ username: false, password: false });
      navigate('/');
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
            <Link
              className="underline underline-offset-3 decoration-underline text-highlight cursor-pointer"
              to="/resend-verification"
            >
              click here
            </Link>{' '}
            to have it resent.
          </p>
        </div>
        <form className="mt-8 flex flex-col gap-4 text-btn-hover" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleInputChange}
            error={errors.username}
            touched={touched.username}
            placeholder="Enter your username"
            required
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
            touched={touched.password}
            placeholder="Enter your password"
            required
          />
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
