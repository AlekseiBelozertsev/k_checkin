'use client';
import React from 'react';
import mainStyles from './main.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';
import MapComponent from '@/components/Map';
import ListComponent from '@/components/List';

const Home = () => {
  return (
    <section className={mainStyles.app}>
      <Header />
      <div className={mainStyles.dashboard}>
        <MapComponent />
        <div className={mainStyles.rightColumn}>
          <ListComponent />
        </div>
      </div>
      <Button onClick={() => null} />
    </section>
  );
};

export default Home;
