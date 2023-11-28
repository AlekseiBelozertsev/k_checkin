import { create } from 'zustand';

export type Place = {
  id: string;
  name: string;
  country: string;
  address: string;
  coordinates: [number, number];
  description: string;
  tripDate: string;
  createdAt: string;
  isInfoAdded: boolean;
};

type PlaceStoreType = {
  places: Place[];
  setPlaces: (places: Place[]) => void;
  addPlace: (place: Place) => void;
  postData: (url: string, data: Place) => void;
  getData: (url: string) => void;
};

export const usePlaceStore = create<PlaceStoreType>((set, get) => ({
  places: [],
  setPlaces: (places) => set(() => ({ places: places })),
  addPlace: (place) => set((state) => ({ places: [...state.places, place] })),
  postData: async (url, data) => {
    const places = usePlaceStore.getState().places;
    const stringifiedData = JSON.stringify(places);
    localStorage.setItem('places', stringifiedData);
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(`${err} - Data will be stored in localStorage`);
    });
  },
  getData: async (url) => {
    const localStorageData = localStorage.getItem('places');
    if (localStorageData) {
      const localStorageDataParsed = JSON.parse(localStorageData);
      set(() => ({ places: localStorageDataParsed }));
    }
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        set(() => ({ places: data }));
      })
      .catch((err) => {
        console.log(err);
      });
  },
}));
