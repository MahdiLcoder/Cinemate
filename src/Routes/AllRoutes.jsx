import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieLists from '../Pages/MovieLists';
import MovieDetails from '../Pages/MovieDetails';
import Search from '../Pages/Search';
import PageNotFound from '../Pages/PageNotFound';

// api key 
// 3a34276ccb3825166b2ac61cb73b2efb

export default function AllRoutes() {
  return (
    <div className='dark:bg-slate-800'>
      <Routes>
      <Route path="/" element={<MovieLists api="/movie/now_playing"  />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movies/popular" element={<MovieLists api="/movie/popular" />} />
      <Route path="/movies/top" element={<MovieLists api="/movie/top_rated"/>} />
      <Route path="/movies/upcoming" element={<MovieLists api="/movie/upcoming" />} />
      <Route path="/search" element={<Search api="/search/movie"  />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  );
}
