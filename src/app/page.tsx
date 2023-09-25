'use client';
import React from 'react';
import mainStyles from './main.module.scss';

import MapComponent from '@/components/Map';
import { useModalStore } from '@/utils/store/modalStore';
import { useMapStore } from '@/utils/store/mapStore';
import { animated, useSpring } from '@react-spring/web';
import { useDrawerStore } from '@/utils/store/drawerStore';
import { useMediaQuery } from 'react-responsive';
// import ModalMainComponent from '@/components/ModalMainComponent';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/Sidebar';

export async function getServerSideProps() {
  const res = await fetch('');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Home = () => {
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
      <Sidebar isMobile={isMobile} />

      <section className={mainStyles.dashboard}>
        <MapComponent />
      </section>
    </section>
  );
};

export default Home;
