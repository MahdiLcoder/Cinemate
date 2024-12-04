import React from 'react'

export default function useFetch(URL) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const data = await res.json();
        setData(data.results);
        console.log('Fetched movies:', data.results); 
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [URL]); 

  return { data, loading }
}