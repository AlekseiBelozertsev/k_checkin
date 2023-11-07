import { useModalStore } from '@/utils/store/modalStore';
// import dynamic from 'next/dynamic';
import React from 'react';
import AddPlaceModal from '../../../components/modals/AddPlaceModal';
import FetchErrorModal from '@/components/modals/FetchErrorModal';

// const ShowAllModal = dynamic(() => import('../ShowAllModal'), { ssr: false });
// const AddPlaceModal = dynamic(() => import('../AddPlaceModal'), { ssr: false });
type ModalManagerProps = {
  isMobile: boolean;
};
const ModalManager: React.FC<ModalManagerProps> = ({ isMobile }) => {
  const modal = useModalStore((state) => state.modal);
  const handleModaClose = useModalStore((state) => state.closeModal);
  if (typeof window !== 'undefined') {
    switch (modal) {
      //here might come more modals if needed
      case 'add-place-modal':
        return (
          <AddPlaceModal
            isMobile={isMobile}
            onClose={() => handleModaClose('add-place-modal')}
          />
        );
        case 'fetch-error-modal':
        return (
          <FetchErrorModal onClose={() => handleModaClose('fetch-error-modal')}/>
        );
    }
  }
};

export default ModalManager;
