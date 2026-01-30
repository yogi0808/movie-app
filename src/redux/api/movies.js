import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

/**
 * this is a movie slice for the redux store to use the movie api
 */
const movies = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL, headers: {
      authorization: import.meta.env.VITE_TOKEN
    }
  }), // base query and header setup
  endpoints: (build) => ({
    /**
     * endpoint for trending movie fetching
     */
    getTrendingMovies: build.query({
      query: (param) => `trending/all/${param}`, // query builder with param
    }),
    getMovies: build.query({
      query: (endpoint) => endpoint, // query builder with endpoint
    })
  })
})

export const { useGetTrendingMoviesQuery, useGetMoviesQuery } = movies

export default movies