'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';
import mainStyles from './main.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';
import MapComponent from '@/components/Map';
import ListComponent from '@/components/List';
import { places } from '@/utils/mocks/places';
import ShowAllModal from '@/components/ShowAllModal';
import { useModalStore } from '@/utils/store/modalStore';

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
  const isModalOpened = useModalStore((state) => state.isModalOpened);
  const handleModalClose = useModalStore((state) => state.closeModal);
  const handleModalOpen = useModalStore((state) => state.openModal);
  return (
    <section id={`app`} className={mainStyles.app}>
      <Modal
        isOpen={isModalOpened}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ShowAllModal onClose={handleModalClose} elements={places} />
      </Modal>
      <Header />
      <section className={mainStyles.dashboard}>
        <div className={mainStyles.leftColumn}>
          <MapComponent />
        </div>
        <div className={mainStyles.rightColumn}>
          <ListComponent modalOpen={handleModalOpen} elements={places} />
        </div>
      </section>
      <Button onClick={() => null} />
    </section>
  );
};

export default Home;
