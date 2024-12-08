import { useEffect, useState } from "react";
import axios from "axios";

const Usefetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      setDatas(res.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { datas, error, isLoading };
};

export default Usefetch;
