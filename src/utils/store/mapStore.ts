import { create } from 'zustand';
import { SearchBoxRetrieveResponse } from '@mapbox/search-js-core';

export interface MapFiltersType {
  name: string;
  isActive: boolean;
}

export type Place = {
  id: string;
  name: string;
  country: string;
  address: string;
  coordinates: [number, number];
  createdAt: string;
};

export const mapFilters: MapFiltersType[] = [
  {
    name: 'Europe',
    isActive: false,
  },
  {
    name: 'Asia',
    isActive: false,
  },
  {
    name: 'Australia',
    isActive: false,
  },
  {
    name: 'North America',
    isActive: false,
  },
  {
    name: 'South America',
    isActive: false,
  },
];

interface MapStoreType {
  places: Place[];
  addPlace: (place: Place) => void;
  setPlaces: (places: Place[]) => void;
  currentCenter: [
    number,
    number,
  ];
  setCurrentCenter: (place: Place) => void;
  zoom: number;
  isMapLoaded: boolean | undefined;
  onMapLoad: () => void;
}

export const useMapStore = create<MapStoreType>((set) => ({
  places: [],
  addPlace: (place) => set((state) => ({ places: [...state.places, place] })),
  setPlaces: (places) => set(() => ({ places: places })),
  currentCenter: [14.41854, 50.073658],
  setCurrentCenter: (place) => {
    set({
      currentCenter: [place.coordinates[0], place.coordinates[1]],
    });
  },
  zoom: 11,
  isMapLoaded: false,
  onMapLoad: () => set({ isMapLoaded: true }),
}));
