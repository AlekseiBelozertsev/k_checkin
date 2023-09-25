import { create } from 'zustand';
import { Place, places } from '../mocks/places';

interface MapStoreType {
  places: Place[];
  addPlace: (place: Place) => void;
  currentCenter: [
    number, //longitude
    number, //latitude
  ];
  setCurrentCenter: (place: Place) => void;
  zoom: number;
  isMapLoaded: boolean | undefined;
  onMapLoad: () => void;
}

export const useMapStore = create<MapStoreType>((set) => ({
  places: places,
  addPlace: (place) => set((state) => ({ places: [...state.places, place] })),
  currentCenter:
    places.length === 0
      ? [14.41854, 50.073658]
      : [
          places[places.length - 1].features[0].properties.coordinates
            .longitude,
          places[places.length - 1].features[0].properties.coordinates.latitude,
        ],
  setCurrentCenter: (place: Place) => {
    set({
      currentCenter: [
        place.features[0].properties.coordinates.longitude,
        place.features[0].properties.coordinates.latitude,
      ],
    });
  },
  zoom: 11,
  isMapLoaded: false,
  onMapLoad: () => {
    set({ isMapLoaded: true });
  },
}));
