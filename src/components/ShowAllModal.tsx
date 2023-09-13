import React from 'react';
import modalStyles from './styles/modal.module.scss';
import cross from '../../public/icons/cross.svg';
import Icon from './Icon';
import ModalList from './ModalList';
import { useMapStore } from '@/utils/store/mapStore';

type ModalProps = {
  onClose: () => void;
};

const ShowAllModal: React.FC<ModalProps> = ({ onClose }) => {
  const elements = useMapStore((state) => state.places);
  return (
    <div className={modalStyles.main}>
      <div className={modalStyles.inner}>
        <div className={modalStyles.header}>
          <h2
            className={modalStyles.heading}
          >{`All places (${elements.length})`}</h2>
          <div onClick={() => onClose()} className={modalStyles.closeBtn}>
            <Icon height={12} width={12} src={cross} />
          </div>
        </div>
        <ModalList elements={elements} />
      </div>
    </div>
  );
};

export default ShowAllModal;
