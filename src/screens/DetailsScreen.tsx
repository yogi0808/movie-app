import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { apiFetch } from '@utils/utils';
import RootLayout from '@layouts/RootLayout';
import type { MovieDetailsType, TvDetailsType } from '@utils/types';
import Recommendations from '@sections/details/Recommendations';
import CastList from '@sections/details/CastList';
import Social from '@sections/details/Social';
import Media from '@sections/details/Media';
import Hero from '@sections/details/Hero';
import Season from '@sections/details/Season';
import Info from '@sections/details/Info';

const DetailsScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieDetailsType | TvDetailsType>();
  const idEndpoint = id?.replace('-', '/') || '';

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(idEndpoint);
      setData(data);
    };

    fetchData();
  }, [idEndpoint]);

  if (!data) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <div className="aspect-square w-10 border-6 border-transparent border-t-accent rounded-full animate-spin ring-6 ring-primary" />
      </section>
    );
  }

  return (
    <RootLayout>
      <Hero
        data={{
          genres: data.genres,
          tagline: data.tagline,
          overview: data.overview,
          poster_path: data.poster_path,
          vote_average: data.vote_average,
          backdrop_path: data.backdrop_path,
          runtime: 'runtime' in data ? data.runtime : 0,
          title: 'title' in data ? data.title : data.name,
          release_date: 'release_date' in data ? data.release_date : data.first_air_date,
        }}
      />
      <CastList idEndpoint={idEndpoint} />
      {'seasons' in data ? <Season data={data.seasons[data.seasons.length - 1]} /> : ''}
      <Social idEndpoint={idEndpoint} />
      <Media idEndpoint={idEndpoint} />
      <Recommendations
        movieName={'title' in data ? data.title : data.name}
        idEndpoint={idEndpoint}
      />
      <Info
        data={{
          network: 'networks' in data ? data.networks[0] : null,
          status: data.status,
          language: data.original_language,
          budget: 'budget' in data ? data.budget : null,
          revenue: 'revenue' in data ? data.revenue : null,
          type: 'type' in data ? data.type : null,
        }}
        idEndpoint={idEndpoint}
      />
    </RootLayout>
  );
};

export default DetailsScreen;
