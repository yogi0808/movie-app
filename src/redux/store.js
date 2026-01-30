import { configureStore } from "@reduxjs/toolkit";
import movies from "./api/movies"

/**
 * this is a store for redux provider that provides all the action and the data application needed
 */
const store = configureStore({
  reducer: {
    [movies.reducerPath]: movies.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movies.middleware), // middleware for the movies query to get the data from the cache
})

export default store