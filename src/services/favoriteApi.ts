import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie } from "./cinemaApi";

// Получение списка
export type FavoriteResponse = Movie[];

//Добавление фильма
export type AddFavoritesRequest = {
    movieId: string;
}

export type AddFavoriteResponse = {
    favorites: string[];
    surname: string;
    name: string;
    email: string;
    error?: string;
}

//Удаление фильма
export type DeleteFavoritesResponse = {
    favorites: string[];
    surname: string;
    name: string;
    email: string;
}

export type DeleteFavoritesRequest = {
    movieId: number;
}

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),
  tagTypes: ["UserFavorites"],
  endpoints: build => ({
    getFavorites: build.query<Movie[], void>({
      query: () => ({
        url: "favorites",
        method: "GET",
      }),
      providesTags: ["UserFavorites"],
    }),
    addFavorites: build.mutation<AddFavoriteResponse, AddFavoritesRequest>({
      query: ({ movieId }) => {
        const body = new URLSearchParams()
        body.append("id", movieId)

        return {
          url: "favorites",
          method: "POST",
          body: body,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      },
      invalidatesTags: ["UserFavorites"],
    }),
    deleteFavorites: build.mutation<
      DeleteFavoritesResponse,
      DeleteFavoritesRequest
    >({
      query: ({ movieId }) => ({
        url: `favorites/${String(movieId)}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UserFavorites"],
    }),
  }),
})

export const { useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation } = favoriteApi