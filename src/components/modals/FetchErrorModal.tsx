import React from 'react';
import modalStyles from './modal.module.scss';
import cross from '../../../public/icons/cross.svg';
import Icon from '../Icon';
import emptyIcon from '../../../public/emptyIcon.svg';

type ModalProps = {
  onClose: () => void;
};

const FetchErrorModal: React.FC<ModalProps> = ({ onClose }) => {
  if (typeof window !== 'undefined') {
    return (
      <div className={modalStyles.main}>
        <div className={modalStyles.inner}>
          <div className={modalStyles.header}>
            <div />
            <div onClick={() => onClose()} className={modalStyles.closeBtn}>
              <Icon height={12} width={12} src={cross} />
            </div>
          </div>
          <div className={modalStyles.columnCenter}>
            <h2 className={modalStyles.heading}>{`Connection error...`}</h2>
            <Icon height={120} width={120} src={emptyIcon}></Icon>
          </div>
        </div>
      </div>
    );
  }
};

export default FetchErrorModal;
