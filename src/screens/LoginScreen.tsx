import RootLayout from '@layouts/RootLayout';

/**
 * login page for user login with username and password
 *
 * @returns - jsx for the login page
 */
const LoginScreen = () => {
  return (
    <RootLayout>
      <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Login to your Account</h1>
          <p>
            In order to use the editing and rating capabilities of TMDB, as well as get personal
            recommendations you will need to login to your account. If you do not have an account,
            registering for an account is free and simple.{' '}
            <span className="underline underline-offset-3 decoration-underline text-highlight">
              Click here
            </span>{' '}
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
        <form className="mt-8 flex flex-col gap-4 text-btn-hover">
          <label className="flex flex-col">
            <span>Username</span>
            <input
              type="text"
              name="username"
              className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
              placeholder="Enter your username"
            />
          </label>
          <label className="flex flex-col">
            <span>Password</span>
            <input
              type="password"
              name="password"
              className="px-3 py-1.5 rounded-lg border border-search-border focus:outline-none focus:border-highlight"
              placeholder="Enter your password"
            />
          </label>
          <div className="flex gap-4 items-center mt-3.5">
            <button type="submit" className="rounded-lg px-3 py-1.5 bg-date-picker cursor-pointer">
              Login
            </button>
            <p className="underline underline-offset-3 decoration-underline text-highlight cursor-pointer">
              Reset Password
            </p>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

export default LoginScreen;
