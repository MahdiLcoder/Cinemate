import React from 'react';
import Cart from '../Components/Cart';
import useFetch from '../Hooks/useFetch';
import useTitle from '../Hooks/useTitle';
export default function MovieLists({api, query, title}) {

  const { data: movies, loading } = useFetch(api, query);

  useTitle({title})

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