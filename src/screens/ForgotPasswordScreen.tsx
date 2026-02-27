import { useState } from 'react';
import RootLayout from '@layouts/RootLayout';
import { useAuth } from '@hooks/useAuth';
import { Link } from 'react-router';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const { forgotPassword, error, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setMessage('If that email is registered, you will receive a reset link shortly.');
    } catch (err) {
      console.error('Forgot password request failed', err);
    }
  };

  return (
    <RootLayout>
      <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Forgot Password</h1>
          {error && <p className="text-red-500 font-semibold">{error}</p>}
          {message && <p className="text-green-500 font-semibold">{message}</p>}
          <p>Please enter your email address and we will send you a link to reset your password.</p>
        </div>
        <form className="mt-8 flex flex-col gap-4 text-btn-hover" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
              placeholder="Enter your email"
              required
            />
          </label>
          <div className="flex gap-4 items-center mt-3.5">
            <button
              type="submit"
              className="rounded-lg px-3 py-1.5 bg-date-picker cursor-pointer disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
            <Link
              to="/login"
              className="underline underline-offset-3 decoration-underline text-highlight cursor-pointer"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

export default ForgotPasswordScreen;
