import React from 'react';
import useFetch from '../Hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import Cart from '../Components/Cart';
import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
export default function Search({ api }) {
  const [searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");
  const { data: movies, loading } = useFetch(api, queryTerm);

  useTitle({title: `Search: ${queryTerm}`})

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center flex-wrap">
      {(movies.length > 0) ? movies.map((movie) => (
        <Cart key={movie.id} movie={movie} />
      )) : (
        <div className='flex justify-center items-center h-screen'>
        <section className='flex flex-col justify-center px-2'>
          <div className='flex flex-col justify-center items-center my-4'>
            <p className='text-7xl font-bold text-gray-700 dark:text-white'>404, Oops! </p>
            <div className='max-w-6xl my-4 '>
            <img className='rounded' src="https://blog.expertrec.com/wp-content/uploads/2021/01/no-result-found-768x432.jpg" alt="not found!!!" />
            </div>
          </div>
          <div className='flex justify-center'>
            <Link to='/'>
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'>Back To Cinemate</button>
            </Link>
          </div>
        </section>
      </div>
      )}
    </div>
  );
}