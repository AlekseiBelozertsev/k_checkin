import { create } from 'zustand';

interface AppSettingsStore {
  isOfflineMode: boolean;
  setIsOfflineMode: (isOfflineMode: boolean) => void;
}

export const useAppSettings = create<AppSettingsStore>((set) => ({
  //2
  isOfflineMode: false,
  setIsOfflineMode: (isOfflineMode) =>
    set(() => ({ isOfflineMode: isOfflineMode })),
}));
