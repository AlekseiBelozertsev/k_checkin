import { useModalStore } from '@/utils/store/modalStore';
import React from 'react';
import AddPlaceModal from '@/components/modals/AddPlaceModal';
import AddPlaceInfoModal from '@/components/modals/AddPlaceInfoModal';

const ModalManager: React.FC = () => {
  const modal = useModalStore((state) => state.modal);
  const handleModaClose = useModalStore((state) => state.closeModal);
  if (typeof window !== 'undefined') {
    switch (modal) {
      case 'add-place-modal':
        return (
          <AddPlaceModal onClose={() => handleModaClose('add-place-modal')} />
        );
      case 'add-place-info-modal':
        return (
          <AddPlaceInfoModal
            onClose={() => handleModaClose('add-place-info-modal')}
          />
        );
    }
  }
};

export default ModalManager;
