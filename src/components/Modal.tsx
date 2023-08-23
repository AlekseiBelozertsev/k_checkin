import React from 'react';
import modalStyles from './styles/modal.module.scss';
import cross from '../../public/icons/cross.svg';
import Icon from './Icon';
import { Place } from '@/utils/mocks/places';
import ModalList from './ModalList';
import Button from './Button';

type ModalProps = {
  onClose: () => void;
  elements: Place[];
};

const ModalComponent: React.FC<ModalProps> = ({ onClose, elements }) => {
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
      <Button onClick={() => null} />
    </div>
  );
};

export default ModalComponent;
