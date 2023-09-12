import { create } from 'zustand';

interface DrawerType {
  // isDrawerOpened: boolean;
  customStyles: {
    left: string;
  };
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

export const useDrawerStore = create<DrawerType>((set, get) => ({
  isDrawerOpened: true,
  customStyles: {
    left: `0`,
  },
  handleDrawerOpen: () => set({ customStyles: { left: `-97%` } }),
  handleDrawerClose: () => set({ customStyles: { left: `0` } }),
}));
