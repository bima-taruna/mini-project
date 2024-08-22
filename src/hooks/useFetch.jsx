import { useEffect, useState } from "react";

const cache = {};

function useFetch(apiUrl) {
  const [groupData, setGroupData] = useState(cache[apiUrl] || null);
  const [loading, setLoading] = useState(!cache[apiUrl]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (cache[apiUrl]) {
        setGroupData(cache[apiUrl]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${import.meta.env.VITE_TOKEN}`,
          },
          redirect: "follow",
        });
        if (!response.ok) {
          throw new Error("There is something wrong with your network");
        }
        const result = await response.json();
        cache[apiUrl] = result;
        setGroupData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(apiUrl);
  }, [apiUrl]);

  return {
    groupData,
    loading,
    error,
    setGroupData,
  };
}

export default useFetch;
