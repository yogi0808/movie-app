import { configureStore } from "@reduxjs/toolkit";
import trendingMovies from "./api/trendingMovies"

const store = configureStore({
  reducer: {
    [trendingMovies.reducerPath]: trendingMovies.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(trendingMovies.middleware)
})

export default store