import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import RootLayout from '@layouts/RootLayout';
import { useAuth } from '@hooks/useAuth';

/**
 * displays the form for password reset in reset-password route
 *
 * @returns - jsx for reset password screen
 */
const ResetPasswordScreen = () => {
  const [searchParams] = useSearchParams(); // getting search params
  const token = searchParams.get('token'); // getting token from search params
  const [password, setPassword] = useState(''); // password
  const [confirmPassword, setConfirmPassword] = useState(''); // confirm password
  const [success, setSuccess] = useState(false); // tracking success response
  const { resetPassword, error, isLoading } = useAuth(); // auth context
  const navigate = useNavigate(); // navigation for user redirection
  const [errorMessage, setErrorMessage] = useState<string>();

  /**
   * calls the  function and loges user in
   *
   * @param e - form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (!token) {
      setErrorMessage('Token is missing');
      return;
    }

    try {
      await resetPassword(token, password);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      console.error('Reset password failed', err);
    }
  };

  // display message if token is not available
  if (!token) {
    return (
      <RootLayout>
        <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5">
          <h1 className="font-semibold text-2xl text-red-500">Invalid Request</h1>
          <p>No reset token provided. Please use the link from your email.</p>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Reset Your Password</h1>
          {error || errorMessage ? (
            <p className="text-red-500 font-semibold">{error || errorMessage}</p>
          ) : (
            ''
          )}
          {success && (
            <p className="text-green-500 font-semibold">
              Password reset successfully! Redirecting to login...
            </p>
          )}
          <p>Please enter your new password below.</p>
        </div>
        <form className="mt-8 flex flex-col gap-4 text-btn-hover" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span>New Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
              placeholder="Enter new password"
              required
            />
          </label>
          <label className="flex flex-col">
            <span>Confirm New Password</span>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
              placeholder="Confirm new password"
              required
            />
          </label>
          <div className="flex gap-4 items-center mt-3.5">
            <button
              type="submit"
              className="rounded-lg px-3 py-1.5 bg-date-picker cursor-pointer disabled:bg-gray-400"
              disabled={isLoading || success}
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

export default ResetPasswordScreen;
