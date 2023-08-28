import { create } from 'zustand';

interface ModalState {
  modal: string;
  isModalOpened: boolean;
  openModal: (id: 'show-all-modal' | 'add-place-modal') => void;
  closeModal: (id: 'show-all-modal' | 'add-place-modal') => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modal: '',
  isModalOpened: false,
  openModal: (id) => set({ isModalOpened: true, modal: id }),
  closeModal: (id) => set({ isModalOpened: false, modal: id }),
}));
