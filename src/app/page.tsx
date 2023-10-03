import React from 'react';
import mainStyles from './styles/main.module.scss';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
// import Sidebar from '@/components/HomeComponent';
import HomePage from '@/components/HomePage';

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
      <HomePage isMobile={isMobile} />
      {/* <section className={mainStyles.dashboard}>
        <MapComponent />
      </section> */}
    </section>
  );
};

export default Home;
