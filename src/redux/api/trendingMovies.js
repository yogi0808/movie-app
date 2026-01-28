import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const trendingMovies = createApi({
  reducerPath: "trendingMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/trending/all/", headers: {
      authorization: import.meta.env.VITE_TOKEN
    }
  }),
  endpoints: (build) => ({
    getTrendingMoviesByDay: build.query({
      query: (param) => param,
      transformResponse: (response, meta, arg) => response.results,
      transformErrorResponse: (response, meta, arg) => response.data
    })
  })
})

export const { useGetTrendingMoviesByDayQuery } = trendingMovies

export default trendingMovies