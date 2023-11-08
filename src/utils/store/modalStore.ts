import { create } from 'zustand';

type ModalStylesType = {
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
    borderRadius: string;
    marginRight: string;
    transform: string;
  };
};

interface ModalState {
  modal: string;
  isModalOpened: boolean;
  openModal: (id: 'add-place-modal') => void;
  closeModal: (id: 'add-place-modal') => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modal: '',
  isModalOpened: false,
  openModal: (id) => set({ isModalOpened: true, modal: id }),
  closeModal: (id) => set({ isModalOpened: false, modal: id }),
}));
