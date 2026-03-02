import { useState } from 'react';
import RootLayout from '@layouts/RootLayout';
import { useAuth } from '@hooks/useAuth';
import { Link } from 'react-router';
import Input from '@components/Input';
import { validators } from '@utils/utils';

/**
 * displays the resend verification email form in resend-verification route
 *
 * @returns - jsx for resend verification screen
 */
const ResendVerificationScreen = () => {
  const [email, setEmail] = useState(''); //email
  const [message, setMessage] = useState<string | null>(null); //success message
  const { resendVerificationEmail, error, isLoading } = useAuth(); // auth context for api request
  const [touched, setTouched] = useState(false);

  const inputError = validators.email(email);

  /**
   * handles for submit and calls resend verification email function
   *
   * @param e - form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched(true);
    if (inputError) return;

    try {
      await resendVerificationEmail(email);
      setMessage('Verification email has been resent. Please check your inbox.');
    } catch (err) {
      console.error('Resend verification request failed', err);
    }
  };

  return (
    <RootLayout>
      <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Resend activation email</h1>
          {error && <p className="text-red-500 font-semibold">{error}</p>}
          {message && <p className="text-green-500 font-semibold">{message}</p>}
          <p>Missing your account verification email? Enter your email below to have it resent.</p>
        </div>
        <form className="mt-8 flex flex-col gap-4 text-btn-hover" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setTouched(true);
            }}
            error={inputError}
            touched={touched}
            placeholder="Enter your email"
            required
          />
          <div className="flex gap-4 items-center mt-3.5">
            <button
              type="submit"
              className="rounded-lg px-3 py-1.5 bg-date-picker cursor-pointer disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
            <Link
              to="/"
              className="underline underline-offset-3 decoration-underline text-highlight cursor-pointer"
            >
              cancel
            </Link>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

export default ResendVerificationScreen;
