import { Link, useNavigate } from 'react-router';
import { FaCheck } from 'react-icons/fa6';
import { useState } from 'react';

import RootLayout from '@layouts/RootLayout';
import { registerBenefits } from '@constants/index';
import { useAuth } from '@hooks/useAuth';

/**
 * register page for user registration with username, password, and email
 *
 * @returns - jsx for register page
 */
const RegisterScreen = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  }); // register form data
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // success message
  const [errorMessage, setErrorMessage] = useState<string>();
  const { register, error, isLoading } = useAuth(); // auth context
  const navigate = useNavigate(); // navigation for user redirection

  /**
   * handles input change and set the state
   *
   * @param e - input change event
   */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * calls the register function and loges user in
   *
   * @param e - form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    try {
      await register({
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
      });
      setSuccessMessage('Registration successful! Please check your email for verification.');
      setTimeout(() => navigate('/login'), 5000);
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <RootLayout>
      <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5 flex gap-7.5 max-md:flex-wrap">
        <div className="border border-search-border rounded-lg shadow-card md:min-w-65 w-full md:w-65 overflow-hidden">
          <h1 className="p-5 text-xl text-white bg-highlight font-semibold leading-4.75">
            Benefits of being a member
          </h1>
          <ul className="py-2 flex flex-col gap-2.5">
            {registerBenefits.map((item, idx) => (
              <li className="px-5 flex gap-2.5" key={idx}>
                <FaCheck className="text-lg min-w-4.5 w-4.5 mt-1" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">Sign up for an account</h1>
            {error || errorMessage ? (
              <p className="text-red-500 font-semibold">{error || errorMessage}</p>
            ) : (
              ''
            )}
            {successMessage && <p className="text-green-500 font-semibold">{successMessage}</p>}
            <p>
              Signing up for an account is free and easy. Fill out the form below to get started.
              JavaScript is required to continue.
            </p>
          </div>
          <form className="mt-8 flex flex-col gap-4 text-btn-hover" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleInput}
                className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
                placeholder="Enter your username"
                required
              />
            </label>
            <label className="flex flex-col">
              <span>Password (6 characters minimum)</span>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleInput}
                className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
                placeholder="Enter new password"
                required
              />
            </label>
            <label className="flex flex-col">
              <span>Password Confirm</span>
              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleInput}
                className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
                placeholder="Confirm password"
                required
              />
            </label>
            <label className="flex flex-col">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleInput}
                className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
                placeholder="Enter your email"
                required
              />
            </label>
            <p className="mt-3.5">
              By clicking the &quot;Sign up&quot; button below, I certify that I have read and agree
              to the TMDB terms of use and privacy policy.
            </p>
            <div className="flex gap-4 items-center mt-3.5">
              <button
                type="submit"
                className="rounded-lg px-3 py-1.5 bg-date-picker cursor-pointer disabled:bg-gray-400"
                disabled={isLoading}
              >
                {isLoading ? 'Signing up...' : 'Sign Up'}
              </button>
              <Link
                to="/"
                className="underline underline-offset-3 decoration-underline text-highlight cursor-pointer"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </RootLayout>
  );
};

export default RegisterScreen;
