'use client';
import React from 'react';
import mainStyles from './main.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';
import MapComponent from '@/components/Map';
import ListComponent from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import { useMapStore } from '@/utils/store/mapStore';
import { animated, useSpring } from '@react-spring/web';
import { useDrawerStore } from '@/utils/store/drawerStore';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';

const Home = () => {
  const places = useMapStore((state) => state.places);
  const { openModal } = useModalStore();
  const { handleDrawerClose, handleDrawerOpen, customStyles } =
    useDrawerStore();
  const props = useSpring({
    ...customStyles,
    config: {
      duration: 200,
    },
  });

  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });

  const ModalMainComponent = dynamic(
    () => import('@/components/ModalMainComponent'),
    { ssr: false },
  );

  return (
    <section id={`app`} className={mainStyles.app}>
      <ModalMainComponent isMobile={isMobile} />
      <animated.div style={props} className={mainStyles.leftSidebar}>
        <div className={mainStyles.sidebarInner}>
          {!isMobile && <Header />}
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
