  import React from 'react'
  import { Link } from 'react-router-dom'
  export default function Cart({movie}) {
    const {poster_path, title, id, overview} = movie;
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/movie/${id}`}>
            <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        </Link>
        <div className="p-5">
            <Link to={`/movie/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
        </div>
      </div>
    )
  }
