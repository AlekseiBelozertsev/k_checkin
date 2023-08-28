import React from 'react';
import modalStyles from './styles/modal.module.scss';
import cross from '../../public/icons/cross.svg';
import Icon from './Icon';
import { Place } from '@/utils/mocks/places';
import Button from './Button';
import Search from './Search';

type ModalProps = {
  onClose: () => void;
  elements: Place[];
};

const AddPlaceModal: React.FC<ModalProps> = ({ onClose, elements }) => {
  return (
    <div className={modalStyles.main}>
      <div className={modalStyles.inner}>
        <div className={modalStyles.header}>
          <h2 className={modalStyles.heading}>{`Search`}</h2>
          <div onClick={() => onClose()} className={modalStyles.closeBtn}>
            <Icon height={12} width={12} src={cross} />
          </div>
        </div>
        <div style={{width: '100%'}}>
            <Search />
        </div>
      </div>
      <Button text={`Submit`} onClick={() => null} />
    </div>
  );
};

export default AddPlaceModal;
