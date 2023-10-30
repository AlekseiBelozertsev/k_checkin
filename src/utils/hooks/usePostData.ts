import { useEffect } from 'react';
import { useMapStore } from '../store/mapStore';

export const usePostData = (url: string, postData: any) => {
  const places = useMapStore((state) => state.places);
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  }, [places]);
};
