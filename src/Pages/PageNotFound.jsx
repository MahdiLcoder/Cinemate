import React from 'react'
import pageNotFound from '../assets/pagenotfound.png'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col justify-center items-center my-4'>
          <p className='text-7xl font-bold text-gray-700 dark:text-white'>404, Oops! </p>
          <div className='max-w-6xl mt-4'>
            <img className='rounded' src={pageNotFound} alt="404 page not found" />
          </div>
        </div>
        <div className='flex justify-center'>
          <Link to='/'>
             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'>Back To Cinemate</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
