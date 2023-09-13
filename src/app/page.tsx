'use client';
import React from 'react';
import Modal from 'react-modal';
import mainStyles from './main.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';
import MapComponent from '@/components/Map';
import ListComponent from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import ModalManager from '@/components/tools/ModalManager';
import { useMapStore } from '@/utils/store/mapStore';
import { animated, useSpring } from '@react-spring/web';
import { useDrawerStore } from '@/utils/store/drawerStore';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const places = useMapStore((state) => state.places);
  const { openModal, isModalOpened } = useModalStore();
  const { handleDrawerClose, handleDrawerOpen, customStyles } =
    useDrawerStore();
  const props = useSpring({
    ...customStyles,
    config: {
      duration: 200,
    },
  });

  const modalStyles = {
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backdropFilter: `blur(10px)`,
      backgroundColor: `none`,
      zIndex: 999,
    },
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

  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });

  return (
    <section id={`app`} className={mainStyles.app}>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpened}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <ModalManager />
      </Modal>

      <animated.div style={props} className={mainStyles.leftSidebar}>
        <div className={mainStyles.sidebarInner}>
          <Header />
          <div className={mainStyles.rightColumn}>
            <ListComponent
              isMobile={isMobile}
              modalOpen={() => openModal('show-all-modal')}
              elements={places}
            />
          </div>
        </div>
        <div className={mainStyles.buttonsWrapper}>
          <Button
            isMobileOnly={false}
            text={`Add location`}
            onClick={() => openModal('add-place-modal')}
          />
          <Button
            isMobileOnly
            text={`To map`}
            onClick={() => handleDrawerClose()}
          />
        </div>
        <button
          className={mainStyles.drawerToggler}
          onClick={() => handleDrawerOpen()}
        ></button>
      </animated.div>

      <section className={mainStyles.dashboard}>
        <MapComponent />
      </section>
    </section>
  );
};

export default Home;
