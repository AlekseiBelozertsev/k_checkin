import React from 'react';
import Modal from 'react-modal';
import { useModalStore } from '@/utils/store/modalStore';
import dynamic from 'next/dynamic';

const modalStyles = {
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
};

const modalStylesMobile = {
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
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    borderRadius: 0,
    marginRight: 0,
    transform: 'none',
  },
};

type ModalProps = {
  isMobile: boolean;
};

const ModalMainComponent: React.FC<ModalProps> = ({ isMobile }) => {
  const { isModalOpened } = useModalStore();
  const ModalManager = dynamic(() => import('@/ui/tools/modals/ModalManager'), {
    ssr: false,
  });

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isModalOpened}
      style={isMobile ? modalStylesMobile : modalStyles}
      contentLabel="Example Modal"
    >
      <ModalManager />
    </Modal>
  );
};

export default ModalMainComponent;
