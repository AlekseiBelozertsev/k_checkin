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
  modalStyles: ModalStylesType;
  isModalOpened: boolean;
  openModal: (id: 'show-all-modal' | 'add-place-modal') => void;
  closeModal: (id: 'show-all-modal' | 'add-place-modal') => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modal: '',
  isModalOpened: false,
  openModal: (id) => set({ isModalOpened: true, modal: id }),
  closeModal: (id) => set({ isModalOpened: false, modal: id }),
  modalStyles: {
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backdropFilter: `blur(10px)`,
      backgroundColor: `none`,
      zIndex: 999,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '16px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  },
}));
