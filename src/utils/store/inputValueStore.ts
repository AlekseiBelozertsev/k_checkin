import { create } from 'zustand';

interface InputValueStoreType {
  value: string;
  setValue: (v: string) => void;
  date: string;
  setDate: (d: string) => void;
}

export const useInputValueStore = create<InputValueStoreType>((set) => ({
  value: '',
  setValue: (v) => set({ value: v }),
  date: '',
  setDate: (d) => set({ date: d }),
}));
