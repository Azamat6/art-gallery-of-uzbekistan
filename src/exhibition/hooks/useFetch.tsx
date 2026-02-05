import { useEffect, useState } from "react"

interface FetchResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

function useFetch<T = unknown>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

useEffect(() => {
  let ignore = false;

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      if (!ignore) setData(json);
    } catch (err) {
      if (!ignore) setError(err as Error);
    } finally {
      if (!ignore) setLoading(false);
    }
  };

  fetchData();
  return () => {
    ignore = true;
  };
}, [url]);


  return { data, loading, error }
}

export default useFetch
