import { configureStore } from "@reduxjs/toolkit"
import { moviesApi } from "../services/moviesApi";

export const store = configureStore({
  reducer: {
    // Подключаем автогенерируемый редюсер нашего API
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // Добавляем middleware для кэширования и работы RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
