import { create } from 'zustand';
import { Place, usePlaceStore } from './placeStore';

export interface MapFiltersType {
  name: string;
  isActive: boolean;
}

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
  currentCenter: [number, number];
  setCurrentCenter: (place: Place) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  isMapLoaded: boolean | undefined;
  onMapLoad: () => void;
}

export const useMapStore = create<MapStoreType>((set, get) => ({
  currentCenter: [14.41854, 50.073658],
  setCurrentCenter: (place) =>
    set({ currentCenter: [place.coordinates[1], place.coordinates[0]] }),
  zoom: 11,
  setZoom: (zoom) => set(() => ({ zoom: zoom })),
  isMapLoaded: false,
  onMapLoad: () => set({ isMapLoaded: true }),
}));
