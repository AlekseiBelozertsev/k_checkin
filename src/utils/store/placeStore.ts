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
  getCurrentPageID: (id: string) => void;
  currentPageID: string;
  updatePlace: (id: string, description: string, tripDate: string) => void;
  setPlaces: (places: Place[]) => void;
  addPlace: (place: Place) => void;
  postData: (url: string, data: Place) => void;
  getData: (url: string) => void;
};

export const usePlaceStore = create<PlaceStoreType>((set, get) => ({
  places: [],
  setPlaces: (places) => set(() => ({ places: places })),
  currentPageID: '',
  getCurrentPageID: (id) => {
    set({ currentPageID: id });
  },
  updatePlace: (id, description, tripDate) => {
    const localStorageData = localStorage.getItem('places');
    if (localStorageData) {
      const localStorageDataParsed = JSON.parse(localStorageData);
      const places = localStorageDataParsed.map((place: Place) =>
        place.id === id
          ? (place = {
              ...place,
              description: description,
              tripDate: tripDate,
              isInfoAdded: true,
            })
          : { ...place },
      );
      const stringifiedData: string = JSON.stringify(places);
      localStorage.setItem('places', stringifiedData);
      const updatedDataParsed: Place[] = JSON.parse(localStorageData);
      set({ places: updatedDataParsed });
    }
  },
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
