import { create } from 'zustand';
import { Place, places } from '../mocks/places';

interface MapStoreType {
  places: Place[];
  addPlace: (place: Place) => void;
}

export const useMapStore = create<MapStoreType>((set) => ({
  places: places,
  addPlace: (place) => set((state) => ({ places: [...state.places, place] })),
}));
