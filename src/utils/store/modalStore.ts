import { create } from 'zustand';

interface ModalState {
  modal: string;
  isModalOpened: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modal: '',
  isModalOpened: false,
  openModal: () => set({ isModalOpened: true }),
  closeModal: () => set({ isModalOpened: false }),
}));
