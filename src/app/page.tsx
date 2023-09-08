'use client';
import React, { Suspense, useState } from 'react';
import Modal from 'react-modal';
import mainStyles from './main.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';
import MapComponent from '@/components/Map';
import ListComponent from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import ModalManager from '@/components/tools/ModalManager';
import { useMapStore } from '@/utils/store/mapStore';

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

// Modal.setAppElement(appElement);

const Home = () => {
  const places = useMapStore((state) => state.places);
  const isModalOpened = useModalStore((state) => state.isModalOpened);
  const handleModalOpen = useModalStore((state) => state.openModal);
  return (
    <section id={`app`} className={mainStyles.app}>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpened}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalManager />
      </Modal>
      <Header />
      <section className={mainStyles.dashboard}>
        <div className={mainStyles.leftColumn}>
          <MapComponent />
        </div>
        <div className={mainStyles.rightColumn}>
          <ListComponent
            modalOpen={() => handleModalOpen('show-all-modal')}
            elements={places}
          />
        </div>
      </section>
      <Button
        text={`Add location`}
        onClick={() => handleModalOpen('add-place-modal')}
      />
    </section>
  );
};

export default Home;
