import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { apiFetch } from '@utils/utils';
import Hero from '@sections/details/Hero';
import RootLayout from '@layouts/RootLayout';
import type { MovieDetailsType } from '@utils/types';

const DetailsScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieDetailsType>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(`${id?.replace('-', '/')}`);
      console.log(data);
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
      <Hero data={data} />
    </RootLayout>
  );
};

export default DetailsScreen;
