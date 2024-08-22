import { useEffect, useState } from "react";

const cache = {};

function useFetch(url, options = {}) {
  const [data, setData] = useState(cache[url] || null);
  const [loading, setLoading] = useState(!cache[url]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      if (cache[url]) {
        setData(cache[url]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("There is something wrong with your network");
        }
        const result = await response.json();
        cache[url] = result;
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
