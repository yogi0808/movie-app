import { BrowserRouter, Route, Routes } from 'react-router';

import HomeScreen from '@screens/HomeScreen';
import MoviesScreen from '@screens/MoviesScreen';
import DetailsScreen from '@screens/DetailsScreen';
import TvScreen from '@screens/TvScreen';
import ReviewScreen from '@screens/ReviewScreen';
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';
import ForgotPasswordScreen from '@screens/ForgotPasswordScreen';
import ResetPasswordScreen from '@screens/ResetPasswordScreen';
import ResendVerificationScreen from '@screens/ResendVerificationScreen';

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
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/resend-verification" element={<ResendVerificationScreen />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />
        <Route path="/movies" element={<MoviesScreen />} />
        <Route path="/details/:id" element={<DetailsScreen />} />
        <Route path="/review/:reviewId" element={<ReviewScreen />} />
        <Route path="/tv" element={<TvScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
