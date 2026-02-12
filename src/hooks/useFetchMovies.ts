import { useEffect, useState } from "react";

interface returnType {
  data: any
  isLoading: boolean
  error: string | null
}

/**
 *
 * @param {string} endpoint - endpoint to fetch the data from
 * @returns - an object with data loading state and the error is accurse
 */
function useFetchMovies(endpoint: string): returnType {
  const [data, setData] = useState<any>(null); // data that comes from the api request
  const [isLoading, setIsLoading] = useState<boolean>(true); // loading state for data fetch wait
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    /**
     * this function is responsible for fetching the data and changing the states accordingly
     */
    const fetchData = async () => {
      try {
        const res: Response = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
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
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Unknown error.")
        }
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
