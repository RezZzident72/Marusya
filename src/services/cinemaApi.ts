import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Movie = {
  id: number;
  title: string;
  originalTitle: string;
  posterUrl: string;
  backdropUrl: string;
  plot: string;
  production: string;
  genres: string[];
  language: string;
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

export type MovieQueryParams = {
  id?: string;
  count?: number;
  page?: number;
  title?: string;
  genre?: string;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://cinemaguide.skillbox.cc/" }),
  endpoints: build => ({
    getMovies: build.query<Movie[], MovieQueryParams | undefined>({
      query: params => ({
        url: "/movie",
        params: params ?? {},
      })
    }),
    getGenre: build.query<string[], void>({
      query: () => ({
        url: "/movie/genres",
      })
    }),
    getFilm: build.query<Movie, string | number>({
      query: movieId => ({
        url: `/movie/${String(movieId)}`,
        params: movieId || {}
      })
    }),
    getRandomFilm: build.query<Movie, void>({
      query: () => ({
        url: `/movie/random`,
      })
    }),
    getTopFilms: build.query<Movie[], void>({
      query: () => ({
        url: `/movie/top10`,
      })
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenreQuery, useGetFilmQuery, useGetRandomFilmQuery, useGetTopFilmsQuery } = moviesApi;