import { useEffect, useState } from "react";

function useFetchMovies(endpoint) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
          method: "GET",
          headers: {
            authorization: import.meta.env.VITE_TOKEN,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setData(data);
        }
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetchMovies;
