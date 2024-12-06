import React from 'react'

export default function useFetch(api, query="") {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const url = `https://api.themoviedb.org/3${api}?api_key=3a34276ccb3825166b2ac61cb73b2efb&query=${query}`;

  React.useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(url);
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
  }, [url]); 

  return { data, loading }
}