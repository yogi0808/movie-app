import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

import Input from '@components/Input';
import { useAuth } from '@hooks/useAuth';
import { validators } from '@utils/utils';
import RootLayout from '@layouts/RootLayout';

/**
 * displays the form for password reset in reset-password route
 *
 * @returns - jsx for reset password screen
 */
const ResetPasswordScreen = () => {
  const [searchParams] = useSearchParams(); // getting search params
  const token = searchParams.get('token'); // getting token from search params
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  }); // formData
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false,
  });
  const [success, setSuccess] = useState(false); // tracking success response
  const { resetPassword, error, isLoading } = useAuth(); // auth context
  const navigate = useNavigate(); // navigation for user redirection
  const [errorMessage, setErrorMessage] = useState<string>();

  const errors = {
    password: validators.password(formData.password),
    confirmPassword: validators.cPassword(formData.confirmPassword, formData.password),
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
   * calls the  function and loges user in
   *
   * @param e - form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setErrorMessage('Token is missing');
      return;
    }

    const isDataValid = Object.values(errors).some(Boolean);
    if (isDataValid) return;

    try {
      await resetPassword(token, formData.password);
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
          {(error || errorMessage) && (
            <p className="text-red-500 font-semibold">{error || errorMessage}</p>
          )}
          {success && (
            <p className="text-green-500 font-semibold">
              Password reset successfully! Redirecting to login...
            </p>
          )}
          <p>Please enter your new password below.</p>
        </div>
        <form className="mt-8 flex flex-col gap-4 text-btn-hover" onSubmit={handleSubmit}>
          <Input
            type="password"
            label="New Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
            touched={touched.password}
            placeholder="Enter new password"
            required
          />
          <Input
            type="password"
            label="Confirm New Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            placeholder="Confirm new password"
            required
          />
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
