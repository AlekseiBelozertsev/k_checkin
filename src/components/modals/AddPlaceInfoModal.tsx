import React from 'react';
import modalStyles from './modal.module.scss';
import Button from '../Button';
import { useInputValueStore } from '@/utils/store/inputValueStore';
import { usePlaceStore } from '@/utils/store/placeStore';

type ModalProps = {
  onClose: () => void;
};

const AddPlaceInfoModal: React.FC<ModalProps> = ({ onClose }) => {
  const { value, setValue, date, setDate } = useInputValueStore();
  const { currentPageID } = usePlaceStore();
  const { updatePlace } = usePlaceStore();
  const handleSubmit = () => {
    updatePlace(currentPageID, value, date);
    onClose();
  };
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
                <input
                  type="date"
                  id="eventDate"
                  onChange={(e) => setDate(e.target.value)}
                  name="eventDate"
                  required
                />
              </label>
            </form>
          </div>
          <div className={modalStyles.buttonsWrapper}>
            <Button
              text={`Skip notes`}
              onClick={() => onClose()}
              type={'primary'}
            />
            <Button
              text={`Submit`}
              onClick={() => handleSubmit()}
              type={'secondary'}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default AddPlaceInfoModal;
