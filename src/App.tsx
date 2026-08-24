import "./App.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { lazy, Suspense } from "react";
import { Loader } from "./components/loader/Loader.tsx";

const LazyHomePage = lazy(() => import('./pages/home-page/HomePage'))
const LazyGenresPage = lazy(() => import('./pages/genre-page/GenrePage.tsx'))
const LazyProfilePage = lazy(() => import('./pages/profile/Profile.tsx'))
const LazyFilmInfoPage = lazy(() => import('./pages/film-info-page/FilmInfoPage.tsx'))
const LazyFilmListPage = lazy(() => import('./pages/film-list-page/FilmListPage.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Suspense fallback={<Loader value="Загрузка фильмов..."/>}><LazyHomePage /></Suspense> },
      { path: '/genres', element: <Suspense fallback={<Loader value="Загрузка жанров..."/>}><LazyGenresPage /></Suspense> },
      { path: '/profile', element: <Suspense fallback={<Loader value="Загрузка профиля..."/>}><LazyProfilePage /></Suspense>  },
      { path: '/:movieId', element: <Suspense fallback={<Loader value="Загрузка фильма..."/>}><LazyFilmInfoPage /></Suspense> },
      { path: '/genres/filmList/:genreName', element: <Suspense fallback={<Loader value="Загрузка списка..."/>}><LazyFilmListPage /></Suspense> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}
