import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { apiFetch } from '@utils/utils';
import RootLayout from '@layouts/RootLayout';
import type { MovieDetailsType } from '@utils/types';
import Recommendations from '@sections/details/Recommendations';
import CastList from '@sections/details/CastList';
import Social from '@sections/details/Social';
import Media from '@sections/details/Media';

const DetailsScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieDetailsType>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(`${id?.replace('-', '/')}`);
      setData(data);
    };

    fetchData();
  }, [id]);

  if (!data) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <div className="aspect-square w-10 border-6 border-transparent border-t-accent rounded-full animate-spin ring-6 ring-primary" />
      </section>
    );
  }

  return (
    <RootLayout>
      {/* <Hero data={data} /> */}
      <CastList idEndpoint={id?.replace('-', '/') || ''} />
      <Social idEndpoint={id?.replace('-', '/') || ''} />
      <Media idEndpoint={id?.replace('-', '/') || ''} />
      <Recommendations movieName={data.title} idEndpoint={id?.replace('-', '/') || ''} />
    </RootLayout>
  );
};

export default DetailsScreen;
