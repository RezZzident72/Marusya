import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/home-page/HomePage';
import { FilmPage } from './pages/film-page/FilmPage';
import { FavoriteFilmsPage } from './pages/favorite-films-page/FavoriteFilmsPage';
import { GenrePage } from './pages/genre-page/GenrePage';
import { UserInfoPage } from './pages/user-info-page/UserInfoPage';
import { FilmListPage } from './pages/film-list-page/FilmListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/movie/:id', element: <FilmPage /> },
      { path: '/favorites', element: <FavoriteFilmsPage /> },
      { path: '/genres', element: <GenrePage /> },
      { path: '/genres/:genreId', element: <FilmListPage /> },
      { path: '/profile', element: <UserInfoPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}
