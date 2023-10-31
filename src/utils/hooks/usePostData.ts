import { Place } from '../store/mapStore';


export const usePostData = (url: string, data: Place) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
