import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  posterUrl: string;
  backdropUrl: string;
  plot: string;
  production: string;
  genres: string[];
  languages: string[];
  countriesOfOrigin: string[];
  cast: string[];
  director: string;
  runtime: number;
  releaseDate: string;
  releaseYear: number;
  tmdbRating: number;
  searchL: string;
  homepage: string;
  status: string;
  budget: string;
  revenue: string;
  awardsSummary: string;
  trailerUrl: string;
  trailerYouTubeId: string;
}

export interface MovieQueryParams {
  count?: number;
  page?: number;
  title?: string;
  genre?: string;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi", 
  baseQuery: fetchBaseQuery({ baseUrl: "https://cinemaguide.skillbox.cc/" }),
  endpoints: build => ({
    getMovies: build.query<Movie[], MovieQueryParams | void>({
      query: params => ({
        url: "/movie",
        params: params || {},
    }) 
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;