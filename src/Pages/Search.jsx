import React from 'react'
import useFetch from '../Hooks/useFetch'
export default function Search({api}) {
  const { data: movies, loading } = useFetch(api);
   

  return (
    <div>
      
    </div>
  )
}
