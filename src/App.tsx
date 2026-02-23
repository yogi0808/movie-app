import { BrowserRouter, Route, Routes } from 'react-router';

import HomeScreen from '@screens/HomeScreen';
import MoviesScreen from '@screens/MoviesScreen';
import DetailsScreen from '@screens/DetailsScreen';
import TvScreen from '@screens/TvScreen';
import ReviewScreen from '@screens/ReviewScreen';
import LoginScreen from '@screens/LoginScreen';

/**
 * this is a root component of the application hear i created and and setup the routers
 *
 * @returns - created routers
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/movies" element={<MoviesScreen />} />
        <Route path="/details/:id" element={<DetailsScreen />} />
        <Route path="/review/:reviewId" element={<ReviewScreen />} />
        <Route path="/tv" element={<TvScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
