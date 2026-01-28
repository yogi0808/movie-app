import { configureStore } from "@reduxjs/toolkit";
import movies from "./api/movies"

const store = configureStore({
  reducer: {
    [movies.reducerPath]: movies.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movies.middleware),
})

export default store