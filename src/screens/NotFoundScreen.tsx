import RootLayout from '@layouts/RootLayout';

const NotFoundScreen = () => {
  return (
    <RootLayout>
      <div className="max-w-325 h-full mx-auto px-5 lg:px-10 py-7.5">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">
            Oops! We can&apos;t find the page you&apos;re looking for
          </h1>
          <p>
            You tried to request a page that doesn&apos;t exist. If you believe this to be in error,
            let us know
            <span className="text-highlight cursor-pointer">on the forums.</span>
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default NotFoundScreen;
