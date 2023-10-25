'use client';
import React from 'react';
import mainStyles from './styles/main.module.scss';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
// import Sidebar from '@/components/HomeComponent';
import HomePage from '@/ui/pages/HomePage/HomePage';

const Home = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });

  const ModalMainComponent = dynamic(
    () => import('@/ui/modals/ModalMainComponent'),
    { ssr: false },
  );

  return (
    <section id={`app`} className={mainStyles.app}>
      <ModalMainComponent isMobile={isMobile} />
      <HomePage isMobile={isMobile} />
    </section>
  );
};

export default Home;
