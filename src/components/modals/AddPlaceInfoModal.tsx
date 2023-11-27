import React from 'react';
import modalStyles from './modal.module.scss';
import Button from '../Button';
import { useInputValueStore } from '@/utils/store/inputValueStore';

type ModalProps = {
  onClose: () => void;
};

const AddPlaceInfoModal: React.FC<ModalProps> = ({ onClose }) => {
  const { value, setValue } = useInputValueStore();
  if (typeof window !== 'undefined') {
    return (
      <div className={modalStyles.main}>
        <div className={modalStyles.inner}>
          <div className={modalStyles.header}>
            <h2 className={modalStyles.heading}>{`Add notes`}</h2>
          </div>
          <div className={modalStyles.innerWrapper}>
            <form className={modalStyles.addPlaceForm} onSubmit={() => null}>
              <label>
                Describe visited place:
                <textarea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </label>
              <label>
                Select trip date:
                <input type="date" id="eventDate" name="eventDate" required />
              </label>
            </form>
          </div>
          <div className={modalStyles.buttonsWrapper}>
            <Button text={`Skip notes`} type={'primary'} />
            <Button text={`Submit`} type={'secondary'} />
          </div>
        </div>
      </div>
    );
  }
};

export default AddPlaceInfoModal;
