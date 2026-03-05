import { BrowserRouter, Route, Routes } from 'react-router';

import TvScreen from '@screens/TvScreen';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import MoviesScreen from '@screens/MoviesScreen';
import ReviewScreen from '@screens/ReviewScreen';
import DetailsScreen from '@screens/DetailsScreen';
import RegisterScreen from '@screens/RegisterScreen';
import ResetPasswordScreen from '@screens/ResetPasswordScreen';
import ForgotPasswordScreen from '@screens/ForgotPasswordScreen';
import ResendVerificationScreen from '@screens/ResendVerificationScreen';
import NotFoundScreen from '@screens/NotFoundScreen';

/**
 * this is a root component of the application hear i created and and setup the routers
 *
 * @returns - created routers
 */
const App: React.FC = () => {
  return (
    <div className="bg-wrapper">
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
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
