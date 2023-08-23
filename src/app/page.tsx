'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';
import mainStyles from './main.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';
import MapComponent from '@/components/Map';
import ListComponent from '@/components/List';
import ModalComponent from '@/components/Modal';
import { places } from '@/utils/mocks/places';

const customStyles = {
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

Modal.setAppElement(`#app`);

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <section id={`app`} className={mainStyles.app}>
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={() => null}
        onRequestClose={() => null}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalComponent onClose={handleModalClose} elements={places} />
      </Modal>
      <Header />
      <div className={mainStyles.dashboard}>
        <div className={mainStyles.leftColumn}>
          <MapComponent />
        </div>
        <div className={mainStyles.rightColumn}>
          <ListComponent modalOpen={handleModalOpen} elements={places} />
        </div>
      </div>
      <Button onClick={() => null} />
    </section>
  );
};

export default Home;
