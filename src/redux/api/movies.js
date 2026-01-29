import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const movies = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL, headers: {
      authorization: import.meta.env.VITE_TOKEN
    }
  }),
  endpoints: (build) => ({
    getTrendingMovies: build.query({
      query: (param) => `trending/all/${param}`,
      transformResponse: (response, meta, arg) => response.results,
      transformErrorResponse: (response, meta, arg) => response.data
    }),
    getMovies: build.query({
      query: (endpoint) => endpoint,
      transformResponse: (response, meta, arg) => response.results,
      transformErrorResponse: (response, meta, arg) => response.data
    })
  })
})

export const { useGetTrendingMoviesQuery, useGetMoviesQuery } = movies

export default movies