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
//https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&sort_by=primary_release_date.asc&include_adult=false&include_video=false&page=1
export default function AllRoutes() {
  return (
    <div className='dark:bg-slate-800'>
      <Routes>
      <Route path="/" element={<MovieLists api="/movie/now_playing" />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movies/popular" element={<MovieLists api="/movie/popular" />} />
      <Route path="/movies/top" element={<MovieLists api="/movie/top_rated"/>} />
      <Route path="/movies/upcoming" element={<MovieLists api="/movie/upcoming" />} />
      <Route path="/search" element={<Search  />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  );
}
