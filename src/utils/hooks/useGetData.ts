import { useEffect, useState } from 'react';
import { Place } from '../store/mapStore';

export const useFetch = (url: string) => {
  const [data, setData] = useState<Place[]>();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return data;
};
