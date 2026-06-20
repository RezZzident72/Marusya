import { configureStore } from "@reduxjs/toolkit"
import { moviesApi } from "../services/cinemaApi";
import { authApi } from "../services/authApi";
import { favoriteApi } from "../services/favoriteApi";
import modalReducer from "./slices/modalSlice";
import trailerReducer from "./slices/trailerSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    trailer: trailerReducer,
    search: searchReducer,
    
    [moviesApi.reducerPath]: moviesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(authApi.middleware)
      .concat(favoriteApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
