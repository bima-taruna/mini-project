import { useState } from "react";

function usePost(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${import.meta.env.VITE_TOKEN}`,
        },
        body: JSON.stringify(data),
        redirect: "follow",
      });
      if (!response.ok) {
        throw new Error("There is something wrong with your network");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    postData,
  };
}

export default usePost;
