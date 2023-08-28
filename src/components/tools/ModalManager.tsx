import { places } from '@/utils/mocks/places';
import { useModalStore } from '@/utils/store/modalStore';
import React from 'react';
import AddPlaceModal from '../AddPlaceModal';
import ShowAllModal from '../ShowAllModal';

const ModalManager = () => {
  const modal = useModalStore((state) => state.modal);
  const handleModaClose = useModalStore((state) => state.closeModal);
  switch (modal) {
    case 'show-all-modal':
      return (
        <ShowAllModal
          onClose={() => handleModaClose('show-all-modal')}
          elements={places}
        />
      );
    case 'add-place-modal':
      return (
        <AddPlaceModal
          onClose={() => handleModaClose('add-place-modal')}
          elements={places}
        />
      );
  }
};

export default ModalManager;
