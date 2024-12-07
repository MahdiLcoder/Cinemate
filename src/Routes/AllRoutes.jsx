import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieLists from '../Pages/MovieLists';
import MovieDetails from '../Pages/MovieDetails';
import Search from '../Pages/Search';
import PageNotFound from '../Pages/PageNotFound';


export default function AllRoutes() {
  return (
    <div className='dark:bg-slate-800'>
      <Routes>
      <Route path="/" element={<MovieLists api="/movie/now_playing" title="Home" />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movies/popular" element={<MovieLists api="/movie/popular" title="Popular" />} />
      <Route path="/movies/top" element={<MovieLists api="/movie/top_rated" title="Top Rated"/>}  />
      <Route path="/movies/upcoming" element={<MovieLists api="/movie/upcoming" title="Upcoming"  />} />
      <Route path="/search" element={<Search api="/search/movie"/>} />
      <Route path="*" element={<PageNotFound title="Page not found" />} />
    </Routes>
    </div>
  );
}
