import { create } from 'zustand';

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
  setPlaces: (places: Place[]) => void;
  addPlace: (place: Place) => void;
  currentCenter: [number, number];
  setCurrentCenter: (place: Place) => void;
  zoom: number;
  isMapLoaded: boolean | undefined;
  onMapLoad: () => void;
}

export const useMapStore = create<MapStoreType>((set, get) => ({
  places: [],
  setPlaces: (places) => set(() => ({ places: places })),
  addPlace: (place) => set((state) => ({ places: [...state.places, place] })),
  currentCenter: [14.41854, 50.073658],
  setCurrentCenter: (place) =>
    set({ currentCenter: [place.coordinates[1], place.coordinates[0]] }),
  zoom: 11,
  isMapLoaded: false,
  onMapLoad: () => set({ isMapLoaded: true }),
}));
