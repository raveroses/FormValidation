import { useState } from "react";
import { toast } from "react-toastify";

export default function useFetch(url) {
  const [dataSetter, setDataSetter] = useState([]);

  const [loading, setLoading] = useState(false);
  const fetchMovie = async () => {
    setLoading(true);
    console.log("working...");
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Error ${response.status}: ${response.statusText}`);

      const data = await response.json();
      console.log(data);
      setDataSetter((prev) => [...prev, data]);
    } catch (err) {
      toast.error(err);
      console.log(err.message);
    }
  };
  return { dataSetter, loading, fetchMovie };
}
