import { useEffect } from "react";

const useFetch = (setState, url) => {
  const fetchInitData = async () => {
    const response = await fetch(url);
    const initialData = await response.json();
    setState(initialData);
  };

  useEffect(() => {
    fetchInitData();
  }, []);
};

export default useFetch;
