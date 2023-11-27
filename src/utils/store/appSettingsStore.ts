import { useMediaQuery } from 'react-responsive';
import { create } from 'zustand';

interface AppSettingsStore {
  isOfflineMode: boolean;
  setIsOfflineMode: (isOfflineMode: boolean) => void;
}

export const useAppSettings = create<AppSettingsStore>((set) => ({
  isOfflineMode: false,
  setIsOfflineMode: (isOfflineMode) =>
    set(() => ({ isOfflineMode: isOfflineMode })),
}));
