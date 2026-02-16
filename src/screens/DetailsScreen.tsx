import RootLayout from '@layouts/RootLayout';
import { useParams } from 'react-router';

const DetailsScreen = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <RootLayout>
      <p>Details</p>
    </RootLayout>
  );
};

export default DetailsScreen;
