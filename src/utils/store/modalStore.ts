import { create } from 'zustand';

export type ModalStylesType = {
  overlay: {
    top: number;
    left: number;
    right: number;
    bottom: number;
    backdropFilter: string;
    backgroundColor: string;
    zIndex: number;
  };
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    borderRadius: string | number;
    marginRight: string | number;
    transform: string;
  };
};

interface ModalState {
  modal: string;
  isModalOpened: boolean;
  openModal: (id: 'add-place-modal' | 'add-place-info-modal') => void;
  closeModal: (id: 'add-place-modal' | 'add-place-info-modal') => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modal: '',
  isModalOpened: false,
  openModal: (id) => set({ isModalOpened: true, modal: id }),
  closeModal: (id) => set({ isModalOpened: false, modal: id }),
}));
