import React from 'react';
import Cart from '../Components/Cart';
import useFetch from '../Hooks/useFetch';
export default function MovieLists({api, query}) {

  const { data: movies, loading } = useFetch(api, query);


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