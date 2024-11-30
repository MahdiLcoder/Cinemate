import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieLists from '../Pages/MovieLists'
import MovieDetails from '../Pages/MovieDetails'
import Search from '../Pages/Search'
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieLists />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies/Popular" element={<MovieLists />} />
        <Route path="/movie/top" element={<MovieLists />} />
        <Route path="/movie/upcoming" element={<MovieLists />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
