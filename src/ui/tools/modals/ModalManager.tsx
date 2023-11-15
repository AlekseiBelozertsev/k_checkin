import { useModalStore } from '@/utils/store/modalStore';
import React from 'react';
import AddPlaceModal from '@/components/modals/AddPlaceModal';

type ModalManagerProps = {
  isMobile: boolean;
};
const ModalManager: React.FC<ModalManagerProps> = ({ isMobile }) => {
  const modal = useModalStore((state) => state.modal);
  const handleModaClose = useModalStore((state) => state.closeModal);
  if (typeof window !== 'undefined') {
    switch (modal) {
      case 'add-place-modal':
        return (
          <AddPlaceModal
            isMobile={isMobile}
            onClose={() => handleModaClose('add-place-modal')}
          />
        );
    }
  }
};

export default ModalManager;
