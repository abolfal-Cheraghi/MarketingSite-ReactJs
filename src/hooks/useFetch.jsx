import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsPending(false);
      });
  }, []);

  return [data, isPending];
}
