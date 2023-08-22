import React from 'react';
import mainStyles from './main.module.scss';
import listStyles from '../components/styles/list.module.scss';
import Button from '@/components/Button';
import Header from '@/components/Header';
import List from '@/components/List';
import ShowAll from '@/components/ShowAll';
import { places } from '@/utils/mocks/places';

const Home = () => {
  return (
    <section className={mainStyles.app}>
      <Header />
      <div className={mainStyles.dashboard}>
        <div className={mainStyles.rightColumn}>
          <div className={listStyles.innerWrapper}>
            <h2 className={listStyles.headline}>{`Recently visited`}</h2>
            <List elements={places} />
          </div>
          <ShowAll onClick={() => null} />
        </div>
      </div>
      <Button onClick={() => null} />
    </section>
  );
};

export default Home;
