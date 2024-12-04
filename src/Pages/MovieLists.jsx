import React from 'react';
import Cart from '../Components/Cart';
import useFetch from '../Hooks/useFetch';
export default function MovieLists() {
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a34276ccb3825166b2ac61cb73b2efb&page=1';
  
  const { data: movies, loading } = useFetch(API_URL);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Cart key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}