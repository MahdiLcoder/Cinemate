import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieLists from '../Pages/MovieLists';
import MovieDetails from '../Pages/MovieDetails';
import Search from '../Pages/Search';
import PageNotFound from '../Pages/PageNotFound';

// api key
// 3a34276ccb3825166b2ac61cb73b2efb

// https://api.themoviedb.org/3/movie/popular?api_key=3a34276ccb3825166b2ac61cb73b2efb
// https://api.themoviedb.org/3/movie/top_rated?api_key=3a34276ccb3825166b2ac61cb73b2efb
// https://api.themoviedb.org/3/movie/upcoming?api_key=3a34276ccb3825166b2ac61cb73b2efb
// https://api.themoviedb.org/3/search/movie?api_key=3a34276ccb3825166b2ac61cb73b2efb&query=matrix
// https://api.themoviedb.org/3/movie/550?api_key=3a34276ccb3825166b2ac61cb73b2efb

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MovieLists />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movies/popular" element={<MovieLists />} />
      <Route path="/movies/top" element={<MovieLists />} />
      <Route path="/movies/upcoming" element={<MovieLists />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
