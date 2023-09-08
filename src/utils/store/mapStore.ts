import { create } from 'zustand';
import { Place } from '../mocks/places';

interface MapStoreType {
  places: Place[];
  addPlace: (place: Place) => void;
}

export const useMapStore = create<MapStoreType>((set) => ({
  places: [],
  addPlace: (place) => set({}),
}));
