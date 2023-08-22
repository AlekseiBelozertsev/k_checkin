import React from 'react';
import mainStyles from './main.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';

const Home = () => {
  return (
    <section className={mainStyles.app}>
      <Header />
      <Button onClick={() => null} />
    </section>
  );
};

export default Home;
