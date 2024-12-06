import React from 'react';
import useFetch from '../Hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import Cart from '../Components/Cart';

export default function Search({ api }) {
  const [searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");
  const { data: movies, loading } = useFetch(api, queryTerm);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center flex-wrap">
      {(movies.length > 0) ? movies.map((movie) => (
        <Cart key={movie.id} movie={movie} />
      )) : (
        <div className="flex justify-center w-full">
          <img src="https://blog.expertrec.com/wp-content/uploads/2021/01/no-result-found-768x432.jpg" alt="not found!!!" className="w-1/2" />
        </div>
      )}
    </div>
  );
}