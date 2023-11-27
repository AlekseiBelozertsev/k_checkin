import React from 'react';
import modalStyles from './modal.module.scss';
import cross from '../../../public/icons/cross.svg';
import Icon from '../Icon';
// import Search from './Search';
import dynamic from 'next/dynamic';

type ModalProps = {
  onClose: () => void;
};

const SearchComponent = dynamic(() => import('../SearchBox'), { ssr: false });

const AddPlaceModal: React.FC<ModalProps> = ({ onClose }) => {
  if (typeof window !== 'undefined') {
    return (
      <div className={modalStyles.main}>
        <div className={modalStyles.inner}>
          <div className={modalStyles.header}>
            <h2 className={modalStyles.heading}>{`Go for it`}</h2>
            <div onClick={() => onClose()} className={modalStyles.closeBtn}>
              <Icon height={12} width={12} src={cross} />
            </div>
          </div>
          <div className={modalStyles.innerWrapper}>
            <SearchComponent />
          </div>
        </div>
      </div>
    );
  }
};

export default AddPlaceModal;
