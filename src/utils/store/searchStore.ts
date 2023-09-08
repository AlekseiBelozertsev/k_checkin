import { create } from 'zustand';

interface SearchStoreType {
  value: string;
  setValue: (v: string) => void;
  // onPlaceSet: () => void;
}

export const useSearchStore = create<SearchStoreType>((set) => ({
  value: '',
  setValue: (v) => set({ value: v }),
  // onPlaceSet: () => {

  // }
}));
