import React from 'react';
import modalStyles from './modal.module.scss';
import cross from '../../../public/icons/cross.svg';
import Icon from '../../components/Icon/Icon';
// import Search from './Search';
import dynamic from 'next/dynamic';

type ModalProps = {
  onClose: () => void;
  isMobile: boolean;
};

const SearchComponent = dynamic(() => import('../../components/SearchBox/Search'), { ssr: false });

const AddPlaceModal: React.FC<ModalProps> = ({ onClose, isMobile }) => {
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              gap: '10px',
            }}
          >
            <SearchComponent />
          </div>
        </div>
      </div>
    );
  }
};

export default AddPlaceModal;
